import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export default function Button({ variant, href, children, target, rel }: ButtonProps) {
  const baseStyles =
    'group relative inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 overflow-hidden';

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800 shadow-lg hover:shadow-xl hover:shadow-primary-500/50 hover:-translate-y-0.5',
    secondary:
      'border-2 border-primary-600 text-primary-700 hover:text-white hover:border-primary-700 bg-white hover:bg-primary-600 shadow-md hover:shadow-lg hover:-translate-y-0.5',
  };

  const className = `${baseStyles} ${variantStyles[variant]}`;

  // Shine effect on hover
  const shineEffect = (
    <span className="absolute inset-0 bg-gradient-shine bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-500"></span>
  );

  const content = (
    <>
      {shineEffect}
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </>
  );

  // Use <a> for external links (target="_blank"), <Link> for internal
  if (target === '_blank') {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
