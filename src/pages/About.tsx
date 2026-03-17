import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, Award, Users, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { fadeInUp, fadeInLeft, staggerContainer } from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: 50000, suffix: '+', label: 'Happy Customers' },
  { value: 30, suffix: '+', label: 'Days Without Watering' },
  { value: 99, suffix: '%', label: 'Plant Survival Rate' },
  { value: 4.9, suffix: '', label: 'Average Rating' },
];

const values = [
  { icon: Leaf, title: 'Sustainability', description: 'We use eco-friendly materials and sustainable manufacturing practices to minimize our environmental impact.' },
  { icon: Heart, title: 'Quality', description: 'Every pot is crafted with care using premium materials, ensuring durability and lasting beauty.' },
  { icon: Award, title: 'Innovation', description: 'Our patented self-watering technology is the result of years of research and development.' },
  { icon: Users, title: 'Community', description: 'We believe in building a community of plant lovers who support and inspire each other.' },
];

const milestones = [
  { year: '2020', title: 'Uddyan Founded', description: 'Started with a simple mission to make plant care effortless.' },
  { year: '2021', title: 'First Product Launch', description: 'Released our flagship self-watering ceramic pot collection.' },
  { year: '2022', title: '10,000 Customers', description: 'Reached our first major milestone of happy plant parents.' },
  { year: '2023', title: 'Expanded Collection', description: 'Added terracotta and modern design lines to our catalog.' },
  { year: '2024', title: 'International Shipping', description: 'Started shipping to over 20 countries worldwide.' },
  { year: '2025', title: '50,000+ Community', description: 'Built a thriving community of plant enthusiasts.' },
];

// ─── Count-up stat ─────────────────────────────────────────────────────────────

function StatNumber({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    const isFloat = value % 1 !== 0;
    const duration = 1800;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      setDisplay(isFloat ? current.toFixed(1) : Math.round(current).toLocaleString());
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <span className="font-serif text-4xl md:text-5xl mb-2 block text-white">
        {display}{suffix}
      </span>
      <span className="text-white/70 text-sm uppercase tracking-wider">{label}</span>
    </div>
  );
}

// ─── Stats Section ────────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section className="py-20 bg-[#5a7c5a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <StatNumber key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About Page ───────────────────────────────────────────────────────────────

export default function About() {
  return (
    <>
      {/* Hero — no animation, always visible */}
      <section className="relative pt-32 pb-24 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                tag="About Uddyan"
                title="Bringing Nature Home, Effortlessly"
                description="We believe everyone deserves the joy of thriving plants without the stress of daily maintenance. Our self-watering technology ensures your plants get exactly what they need."
                align="left"
              />
              <div className="mt-8 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2020, Uddyan was born from a simple observation: too many people loved plants but struggled to keep them alive. Our founders, a team of engineers and plant enthusiasts, set out to create a solution.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our name &apos;Uddyan&apos; draws inspiration from the Sanskrit word for garden, reflecting our commitment to bringing nature into urban spaces. Each pot is thoughtfully designed to combine innovative technology with timeless aesthetics.
                </p>
              </div>
            </div>
            <AnimatedSection animation="scale">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img src="/images/about-1.jpg" alt="Our story" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <AnimatedSection animation="fadeUp">
            <SectionHeader tag="Our Values" title="What We Stand For" description="These core principles guide everything we do at Uddyan." />
          </AnimatedSection>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center p-8 bg-[#f5f0e8] rounded-lg">
                <div className="w-16 h-16 bg-[#5a7c5a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#5a7c5a]" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="scale" className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img src="/images/about-2.jpg" alt="Our mission" className="w-full h-full object-cover" loading="lazy" />
              </div>
            </AnimatedSection>
            <div className="order-1 lg:order-2">
              <AnimatedSection animation="fadeRight">
                <SectionHeader tag="Our Mission" title="Plants for Everyone" align="left" />
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={0.15}>
                <blockquote className="font-serif text-2xl text-gray-900 italic mb-6">
                  &ldquo;We believe that when plants thrive, people thrive. Our mission is to make plant parenthood accessible, enjoyable, and stress-free for everyone.&rdquo;
                </blockquote>
                <p className="text-gray-600 mb-6">
                  Whether you&apos;re a busy professional, a frequent traveler, or simply new to plants, our self-watering system takes the guesswork out of plant care. We&apos;re here to help you create your own urban jungle, one pot at a time.
                </p>
                <p className="text-[#8b6d4b] font-medium">— The Uddyan Team</p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <AnimatedSection animation="fadeUp">
            <SectionHeader tag="Our Journey" title="Milestones That Matter" />
          </AnimatedSection>
          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-[#5a7c5a]/20 hidden md:block" />
            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  variants={fadeInLeft}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-serif text-3xl text-[#8b6d4b]">{milestone.year}</span>
                    <h3 className="font-serif text-xl text-gray-900 mt-2">{milestone.title}</h3>
                    <p className="text-gray-600 mt-1">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-[#5a7c5a] rounded-full relative z-10 hidden md:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="scale" className="py-24 bg-[#5a7c5a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Ready to Start Your Plant Journey?</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Join over 50,000 happy plant parents who have discovered the joy of effortless plant care.
          </p>
          <Link
            to="/plants"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5a7c5a] font-medium rounded hover:bg-[#f5f0e8] transition-colors"
          >
            Explore Our Collection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
