import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { staggerContainer, fadeInUp } from '../lib/animations';

const contactInfo = [
  { icon: MapPin, title: 'Visit Us', details: ['123 Green Street', 'Plant City, CA 90210'] },
  { icon: Phone, title: 'Call Us', details: ['+1 (555) 123-4567', 'Mon-Fri 9am-6pm PST'] },
  { icon: Mail, title: 'Email Us', details: ['hello@uddyan.com', 'support@uddyan.com'] },
  { icon: Clock, title: 'Business Hours', details: ['Monday - Friday: 9am - 6pm', 'Saturday: 10am - 4pm'] },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      {/* Hero — always visible */}
      <section className="relative pt-32 pb-20 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeader
            tag="Get In Touch"
            title="We'd Love to Hear From You"
            description="Have questions about our products or need help choosing the perfect pot? Our team is here to help."
          />
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div key={index} variants={fadeInUp} className="p-6 bg-[#f5f0e8] rounded-lg text-center">
                <div className="w-14 h-14 bg-[#5a7c5a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[#5a7c5a]" />
                </div>
                <h3 className="font-serif text-lg text-gray-900 mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection animation="fadeLeft">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h2 className="font-serif text-2xl text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                {isSubmitted ? (
                  <AnimatedSection animation="scale" className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you soon.</p>
                    <button onClick={() => setIsSubmitted(false)} className="mt-6 text-[#5a7c5a] hover:underline">
                      Send another message
                    </button>
                  </AnimatedSection>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]">
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Product Support</option>
                        <option value="order">Order Status</option>
                        <option value="wholesale">Wholesale</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required
                        rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a] resize-none"
                        placeholder="How can we help you?" />
                    </div>
                    <button type="submit" disabled={isSubmitting}
                      className="w-full py-4 bg-[#5a7c5a] text-white font-medium rounded hover:bg-[#4a6a4a] transition-colors flex items-center justify-center gap-2 disabled:opacity-70">
                      {isSubmitting ? (
                        <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <>Send Message <Send className="w-5 h-5" /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection animation="fadeRight" delay={0.15}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-[#5a7c5a] mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-400">123 Green Street, Plant City, CA 90210</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <AnimatedSection animation="fadeUp" className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Find quick answers to common questions about our products, shipping, and plant care.
          </p>
          <Link to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#5a7c5a] text-[#5a7c5a] font-medium rounded hover:bg-[#5a7c5a] hover:text-white transition-colors">
            View FAQ
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
