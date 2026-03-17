import { Link } from 'react-router-dom';
import {
    ArrowRight, Flower2, TreePine, Building2, Wrench, MessageCircle,
    ClipboardList, PenTool, HardHat, CalendarCheck,
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import {
    fadeInUp, fadeInLeft, fadeInRight, staggerContainer,
} from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
    { icon: Flower2, title: 'Balcony Garden Setup', description: 'Transform your balcony into a lush green retreat with curated planters and vertical gardens.' },
    { icon: TreePine, title: 'Terrace Garden Setup', description: 'Full-scale terrace gardens with raised beds, drip irrigation, and seasonal planting schemes.' },
    { icon: Building2, title: 'Office Plant Styling', description: 'Create a biophilic workspace that boosts productivity, mood, and air quality.' },
    { icon: Wrench, title: 'Maintenance Services', description: 'Monthly or weekly plant care visits — watering, pruning, fertilising, and pest control.' },
    { icon: MessageCircle, title: 'Plant Consultation', description: 'One-on-one expert advice on plant selection, placement, and ongoing care.' },
];

const processSteps = [
    { number: '01', icon: ClipboardList, title: 'Site Visit', description: 'Our team visits your space to assess sunlight, dimensions, and your lifestyle needs.' },
    { number: '02', icon: PenTool, title: 'Design Proposal', description: 'A detailed 3D layout with plant recommendations, materials, and a transparent cost breakdown.' },
    { number: '03', icon: HardHat, title: 'Installation', description: 'Our crew handles everything — planters, soil, plants, irrigation, and finishing touches.' },
    { number: '04', icon: CalendarCheck, title: 'Maintenance Plan', description: 'Optional ongoing care plans to keep your garden thriving season after season.' },
];

const beforeAfter = [
    {
        label: 'Balcony Transformation',
        before: 'An empty, underused balcony with bare walls and concrete flooring.',
        after: 'A vibrant green sanctuary with hanging plants, herb boxes, and cosy seating.',
    },
    {
        label: 'Terrace Makeover',
        before: 'A hot, exposed terrace used only for drying clothes.',
        after: 'A productive terrace garden with raised vegetable beds, shade plants, and a water feature.',
    },
];

// ─── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
    return (
        <section
            className="relative flex items-center justify-center overflow-hidden min-h-[70vh] md:min-h-[90vh]"
            style={{ paddingTop: 'var(--header-height)' }}
        >
            <img
                src="/images/garden-hero.jpg"
                alt="Professional garden services for modern homes"
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
                        Garden Services
                    </motion.span>
                    <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
                        Professional Garden Services for Modern Homes
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-8 max-w-lg">
                        Design, setup &amp; maintenance — simplified.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors"
                        >
                            Schedule a Consultation <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// ─── Services Offered ─────────────────────────────────────────────────────────

function ServicesSection() {
    return (
        <section className="py-24 bg-[#f5f0e8]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader
                        tag="What We Do"
                        title="Services Offered"
                        description="End-to-end garden solutions — from concept and design to installation and ongoing maintenance."
                    />
                </AnimatedSection>
                <motion.div
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {services.map((item, i) => (
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

// ─── Service Process ──────────────────────────────────────────────────────────

function ProcessSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <AnimatedSection animation="fadeUp">
                            <SectionHeader
                                tag="Our Process"
                                title="From Vision to Green Reality"
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
                        <div className="relative overflow-hidden rounded-lg shadow-xl h-full min-h-[450px]">
                            <img
                                src="/images/Garden_services.jpg"
                                alt="Professional garden setup"
                                className="absolute inset-0 w-full h-full object-cover"
                                />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                                <div>
                                    <p className="font-serif text-2xl text-white mb-2">200+ Gardens Delivered</p>
                                    <p className="text-white/80">From compact balconies to sprawling terraces.</p>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
}

// ─── Before & After ───────────────────────────────────────────────────────────

function BeforeAfterSection() {
    return (
        <section className="py-24 bg-[#f5f0e8]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <AnimatedSection animation="fadeUp">
                    <SectionHeader
                        tag="Transformations"
                        title="Before & After"
                        description="See how we've turned ordinary spaces into extraordinary green retreats."
                    />
                </AnimatedSection>
                <div className="mt-16 space-y-12">
                    {beforeAfter.map((item, i) => (
                        <motion.div
                            key={i}
                            className="grid md:grid-cols-2 gap-8"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            <motion.div variants={fadeInLeft} className="bg-white rounded-lg p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium uppercase tracking-wider rounded-full">Before</span>
                                    <span className="text-sm text-gray-500">{item.label}</span>
                                </div>
                                <div className="bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4">
                                    <div className="text-center px-6">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Building2 className="w-6 h-6 text-gray-400" />
                                        </div>
                                        <p className="text-sm text-gray-500">{item.before}</p>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div variants={fadeInRight} className="bg-white rounded-lg p-8 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 bg-[#5a7c5a]/10 text-[#5a7c5a] text-xs font-medium uppercase tracking-wider rounded-full">After</span>
                                    <span className="text-sm text-gray-500">{item.label}</span>
                                </div>
                                <div className="bg-[#5a7c5a]/5 rounded-lg h-48 flex items-center justify-center mb-4">
                                    <div className="text-center px-6">
                                        <div className="w-12 h-12 bg-[#5a7c5a]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                                            <Flower2 className="w-6 h-6 text-[#5a7c5a]" />
                                        </div>
                                        <p className="text-sm text-[#5a7c5a]">{item.after}</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function BookingCTA() {
    return (
        <AnimatedSection animation="scale" className="py-24 bg-[#5a7c5a]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
                    Ready to Transform Your Space?
                </h2>
                <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                    Book a free consultation with our garden design experts and bring your vision to life.
                </p>
                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5a7c5a] font-medium rounded hover:bg-[#f5f0e8] transition-colors"
                >
                    Schedule a Consultation <ArrowRight className="w-5 h-5" />
                </Link>
            </div>
        </AnimatedSection>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function GardenServices() {
    return (
        <>
            <Hero />
            <ServicesSection />
            <ProcessSection />
            <BeforeAfterSection />
            <BookingCTA />
        </>
    );
}
