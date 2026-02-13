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
    'inline-block px-6 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent/90',
    secondary:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  const className = `${baseStyles} ${variantStyles[variant]}`;

  // Use <a> for external links (target="_blank"), <Link> for internal
  if (target === '_blank') {
    return (
      <a href={href} className={className} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
