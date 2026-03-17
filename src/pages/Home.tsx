import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Heart, Leaf, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import BlogCard from '../components/BlogCard';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import AutoCarousel, { TestimonialCard, ProductCarouselCard } from '../components/AutoCarousel';
import { products, blogPosts, testimonials } from '../data';
import {
  fadeInUp, fadeInLeft, fadeInRight, scaleIn, staggerContainer,
} from '../lib/animations';

// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Self-watering plants"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 w-full">
        <motion.div
          className="max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeInUp} className="inline-block text-sm tracking-[0.3em] text-[#8b6d4b] uppercase mb-6">
            Self Watering Plants
          </motion.span>
          <motion.h1 variants={fadeInUp} className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
            Smart Plants<br />for Smart Living
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-white/80 mb-8 max-w-lg">
            Zero daily watering. Elegant design. Healthy plants. Perfect for urban homes and busy professionals.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link
              to="/plants"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors"
            >
              Shop Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  { icon: Droplets, title: 'Self Watering Technology', description: 'Our innovative wicking system delivers the perfect amount of water to your plants roots.' },
  { icon: Heart, title: 'Minimal Maintenance', description: 'Go up to 30 days without watering. Simply fill the reservoir and let your plants thrive.' },
  { icon: Leaf, title: 'Modern Aesthetic Design', description: 'Each pot is crafted with clean lines and premium materials to complement any interior.' },
  { icon: Truck, title: 'Free Shipping', description: 'Enjoy free delivery on orders over $100. Your plants arrive carefully packaged.' },
];

function Features() {
  return (
    <section className="py-20 bg-[#f5f0e8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center p-6">
              <div className="w-16 h-16 bg-[#5a7c5a]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-[#5a7c5a]" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Featured Products ────────────────────────────────────────────────────────
function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection animation="fadeUp">
          <SectionHeader
            tag="Our Collection"
            title="Featured Self-Watering Pots"
            description="Discover our curated collection of elegant self-watering pots, designed to keep your plants thriving with minimal effort."
          />
        </AnimatedSection>
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={scaleIn}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        <AnimatedSection animation="fadeUp" delay={0.2} className="text-center mt-12">
          <Link
            to="/plants"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#5a7c5a] text-[#5a7c5a] font-medium rounded hover:bg-[#5a7c5a] hover:text-white transition-colors"
          >
            View All Products <ArrowRight className="w-5 h-5" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const steps = [
  { number: '01', title: 'Fill the Reservoir', description: 'Simply pour water into the built-in reservoir at the base of the pot.' },
  { number: '02', title: 'Plant Absorbs Water', description: 'The wicking system draws water up to the roots as needed.' },
  { number: '03', title: 'Enjoy Thriving Plants', description: 'Your plants stay perfectly hydrated for up to 30 days.' },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-[#f5f0e8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection animation="fadeUp">
              <SectionHeader
                tag="How It Works"
                title="Three Simple Steps to Thriving Plants"
                description="Our innovative self-watering system takes the guesswork out of plant care. No overwatering, no underwatering, just perfect plant health."
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
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeInLeft} className="flex gap-6">
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
            <img
              src="/images/how-it-works.jpg"
              alt="How self-watering works"
              className="rounded-lg shadow-xl w-full"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// ─── Offer Section ────────────────────────────────────────────────────────────
function OfferSection() {
  return (
    <AnimatedSection animation="scale" className="py-24 bg-[#5a7c5a]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <span className="inline-block text-sm tracking-[0.2em] text-white/70 uppercase mb-4">Special Offer</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Buy 6 Pots &amp; Get 1 Self Watering Plant Free
        </h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Transform your space into a green oasis. For a limited time, receive a free pothos plant with every purchase of 6 pots.
        </p>
        <Link
          to="/plants"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5a7c5a] font-medium rounded hover:bg-[#f5f0e8] transition-colors"
        >
          Shop the Collection <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

// ─── Testimonials Carousel ────────────────────────────────────────────────────
function TestimonialsCarousel() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#8b6d4b] uppercase">Testimonials</span>
          <h2 className="font-serif text-4xl text-gray-900 mt-4">What Our Customers Say</h2>
        </AnimatedSection>
        <AutoCarousel showArrows showDots pauseOnHover autoplayDelay={4000}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} content={t.content} name={t.name} role={t.role} rating={5} />
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
}

// ─── Featured Products Carousel ───────────────────────────────────────────────
function FeaturedProductsCarousel() {
  return (
    <section className="py-24 bg-[#f5f0e8]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] text-[#8b6d4b] uppercase">Best Sellers</span>
          <h2 className="font-serif text-4xl text-gray-900 mt-4">Customer Favorites</h2>
        </AnimatedSection>
        <AutoCarousel showArrows showDots={false} pauseOnHover autoplayDelay={3000}>
          {products.map((p) => (
            <ProductCarouselCard key={p.id} image={p.image} name={p.name} price={p.price} category={p.category} />
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
}

// ─── Plant Care Tips ────────────────────────────────────────────────────────
function PlantCareTips() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeRight">
            <div className="relative overflow-hidden rounded-lg shadow-xl outline outline-offset-[16px] outline-1 outline-[#5a7c5a]/30">
              <img
                src="/images/Care_tips.jpg"
                alt="Plant Care Tips"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </AnimatedSection>
          <div>
            <AnimatedSection animation="fadeLeft">
              <SectionHeader
                tag="Expert Advice"
                title="Essential Plant Care Tips"
                description="We want your plants to thrive. Here are a few golden rules for keeping your indoor jungle healthy and vibrant, straight from our botanists."
                align="left"
              />
            </AnimatedSection>
            <motion.div
              className="mt-8 space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                { title: 'Find the Right Light', desc: 'Observe your space. Most indoor plants prefer bright, indirect sunlight. Keep them away from harsh mid-day rays.' },
                { title: 'Trust the Self-Watering', desc: 'Our pots do the heavy lifting! Only refill the reservoir when the indicator is low. Remember, overwatering is the #1 plant killer.' },
                { title: 'Keep Them Clean', desc: 'Dust your leaves gently with a damp cloth. Clean leaves photosynthesize better and keep pests away.' }
              ].map((tip, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#5a7c5a]/10 text-[#5a7c5a] flex items-center justify-center font-serif shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">{tip.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{tip.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Blog Section ─────────────────────────────────────────────────────────────
function BlogSection() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
          <AnimatedSection animation="fadeLeft">
            <SectionHeader tag="Plant Care Journal" title="Tips &amp; Stories" align="left" className="mb-0" />
          </AnimatedSection>
          <AnimatedSection animation="fadeRight" delay={0.1}>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#5a7c5a] hover:text-[#4a6a4a] font-medium">
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection animation="fadeUp">
            <BlogCard post={featuredPost} variant="featured" />
          </AnimatedSection>
          <motion.div
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {recentPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInRight}>
                <BlogCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Home Page ───────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturedProducts />
      <HowItWorks />
      <OfferSection />
      <TestimonialsCarousel />
      <FeaturedProductsCarousel />
      <PlantCareTips />
      <BlogSection />
    </>
  );
}
