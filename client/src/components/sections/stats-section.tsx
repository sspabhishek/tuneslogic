import { AnimatedCounter } from "@/components/ui/animated-counter";
import { motion } from "framer-motion";

const stats = [
  { label: "Clients Worldwide", value: 200, suffix: "+" },
  { label: "Projects Completed", value: 450, suffix: "+" },
  { label: "Team Members", value: 35, suffix: "" },
  { label: "Success Rate", value: 98, suffix: "%" },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-16 border-t border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <AnimatedCounter
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
