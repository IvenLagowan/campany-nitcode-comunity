import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Pendaftaran Berhasil!",
      description: "Tim kami akan segera menghubungi Anda.",
    });
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontak" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Hubungi Kami
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Siap Untuk <span className="gradient-text">Memulai?</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hubungi kami untuk informasi lebih lanjut tentang program kursus, jadwal kelas, dan pendaftaran. Tim kami siap membantu Anda memulai perjalanan belajar coding.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <a 
                href="https://maps.google.com/?q=Jl.Hom-Hom+Muai+Wamena" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Lokasi</div>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    Jl. Hom-Hom Muai, Wamena<br />
                    Kabupaten Jayawijaya, Papua Pegunungan
                  </p>
                </div>
              </a>

              <a 
                href="https://wa.me/6285254221251" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">WhatsApp / Telepon</div>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    +62 852 5422 1251
                  </p>
                </div>
              </a>

              <a 
                href="mailto:nitcodecomunity@gmail.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Email</div>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    nitcodecomunity@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground mb-1">Jam Operasional</div>
                  <p className="text-muted-foreground text-sm">
                    Senin - Jumat: 08:00 - 17:00<br />
                    Sabtu: 08:00 - 12:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card rounded-2xl border border-border/50 shadow-card p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Form Pendaftaran
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Email aktif"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="08xx-xxxx-xxxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pilih Kursus
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Pilih program kursus</option>
                  <option value="web">Web Development Dasar</option>
                  <option value="python">Python Programming</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="uiux">UI/UX Design</option>
                  <option value="database">Database & SQL</option>
                  <option value="security">Cyber Security</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tulis pertanyaan atau pesan Anda..."
                />
              </div>

              <Button variant="hero" size="lg" className="w-full">
                Kirim Pendaftaran
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
