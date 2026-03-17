import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { blogPosts } from '../data';
import { fadeInUp, staggerContainer } from '../lib/animations';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const featuredPost = blogPosts[0];
  const recentPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Hero — no animation, always visible */}
      <section className="relative pt-32 pb-20 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeader
            tag="Plant Care Journal"
            title="Tips, Stories & Inspiration"
            description="Discover expert advice, styling tips, and stories from our community of plant lovers."
          />
        </div>
      </section>

      {/* Search — no animation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {!searchQuery && (
        <section className="py-16 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <AnimatedSection animation="fadeUp">
              <div className="mb-8">
                <span className="text-sm tracking-[0.2em] text-[#8b6d4b] uppercase">Featured Article</span>
              </div>
            </AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <AnimatedSection animation="scale">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fadeRight" delay={0.15}>
                <div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{featuredPost.date}</span>
                    <span className="flex items-center gap-1"><User className="w-4 h-4" />{featuredPost.author}</span>
                  </div>
                  <h2 className="font-serif text-3xl text-gray-900 mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <Link to="#" className="inline-flex items-center gap-2 text-[#5a7c5a] hover:text-[#4a6a4a] font-medium">
                    Read Full Article <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-16 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <AnimatedSection animation="fadeUp">
            <h2 className="font-serif text-2xl text-gray-900 mb-8">
              {searchQuery ? `Search Results (${filteredPosts.length})` : 'Latest Articles'}
            </h2>
          </AnimatedSection>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
              <button onClick={() => setSearchQuery('')} className="mt-4 text-[#5a7c5a] hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {(searchQuery ? filteredPosts : recentPosts).map((post) => (
                <motion.article key={post.id} variants={fadeInUp} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" />5 min read</span>
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-3 hover:text-[#5a7c5a] transition-colors">
                      <Link to="#">{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {post.author}</span>
                      <Link to="#" className="text-[#5a7c5a] hover:text-[#4a6a4a] text-sm font-medium">Read More</Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <AnimatedSection animation="scale" className="py-24 bg-[#5a7c5a]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-serif text-3xl text-white mb-4">Never Miss a Plant Care Tip</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for weekly plant care advice, exclusive offers, and new product announcements.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none" />
            <button type="submit" className="px-8 py-4 bg-white text-[#5a7c5a] font-medium rounded-lg hover:bg-[#f5f0e8] transition-colors">Subscribe</button>
          </form>
        </div>
      </AnimatedSection>
    </>
  );
}
