import { createContext, useContext, useState, useEffect, useCallback, useRef, type ReactNode } from 'react';
import Cookies from 'js-cookie';
import type { Product, CartItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.uddyan.com/api';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number | string) => void;
  updateQuantity: (id: number | string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  syncCartForUser: (userId: string | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = Cookies.get('uddyan_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  const currentUserRef = useRef<string | null>(null);
  const isSyncingRef = useRef(false);

  // Persist to cookie as fallback
  useEffect(() => {
    if (isSyncingRef.current) return;
    const minimalCart = cartItems.map(({ id, name, price, image, category, quantity }) => ({
      id, name, price, image, category, quantity,
    }));
    try {
      Cookies.set('uddyan_cart', JSON.stringify(minimalCart), { expires: 7 });
    } catch {
      // Cookie too large — ignore
    }
  }, [cartItems]);

  // Save cart to backend (debounced via the caller)
  const saveCartToBackend = useCallback(async (items: CartItem[]) => {
    if (!currentUserRef.current) return;
    try {
      await fetch(`${API_URL}/cart`, {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            product: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            category: item.category,
            quantity: item.quantity,
          })),
        }),
      });
    } catch {
      // Silently fail — cookie is the fallback
    }
  }, []);

  // Save to backend whenever cart changes, if a user is logged in
  const saveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!currentUserRef.current || isSyncingRef.current) return;
    if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    saveTimerRef.current = setTimeout(() => {
      saveCartToBackend(cartItems);
    }, 500);
    return () => {
      if (saveTimerRef.current) clearTimeout(saveTimerRef.current);
    };
  }, [cartItems, saveCartToBackend]);

  const cartItemsRef = useRef<CartItem[]>(cartItems);
  useEffect(() => {
    cartItemsRef.current = cartItems;
  }, [cartItems]);

  // Called on login (load cart) or logout (clear cart)
  const syncCartForUser = useCallback(async (userId: string | null) => {
    console.log('🔄 syncCartForUser called with:', userId);
    
    // Case 1: No user logged in (Guest or Logout)
    if (!userId) {
      if (currentUserRef.current) {
        console.log('🚪 User logged out. Clearing user-specific cart.');
        currentUserRef.current = null;
        setCartItems([]);
        Cookies.remove('uddyan_cart');
      } else {
        console.log('👤 Guest session. Persevering guest cart items.');
      }
      return;
    }

    // Case 2: User is logged in (Initial Load or Login)
    // If we're already synced to this user, don't re-sync unless cart is empty and we might have items in DB
    if (currentUserRef.current === userId && !isSyncingRef.current) {
      return;
    }

    currentUserRef.current = userId;
    isSyncingRef.current = true;
    console.log(`📡 Fetching saved cart for user ${userId}...`);
    
    try {
      const res = await fetch(`${API_URL}/cart`, { credentials: 'include' });
      const data = await res.json();

      if (res.ok && data.success && data.data.length > 0) {
        const cloudItems: CartItem[] = data.data.map((item: any) => ({
          id: item.product,
          name: item.name,
          price: item.price,
          image: item.image,
          category: item.category || 'Uncategorized',
          quantity: item.quantity,
        }));
        setCartItems(cloudItems);
        console.log(`✅ Loaded ${cloudItems.length} items from your saved cloud cart.`);
      }
      else {
        console.log('❓ No cloud cart found. Checking for guest items to save...');
        // If we have items in the local state (legacy guest items), save them to this user's account
        const localItems = cartItemsRef.current;
        if (localItems.length > 0) {
          console.log(`⬆️ Saving ${localItems.length} guest items to your account...`);
          saveCartToBackend(localItems);
        } else {
          console.log('📭 Your cloud cart is empty.');
        }
      }
    } catch (err) {
      console.error('❌ Failed to sync cart:', err);
    } finally {
      isSyncingRef.current = false;
    }
  }, [saveCartToBackend]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        quantity: 1,
      } as CartItem];
    });
  }, []);

  const removeFromCart = useCallback((id: number | string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number | string, quantity: number) => {
    if (quantity === 0) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const clearCart = useCallback(() => {
    setCartItems([]);
    Cookies.remove('uddyan_cart');
    if (currentUserRef.current) {
      saveCartToBackend([]);
    }
  }, [saveCartToBackend]);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        syncCartForUser,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
