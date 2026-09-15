import ServicePage from '../components/ServicePage';

export const metadata = {
  title: 'Offsite Events — Experioverse',
  description: 'National destinations, international getaways, and day outings curated to bring your team together.',
};

const data = {
  meta: {
    badge: 'OFFSITE EVENTS',
    title: 'Experiences Designed to Bring Teams Together',
    description: 'From scenic getaways to curated local adventures, we create offsites that inspire, re-energize and build stronger connections across your organization.',
  },
  categories: [
    {
      anchor: 'national',
      icon: '📍',
      label: 'DOMESTIC DESTINATIONS',
      title: 'National',
      description: 'Discover the best of India — from the mountains of Rishikesh to the backwaters of Kerala. We handle every detail end-to-end.',
      showImage: true,
      items: [
        'Rishikesh', 'Rajasthan', 'Amritsar', 'Goa', 'Kerala', 'Customized Location',
      ],
    },
    {
      anchor: 'international',
      icon: '🌐',
      label: 'GLOBAL DESTINATIONS',
      title: 'International',
      description: 'Take your team beyond borders. We curate world-class international offsite experiences tailored to your culture and goals.',
      showImage: true,
      items: [
        'Bangkok', 'Dubai', 'Vietnam', 'Singapore', 'Bali', 'Customized Location',
      ],
    },
    {
      anchor: 'day-outings',
      icon: '☀️',
      label: 'LOCAL EXPERIENCES',
      title: 'Day Outings',
      description: 'No overnight stay needed. Our day outings pack meaningful team moments into a single action-packed day close to your city.',
      showImage: false,
      items: [
        'Adventure & Outdoor', 'Architecture & Heritage', 'Nature & Scenic',
        'Food & Culinary', 'Entertainment', 'Sports & Games',
        'City Experiences', 'Custom Day Outings',
      ],
    },
  ],
  cta: {
    heading: 'Ready to plan your next offsite?',
    subtext: "Tell us your team size, destination preferences, and goals. We'll handle everything else.",
  },
};

export default function OffsiteEventsPage() {
  return <ServicePage {...data} />;
}
