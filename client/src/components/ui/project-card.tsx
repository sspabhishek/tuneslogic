import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  image: { src: string };
  description: string;
  url: string;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectCard({ title, image, description, url }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate description to 100 characters
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden h-full group cursor-pointer">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className="relative overflow-hidden aspect-[16/9]">
            <img
              src={image.src}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4">
              <ArrowUpRight className="text-white h-6 w-6 hover:text-blue-700" />
            </div>
          </div>
        </a>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-2 transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {isExpanded ? description : truncateText(description, 100)}
            {description.length > 100 && (
              <span
                className="text-primary cursor-pointer ml-1"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
              >
                {isExpanded ? " Show Less" : " Read More"}
              </span>
            )}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
