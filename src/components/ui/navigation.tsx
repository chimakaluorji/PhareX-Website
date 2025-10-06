import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onScrollToSection?: (sectionId: string) => void;
}

export function Navigation({ onScrollToSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", action: () => onScrollToSection?.("services") },
    { label: "Contact", action: () => onScrollToSection?.("contact") },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.action) {
      item.action();
    } else if (item.href && window.location.pathname !== item.href) {
      window.location.href = item.href;
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-primary">
          PhareX
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-white hover:text-primary transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="outline"
            onClick={() => onScrollToSection?.("waitlist")}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background border-b shadow-card md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                onClick={() => {
                  onScrollToSection?.("waitlist");
                  setIsOpen(false);
                }}
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground w-fit"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}