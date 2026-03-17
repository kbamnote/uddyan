import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, to, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-[#5a7c5a] text-white hover:bg-[#4a6a4a]',
      secondary: 'bg-[#8b6d4b] text-white hover:bg-[#7a5d3d]',
      outline: 'border-2 border-[#5a7c5a] text-[#5a7c5a] hover:bg-[#5a7c5a] hover:text-white',
      ghost: 'text-[#5a7c5a] hover:bg-[#5a7c5a]/10',
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (to) {
      return (
        <Link to={to} className={classes}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
