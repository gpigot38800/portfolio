interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const variants = {
    default:
      'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border border-slate-300/50 shadow-sm',
    primary:
      'bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 border border-primary-300/50 shadow-sm shadow-primary-500/10',
    accent:
      'bg-gradient-to-r from-accent-100 to-accent-200 text-accent-700 border border-accent-300/50 shadow-sm shadow-accent-500/10',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
