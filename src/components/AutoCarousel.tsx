import { useEffect, useCallback, useState, type ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AutoCarouselProps {
  children: ReactNode[];
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
  // legacy props (ignored, kept for API compatibility)
  itemWidth?: number;
  gap?: number;
  speed?: number;
  itemClassName?: string;
}

export default function AutoCarousel({
  children,
  autoplayDelay = 3500,
  pauseOnHover = true,
  showArrows = true,
  showDots = true,
  className = '',
}: AutoCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplay = Autoplay({ delay: autoplayDelay, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [autoplay]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) autoplay.stop();
  }, [pauseOnHover, autoplay]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) autoplay.reset();
  }, [pauseOnHover, autoplay]);

  if (!children.length) return null;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-4 md:gap-6">
          {children.map((child, i) => (
            <div key={i} className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[360px]">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      {showArrows && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-0 md:-translate-x-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-[#5a7c5a] hover:text-white transition-all duration-200 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-0 md:translate-x-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 bg-white/90 shadow-lg rounded-full flex items-center justify-center hover:bg-[#5a7c5a] hover:text-white transition-all duration-200 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && scrollSnaps.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${selectedIndex === i ? 'w-8 bg-[#5a7c5a]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Testimonial Card ──────────────────────────────────────────────────────────

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  rating?: number;
}

export function TestimonialCard({ content, name, role, rating = 5 }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-[#8b6d4b]' : 'text-gray-200'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 leading-relaxed flex-1 mb-6">&ldquo;{content}&rdquo;</p>
      <div>
        <p className="font-medium text-gray-900">{name}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}

// ─── Product Card for Carousel ─────────────────────────────────────────────────

interface ProductCarouselCardProps {
  image: string;
  name: string;
  price: number;
  category: string;
}

export function ProductCarouselCard({ image, name, price, category }: ProductCarouselCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-[3/4] overflow-hidden bg-[#f5f0e8]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="text-xs text-[#8b6d4b] uppercase tracking-wider">{category}</span>
        <h3 className="font-serif text-lg text-gray-900 mt-1">{name}</h3>
        <p className="text-lg font-medium text-[#5a7c5a] mt-2">${price}</p>
      </div>
    </div>
  );
}
