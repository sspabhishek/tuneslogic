import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary dark:bg-primary/90" id="contact">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to transform your digital presence?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create innovative digital solutions that drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" onClick={() => window.location.href = "mailto:your-email@example.com"}>
              {"Get in Touch"}
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white bg-primary/10 hover:bg-white/10 dark:bg-black dark:hover:bg-primary" onClick={() =>document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
              {"View Our Services"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
