import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, Leaf, Droplets, Palette, Package, Globe,
    ClipboardList, FileText, PenTool, Truck,
    Send, CheckCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import {
    fadeInUp, fadeInLeft, staggerContainer,
} from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────

const benefits = [
    { icon: Leaf, title: 'Sustainable & Eco-Friendly', description: 'Gift green, gift responsibly. Our plants promote well-being while reducing your carbon footprint.' },
    { icon: Droplets, title: 'Low Maintenance', description: 'Self-watering technology means zero daily care — perfect for offices and busy professionals.' },
    { icon: Palette, title: 'Premium Modern Design', description: 'Sleek pots that complement any workspace aesthetic, from minimal to contemporary.' },
    { icon: Package, title: 'Custom Branding Options', description: 'Add your company logo, brand colours, and personalised messaging to every gift.' },
    { icon: Globe, title: 'PAN India Delivery', description: 'We deliver bulk orders anywhere across India with careful packaging and on-time guarantee.' },
];

const customisations = [
    { title: 'Logo Printing on Pots', description: 'Your brand identity on every pot — screen-printed or laser-engraved with precision.' },
    { title: 'Personalised Notes', description: 'Include heartfelt messages or motivational quotes with each plant gift.' },
    { title: 'Custom Packaging', description: 'Choose from premium kraft boxes, ribbon-wrapped sets, or fully branded gift boxes.' },
    { title: 'Bulk Pricing Tiers', description: 'Volume-based pricing that rewards larger orders — get in touch for a custom quote.' },
];

const processSteps = [
    { number: '01', icon: ClipboardList, title: 'Share Requirements', description: 'Tell us your quantity, budget, occasion, and branding preferences.' },
    { number: '02', icon: FileText, title: 'Get Quotation', description: 'Receive a detailed proposal with pricing, timelines, and customisation options.' },
    { number: '03', icon: PenTool, title: 'Customisation', description: 'We craft samples for your approval before full production begins.' },
    { number: '04', icon: Truck, title: 'Delivery', description: 'Carefully packaged and delivered on schedule to your doorstep or multiple locations.' },
];

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
    return (
        <section
            className="relative flex items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[90vh]"
            style={{ paddingTop: 'var(--header-height)' }}
        >
            <img
                src="/images/corporate-hero.jpg"
                alt="Corporate plant gifting in modern office"
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
                        Corporate Gifting
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
                        Corporate Gifting with a Touch of Green
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-8 max-w-lg">
                        Sustainable, premium self-watering plants for employees, clients &amp; events.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <a
                            href="#inquiry"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors"
                        >
                            Request Bulk Quote <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#customisation"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Download Catalogue
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Why Corporate Plants ─────────────────────────────────────────────────────

function WhySection() {
    return (
        <section className="py-24 bg-[#f5f0e8]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader
                        tag="Why Corporate Plants?"
                        title="Plants That Make an Impression"
                        description="A living gift that grows with your brand — meaningful, sustainable, and unforgettable."
                    />
                </AnimatedSection>
                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {benefits.map((item, i) => (
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

// ─── Customisation Options ────────────────────────────────────────────────────

function CustomisationSection() {
    return (
        <section id="customisation" className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader
                        tag="Make It Yours"
                        title="Customisation Options"
                        description="Every detail can be tailored to reflect your brand story."
                    />
                </AnimatedSection>
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {customisations.map((item, i) => (
                        <motion.div key={i} variants={fadeInUp} className="p-8 bg-[#f5f0e8] rounded-lg">
                            <h3 className="font-serif text-lg text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

// ─── Process Steps ────────────────────────────────────────────────────────────

function ProcessSection() {
    return (
        <section className="py-24 bg-[#f5f0e8]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <AnimatedSection animation="fadeUp">
                            <SectionHeader
                                tag="How It Works"
                                title="From Brief to Delivery in 4 Steps"
                                align="left"
                            />
                        </AnimatedSection>
                        <motion.div
                            className="mt-12 space-y-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {processSteps.map((step, i) => (
                                <motion.div key={i} variants={fadeInLeft} className="flex gap-6">
                                    <span className="font-serif text-4xl text-[#8b6d4b] flex-shrink-0">{step.number}</span>
                                    <div>
                                        <h3 className="font-serif text-xl text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <AnimatedSection animation="scale">
                        <div className="relative h-full min-h-[500px] w-full mt-12 lg:mt-0">
                            {/* Main Image */}
                            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-lg overflow-hidden shadow-2xl z-10">
                                <img
                                    src="/images/Corporate_events.jpg"
                                    alt="Corporate events gifting"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Secondary Image Overlapping */}
                            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-2xl z-20 border-8 border-[#f5f0e8]">
                                <img
                                    src="/images/Corporate_offices.jpg"
                                    alt="Corporate office plants"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── Inquiry Form ─────────────────────────────────────────────────────────────

function InquiryForm() {
    const [formData, setFormData] = useState({
        companyName: '', contactPerson: '', email: '', phone: '', quantity: '', message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ companyName: '', contactPerson: '', email: '', phone: '', quantity: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section id="inquiry" className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <AnimatedSection animation="fadeLeft">
                        <SectionHeader
                            tag="Get a Quote"
                            title="Tell Us About Your Requirements"
                            description="Fill in the form and our corporate gifting team will get back to you within 24 hours with a custom proposal."
                            align="left"
                        />
                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#5a7c5a] flex-shrink-0" />
                                <span>No minimum order quantity</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#5a7c5a] flex-shrink-0" />
                                <span>Free design mockups for branded orders</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <CheckCircle className="w-5 h-5 text-[#5a7c5a] flex-shrink-0" />
                                <span>7-day turnaround on standard orders</span>
                            </div>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection animation="fadeRight" delay={0.15}>
                        <div className="bg-[#f5f0e8] rounded-lg p-8 shadow-sm">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="font-serif text-xl text-gray-900 mb-2">Inquiry Submitted!</h3>
                                    <p className="text-gray-600">Our team will reach out within 24 hours.</p>
                                    <button onClick={() => setIsSubmitted(false)} className="mt-6 text-[#5a7c5a] hover:underline">
                                        Submit another inquiry
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                                            <input type="text" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] bg-white" placeholder="Acme Corp" />
                                        </div>
                                        <div>
                                            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-2">Contact Person</label>
                                            <input type="text" id="contactPerson" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] bg-white" placeholder="Jane Smith" />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] bg-white" placeholder="jane@company.com" />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] bg-white" placeholder="+91 98765 43210" />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity Required</label>
                                        <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} required
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] bg-white" placeholder="e.g. 100 units" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] resize-none bg-white"
                                            placeholder="Tell us about your occasion, preferences, or any special requirements..." />
                                    </div>
                                    <button type="submit" disabled={isSubmitting}
                                        className="w-full py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                                        {isSubmitting ? (
                                            <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting...</>
                                        ) : (
                                            <>Submit Inquiry <Send className="w-5 h-5" /></>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────

function CTABanner() {
    return (
        <AnimatedSection animation="scale" className="py-24 bg-[#5a7c5a]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                    Ready to Elevate Your Corporate Gifting?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                    Join 500+ companies that trust Uddyan for meaningful, sustainable corporate gifts.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5a7c5a] font-medium rounded hover:bg-[#f5f0e8] transition-colors"
                >
                    Get in Touch <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </AnimatedSection>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CorporateGifting() {
    return (
        <>
            <Hero />
            <WhySection />
            <CustomisationSection />
            <ProcessSection />
            <InquiryForm />
            <CTABanner />
        </>
    );
}
