import { useState } from "react";
import { Menu, X, GraduationCap, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Kursus", href: "#kursus" },
    { name: "Tentang", href: "#tentang" },
    { name: "Instruktur", href: "#instruktur" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg text-foreground leading-tight">NITCODE</span>
              <span className="text-xs text-muted-foreground leading-tight">Wamena Papua</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Link
              to="/techshare"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 flex items-center gap-1"
            >
              <Video className="w-4 h-4" />
              TechShare
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="hero" size="default">
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Link
                to="/techshare"
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 py-2 flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Video className="w-4 h-4" />
                TechShare
              </Link>
              <Button variant="hero" size="default" className="mt-2">
                Daftar Sekarang
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
