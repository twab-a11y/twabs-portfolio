import { Button } from "@/components/ui/button";
import { Code, Gamepad2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-gaming-setup.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      
      {/* Floating Gaming Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Code className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '1s' }}>
        <Gamepad2 className="w-10 h-10 text-secondary opacity-40" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-4 h-4 bg-accent rounded-full animate-glow" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground">Netherlands 🇳🇱</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
            Dutch Gamer
            <br />
            <span className="text-4xl md:text-6xl text-primary">Scripter</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about <span className="text-secondary font-semibold">gaming</span> and 
            diving deep into the world of <span className="text-primary font-semibold">scripting</span>. 
            Ready to turn ideas into interactive experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero" 
              className="text-lg px-8 py-6"
            >
              <Code className="w-5 h-5" />
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="gaming" 
              className="text-lg px-8 py-6"
            >
              <Gamepad2 className="w-5 h-5" />
              Gaming Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;