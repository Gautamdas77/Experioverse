'use client';

const BRANDS = [
  { name: 'Google', style: { fontSize: 22, fontWeight: 700, color: '#4285F4', fontFamily: 'var(--font-heading)' } },
  { name: 'Microsoft', style: { fontSize: 18, fontWeight: 700, color: '#737373' } },
  { name: 'amazon', style: { fontSize: 24, fontWeight: 800, color: '#FF9900', fontStyle: 'italic' } },
  { name: 'TCS', style: { fontSize: 20, fontWeight: 800, color: '#555' } },
  { name: 'Deloitte.', style: { fontSize: 20, fontWeight: 700, color: '#86BC25' } },
  { name: 'zomato', style: { fontSize: 20, fontWeight: 700, color: '#E23744' } },
  { name: 'Infosys', style: { fontSize: 20, fontWeight: 700, color: '#007CC3' } },
  { name: '◈ Dropbox', style: { fontSize: 18, fontWeight: 700, color: '#0061FF' } },
];

export default function TrustedBrands() {
  return (
    <section
      id="trusted-brands"
      style={{
        background: '#ffffff',
        padding: '32px 0',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <div className="ev-container">
        {/* Label */}
        <p style={{
          textAlign: 'center',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#9ca3af',
          marginBottom: 24,
          fontFamily: 'var(--font-heading)',
        }}>
          Trusted by Amazing Brands
        </p>

        {/* Logo strip */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0 48px',
          rowGap: 16,
        }}>
          {BRANDS.map((brand) => (
            <span
              key={brand.name}
              style={{
                ...brand.style,
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                cursor: 'default',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
