import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";
import { useState } from "react";
import { footerConfig } from "../config";

const iconMap: Record<
  string,
  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
> = {
  Instagram,
  Facebook,
  Twitter,
};

const Footer = () => {
  if (!footerConfig.brandName) return null;

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white py-16 md:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl mb-6">
              {footerConfig.brandName}
            </h3>

            <p className="text-[#696969] font-light text-sm leading-relaxed mb-6 max-w-sm">
              {footerConfig.brandDescription}
            </p>

            <div className="flex items-center gap-4">
              {footerConfig.socialLinks.map((social) => {
                const IconComponent = iconMap[social.icon];
                if (!IconComponent) return null;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-[#696969] hover:text-[#8b6d4b] transition-all duration-300 hover:scale-90"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Groups */}
          {footerConfig.linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">
                {group.title}
              </h4>

              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-[#696969] text-base font-light inline-block hover:text-[#8b6d4b] transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {footerConfig.newsletterHeading && (
            <div>
              <h4 className="font-sans text-sm font-medium uppercase tracking-wider mb-6">
                {footerConfig.newsletterHeading}
              </h4>

              <p className="text-[#696969] text-sm font-light mb-4 max-w-sm">
                {footerConfig.newsletterDescription}
              </p>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 w-full"
              >
                <input
                  type="email"
                  placeholder={footerConfig.newsletterPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-[#8b6d4b] transition-colors duration-300"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#8b6d4b] text-white text-sm font-light tracking-wider transition-all duration-300 hover:opacity-90"
                >
                  {isSubscribed ? (
                    <span>{footerConfig.newsletterSuccessText}</span>
                  ) : (
                    <>
                      <span>{footerConfig.newsletterButtonText}</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 text-center md:text-left">

            <p className="text-[#333] text-xs uppercase tracking-wider font-medium">
              {footerConfig.copyrightText}
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6">
              {footerConfig.legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#696969] text-xs hover:text-black transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;