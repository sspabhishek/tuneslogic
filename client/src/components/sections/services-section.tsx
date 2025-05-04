import { ServiceCard } from "@/components/ui/service-card";
import { motion } from "framer-motion";
import { BarChart3, Smartphone, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, generate leads, and increase conversions.",
    icon: <BarChart3 className="h-10 w-10" />,
    color: "bg-primary/10 text-primary",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
  },
  {
    id: 2,
    title: "Web Development",
    description: "Custom, responsive websites and web applications built with the latest technologies.",
    icon: <Globe className="h-10 w-10" />,
    color: "bg-secondary/10 text-secondary",
    features: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"],
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: <Smartphone className="h-10 w-10" />,
    color: "bg-accent/10 text-accent",
    features: ["iOS & Android Apps", "Cross-Platform Development", "UI/UX Design", "App Maintenance"],
  },
  {
    id: 4,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and customer data.",
    icon: <ShieldCheck className="h-10 w-10" />,
    color: "bg-destructive/10 text-destructive",
    features: ["Security Audits", "Vulnerability Testing", "Data Protection", "Security Training"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/10" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading mx-auto">
            Comprehensive digital solutions to help your business grow and thrive in the digital landscape.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              iconClassName={service.color}
              features={service.features}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
