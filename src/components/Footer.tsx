import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'All Plants', href: '/plants' },
    { label: 'Ceramic Pots', href: '/plants' },
    { label: 'Terracotta', href: '/plants' },
    { label: 'Modern Collection', href: '/plants' },
  ],
  support: [
    { label: 'FAQ', href: '/about' },
    { label: 'Shipping Info', href: '/contact' },
    { label: 'Returns', href: '/contact' },
    { label: 'Contact Us', href: '/contact' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Our Story', href: '/about' },
    { label: 'Careers', href: '/about' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'Youtube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2d3436] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl mb-2">Join Our Green Community</h3>
              <p className="text-white/70">Subscribe for plant care tips, exclusive offers, and new product announcements.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-[#8b6d4b]"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 bg-[#5a7c5a] hover:bg-[#4a6a4a] rounded-lg font-medium transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-3xl text-white">Uddyan</span>
            </Link>
            <p className="text-white/70 mb-6 max-w-sm">
              Smart self-watering plant pots for modern living. Bringing nature home, effortlessly.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#5a7c5a] rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2026 Uddyan. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
              <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/" className="text-white/50 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
