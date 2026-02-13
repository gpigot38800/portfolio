import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  href: string;
  children: React.ReactNode;
}

export default function Button({ variant, href, children }: ButtonProps) {
  const baseStyles =
    'inline-block px-6 py-3 rounded-lg font-medium transition-colors focus:ring-2 focus:ring-accent focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-accent text-white hover:bg-accent/90',
    secondary:
      'border-2 border-accent text-accent hover:bg-accent hover:text-white',
  };

  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </Link>
  );
}
