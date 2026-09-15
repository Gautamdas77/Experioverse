import ServicePage from '../components/ServicePage';

export const metadata = {
  title: 'Wellness Programs — Experioverse',
  description: 'Holistic workplace wellness programmes covering physical fitness, mental health, and workplace wellbeing to help your team thrive.',
};

const data = {
  meta: {
    badge: 'WELLNESS PROGRAMS',
    title: 'Helping People Feel Healthier, Happier & More Energized',
    description: 'We design holistic wellness programmes that address the complete wellbeing of your workforce — because healthy, happy teams are productive, engaged, and loyal teams.',
  },
  categories: [
    {
      anchor: 'physical-wellness',
      icon: '💪',
      label: 'BODY & FITNESS',
      title: 'Physical Wellness',
      description: 'Active, energizing programmes that keep your team physically fit and full of vitality — whether at the office or on the move.',
      showImage: true,
      items: [
        'Fitness Programs', 'Sports & Fitness', 'Yoga', 'Nutrition',
      ],
    },
    {
      anchor: 'mental-wellness',
      icon: '🧠',
      label: 'MIND & EMOTIONAL HEALTH',
      title: 'Mental Wellness',
      description: 'Reduce stress, build resilience, and foster emotional intelligence. Our mental wellness programmes create psychologically safe workplaces.',
      showImage: false,
      items: [
        'Stress Management', 'Mindfulness', 'Meditation', 'Mental Health Sessions',
      ],
    },
    {
      anchor: 'workplace-wellness',
      icon: '🌱',
      label: 'WORKPLACE CULTURE',
      title: 'Workplace Wellness',
      description: 'Long-term wellness culture initiatives that embed healthy habits into the fabric of your organization — beyond one-off events.',
      showImage: true,
      items: [
        'Wellness Weeks', 'Health Camps', 'Wellness Challenges', 'Employee Wellness Programs',
      ],
    },
  ],
  cta: {
    heading: 'Ready to invest in your team\'s wellbeing?',
    subtext: "Share your workforce size and wellness goals — we'll design a programme that truly makes a difference.",
  },
};

export default function WellnessProgramsPage() {
  return <ServicePage {...data} />;
}
