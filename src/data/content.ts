import { NavigationItem, LeadershipProfile, BusinessVertical, PlantCapacity, ImpactMetric, SustainabilityPillar } from '../types';

export const navigation: NavigationItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Businesses', href: '#businesses' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Governance', href: '#governance' },
  { name: 'Contact', href: '#contact' },
];

export const coreHighlights: ImpactMetric[] = [
  { value: '35', label: 'Years of Legacy', suffix: '+' },
  { value: '600', label: 'Districts Served', suffix: '+' },
  { value: '580', label: 'MT Daily Production', suffix: '+' },
  { value: '3', label: 'Generations of Leadership', suffix: '' },
];

export const pillars = [
  {
    title: 'Innovation in Nutrition',
    description: 'Pioneering nutritional solutions that combat malnutrition and support healthy growth across communities.',
    icon: 'Lightbulb',
  },
  {
    title: 'Responsible Manufacturing',
    description: 'State-of-the-art facilities ensuring food safety, quality, and compliance with international standards.',
    icon: 'Factory',
  },
  {
    title: 'Social Impact',
    description: 'Empowering millions through government partnerships, mid-day meals, and community nutrition programs.',
    icon: 'Heart',
  },
  {
    title: 'Sustainable Growth',
    description: 'Building a resilient food ecosystem that benefits farmers, communities, and future generations.',
    icon: 'Sprout',
  },
];

export const leadership: LeadershipProfile[] = [
  {
    name: 'Ganesh Chand Gupta',
    role: 'Founder & Chairman, Suruchi Foods',
    bio: 'Visionary entrepreneur who established Suruchi Foods in 1986 with a mission to fight hunger and malnutrition across India.',
  },
  {
    name: 'Sumit Gupta',
    role: 'Managing Director',
    bio: 'Leading strategic partnership initiatives and operational excellence, driving growth across UV Foods and Suruchi Foods operations.',
  },
  {
    name: 'Himanshu Gupta',
    role: 'Director - Operations',
    bio: 'Overseeing manufacturing operations across partnership facilities and ensuring world-class quality standards.',
  },
  {
    name: 'Pramod Sharma',
    role: 'Chief Financial Officer',
    bio: 'Managing financial strategy and governance across the partnership with over 20 years of experience in the food manufacturing sector.',
  },
  {
    name: 'Dhirendra Singh Chauhan',
    role: 'VP - Business Development',
    bio: 'Spearheading government partnerships and tender acquisitions, expanding our combined reach across India.',
  },
];

export const businessVerticals: BusinessVertical[] = [
  {
    title: 'Government Food Supply & Tenders',
    description: 'Trusted partner for state and central government nutrition programs, serving millions through ICDS and mid-day meal schemes.',
    icon: 'Building2',
  },
  {
    title: 'Nutritional Premix Manufacturing',
    description: 'Advanced fortification solutions including vitamin-mineral premixes for enhanced nutritional value.',
    icon: 'Flask',
  },
  {
    title: 'Mid-Day Meal & ICDS Processing',
    description: 'Specialized production of ready-to-cook and ready-to-eat nutritional foods for children and mothers.',
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Export & Allied Products',
    description: 'Quality food products reaching international markets, maintaining global standards and certifications.',
    icon: 'Globe',
  },
];

export const plantCapacities: PlantCapacity[] = [
  {
    category: 'General Manufacturing',
    capacity: '280 MT/day',
    products: ['Soya Flour', 'Semolina', 'Sorghum Flour', 'Wheat Flour', 'Bengal Gram'],
  },
  {
    category: 'Proprietary Foods',
    capacity: '300 MT/day',
    products: ['Dalia', 'Sattu', 'Murmura', 'Halwa Mix', 'Suji Halwa', 'Upma Mix'],
  },
  {
    category: 'Additives & Fortification',
    capacity: '20 MT/day',
    products: ['Fortified Rice Kernels', 'Vitamin Premix', 'Mineral Premix', 'Nutritional Supplements'],
  },
];

export const sustainabilityPillars: SustainabilityPillar[] = [
  {
    title: 'Nutrition for All',
    description: 'Partnering with government programs to deliver fortified, nutritious meals to children and communities across 600+ districts.',
    icon: 'Apple',
  },
  {
    title: 'Empowering Communities',
    description: 'Creating livelihoods by working with local farmers, suppliers, and self-help groups throughout our supply chain.',
    icon: 'Users',
  },
  {
    title: 'Sustainable Production',
    description: 'Energy-efficient operations, waste reduction initiatives, and rigorous food safety standards for responsible manufacturing.',
    icon: 'Leaf',
  },
];

export const impactMetrics: ImpactMetric[] = [
  { value: '25', label: 'Government Partnerships', suffix: '+' },
  { value: '1.2', label: 'Million Meals Served Daily', suffix: 'M+' },
  { value: '30', label: 'Nutritional Products', suffix: '+' },
];

export const complianceBadges = [
  'APEDA Registered',
  'FSSAI Licensed',
  'MSME Certified',
  'ISO 22000:2018',
  'ICDS Approved',
  'GMP Certified',
];
