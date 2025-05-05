import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/10" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="section-heading">About Tuneslogic</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2025, Tuneslogic has been at the forefront of digital transformation, 
              helping businesses of all sizes achieve their goals through innovative marketing 
              and technology solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our team of experts combines creativity with technical expertise to deliver 
              results-driven solutions that help our clients stand out in a competitive digital landscape.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses with digital solutions that drive growth and create meaningful connections with their audience.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading digital partner for innovative businesses seeking to thrive in the digital era.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Office space" 
                className="rounded-lg shadow-md mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working" 
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="pt-8">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team meeting" 
                className="rounded-lg shadow-md mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Office space" 
                className="rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
