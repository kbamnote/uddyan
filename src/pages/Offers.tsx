import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Truck, Gift, Percent, Leaf, Droplets, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import { useCart } from '../context/CartContext';
import { products } from '../data';
import type { Product } from '../types';

/* ── Offer products with discount info ─────────────────────────────────── */
const offerProducts: (Product & { originalPrice: number; discount: number })[] = products.map((p) => ({
    ...p,
    originalPrice: Math.round(p.price * 1.3),
    discount: Math.floor(Math.random() * 15) + 10, // 10–24%
}));


/* ── Promo Banner Slides ───────────────────────────────────────────────── */
const promos = [
    { icon: Gift, text: 'Buy 6 Blocks & Get 1 Self-Watering Plant FREE', color: 'bg-emerald-600' },
    { icon: Percent, text: 'Flat 10% Off on Your First Order', color: 'bg-teal-600' },
    { icon: Truck, text: 'Free Delivery on Orders Above ₹999', color: 'bg-green-700' },
];

/* ── Offer Card ────────────────────────────────────────────────────────── */
function OfferCard({ product }: { product: (typeof offerProducts)[number] }) {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAdd = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4 }}
            className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-[#f5f0e8]">
                <Link to="/plants">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </Link>
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-500 text-white text-xs font-bold rounded-md shadow-sm">
                    {product.discount}% OFF
                </span>
            </div>

            {/* Content */}
            <div className="p-4">
                <Link to="/plants">
                    <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2 hover:text-[#5a7c5a] transition-colors">
                        {product.name}
                    </h3>
                </Link>
                <p className="text-xs text-gray-400 mb-2">{product.category}</p>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-semibold text-[#5a7c5a]">₹{product.price}</span>
                    <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
                </div>

                <button
                    onClick={handleAdd}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all ${added
                        ? 'bg-green-500 text-white'
                        : 'bg-[#5a7c5a] text-white hover:bg-[#4a6a4a]'
                        }`}
                >
                    {added ? (
                        <><Check className="w-4 h-4" /> Added!</>
                    ) : (
                        <><ShoppingCart className="w-4 h-4" /> Add to Cart</>
                    )}
                </button>
            </div>
        </motion.div>
    );
}

/* ── Main Page ─────────────────────────────────────────────────────────── */
export default function Offers() {
    return (
        <main className="min-h-screen bg-[#faf8f4]">

            {/* ─── Hero Section (matches Plants page) ─────────────────────── */}
            <section className="relative pt-32 pb-20 bg-[#f5f0e8]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <SectionHeader
                        tag="Limited Period"
                        title="Special Offers & Discounts"
                        description="Grab the best deals on self-watering planters. Hurry, offers valid while stocks last!"
                    />

                    {/* Promo Highlights */}
                    <div className="grid sm:grid-cols-3 gap-3 mt-10">
                        {promos.map((p, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 px-4 py-3 bg-[#5a7c5a]/10 border border-[#5a7c5a]/20 rounded-lg"
                            >
                                <div className="w-9 h-9 bg-[#5a7c5a]/15 rounded-full flex items-center justify-center flex-shrink-0">
                                    <p.icon className="w-4 h-4 text-[#5a7c5a]" />
                                </div>
                                <p className="text-gray-800 text-xs sm:text-sm font-medium leading-tight">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Featured Offers Carousel ──────────────────────────────────── */}
            {/* <section className="py-12 md:py-16 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="font-serif text-2xl text-gray-900">Featured Deals</h2>
                            <p className="text-gray-500 text-sm mt-1">Hand-picked offers just for you</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setScroll(Math.max(0, scroll - 1))}
                                disabled={scroll === 0}
                                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#5a7c5a] hover:text-white hover:border-[#5a7c5a] transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-900"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => setScroll(Math.min(maxScroll, scroll + 1))}
                                disabled={scroll >= maxScroll}
                                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#5a7c5a] hover:text-white hover:border-[#5a7c5a] transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-gray-900"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-5"
                            animate={{ x: `-${scroll * 280}px` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        >
                            {featured.map((p) => (
                                <div key={p.id} className="min-w-[250px] sm:min-w-[280px] flex-shrink-0">
                                    <OfferCard product={p} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* ─── Full Product Grid: "Grab More, Save More" ─────────────────── */}
            <section className="py-12 md:py-20 bg-[#faf8f4]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <AnimatedSection>
                        <div className="text-center mb-10">
                            <h2 className="font-serif text-2xl md:text-3xl text-gray-900">
                                Grab More, Save More <span className="inline-block ml-1">🌿</span>
                            </h2>
                            <p className="text-gray-500 text-sm mt-2">
                                The more you shop, the more you save — explore all our discounted planters
                            </p>
                        </div>
                    </AnimatedSection>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {offerProducts.map((p) => (
                            <OfferCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Trust / Why Uddyan Strip ──────────────────────────────────── */}
            <section className="bg-[#2d5a2d] py-10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        {[
                            { icon: Leaf, title: 'Premium Quality', desc: '100% healthy & inspected plants' },
                            { icon: Droplets, title: 'Self-Watering Tech', desc: 'Water once, thrive for weeks' },
                            { icon: Shield, title: 'Safe & Secure', desc: 'Hassle-free returns & support' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3">
                                <div className="w-12 h-12 bg-white/15 rounded-full flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <h4 className="text-white font-medium">{item.title}</h4>
                                <p className="text-white/60 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
