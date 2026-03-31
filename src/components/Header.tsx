import { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { overlayVariant, slideInRight } from '../lib/animations';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useAppProducts } from '../context/ProductContext';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Plants', href: '/plants' },
  { label: 'Offers', href: '/offers' },
  { label: 'Corporate Gifting', href: '/corporate-gifting' },
  { label: 'Gifting', href: '/gifting' },
  { label: 'Garden Services', href: '/garden-services' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const { products } = useAppProducts();
  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll(); // check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIsProfileOpen(false);
    setSearchQuery('');
  }, [location]);

  // Close profile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isProfileOpen]);

  // Lock body scroll when mobile menu or search is open
  useEffect(() => {
    document.body.style.overflow = (isMenuOpen || isSearchOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen, isSearchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 200);
    }
  }, [isSearchOpen]);

  // Close search on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isSearchOpen]);

  // Search results
  const searchResults = useMemo(() => {
    if (searchQuery.trim().length < 3) return [];
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)
    ).slice(0, 6);
  }, [searchQuery, products]);

  const hasResults = searchResults.length > 0;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src={isScrolled ? '/images/logoScroll.png' : '/images/logoHeader.png'}
                alt="Uddyan"
                className="h-12 w-auto object-contain transition-all duration-300"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-sm tracking-wide hover:text-[#8b6d4b] transition-colors ${isScrolled ? 'text-gray-700' : 'text-white/90'
                    } ${location.pathname === link.href ? 'text-[#8b6d4b]' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 hover:bg-white/10 rounded-full transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
              {/* Profile / Login */}
              <div className="relative" ref={profileRef}>
                {user ? (
                  <>
                    <button
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className={`p-2 hover:bg-white/10 rounded-full transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                    >
                      <User className="w-5 h-5" />
                    </button>
                    {isProfileOpen && (
                      <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <button
                          onClick={() => {
                            logout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <LogOut className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to="/login"
                    className={`p-2 hover:bg-white/10 rounded-full transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                  >
                    <User className="w-5 h-5" />
                  </Link>
                )}
              </div>
              <Link
                to="/cart"
                className={`p-2 hover:bg-white/10 rounded-full transition-colors relative ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#8b6d4b] text-white text-xs rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
              <button
                onClick={() => setIsMenuOpen(true)}
                className={`md:hidden p-2 hover:bg-white/10 rounded-full transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Search Overlay ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
            />

            {/* Search Panel */}
            <motion.div
              className="relative max-w-2xl mx-auto mt-20 md:mt-32 px-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, delay: 0.05 }}
            >
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search plants, articles..."
                  className="w-full pl-14 pr-14 py-5 bg-white rounded-xl shadow-2xl text-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5a7c5a]/30"
                />
                <button
                  onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Results */}
              {searchQuery.trim() && (
                <motion.div
                  className="bg-white rounded-xl shadow-2xl mt-3 max-h-[60vh] overflow-y-auto"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {!hasResults ? (
                    <div className="p-8 text-center">
                      <p className="text-gray-500">No results found for "<span className="font-medium text-gray-700">{searchQuery}</span>"</p>
                      <p className="text-sm text-gray-400 mt-2">Try searching for "ceramic", "watering", or "care"</p>
                    </div>
                  ) : (
                    <div className="p-4">
                      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3 px-2">Plants</h3>
                      <div className="space-y-1">
                        {searchResults.map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            className="flex items-center gap-4 p-2 rounded-lg hover:bg-[#f5f0e8] transition-colors"
                          >
                            <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#f5f0e8] flex-shrink-0">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate">{product.name}</p>
                              <p className="text-xs text-gray-500">{product.category}</p>
                            </div>
                            <span className="text-sm font-medium text-[#5a7c5a]">₹{product.price}</span>
                          </Link>
                        ))}
                      </div>
                      <Link
                        to="/plants"
                        onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                        className="block text-center text-sm text-[#5a7c5a] hover:text-[#4a6a4a] font-medium mt-2 py-2"
                      >
                        View all plants →
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Quick Links when empty */}
              {!searchQuery.trim() && (
                <motion.div
                  className="bg-white rounded-xl shadow-2xl mt-3 p-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4">Quick Links</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Ceramic Pots', 'Terracotta', 'Self Watering', 'Plant Care', 'Indoor Plants'].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="px-4 py-2 bg-[#f5f0e8] text-sm text-gray-700 rounded-full hover:bg-[#5a7c5a] hover:text-white transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Mobile Menu ────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60]"
            variants={overlayVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-12">
                  <img src="/images/logoScroll.png" alt="Uddyan" className="h-10 w-auto object-contain" />
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                    >
                      <Link
                        to={link.href}
                        className={`text-lg font-medium transition-colors ${location.pathname === link.href
                          ? 'text-[#5a7c5a]'
                          : 'text-gray-700 hover:text-[#5a7c5a]'
                          }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
