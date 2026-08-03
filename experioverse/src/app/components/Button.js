import Link from 'next/link';

/**
 * Reusable Button component for Experio Verse
 * 
 * Variants:
 *  - primary:    Accent coral background (main CTA)
 *  - secondary:  White background with navy text
 *  - outline:    Transparent with white border (for dark backgrounds)
 *  - ghost:      No background, subtle hover (for inline links)
 *  - dark:       Navy background with white text
 * 
 * Sizes:
 *  - sm, md, lg
 */

const variantClasses = {
  primary:
    'bg-ev-accent hover:bg-ev-accent-hover text-white shadow-md hover:shadow-lg',
  secondary:
    'bg-white hover:bg-ev-gray-50 text-ev-navy shadow-md hover:shadow-lg border border-ev-gray-100',
  outline:
    'bg-transparent hover:bg-white/10 text-white border-2 border-white/30 hover:border-white/60',
  ghost:
    'bg-transparent hover:bg-ev-gray-50 text-ev-gray-600 hover:text-ev-navy',
  dark:
    'bg-ev-navy hover:bg-ev-navy-light text-white shadow-md hover:shadow-lg',
};

const sizeClasses = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon,
  className = '',
  rounded = true,
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
    rounded ? 'rounded-full' : 'rounded-xl'
  }`;

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

/**
 * Inline phone icon SVG for use in CTAs
 */
export function PhoneIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/**
 * Arrow icon for "explore" or "learn more" type CTAs
 */
export function ArrowIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
