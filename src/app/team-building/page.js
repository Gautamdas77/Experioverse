import ServicePage from '../components/ServicePage';

export const metadata = {
  title: 'Team Building — Experioverse',
  description: 'Indoor, outdoor, and signature team building experiences that connect people, build trust and strengthen teams.',
};

const data = {
  meta: {
    badge: 'TEAM BUILDING',
    title: 'Build Stronger Teams Through Shared Experiences',
    description: 'We design team building activities that go beyond games — creating genuine connections, breaking silos, and building the trust your team needs to thrive.',
  },
  categories: [
    {
      anchor: 'indoor',
      icon: '🏢',
      label: 'IN-OFFICE EXPERIENCES',
      title: 'Indoor',
      description: 'Perfect for any weather or venue. Our indoor activities are energizing, inclusive and designed to spark creativity and collaboration.',
      showImage: false,
      items: [
        'Ice Breakers', 'Team Challenges', 'Problem Solving',
        'Creative Activities', 'Communication Games', 'Fun & Interactive Games',
      ],
    },
    {
      anchor: 'outdoor',
      icon: '🌿',
      label: 'OUTDOOR ADVENTURES',
      title: 'Outdoor',
      description: 'Get your team moving! Our outdoor activities bring healthy competition, adventure, and teamwork in the open air.',
      showImage: true,
      items: [
        'Adventure Challenges', 'Sports Tournaments', 'Treasure Hunts',
        'Amazing Race', 'Outdoor Team Challenges', 'Custom Activities',
      ],
    },
    {
      anchor: 'signature',
      icon: '⭐',
      label: 'PREMIUM PROGRAMMES',
      title: 'Signature Experiences',
      description: 'Our flagship team building formats — large-scale, high-energy, and designed for maximum impact across your entire organization.',
      showImage: true,
      items: [
        { label: 'Team Olympics', badge: null },
        { label: 'Corporate Sports Day', badge: 'Popular' },
        { label: 'Large Group Activities', badge: null },
        { label: 'Custom Team Building', badge: null },
      ],
    },
  ],
  cta: {
    heading: 'Ready to strengthen your team?',
    subtext: "Share your team size and goals — we'll design the perfect team building experience for you.",
  },
};

export default function TeamBuildingPage() {
  return <ServicePage {...data} />;
}
