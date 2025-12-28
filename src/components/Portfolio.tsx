import { Github, Mail, Laptop, Paintbrush } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import catAvatar from "@/assets/cat-avatar.jpeg";
import backgroundVideo from "@/assets/background-video.mp4";
import InteractiveStars from "./InteractiveStars";
import SplitText from "./SplitText";
import GradientText from "./GradientText";
import StarBorder from "./StarBorder";

const FadeInSection = ({ children, wait = 0 }: { children: React.ReactNode; wait?: number }) => {
  const [show, setShow] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setShow(true), wait);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) io.observe(sectionRef.current);
    return () => io.disconnect();
  }, [wait]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

const Portfolio = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowBanner(window.scrollY < 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainSkills = [
    { Icon: Laptop, label: "Development", level: 5 },
    { Icon: Paintbrush, label: "Design", level: 21 },
  ];

  const langSkills = [
    { label: "Python", level: 3 },
    { label: "JavaScript", level: 0 },
    { label: "Lua", level: 1 },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Banner */}
      <header
        className={`fixed top-0 inset-x-0 z-50 bg-red-600/90 backdrop-blur py-2.5 px-4 text-center transition-transform duration-400 ${
          showBanner ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <p className="text-foreground text-sm">
          <span className="text-xl font-bold leading-none">T</span>wab is a combination of two things: games and design
        </p>
      </header>

      {/* Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover -z-20"
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/30 -z-10" />
      <InteractiveStars />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative z-10">
        <FadeInSection>
          <div className="text-center">
            <div className="mb-6">
              <img
                src={catAvatar}
                alt="Twab avatar"
                className="w-28 h-28 mx-auto rounded-full border-4 border-red-500 object-cover shadow-[0_0_40px_rgba(239,68,68,0.5)] hover:scale-105 transition-transform"
              />
            </div>

            <div className="text-lg md:text-xl text-muted-foreground mb-3">
              <SplitText text="hey, i am twab" splitType="words" delay={120} />
            </div>

            <h1 className="text-6xl md:text-8xl font-black mb-5">
              <GradientText colors={["#ef4444", "#fff", "#ef4444", "#fff"]} speed={5}>
                Twab
              </GradientText>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
              New Developer, Gamer And Designer
            </p>

            <div className="flex gap-5 justify-center flex-wrap">
              <StarBorder color="#ef4444" speed="3s">
                <span className="text-foreground font-medium">View Work</span>
              </StarBorder>
              <StarBorder color="#fff" speed="3s">
                <span className="text-foreground font-medium">Get In Touch</span>
              </StarBorder>
            </div>

            <div className="flex gap-5 justify-center mt-10">
              <a
                href="https://github.com/twab-a11y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-500 transition hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:twabgaming31@gmail.com"
                className="text-muted-foreground hover:text-red-500 transition hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-14">
              Skills
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {mainSkills.map((s, i) => (
              <FadeInSection key={s.label} wait={i * 150}>
                <Card className="p-7 bg-card/50 backdrop-blur border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
                  <div className="flex items-center gap-4 mb-4">
                    <s.Icon className="w-10 h-10 text-red-500" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold">{s.label}</h3>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <p className="text-muted-foreground text-right mt-1.5 text-sm">{s.level}%</p>
                </Card>
              </FadeInSection>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {langSkills.map((s, i) => (
              <FadeInSection key={s.label} wait={300 + i * 150}>
                <Card className="p-5 bg-card/50 backdrop-blur border-red-500/20 hover:border-red-500/40 transition-all hover:shadow-lg hover:shadow-red-500/10">
                  <h3 className="text-lg font-semibold mb-3">{s.label}</h3>
                  <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-700"
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  <p className="text-muted-foreground text-right mt-1 text-xs">{s.level}%</p>
                </Card>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-red-500 mb-14">
              Projects
            </h2>
          </FadeInSection>

          <FadeInSection wait={100}>
            <p className="text-xl md:text-2xl text-center text-muted-foreground">
              There is nothing here! (Yet)
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-red-500/20 relative z-10">
        <p className="text-center text-muted-foreground text-sm">
          © 2025 Portfolio. Built with React & smooth animations.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
