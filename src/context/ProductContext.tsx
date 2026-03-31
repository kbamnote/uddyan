import { createContext, useContext, useState, useEffect } from 'react';
import type { Product } from '../types';

interface ProductContextType {
  products: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([
      fetch(import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/products` : 'https://api.uddyan.com/api/products').then(res => res.json()),
      fetch(import.meta.env.VITE_API_URL ? `${import.meta.env.VITE_API_URL}/categories` : 'https://api.uddyan.com/api/categories').then(res => res.json())
    ]).then(([productsRes, categoriesRes]) => {
      if (productsRes.success) {
        // Map backend _id to id to match frontend type
        const mappedProducts = productsRes.data.map((p: any) => ({
          ...p,
          id: p._id,
          category: p.category?.name || 'Uncategorized'
        }));
        setProducts(mappedProducts);
      }
      if (categoriesRes.success) {
        setCategories(['All', ...categoriesRes.data.map((c: any) => c.name)]);
      }
    }).catch(err => {
      console.error("Failed to fetch products or categories:", err);
      setError(err.message);
    }).finally(() => {
      setLoading(false);
    });
  }, []);

  return (
    <ProductContext.Provider value={{ products, categories, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useAppProducts = () => useContext(ProductContext);
