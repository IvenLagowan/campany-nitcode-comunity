import { Calendar, Users, Video, MessageCircle, Clock, ArrowRight, Play, Mic, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const upcomingSessions = [
  {
    id: 1,
    title: "Membangun REST API dengan Node.js",
    speaker: "Iven Lagowan",
    date: "25 Desember 2024",
    time: "19:00 WIT",
    participants: 45,
    status: "upcoming",
  },
  {
    id: 2,
    title: "UI/UX Best Practices untuk Mobile App",
    speaker: "Demison Wonda",
    date: "28 Desember 2024",
    time: "19:00 WIT",
    participants: 38,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    speaker: "Patlawan Lagowan",
    date: "2 Januari 2025",
    time: "19:00 WIT",
    participants: 52,
    status: "upcoming",
  },
];

const pastSessions = [
  {
    id: 1,
    title: "Dasar-dasar React untuk Pemula",
    speaker: "Enison Wombi",
    date: "15 Desember 2024",
    participants: 67,
    recording: true,
  },
  {
    id: 2,
    title: "Database Design & Optimization",
    speaker: "Aris Wolom",
    date: "10 Desember 2024",
    participants: 42,
    recording: true,
  },
];

const TechShare = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-foreground leading-tight">NITCODE</span>
                <span className="text-xs text-muted-foreground leading-tight">Wamena Papua</span>
              </div>
            </Link>
            <Link to="/">
              <Button variant="outline">Kembali ke Beranda</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Video className="w-4 h-4" />
              Diskusi Online
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Tech<span className="gradient-text">Share</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Bergabunglah dalam sesi diskusi online interaktif bersama para mentor dan komunitas NITCODE. Berbagi pengetahuan, pengalaman, dan insight seputar teknologi terkini.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button variant="hero" size="lg">
                <Play className="w-5 h-5 mr-2" />
                Jadwal Sesi
              </Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-5 h-5 mr-2" />
                Gabung Komunitas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <Video className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Live Session</h3>
              <p className="text-sm text-muted-foreground">Diskusi langsung dengan mentor via Zoom atau Google Meet</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center">
                <Mic className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Q&A Interaktif</h3>
              <p className="text-sm text-muted-foreground">Tanya jawab langsung dan diskusi mendalam dengan peserta</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Monitor className="w-7 h-7 text-emerald-500" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">Recording</h3>
              <p className="text-sm text-muted-foreground">Akses rekaman sesi kapan saja untuk belajar ulang</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Sesi <span className="gradient-text">Mendatang</span>
            </h2>
            <p className="text-muted-foreground">Jadwal diskusi online yang akan datang</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingSessions.map((session) => (
              <div key={session.id} className="bg-card rounded-2xl border border-border/50 shadow-card overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                <div className="h-2 bg-gradient-to-r from-primary to-accent" />
                <div className="p-6">
                  <div className="inline-flex px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-medium mb-4">
                    Upcoming
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {session.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">
                    Speaker: {session.speaker}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{session.participants} peserta terdaftar</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="hero">
                    Daftar Sekarang
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Sessions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Sesi <span className="gradient-text">Sebelumnya</span>
            </h2>
            <p className="text-muted-foreground">Tonton rekaman sesi yang sudah berlalu</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {pastSessions.map((session) => (
              <div key={session.id} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-card transition-all">
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Play className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-display font-semibold text-foreground mb-1">{session.title}</h4>
                  <p className="text-sm text-muted-foreground">{session.speaker} • {session.date}</p>
                  <p className="text-xs text-muted-foreground mt-1">{session.participants} peserta</p>
                </div>
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-1" />
                  Tonton
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ingin Jadi Speaker?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Punya topik menarik untuk dibagikan? Daftarkan diri sebagai speaker di TechShare dan berbagi pengetahuan dengan komunitas!
          </p>
          <Button variant="hero" size="lg">
            <Mic className="w-5 h-5 mr-2" />
            Daftar Jadi Speaker
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 NITCODE Community - Wamena Papua Pegunungan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TechShare;
