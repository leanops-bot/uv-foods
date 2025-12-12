export interface NavigationItem {
  name: string;
  href: string;
}

export interface LeadershipProfile {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface BusinessVertical {
  title: string;
  description: string;
  icon: string;
}

export interface PlantCapacity {
  category: string;
  capacity: string;
  products: string[];
}

export interface ImpactMetric {
  value: string;
  label: string;
  suffix?: string;
}

export interface SustainabilityPillar {
  title: string;
  description: string;
  icon: string;
}
