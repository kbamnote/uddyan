// Shared types for Uddyan multi-page website

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  vastuBenefits?: string[];
  careInstructions?: string[];
  inStock?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content?: string;
  author?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}
