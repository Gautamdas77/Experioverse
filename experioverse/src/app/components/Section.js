/**
 * Section wrapper component for consistent layout across all pages.
 * Provides padding, container max-width, background variants, and optional section label/title.
 */

export default function Section({
  children,
  id,
  className = '',
  dark = false,
  gradient = false,
  noPaddingTop = false,
  noPaddingBottom = false,
}) {
  const bgClass = dark
    ? 'ev-section-dark'
    : gradient
    ? 'ev-gradient-subtle'
    : '';

  const paddingClass = `${noPaddingTop ? 'pt-0' : ''} ${noPaddingBottom ? 'pb-0' : ''}`;

  return (
    <section
      id={id}
      className={`ev-section ${bgClass} ${paddingClass} ${className}`}
    >
      <div className="ev-container">{children}</div>
    </section>
  );
}

/**
 * Consistent section header with label, title, and subtitle.
 */
export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 ${className}`}>
      {label && (
        <div
          className={`ev-section-label ${centered ? 'justify-center' : ''} ${
            light ? 'text-ev-accent-light' : ''
          }`}
        >
          {label}
        </div>
      )}
      {title && (
        <h2
          className={`ev-section-title ${light ? 'text-white' : ''}`}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          className={`ev-section-subtitle ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/60' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
