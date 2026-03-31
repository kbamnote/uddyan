import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Gift, Percent, Tag, Truck, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import useOffers from '../hooks/useOffers';
import SectionHeader from '../components/SectionHeader';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, totalItems, totalPrice } = useCart();
  const { user } = useAuth();
  const offers = useOffers(cartItems, totalItems, totalPrice, !!user);
  const [couponInput, setCouponInput] = useState('');

  if (cartItems.length === 0) {
    return (
      <>
        <section className="pt-32 pb-20 bg-[#f5f0e8]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <SectionHeader tag="Your Cart" title="Shopping Cart" />
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

      {/* Offers Banner */}
      <section className="bg-gradient-to-r from-[#2d5a2d] to-[#3d7a3d] py-4">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 text-white text-sm">
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4" />
              <span>Buy 6 Plants & Get 1 Jade Plant FREE</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>Use code <strong>NEW10</strong> for 10% off your first order</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4" />
              <span>Free Delivery on orders above ₹999</span>
            </div>
          </div>
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
                    <Link to="/plants" className="w-24 h-24 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded" />
                    </Link>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <Link to="/plants" className="font-serif text-lg text-gray-900 hover:text-[#5a7c5a] transition-colors">
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
                            ₹{(item.price * item.quantity).toFixed(2)}
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

                {/* Free Jade Plant Row */}
                {offers.freeJadePlant && (
                  <div className="flex gap-6 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                    <div className="w-24 h-24 flex-shrink-0 bg-green-100 rounded flex items-center justify-center">
                      <Gift className="w-10 h-10 text-green-600" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg text-gray-900">Self-Watering Jade Plant</span>
                        <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded">FREE</span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">🎉 Buy 6 plants & get 1 Jade Plant free!</p>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-green-600">₹0.00</span>
                    </div>
                  </div>
                )}
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

                {/* Coupon Input */}
                <div className="mb-6">
                  {offers.couponApplied ? (
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-center gap-2 text-green-700">
                        <Tag className="w-4 h-4" />
                        <span className="font-medium text-sm">NEW10 applied — 10% off</span>
                      </div>
                      <button
                        onClick={offers.removeCoupon}
                        className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="Enter coupon code"
                          className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5a7c5a]"
                        />
                        <button
                          onClick={() => offers.applyCoupon(couponInput)}
                          className="px-4 py-2.5 bg-[#5a7c5a] text-white text-sm font-medium rounded-lg hover:bg-[#4a6a4a] transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                      {offers.couponError && (
                        <p className="text-xs text-red-500 mt-2">{offers.couponError}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-2">New user? Use <strong>NEW10</strong> for 10% off</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Coupon Discount */}
                  {offers.couponDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span className="flex items-center gap-1.5">
                        <Percent className="w-3.5 h-3.5" />
                        Coupon Discount (10%)
                      </span>
                      <span>-₹{offers.couponDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{offers.shippingFee === 0 ? 'Free' : `₹${offers.shippingFee.toFixed(2)}`}</span>
                  </div>

                  {/* Applied Offers */}
                  {offers.appliedOffers.length > 0 && (
                    <div className="pt-3 border-t border-gray-200 space-y-2">
                      {offers.appliedOffers.map((offer, i) => (
                        <div key={i} className="flex items-start gap-2 text-green-700 text-sm">
                          <Gift className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          <span>{offer}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between font-serif text-xl text-gray-900">
                    <span>Total</span>
                    <span>₹{offers.finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link to="/checkout" className="w-full block text-center py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors">
                  Proceed to Checkout
                </Link>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    Free shipping on orders over ₹999
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
