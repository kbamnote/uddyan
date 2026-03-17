import { Link } from 'react-router-dom';
import {
    ArrowRight, Gift, PartyPopper, Home as HomeIcon, Sun, Repeat,
    Droplets, Palette, Timer, Heart,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import {
    fadeInUp, staggerContainer,
} from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────

const occasions = [
    { icon: PartyPopper, title: 'Birthday', description: 'A living gift that grows with them — much more than flowers.' },
    { icon: Heart, title: 'Anniversary', description: 'Celebrate milestones with a plant that symbolises lasting love.' },
    { icon: HomeIcon, title: 'Housewarming', description: 'Help them turn their new house into a green, vibrant home.' },
    { icon: Sun, title: 'Festive Gifting', description: 'Diwali, Christmas, New Year — stand out with a sustainable gift.' },
    { icon: Repeat, title: 'Return Gifts', description: 'Elegant, affordable, and thoughtful — perfect for events and weddings.' },
];

const reasons = [
    { icon: Droplets, title: 'Self-Watering System', description: 'No fuss, no guesswork — our patented reservoir keeps plants healthy for weeks.' },
    { icon: Palette, title: 'Modern Aesthetic', description: 'Designed to complement any room — minimal, clean, and beautiful.' },
    { icon: Timer, title: 'Long-Lasting', description: 'Unlike flowers, our plants thrive for years with minimal care.' },
    { icon: Gift, title: 'Thoughtful & Meaningful', description: 'A gift that says "I care about you and the planet."' },
];

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
    return (
        <section
            className="relative flex items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[90vh]"
            style={{ paddingTop: 'var(--header-height)' }}
        >
            <img
                src="/images/gifting-hero.jpg"
                alt="Plant gifting for loved ones"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent" />
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
                <motion.div
                    className="max-w-2xl"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span variants={fadeInUp} className="inline-block text-sm tracking-[0.3em] text-[#8b6d4b] uppercase mb-6">
                        Gifting Collection
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
                        Gifts That Grow
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-8 max-w-lg">
                        Perfect for birthdays, anniversaries &amp; housewarmings.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Link
                            to="/plants"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors"
                        >
                            Shop Gift Collection <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Occasions Grid ───────────────────────────────────────────────────────────

function OccasionsGrid() {
    return (
        <section className="py-24 bg-[#f5f0e8]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader
                        tag="Perfect For Every Occasion"
                        title="A Gift for Every Celebration"
                        description="Whether it's a milestone or a simple gesture, our plants make every occasion greener."
                    />
                </AnimatedSection>
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {occasions.map((item, i) => (
                        <motion.div key={i} variants={fadeInUp} className="text-center p-8 bg-white rounded-lg shadow-sm">
                            <div className="w-16 h-16 bg-[#5a7c5a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-8 h-8 text-[#5a7c5a]" />
                            </div>
                            <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Why Uddyan ───────────────────────────────────────────────────────────────

function WhySection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader
                        tag="Why Uddyan?"
                        title="Why Uddyan Makes a Perfect Gift"
                        description="More than just a plant — it's a statement of care, design, and sustainability."
                    />
                </AnimatedSection>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {reasons.map((item, i) => (
                        <motion.div key={i} variants={fadeInUp} className="text-center p-8 bg-[#f5f0e8] rounded-lg">
                            <div className="w-16 h-16 bg-[#5a7c5a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <item.icon className="w-8 h-8 text-[#5a7c5a]" />
                            </div>
                            <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Gift Packaging Showcase ──────────────────────────────────────────────────

function PackagingShowcase() {
    return (
        <section className="py-24 bg-[#f5f0e8]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <AnimatedSection animation="scale" className="order-2 lg:order-1">
                        <div className="bg-white rounded-lg p-12 shadow-sm flex items-center justify-center min-h-[400px]">
                            <div className="text-center">
                                <Gift className="w-20 h-20 text-[#5a7c5a] mx-auto mb-6" />
                                <p className="font-serif text-2xl text-gray-900 mb-2">Premium Gift Packaging</p>
                                <p className="text-gray-600">Every plant arrives beautifully boxed and ready to delight.</p>
                            </div>
                        </div>
                    </AnimatedSection>
                    <div className="order-1 lg:order-2">
                        <AnimatedSection animation="fadeRight">
                            <SectionHeader tag="Unboxing Joy" title="Packaging That Impresses" align="left" />
                        </AnimatedSection>
                        <AnimatedSection animation="fadeRight" delay={0.15}>
                            <div className="mt-6 space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-2 h-2 bg-[#8b6d4b] rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Premium Kraft Gift Boxes</h4>
                                        <p className="text-gray-600 text-sm">Eco-conscious packaging that looks stunning and protects your gift perfectly.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-2 h-2 bg-[#8b6d4b] rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Personalised Message Cards</h4>
                                        <p className="text-gray-600 text-sm">Include a handwritten-style message card with your personal touch.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-2 h-2 bg-[#8b6d4b] rounded-full mt-2 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-1">Ribbon & Tissue Wrapping</h4>
                                        <p className="text-gray-600 text-sm">The little details that make unboxing a moment to remember.</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Gifting Highlights Gallery ─────────────────────────────────────────────────

function GiftingGallery() {
    const galleryItems = [
        { image: '/images/Birthday_Anniversary_Gifting.jpg', title: 'Birthdays & Anniversaries', desc: 'Celebrate their special day with a living gift.' },
        { image: '/images/Eco_Friendly_Gifting.jpg', title: 'Eco-Friendly Options', desc: 'Sustainable choices for the conscious consumer.' },
        { image: '/images/Normal_Gifting.jpg', title: 'Just Because', desc: 'Brighten someones day with a beautiful plant.' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader tag="Inspiration" title="Gifting Moments" description="Real moments made special with Uddyan." />
                </AnimatedSection>
                <div className="mt-16 grid md:grid-cols-3 gap-8">
                    {galleryItems.map((item, i) => (
                        <AnimatedSection key={i} animation="scale" delay={i * 0.1}>
                            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-[4/5]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="font-serif text-2xl text-white mb-2">{item.title}</h3>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function ShopCTA() {
    return (
        <AnimatedSection animation="scale" className="py-24 bg-[#5a7c5a]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                    Ready to Gift Green?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                    Browse our curated gift collection and find the perfect plant for every special someone.
                </p>
                <Link
                    to="/plants"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5a7c5a] font-medium rounded hover:bg-[#f5f0e8] transition-colors"
                >
                    Shop Gift Collection <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </AnimatedSection>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Gifting() {
    return (
        <>
            <Hero />
            <OccasionsGrid />
            <WhySection />
            <PackagingShowcase />
            <GiftingGallery />
            <ShopCTA />
        </>
    );
}
