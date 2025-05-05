import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  // { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map((item) => {
        const section = document.getElementById(item.href.substring(1));
        return section ? section.offsetTop : 0;
      });

      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const currentSection = navItems.find((_, index) => {
        const nextOffset = offsets[index + 1] || Infinity;
        return scrollPosition >= offsets[index] && scrollPosition < nextOffset;
      });

      setActiveSection(currentSection?.href.substring(1) || null);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-8 w-auto relative">
              {/* Light mode */}
              <img
                src="/assets/images/light_logo.png"
                alt="Tuneslogic Logo"
                className="h-full w-auto object-contain dark:hidden"
              />
              {/* Dark mode */}
              <img
                src="/assets/images/dark_logo.png"
                alt="Tuneslogic Logo"
                className="h-full w-auto object-contain hidden dark:block"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
                <div className="h-8 w-auto relative">
                  <img
                    src="/assets/images/light_logo.png"
                    alt="Tuneslogic Logo"
                    className="h-full w-auto object-contain dark:hidden"
                  />
                  <img
                    src="/assets/images/dark_logo.png"
                    alt="Tuneslogic Logo"
                    className="h-full w-auto object-contain hidden dark:block"
                  />
                </div>
                <span className="text-xl font-bold">Tuneslogic</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={closeMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-lg font-medium py-2 transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-4 w-full">Get Started</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

