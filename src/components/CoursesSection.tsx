import { Clock, Users, Star, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const courses = [
  {
    id: 1,
    title: "Web Development Dasar",
    description: "Pelajari HTML, CSS, dan JavaScript dari dasar hingga membuat website interaktif",
    fullDescription: "Kursus ini dirancang untuk pemula yang ingin memulai perjalanan di dunia web development. Anda akan mempelajari dasar-dasar HTML untuk struktur halaman, CSS untuk styling dan layout responsif, serta JavaScript untuk membuat website lebih interaktif. Di akhir kursus, Anda akan mampu membangun website profesional dari nol.",
    duration: "8 Minggu",
    students: 120,
    rating: 4.9,
    level: "Pemula",
    color: "from-blue-500 to-indigo-600",
    languages: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    id: 2,
    title: "Python Programming",
    description: "Kuasai bahasa pemrograman Python untuk analisis data dan machine learning",
    fullDescription: "Python adalah bahasa pemrograman yang sangat populer dan mudah dipelajari. Dalam kursus ini, Anda akan mempelajari sintaks dasar Python, struktur data, fungsi, dan OOP. Selain itu, Anda akan diperkenalkan dengan library populer seperti NumPy dan Pandas untuk analisis data serta dasar-dasar machine learning.",
    duration: "10 Minggu",
    students: 85,
    rating: 4.8,
    level: "Menengah",
    color: "from-emerald-500 to-teal-600",
    languages: [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    ],
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Buat aplikasi Android dan iOS dengan React Native framework",
    fullDescription: "Pelajari cara membangun aplikasi mobile cross-platform menggunakan React Native. Kursus ini mencakup komponen UI, navigasi, state management, dan integrasi API. Anda akan membangun aplikasi nyata yang bisa berjalan di Android dan iOS dengan satu codebase, serta mempelajari cara publish ke app store.",
    duration: "12 Minggu",
    students: 65,
    rating: 4.9,
    level: "Menengah",
    color: "from-orange-500 to-red-600",
    languages: [
      { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    ],
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Desain antarmuka pengguna yang menarik dengan Figma dan prinsip UX",
    fullDescription: "Kuasai seni mendesain pengalaman pengguna yang luar biasa. Kursus ini mengajarkan prinsip-prinsip desain UI/UX, research methodology, wireframing, prototyping dengan Figma, dan user testing. Anda akan belajar membuat desain yang tidak hanya indah tapi juga fungsional dan user-friendly.",
    duration: "6 Minggu",
    students: 95,
    rating: 4.7,
    level: "Pemula",
    color: "from-pink-500 to-rose-600",
    languages: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { name: "Sketch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg" },
    ],
  },
  {
    id: 5,
    title: "Database & SQL",
    description: "Kelola database dengan MySQL, PostgreSQL dan teknik optimasi query",
    fullDescription: "Database adalah jantung dari setiap aplikasi modern. Dalam kursus ini, Anda akan mempelajari konsep relational database, menulis query SQL yang efisien, normalisasi data, indexing, dan teknik optimasi performa. Anda juga akan belajar menggunakan MySQL dan PostgreSQL untuk proyek nyata.",
    duration: "8 Minggu",
    students: 70,
    rating: 4.8,
    level: "Menengah",
    color: "from-violet-500 to-purple-600",
    languages: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    id: 6,
    title: "Cyber Security",
    description: "Pelajari keamanan sistem, ethical hacking, dan proteksi data",
    fullDescription: "Keamanan siber menjadi semakin penting di era digital. Kursus ini mencakup dasar-dasar keamanan jaringan, ethical hacking, vulnerability assessment, penetration testing, dan best practices untuk melindungi sistem. Anda akan menggunakan tools industri seperti Kali Linux dan Wireshark.",
    duration: "10 Minggu",
    students: 55,
    rating: 4.9,
    level: "Lanjutan",
    color: "from-slate-600 to-zinc-700",
    languages: [
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
];

const CoursesSection = () => {
  return (
    <section id="kursus" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Program Unggulan
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kursus <span className="gradient-text">Terpopuler</span>
          </h2>
          <p className="text-muted-foreground">
            Pilih dari berbagai program kursus yang dirancang untuk membantu Anda mencapai karir impian di bidang teknologi
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Color Header */}
              <div className={`h-3 bg-gradient-to-r ${course.color}`} />
              
              <div className="p-6">
                {/* Level Badge */}
                <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground mb-4">
                  {course.level}
                </div>
                
                {/* Title & Description */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Programming Languages */}
                <div className="flex items-center gap-3 mb-6">
                  {course.languages.map((lang) => (
                    <div key={lang.name} className="group/lang relative">
                      <img 
                        src={lang.icon} 
                        alt={lang.name}
                        className="w-8 h-8 transition-transform hover:scale-110"
                      />
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-foreground text-background px-2 py-0.5 rounded opacity-0 group-hover/lang:opacity-100 transition-opacity whitespace-nowrap">
                        {lang.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} siswa</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* CTA - View Detail Dialog */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      <Eye className="w-4 h-4 mr-2" />
                      Lihat Detail
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                      <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${course.color} mb-4`} />
                      <DialogTitle className="font-display text-2xl">{course.title}</DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Level & Duration */}
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium">
                          {course.level}
                        </span>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-4 h-4" /> {course.duration}
                        </span>
                      </div>

                      {/* Full Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {course.fullDescription}
                      </p>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Teknologi yang Dipelajari:</h4>
                        <div className="flex items-center gap-4">
                          {course.languages.map((lang) => (
                            <div key={lang.name} className="flex flex-col items-center gap-1">
                              <img 
                                src={lang.icon} 
                                alt={lang.name}
                                className="w-10 h-10"
                              />
                              <span className="text-xs text-muted-foreground">{lang.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{course.students}</span>
                          <span className="text-sm text-muted-foreground">siswa terdaftar</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 fill-accent text-accent" />
                          <span className="font-semibold">{course.rating}</span>
                          <span className="text-sm text-muted-foreground">rating</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <Button 
                        className="w-full" 
                        variant="hero"
                        asChild
                      >
                        <a 
                          href={`https://wa.me/6285254221251?text=Halo, saya tertarik untuk mendaftar kursus ${encodeURIComponent(course.title)}. Mohon informasi lebih lanjut.`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Daftar Sekarang
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Lihat Semua Kursus
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
