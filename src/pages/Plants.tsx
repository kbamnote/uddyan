import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Grid3X3, List, X } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import SectionHeader from '../components/SectionHeader';
import { products, categories } from '../data';
import { scaleIn, staggerContainer } from '../lib/animations';

export default function Plants() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];
    if (selectedCategory !== 'All') result = result.filter((p) => p.category === selectedCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q));
    }
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break;
    }
    return result;
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  return (
    <>
      {/* Hero — always visible */}
      <section className="relative pt-32 pb-20 bg-[#f5f0e8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeader
            tag="Our Collection"
            title="Self-Watering Plant Pots"
            description="Discover our curated collection of elegant self-watering pots, designed to keep your plants thriving with minimal effort."
          />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Toolbar — always visible */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-8 border-b">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-[#5a7c5a] transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#5a7c5a]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
              <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => setViewMode('grid')} className={`p-3 ${viewMode === 'grid' ? 'bg-[#5a7c5a] text-white' : 'hover:bg-gray-50'}`}>
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button onClick={() => setViewMode('list')} className={`p-3 ${viewMode === 'list' ? 'bg-[#5a7c5a] text-white' : 'hover:bg-gray-50'}`}>
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Sidebar — always visible */}
            <aside className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 flex-shrink-0`}>
              <div className="bg-[#f5f0e8] rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg">Filters</h3>
                  <button onClick={() => setShowFilters(false)} className="md:hidden p-1 hover:bg-gray-200 rounded">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="w-4 h-4 accent-[#5a7c5a]"
                        />
                        <span className={selectedCategory === category ? 'text-[#5a7c5a]' : ''}>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Price Range</h4>
                  <div className="space-y-4">
                    <input
                      type="range" min="0" max="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-[#5a7c5a]"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <p className="text-gray-600 mb-6">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </p>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setPriceRange([0, 100]); }}
                    className="mt-4 text-[#5a7c5a] hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <motion.div
                  key={`${selectedCategory}-${searchQuery}-${sortBy}`}
                  className={viewMode === 'grid' ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-6'}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {filteredProducts.map((product) => (
                    <motion.div key={product.id} variants={scaleIn}>
                      <ProductCard product={product} showDetails={viewMode === 'grid'} />
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
