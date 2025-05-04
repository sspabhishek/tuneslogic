import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TestimonialCardProps {
  content: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TestimonialCard({
  content,
  author,
  role,
  company,
  avatar,
}: TestimonialCardProps) {
  return (
    <motion.div variants={item}>
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex space-x-1 text-primary mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
          
          <p className="text-muted-foreground mb-6">"{content}"</p>
          
          <div className="flex items-center">
            <img 
              className="h-10 w-10 rounded-full mr-3" 
              src={avatar} 
              alt={author} 
            />
            <div>
              <h4 className="font-medium">{author}</h4>
              <p className="text-sm text-muted-foreground">
                {role}, {company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
