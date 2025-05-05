import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" id="home">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Digital solutions for the{" "}
              <span className="gradient-text">modern business</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We help businesses thrive in the digital landscape with cutting-edge marketing, 
              design, and technology solutions tailored to your unique needs.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() =>document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}>
                Our Services
                <svg 
                  className="ml-2 -mr-1 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
              
              {/* <Button size="lg" variant="outline">
                Case Studies
              </Button> */}
            </motion.div>
            
            <motion.div 
              className="flex items-center text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex -space-x-2 mr-4">
                <img 
                  className="w-8 h-8 rounded-full border-2 border-background" 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-background" 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                />
                <img 
                  className="w-8 h-8 rounded-full border-2 border-background" 
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="User avatar" 
                />
              </div>
              <p className="text-sm">Trusted by <span className="font-semibold">200+</span> businesses worldwide</p>
            </motion.div>
          </div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Digital marketing team" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary rounded-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent rounded-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
