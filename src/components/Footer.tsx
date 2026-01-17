import { GraduationCap, Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Kursus", href: "#kursus" },
    { name: "Tentang", href: "#tentang" },
    { name: "Instruktur", href: "#instruktur" },
    { name: "Kontak", href: "#kontak" },
  ];

  const courses = [
    "Web Development",
    "Python Programming",
    "Mobile Development",
    "UI/UX Design",
    "Database & SQL",
    "Cyber Security",
  ];

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">NITCODE</span>
                <span className="text-xs opacity-70 leading-tight">Wamena Papua</span>
              </div>
            </a>
            <p className="text-sm opacity-70 mb-6 leading-relaxed">
              Komunitas pembelajaran teknologi untuk membangun generasi digital Papua yang kompetitif dan berdaya saing global.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Program Kursus</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <a href="#kursus" className="text-sm opacity-70 hover:opacity-100 hover:text-accent transition-all">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-sm opacity-70 mb-4">
              Dapatkan update terbaru tentang program dan event kami.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-accent text-sm"
              />
              <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © 2024 NITCODE Community Wamena. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm opacity-70">
              <a href="#" className="hover:opacity-100 transition-opacity">Kebijakan Privasi</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
