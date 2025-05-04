import { TestimonialCard } from "@/components/ui/testimonial-card";
import { motion } from "framer-motion";

const testimonials = [
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

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Client Testimonials</h2>
          <p className="section-subheading mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              avatar={testimonial.avatar}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
