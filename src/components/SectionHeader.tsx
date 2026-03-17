interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      {tag && (
        <span className="inline-block text-sm tracking-[0.2em] text-[#8b6d4b] font-medium uppercase mb-4">
          {tag}
        </span>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-[#696969] text-lg max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
