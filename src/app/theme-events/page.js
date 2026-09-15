import ServicePage from '../components/ServicePage';

export const metadata = {
  title: 'Theme Events — Experioverse',
  description: 'Transform your corporate events with vibrant themes — from Bollywood nights to black-tie galas. We handle concept to execution.',
};

const data = {
  meta: {
    badge: 'THEME EVENTS',
    title: 'Transform Your Event Into an Experience People Remember',
    description: 'A great theme turns a corporate event into an unforgettable memory. From concept and decor to entertainment and food — we bring your theme to life, end to end.',
  },
  categories: [
    {
      anchor: 'corporate-themes',
      icon: '🏢',
      label: 'CORPORATE SETTINGS',
      title: 'Corporate Themes',
      description: 'Professionally curated themes that fit your brand, your audience, and your event objectives — always polished, always memorable.',
      showImage: true,
      items: [
        'Retro', 'Bollywood', 'Carnival', 'Casino Night',
        'Black & White', 'Around the World', 'Cultural Themes',
      ],
    },
    {
      anchor: 'celebration-themes',
      icon: '🎉',
      label: 'FESTIVE & MILESTONE EVENTS',
      title: 'Celebration Themes',
      description: 'Mark your milestones with style. Whether it\'s a festival, gala night or year-end bash — we make every celebration extraordinary.',
      showImage: true,
      items: [
        'Festival Themes', 'Annual Day Themes', 'Gala Night',
        'Award Night', 'Christmas', 'New Year',
      ],
    },
  ],
  cta: {
    heading: 'Have a theme in mind?',
    subtext: "Tell us your event date, team size, and vision — we'll design the perfect themed experience.",
  },
};

export default function ThemeEventsPage() {
  return <ServicePage {...data} />;
}
