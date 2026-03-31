import { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.uddyan.com/api';

interface PaymentButtonProps {
  amount: number;
  onSuccess: (data: { razorpay_order_id: string; razorpay_payment_id: string }) => void;
  onFailure?: (error: string) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => { open: () => void };
  }
}

export default function PaymentButton({
  amount,
  onSuccess,
  onFailure,
  disabled = false,
  className = '',
  children,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const [message, setMessage] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      // Step 1: Create Razorpay order via backend
      const orderRes = await fetch(`${API_URL}/payment/create-order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok || !orderData.success) {
        throw new Error(orderData.message || 'Failed to create payment order');
      }

      const { orderId, amount: orderAmount, currency, key } = orderData.data;

      // Step 2: Open Razorpay checkout
      const options = {
        key,
        amount: orderAmount,
        currency,
        name: 'Uddyan',
        description: 'Self Watering Pot',
        order_id: orderId,
        handler: async (response: RazorpayResponse) => {
          try {
            // Step 3: Verify payment on backend
            const verifyRes = await fetch(`${API_URL}/payment/verify`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              setStatus('success');
              setMessage('Payment successful!');
              onSuccess({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
              });
            } else {
              setStatus('failed');
              setMessage('Payment verification failed');
              onFailure?.('Payment verification failed');
            }
          } catch {
            setStatus('failed');
            setMessage('Verification error. Contact support.');
            onFailure?.('Verification error');
          } finally {
            setLoading(false);
          }
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setMessage('');
          },
        },
        theme: {
          color: '#5a7c5a',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Payment initiation failed';
      setStatus('failed');
      setMessage(errorMessage);
      setLoading(false);
      onFailure?.(errorMessage);
    }
  };

  const defaultClassName =
    'w-full py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div>
      <button
        type="button"
        onClick={handlePayment}
        disabled={disabled || loading}
        className={className || defaultClassName}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          children || `Pay ₹${amount}`
        )}
      </button>

      {status === 'success' && (
        <div className="mt-3 p-3 bg-green-50 text-green-700 text-sm rounded-md flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          {message}
        </div>
      )}

      {status === 'failed' && (
        <div className="mt-3 p-3 bg-red-50 text-red-600 text-sm rounded-md flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {message}
        </div>
      )}
    </div>
  );
}
