import { useState, useEffect, useMemo, useCallback } from 'react';
import type { CartItem } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'https://api.uddyan.com/api';

const SHIPPING_FEE = 49;
const FREE_SHIPPING_THRESHOLD = 999;
const FIRST_ORDER_DISCOUNT_PERCENT = 10;
const FREE_PLANT_MIN_ITEMS = 6;
const FREE_PLANT_NAME = 'Self-Watering Jade Plant';
const VALID_COUPON = 'NEW10';

interface OffersResult {
  freeJadePlant: boolean;
  isFirstOrder: boolean;
  couponDiscount: number;
  couponApplied: boolean;
  couponError: string | null;
  shippingFee: number;
  subtotal: number;
  finalTotal: number;
  appliedOffers: string[];
  applyCoupon: (code: string) => void;
  removeCoupon: () => void;
}

export default function useOffers(
  _cartItems: CartItem[],
  totalItems: number,
  totalPrice: number,
  isLoggedIn: boolean
): OffersResult {
  const [isFirstOrder, setIsFirstOrder] = useState(false);
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState<string | null>(null);

  // Check if user has previous orders
  useEffect(() => {
    if (!isLoggedIn) {
      setIsFirstOrder(false);
      setCouponApplied(false);
      setCouponError(null);
      return;
    }

    const checkFirstOrder = async () => {
      try {
        const res = await fetch(`${API_URL}/orders/myorders`, { credentials: 'include' });
        const data = await res.json();
        if (res.ok && data.success) {
          setIsFirstOrder(data.data.length === 0);
        }
      } catch {
        setIsFirstOrder(false);
      }
    };

    checkFirstOrder();
  }, [isLoggedIn]);

  const applyCoupon = useCallback((code: string) => {
    setCouponError(null);
    const trimmed = code.trim().toUpperCase();

    if (trimmed !== VALID_COUPON) {
      setCouponError('Invalid coupon code');
      setCouponApplied(false);
      return;
    }

    if (!isLoggedIn) {
      setCouponError('Please login to apply coupon');
      setCouponApplied(false);
      return;
    }

    if (!isFirstOrder) {
      setCouponError('This coupon is only valid for first-time orders');
      setCouponApplied(false);
      return;
    }

    setCouponApplied(true);
    setCouponError(null);
  }, [isLoggedIn, isFirstOrder]);

  const removeCoupon = useCallback(() => {
    setCouponApplied(false);
    setCouponError(null);
  }, []);

  return useMemo(() => {
    const appliedOffers: string[] = [];

    // Offer 1: Buy 6 Get 1 Free Jade Plant
    const freeJadePlant = totalItems >= FREE_PLANT_MIN_ITEMS;
    if (freeJadePlant) {
      appliedOffers.push(`Buy ${FREE_PLANT_MIN_ITEMS} Plants & Get 1 ${FREE_PLANT_NAME} FREE`);
    }

    // Offer 2: NEW10 coupon — 10% off first order
    const couponDiscount = couponApplied
      ? Math.round(totalPrice * FIRST_ORDER_DISCOUNT_PERCENT / 100)
      : 0;
    if (couponDiscount > 0) {
      appliedOffers.push(`Coupon NEW10 — Flat ${FIRST_ORDER_DISCOUNT_PERCENT}% Off`);
    }

    // Offer 3: Free delivery above ₹999
    const subtotalAfterDiscount = totalPrice - couponDiscount;
    const shippingFee = subtotalAfterDiscount >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
    if (shippingFee === 0 && totalPrice > 0) {
      appliedOffers.push('Free Delivery on Orders Above ₹999');
    }

    const finalTotal = subtotalAfterDiscount + shippingFee;

    return {
      freeJadePlant,
      isFirstOrder,
      couponDiscount,
      couponApplied,
      couponError,
      shippingFee,
      subtotal: totalPrice,
      finalTotal,
      appliedOffers,
      applyCoupon,
      removeCoupon,
    };
  }, [totalItems, totalPrice, isFirstOrder, couponApplied, couponError, applyCoupon, removeCoupon]);
}
