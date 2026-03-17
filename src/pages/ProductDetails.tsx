import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Check, Heart, ShieldCheck, Truck, ArrowLeft } from 'lucide-react';

import { products } from '../data';
import { useCart } from '../context/CartContext';
import AnimatedSection from '../components/AnimatedSection';

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  
  // Find the product based on the URL parameter
  const product = products.find(p => p.id === Number(id));

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-[#f5f0e8]">
        <h1 className="font-serif text-3xl text-gray-900 mb-4">Plant Not Found</h1>
        <p className="text-gray-600 mb-8">We couldn't find the plant you were looking for.</p>
        <Link 
          to="/plants"
          className="px-8 py-3 bg-[#5a7c5a] text-white rounded hover:bg-[#4a6a4a] transition-colors"
        >
          Return to Plants
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Breadcrumb / Back Link */}
        <AnimatedSection animation="fadeUp" className="mb-8">
          <Link to="/plants" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#5a7c5a] transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Plants
          </Link>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Image Gallery/Main Image */}
          <AnimatedSection animation="fadeRight">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] bg-[#f5f0e8] rounded-2xl overflow-hidden sticky top-32">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>

          {/* Right Column: Product Info */}
          <AnimatedSection animation="fadeLeft" delay={0.1}>
            <div className="flex flex-col h-full">
              
              {/* Header Info */}
              <div className="mb-8">
                <span className="text-sm font-medium text-[#8b6d4b] uppercase tracking-widest">{product.category}</span>
                <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 mt-2 mb-4">{product.name}</h1>
                <p className="text-2xl font-medium text-[#5a7c5a]">${product.price.toFixed(2)}</p>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Add to Cart Actions */}
              <div className="mb-12 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-4 px-8 rounded flex items-center justify-center gap-3 text-lg font-medium transition-all ${
                    isAdded 
                      ? 'bg-green-600 text-white' 
                      : 'bg-[#5a7c5a] text-white hover:bg-[#4a6a4a]'
                  }`}
                >
                  {isAdded ? (
                    <><Check className="w-5 h-5" /> Added to Cart</>
                  ) : (
                    <><ShoppingCart className="w-5 h-5" /> Add to Cart</>
                  )}
                </button>
                <button className="p-4 rounded border-2 border-gray-200 text-gray-600 hover:border-[#8b6d4b] hover:text-[#8b6d4b] transition-colors flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </button>
              </div>
              
              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-4 mb-12 py-6 border-y border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f5f0e8] flex items-center justify-center flex-shrink-0">
                    <Truck className="w-5 h-5 text-[#8b6d4b]" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Free Shipping Over $100</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f5f0e8] flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#8b6d4b]" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">30-Day Guarantee</span>
                </div>
              </div>

              {/* Vastu & Care Tabs/Accordions */}
              <div className="space-y-8 flex-1">
                {product.vastuBenefits && product.vastuBenefits.length > 0 && (
                  <div>
                    <h3 className="text-xl font-serif text-gray-900 mb-4 flex items-center gap-2">
                       🪴 Vastu Benefits
                    </h3>
                    <ul className="space-y-3">
                      {product.vastuBenefits.map((benefit, index) => (
                        <li key={index} className="flex gap-3 text-gray-600">
                          <Check className="w-5 h-5 text-[#5a7c5a] flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {product.vastuBenefits && product.vastuBenefits.length > 0 && product.careInstructions && product.careInstructions.length > 0 && (
                  <div className="w-full h-px bg-gray-100" />
                )}

                {product.careInstructions && product.careInstructions.length > 0 && (
                  <div>
                    <h3 className="text-xl font-serif text-gray-900 mb-4 flex items-center gap-2">
                      💧 Care Instructions
                    </h3>
                    <ul className="space-y-3">
                      {product.careInstructions.map((instruction, index) => (
                        <li key={index} className="flex gap-3 text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8b6d4b] mt-2.5 flex-shrink-0" />
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
