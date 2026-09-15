import ServicePage from '../components/ServicePage';

export const metadata = {
  title: 'Rewards & Recognition — Experioverse',
  description: 'Celebrate contribution, recognize achievement, and inspire your people with meaningful rewards and recognition programmes.',
};

const data = {
  meta: {
    badge: 'REWARDS & RECOGNITION',
    title: 'Celebrate Contribution. Recognize Achievement.',
    description: 'We design recognition programmes that make your people feel truly valued — from everyday spot awards to grand annual galas that celebrate the best in your organization.',
  },
  categories: [
    {
      anchor: 'recognition',
      icon: '🏅',
      label: 'RECOGNITION PROGRAMMES',
      title: 'Employee Recognition',
      description: 'Create a culture where great work is always seen and celebrated. Our recognition programmes are tailored to your values and culture.',
      showImage: false,
      items: [
        'Employee Recognition', 'Milestone Recognition',
        'Long Service Awards', 'Spot Awards',
      ],
    },
    {
      anchor: 'rewards',
      icon: '🎁',
      label: 'REWARD PROGRAMMES',
      title: 'Rewards',
      description: 'Go beyond gift cards. We curate meaningful, memorable reward experiences that people actually look forward to.',
      showImage: true,
      items: [
        'Employee Rewards', 'Performance Rewards',
        'Experience Rewards', 'Gift & Reward Programs',
      ],
    },
    {
      anchor: 'awards-events',
      icon: '🏆',
      label: 'AWARDS & CEREMONIES',
      title: 'Awards & Events',
      description: 'From intimate award dinners to grand annual galas — we produce ceremonies that inspire, energize, and leave lasting impressions.',
      showImage: true,
      items: [
        'Awards Nights', 'Recognition Ceremonies',
        'Annual Awards', 'Custom Recognition Events',
      ],
    },
  ],
  cta: {
    heading: 'Ready to inspire your people?',
    subtext: "Let's design a recognition programme that reflects your culture and motivates your best people.",
  },
};

export default function RewardsRecognitionPage() {
  return <ServicePage {...data} />;
}
