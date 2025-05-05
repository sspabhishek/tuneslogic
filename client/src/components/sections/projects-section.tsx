import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Quizwizard",
    image: {src : "/assets/images/quizwizard.png"},
    description: "QuizWizard is a powerful quiz and assessment platform trusted by over 3,000 customers across the globe—from individual educators to large educational institutions and training centers. With its intuitive interface, advanced analytics, and rich customization options, QuizWizard makes it easy to create, share, and evaluate quizzes that engage learners and track performance in real-time.",
    url: "https://quizwizard.net/",
  },
  {
    id: 2,
    title: "ManageUpgrades",
    image: {src : "/assets/images/manageupgrades.png"},
    description: "ManageUpgrades is a specialized platform designed to simplify and automate version management for SaaS applications. It empowers businesses to handle product rollouts, feature flags, and environment-specific updates with precision and control. Tailored for engineering and DevOps teams, ManageUpgrades ensures your users always get the right version at the right time—minimizing downtime and maximizing agility.",
    url: "https://manageupgrades.com/",
    
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

export function ProjectsSection() {
  

  return (
    <section className="py-16 md:py-24 mt-16" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Our Products</h2>
          <p className="section-subheading mx-auto">
            Explore our portfolio of successful products across various industries and technologies.
          </p>
        </div>

        {/* Project Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              url={project.url}
              description={project.description}
            />
          ))}
        </motion.div>

        
      </div>
    </section>
  );
}
