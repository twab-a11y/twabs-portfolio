import VideoBackground from "@/components/VideoBackground";
import EnhancedNavigation from "@/components/EnhancedNavigation";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedAbout from "@/components/AnimatedAbout";
import AnimatedSkills from "@/components/AnimatedSkills";
import AnimatedContact from "@/components/AnimatedContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <VideoBackground>
      <EnhancedNavigation />
      <main className="space-y-0">
        <AnimatedHero />
        <AnimatedAbout />
        <AnimatedSkills />
        <AnimatedContact />
      </main>
      <Footer />
    </VideoBackground>
  );
};

export default Index;
