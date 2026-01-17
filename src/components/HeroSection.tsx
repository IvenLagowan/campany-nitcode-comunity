import { ArrowRight, Code2, Users, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-slide-up">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Komunitas Coding Terbesar di Papua
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Belajar{" "}
              <span className="gradient-text">Programming</span>
              {" "}Bersama NITCODE
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Tingkatkan skill coding Anda dengan program kursus berkualitas dari instruktur berpengalaman. Bergabung dengan komunitas tech terbesar di Wamena, Papua Pegunungan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg">
                Mulai Belajar
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Lihat Kursus
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Siswa Aktif</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Program Kursus</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Kepuasan</div>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50 animate-float">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">Web Development</div>
                    <div className="text-sm text-muted-foreground">12 Modul Pembelajaran</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-3/4 gradient-bg rounded-full" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-semibold text-foreground">75%</span>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
                <Users className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card border border-border/50 animate-float" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <Laptop className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Live Class</div>
                    <div className="text-xs text-muted-foreground">Setiap Hari</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
