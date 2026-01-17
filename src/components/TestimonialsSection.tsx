import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Petrus Heselo",
    role: "Alumni Web Development",
    content: "NITCODE mengubah hidup saya. Dari tidak tahu apa-apa tentang coding, sekarang saya bekerja sebagai web developer di perusahaan teknologi.",
    rating: 5,
    avatar: "PH",
  },
  {
    id: 2,
    name: "Yuliana Wamena",
    role: "Alumni UI/UX Design",
    content: "Instrukturnya sangat sabar dan materi pembelajarannya sangat praktis. Saya sekarang bisa mendesain aplikasi dengan percaya diri.",
    rating: 5,
    avatar: "YW",
  },
  {
    id: 3,
    name: "Markus Kogoya",
    role: "Alumni Python Programming",
    content: "Komunitas yang sangat supportive! Selain belajar coding, saya juga mendapat jaringan teman-teman yang saling memotivasi.",
    rating: 5,
    avatar: "MK",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimoni
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Apa Kata <span className="gradient-text">Alumni Kami</span>
          </h2>
          <p className="text-muted-foreground">
            Dengarkan pengalaman langsung dari para alumni yang telah sukses memulai karir di bidang teknologi
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-10 h-10" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-sm font-display font-bold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
