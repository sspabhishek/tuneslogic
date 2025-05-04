import { useState } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-Commerce Redesign",
    category: "web",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete website overhaul for a leading fashion retailer resulting in 40% improved conversion rate.",
  },
  {
    id: 2,
    title: "Finance Mobile App",
    category: "app",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Intuitive mobile banking application with advanced security features and seamless user experience.",
  },
  {
    id: 3,
    title: "SEO Campaign",
    category: "marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Targeted SEO strategy that increased organic traffic by 200% within 6 months.",
  },
  {
    id: 4,
    title: "Enterprise Cloud Migration",
    category: "cloud",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Full migration of legacy systems to cloud infrastructure, improving performance and reducing costs.",
  },
  {
    id: 5,
    title: "Security Overhaul",
    category: "security",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive cybersecurity audit and implementation for a financial institution.",
  },
  {
    id: 6,
    title: "Healthcare Platform",
    category: "web",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Patient management system with telehealth integration and secure data handling.",
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Mobile", value: "app" },
  { label: "Marketing", value: "marketing" },
  { label: "Cloud", value: "cloud" },
  { label: "Security", value: "security" },
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
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section className="py-16 md:py-24 mt-16" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-heading">Our Projects</h2>
          <p className="section-subheading mx-auto">
            Explore our portfolio of successful projects across various industries and technologies.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div
          key={activeFilter} // re-render when filter changes
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
            />
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setActiveFilter("all");
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View All Projects
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
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
