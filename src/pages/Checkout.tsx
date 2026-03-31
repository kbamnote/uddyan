import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import useOffers from '../hooks/useOffers';
import SectionHeader from '../components/SectionHeader';
import PaymentButton from '../components/PaymentButton';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.uddyan.com/api';

export default function Checkout() {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const offers = useOffers(cartItems, totalItems, totalPrice, !!user);

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShippingAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePaymentSuccess = async (paymentData: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
  }) => {
    setIsSubmitting(true);
    setError(null);

    const orderData = {
      orderItems: cartItems.map((item) => ({
        name: item.name,
        qty: item.quantity,
        image: item.image,
        price: item.price,
        product: item.id,
      })),
      shippingAddress,
      paymentMethod: 'Razorpay',
      itemsPrice: totalPrice,
      shippingPrice: offers.shippingFee,
      taxPrice: 0,
      totalPrice: offers.finalTotal,
      discountAmount: offers.couponDiscount,
      appliedOffers: offers.appliedOffers,
      paymentResult: {
        id: paymentData.razorpay_payment_id,
        status: 'Completed',
        razorpayOrderId: paymentData.razorpay_order_id,
        razorpayPaymentId: paymentData.razorpay_payment_id,
      },
      isPaid: true,
      paidAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${API_URL}/orders`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to save order');
      }

      clearCart();
      navigate('/', { state: { orderSuccess: true } });
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Network error';
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentFailure = (errorMsg: string) => {
    setError(errorMsg);
  };

  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  // Validate shipping form
  useEffect(() => {
    const { address, city, postalCode, country } = shippingAddress;
    setIsFormValid(
      address.trim() !== '' &&
      city.trim() !== '' &&
      postalCode.trim() !== '' &&
      country.trim() !== ''
    );
  }, [shippingAddress]);

  if (!user) return null;

  return (
    <>
      <section className="pt-32 pb-12 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeader tag="Checkout" title="Complete Your Order" />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-md text-sm">
                    {error}
                  </div>
                )}
                
                {/* Shipping Details */}
                <div className="bg-[#f5f0e8] p-6 rounded-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-6">Shipping Address</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={shippingAddress.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                        placeholder="123 Plant Street"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={shippingAddress.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                        placeholder="Botanica"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        required
                        value={shippingAddress.postalCode}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                        placeholder="12345"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                      <input
                        type="text"
                        name="country"
                        required
                        value={shippingAddress.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
                        placeholder="India"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-[#f5f0e8] p-6 rounded-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Payment Method</h3>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#5a7c5a]">
                    <div className="w-10 h-10 bg-[#5a7c5a] rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Razorpay Secure Checkout</p>
                      <p className="text-sm text-gray-500">Cards, UPI, Net Banking, Wallets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#f5f0e8] rounded-lg p-6 sticky top-24">
                <h3 className="font-serif text-xl text-gray-900 mb-6">Order Summary</h3>

                {/* Mini-cart items */}
                <div className="mb-6 space-y-4 max-h-60 overflow-y-auto pr-2">
                   {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div>
                           <p className="font-medium text-sm text-gray-900 truncate max-w-[150px]">{item.name}</p>
                           <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                           <p className="font-medium text-[#5a7c5a]">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                   ))}
                </div>

                <div className="space-y-4 mb-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{totalPrice.toFixed(2)}</span>
                  </div>

                  {/* Coupon Discount */}
                  {offers.couponDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Coupon Discount (10%)</span>
                      <span>-₹{offers.couponDiscount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{offers.shippingFee === 0 ? 'Free' : `₹${offers.shippingFee.toFixed(2)}`}</span>
                  </div>

                  {/* Free Jade Plant */}
                  {offers.freeJadePlant && (
                    <div className="flex justify-between text-green-600 text-sm">
                      <span>🎁 Free Jade Plant</span>
                      <span>FREE</span>
                    </div>
                  )}

                  {/* Applied Offers */}
                  {offers.appliedOffers.length > 0 && (
                    <div className="pt-2 border-t border-dashed border-gray-200 space-y-1">
                      {offers.appliedOffers.map((offer, i) => (
                        <p key={i} className="text-xs text-green-700">✓ {offer}</p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 mb-6 border-gray-200">
                  <div className="flex justify-between font-serif text-xl text-gray-900">
                    <span>Total</span>
                    <span>₹{offers.finalTotal.toFixed(2)}</span>
                  </div>
                </div>

                <PaymentButton
                  amount={offers.finalTotal}
                  onSuccess={handlePaymentSuccess}
                  onFailure={handlePaymentFailure}
                  disabled={!isFormValid || isSubmitting || cartItems.length === 0}
                >
                  {isSubmitting ? 'Saving Order...' : `Pay ₹${offers.finalTotal.toFixed(2)}`}
                </PaymentButton>

                {!isFormValid && (
                  <p className="mt-3 text-sm text-gray-500 text-center">
                    Please fill in all shipping fields to proceed
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
