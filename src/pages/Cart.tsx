import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Package } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SectionHeader from '../components/SectionHeader';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();

  const shipping = totalPrice > 100 ? 0 : 15;
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <>
        <section className="pt-32 pb-20 bg-[#f5f0e8]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHeader
              tag="Your Cart"
              title="Shopping Cart"
            />
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <div className="w-24 h-24 bg-[#f5f0e8] rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="w-12 h-12 text-[#5a7c5a]" />
            </div>
            <h2 className="font-serif text-3xl text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you haven't added any plants to your cart yet. Explore our collection to find your perfect green companion.
            </p>
            <Link
              to="/plants"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors"
            >
              Continue Shopping <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeader
            tag="Your Cart"
            title={`Shopping Cart (${totalItems} ${totalItems === 1 ? 'item' : 'items'})`}
          />
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-6 p-6 bg-[#f5f0e8] rounded-lg"
                  >
                    {/* Image */}
                    <Link to="/plants" className="w-24 h-24 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </Link>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link
                          to="/plants"
                          className="font-serif text-lg text-gray-900 hover:text-[#5a7c5a] transition-colors"
                        >
                          {item.name}
                        </Link>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-medium text-[#5a7c5a]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <div className="mt-8">
                <Link
                  to="/plants"
                  className="inline-flex items-center gap-2 text-[#5a7c5a] hover:text-[#4a6a4a] font-medium"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#f5f0e8] rounded-lg p-6 sticky top-24">
                <h3 className="font-serif text-xl text-gray-900 mb-6">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {shipping === 0 && (
                    <div className="flex items-center gap-2 text-green-600 text-sm">
                      <Package className="w-4 h-4" />
                      <span>You qualify for free shipping!</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-serif text-xl text-gray-900">
                    <span>Total</span>
                    <span>${finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors">
                  Proceed to Checkout
                </button>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Free shipping on orders over $100
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
