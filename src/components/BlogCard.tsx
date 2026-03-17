import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  if (variant === 'featured') {
    return (
      <article className="group relative h-[500px] overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <span className="text-sm text-[#8b6d4b] uppercase tracking-wider">{post.date}</span>
          <h3 className="font-serif text-2xl md:text-3xl text-white mt-2 mb-4">
            {post.title}
          </h3>
          <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white hover:text-[#8b6d4b] transition-colors"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-[#8b6d4b] uppercase tracking-wider">{post.date}</span>
        <h3 className="font-serif text-xl text-gray-900 mt-2 mb-3 group-hover:text-[#5a7c5a] transition-colors">
          <Link to="/blog">{post.title}</Link>
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#5a7c5a] hover:text-[#4a6a4a] transition-colors text-sm font-medium"
        >
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
