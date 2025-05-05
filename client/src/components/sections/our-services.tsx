import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";


export function ServicesSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const services = [
    {
      id: 1,
      title: "DevOps",
      category: "devops",
      image:
        "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149371586.jpg?t=st=1746429404~exp=1746433004~hmac=fbac88bf0819e8c5625928b4602f933aba6b96edd85029ddd37182fd7f86148f&w=1380",
      description:
        "Streamline delivery with CI/CD, containerization, and infrastructure as code.",
    },
    {
      id: 2,
      title: "Mobile Development",
      category: "mobile",
      image:
        "https://img.freepik.com/free-photo/smartphone-with-user-interface-concept_52683-104212.jpg?t=st=1746429475~exp=1746433075~hmac=a655846faec0d6f0bb72a9976262aeb5d6c23dfc7ce68ada16992c2b3b60a79b&w=1380 ",
      description:
        "Custom iOS/Android apps using modern frameworks and native UX.",
    },
    {
      id: 3,
      title: "Web Development / E-commerce",
      category: "web",
      image: {src : "/assets/images/E-commerce.jpg"},
      description:
        "Responsive websites and e-commerce platforms tailored to your brand.",
    },
    {
      id: 4,
      title: "AI Integration",
      category: "ai",
      image: {src : "/assets/images/ai.jpg"},
      description:
        "Empower products with machine learning, NLP, and automation.",
    },
    {
      id: 5,
      title: "Cloud Services",
      category: "cloud",
      image: {src : "/assets/images/cloud.jpg"},
      description:
        "Secure, scalable cloud solutions with AWS, Azure, or GCP.",
    },
    {
      id: 6,
      title: "Infrastructure Automation",
      category: "infra",
      image: {src : "/assets/images/Infrastructure.jpg"},
      description:
        "Automated provisioning, monitoring, and scaling with modern tools.",
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "DevOps", value: "devops" },
    { label: "Mobile", value: "mobile" },
    { label: "Web", value: "web" },
    { label: "AI", value: "ai" },
    { label: "Cloud", value: "cloud" },
    { label: "Infrastructure", value: "infra" },
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

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const filteredServices = services.filter(
    (s) => activeFilter === "all" || s.category === activeFilter
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-black" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore the wide range of professional services we offer.
          </p>
        </div>

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

        <motion.div
          key={activeFilter}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredServices.map((s) => (
            <motion.div
              key={s.id}
              variants={item}
              className="overflow-hidden h-full group cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-zinc-800 rounded-2xl  flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img
                  src={typeof s.image === "string" ? s.image : s.image.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Badge variant="secondary" className="absolute top-2 left-2 z-10">
                  {s.category.charAt(0).toUpperCase() + s.category.slice(1)}
                </Badge>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {s.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => {
              setActiveFilter("all");
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View All Services
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