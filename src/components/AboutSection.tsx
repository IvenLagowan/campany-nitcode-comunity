import { Target, Heart, Lightbulb, Globe } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Fokus Praktis",
    description: "Kurikulum berbasis proyek nyata untuk pengalaman belajar yang aplikatif",
  },
  {
    icon: Heart,
    title: "Komunitas Solid",
    description: "Bergabung dengan jaringan developer yang saling mendukung",
  },
  {
    icon: Lightbulb,
    title: "Mentor Berpengalaman",
    description: "Belajar langsung dari praktisi industri teknologi",
  },
  {
    icon: Globe,
    title: "Akses Global",
    description: "Materi pembelajaran online yang dapat diakses kapan saja",
  },
];

const AboutSection = () => {
  return (
    <section id="tentang" className="py-24 bg-gradient-to-b from-secondary/30 to-transparent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Tentang Kami
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Membangun Generasi{" "}
              <span className="gradient-text">Digital Papua</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              NITCODE Community adalah komunitas pembelajaran teknologi yang berbasis di Wamena, Papua Pegunungan. 
              Didirikan dengan visi untuk memberdayakan generasi muda Papua melalui pendidikan teknologi berkualitas.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Kami percaya bahwa setiap individu memiliki potensi untuk menjadi creator teknologi, 
              bukan hanya consumer. Dengan dukungan instruktur profesional dan kurikulum yang relevan 
              dengan kebutuhan industri, kami berkomitmen untuk mencetak talenta digital kelas dunia dari Papua.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                <div className="font-display text-2xl font-bold text-primary">3+</div>
                <div className="text-xs text-muted-foreground mt-1">Tahun Berdiri</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                <div className="font-display text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground mt-1">Alumni</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                <div className="font-display text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-muted-foreground mt-1">Instruktur</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-card border border-border/50">
                <div className="font-display text-2xl font-bold text-primary">50+</div>
                <div className="text-xs text-muted-foreground mt-1">Proyek</div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
