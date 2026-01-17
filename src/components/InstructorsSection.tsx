import { Linkedin, Github, Mail } from "lucide-react";
import instructor1 from "@/assets/instructors/instructor-1.jpg";
import instructor2 from "@/assets/instructors/instructor-2.jpg";
import instructor3 from "@/assets/instructors/instructor-3.jpg";
import instructor4 from "@/assets/instructors/instructor-4.png";
import instructor5 from "@/assets/instructors/instructor-5.jpg";

const instructors = [
  {
    id: 1,
    name: "Iven Lagowan",
    role: "Lead Instructor - Web Development",
    bio: "Full-stack developer dengan passion mengajar dan membangun komunitas tech di Papua",
    image: instructor1,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    name: "Enison Wombi",
    role: "Instructor - Web Development",
    bio: "Spesialis pengembangan aplikasi mobile dengan pengalaman di berbagai proyek",
    image: instructor2,
    color: "from-pink-500 to-rose-600",
  },
  {
    id: 3,
    name: "Demison Wonda",
    role: "Instructor - UI/UX Design",
    bio: "Product designer yang berdedikasi menciptakan pengalaman pengguna terbaik",
    image: instructor3,
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 4,
    name: "Aris Wolom",
    role: "Instructor - Backend Development",
    bio: "Backend developer berpengalaman dengan keahlian di database dan API",
    image: instructor4,
    color: "from-violet-500 to-purple-600",
  },
  {
    id: 5,
    name: "Patlawan Lagowan",
    role: "Instructor - Data Science",
    bio: "Data analyst dengan keahlian di machine learning dan data visualization",
    image: instructor5,
    color: "from-amber-500 to-orange-600",
  },
];

const InstructorsSection = () => {
  return (
    <section id="instruktur" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Tim Pengajar
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Instruktur <span className="gradient-text">Berpengalaman</span>
          </h2>
          <p className="text-muted-foreground">
            Belajar dari para praktisi industri yang berdedikasi untuk membantu Anda sukses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {instructors.map((instructor, index) => (
            <div
              key={instructor.id}
              className="group text-center p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden shadow-soft group-hover:scale-110 transition-transform`}>
                <img 
                  src={instructor.image} 
                  alt={instructor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              {/* Info */}
              <h3 className="font-display font-bold text-foreground mb-1">
                {instructor.name}
              </h3>
              <div className="text-sm text-primary font-medium mb-3">
                {instructor.role}
              </div>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {instructor.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-3">
                <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
