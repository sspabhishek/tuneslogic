import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  const categoryLabel = {
    web: "Web Development",
    app: "Mobile App",
    marketing: "Marketing",
    cloud: "Cloud Services",
    security: "Cybersecurity",
  }[category] || category;

  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden h-full group cursor-pointer">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
            <ArrowUpRight className="text-white h-6 w-6" />
          </div>
        </div>
        <CardContent className="p-4">
          <Badge variant="secondary" className="mb-2">
            {categoryLabel}
          </Badge>
          <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
