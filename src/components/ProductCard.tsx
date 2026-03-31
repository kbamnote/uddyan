import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Check, Eye } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  showDetails?: boolean;
}

export default function ProductCard({ product, showDetails = true }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0e8]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            to={`/product/${product.id}`}
            className="w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-[#5a7c5a] hover:text-white transition-colors"
          >
            <Eye className="w-5 h-5" />
          </Link>
          <button
            onClick={handleAddToCart}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${isAdded ? 'bg-green-500 text-white' : 'bg-white hover:bg-[#5a7c5a] hover:text-white'
              }`}
          >
            {isAdded ? <Check className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Content */}
      {showDetails && (
        <div className="p-4">
          <span className="text-xs text-[#8b6d4b] uppercase tracking-wider">{product.category}</span>
          <h3 className="font-serif text-lg text-gray-900 mt-1 mb-2">
            <Link to={`/product/${product.id}`} className="hover:text-[#5a7c5a] transition-colors">
              {product.name}
            </Link>
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-lg font-medium text-[#5a7c5a]">₹{product.price}</span>
            <button
              onClick={handleAddToCart}
              className={`text-sm px-4 py-2 rounded transition-all ${isAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-[#5a7c5a] text-white hover:bg-[#4a6a4a]'
                }`}
            >
              {isAdded ? 'Added!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
