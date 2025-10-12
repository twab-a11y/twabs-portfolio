import { Github, Mail, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import catAvatar from "@/assets/cat-avatar.jpeg";

const AnimatedSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {

  const skills = [
    { icon: Code, name: "Development", level: "Advanced" },
    { icon: Palette, name: "Design", level: "Intermediate" },
    { icon: Zap, name: "Performance", level: "Advanced" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-red-950/20 to-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-red-900/20 to-background animate-gradient-shift" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)] animate-pulse" />
        </div>
        
        <AnimatedSection>
          <div className="text-center z-10 relative">
            <div className="mb-8 inline-block">
              <img 
                src={catAvatar} 
                alt="Cat avatar" 
                className="w-32 h-32 rounded-full shadow-2xl shadow-red-500/50 object-cover"
              />
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black mb-6 
                         bg-gradient-to-r from-red-400 via-red-500 to-red-600 
                         bg-clip-text text-transparent">
              TWAB
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Creative Developer & Designer
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-lg shadow-red-500/30 transition-all hover:scale-105">
                View Work
              </Button>
              <Button size="lg" variant="outline" className="border-red-500/50 hover:bg-red-500/10 transition-all hover:scale-105">
                Contact Me
              </Button>
            </div>

            <div className="flex gap-6 justify-center mt-8">
              <a href="https://github.com/twab-a11y" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-500 transition-all hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:twabgaming31@gmail.com" className="text-muted-foreground hover:text-red-500 transition-all hover:scale-110">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold text-center mb-16 text-red-500">
              Skills
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <AnimatedSection key={index} delay={index * 200}>
                <Card className="p-8 bg-card/50 backdrop-blur border-red-500/20 hover:border-red-500/50 
                               transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105">
                  <skill.icon className="w-12 h-12 text-red-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.level}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl font-bold text-center mb-16 text-red-500">
              Projects
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <p className="text-2xl text-center text-muted-foreground">
              Sorry! There are no projects. Yet
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-red-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Portfolio. Built with React & smooth animations.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
