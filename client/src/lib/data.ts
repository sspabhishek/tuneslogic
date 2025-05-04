import { BarChart3, Globe, Smartphone, ShieldCheck, Cloud, Lightbulb, Target, TrendingUp } from "lucide-react";

export type ServiceType = {
  id: number;
  title: string;
  description: string;
  icon: any;
  color: string;
  features: string[];
};

export type ProjectType = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

export type TestimonialType = {
  id: number;
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
};

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions.",
    icon: BarChart3,
    color: "bg-primary/10 text-primary",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
  },
  {
    id: 2,
    title: "Web Development",
    description: "Custom, responsive websites and web applications built with the latest technologies.",
    icon: Globe,
    color: "bg-secondary/10 text-secondary",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
    color: "bg-accent/10 text-accent",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Maintenance"],
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and customer data.",
    icon: ShieldCheck,
    color: "bg-destructive/10 text-destructive",
    features: ["Security Audits", "Vulnerability Testing", "Data Protection", "Security Training"],
  },
  {
    id: 5,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services to optimize your business operations.",
    icon: Cloud,
    color: "bg-primary/10 text-primary",
    features: ["Cloud Migration", "Serverless Architecture", "DevOps Integration", "Performance Monitoring"],
  },
  {
    id: 6,
    title: "Branding & Design",
    description: "Creative brand identity and design services that make your business stand out.",
    icon: Lightbulb,
    color: "bg-secondary/10 text-secondary",
    features: ["Brand Strategy", "Logo Design", "Visual Identity", "Marketing Materials"],
  },
  {
    id: 7,
    title: "Market Research",
    description: "In-depth market analysis to understand your audience and industry landscape.",
    icon: Target,
    color: "bg-accent/10 text-accent",
    features: ["Competitor Analysis", "Consumer Insights", "Market Trends", "Data Visualization"],
  },
  {
    id: 8,
    title: "Growth Strategy",
    description: "Customized growth strategies to scale your business and achieve long-term success.",
    icon: TrendingUp,
    color: "bg-destructive/10 text-destructive",
    features: ["Business Analysis", "Growth Planning", "KPI Definition", "Performance Tracking"],
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "web",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete website overhaul for a leading fashion retailer resulting in 40% improved conversion rate.",
  },
  {
    id: 2,
    title: "Finance Mobile App",
    category: "app",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Intuitive mobile banking application with advanced security features and seamless user experience.",
  },
  {
    id: 3,
    title: "SEO Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Targeted SEO strategy that increased organic traffic by 200% within 6 months.",
  },
  {
    id: 4,
    title: "Enterprise Cloud Migration",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Full migration of legacy systems to cloud infrastructure, improving performance and reducing costs.",
  },
  {
    id: 5,
    title: "Security Overhaul",
    category: "security",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive cybersecurity audit and implementation for a financial institution.",
  },
  {
    id: 6,
    title: "Healthcare Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Patient management system with telehealth integration and secure data handling.",
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    content: "Working with Tuneslogic transformed our online presence. Their strategic approach to digital marketing has resulted in a 200% increase in leads within just three months.",
    author: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechAdvance Inc.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    content: "The mobile app Tuneslogic developed for us exceeded our expectations. Their attention to detail and user experience expertise created an application our customers love to use.",
    author: "Michael Chen",
    role: "CTO",
    company: "FinSecure Solutions",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    content: "Their cybersecurity audit identified critical vulnerabilities we weren't aware of. The implementation plan was clear, and their team guided us through every step of the process.",
    author: "Emily Rodriguez",
    role: "IT Manager",
    company: "GlobalHealth Systems",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export const stats = [
  { label: "Clients Worldwide", value: 200, suffix: "+" },
  { label: "Projects Completed", value: 450, suffix: "+" },
  { label: "Team Members", value: 35, suffix: "" },
  { label: "Success Rate", value: 98, suffix: "%" },
];
