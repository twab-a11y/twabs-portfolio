import { Heart, Code, Gamepad2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-background border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6">
          {/* Logo and tagline */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-gradient-accent rounded-lg shadow-glow">
              <div className="flex items-center gap-1">
                <Code className="w-4 h-4 text-primary-foreground" />
                <Gamepad2 className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <span className="font-bold text-xl text-foreground">
              Dutch<span className="text-primary">Gamer</span>
            </span>
          </div>

          {/* Made with love message */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary animate-pulse" />
            <span>and lots of</span>
            <Code className="w-4 h-4 text-secondary" />
            <span>in the Netherlands</span>
            <span className="text-primary">🇳🇱</span>
          </div>

          {/* Gaming quote */}
          <div className="max-w-md mx-auto">
            <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
              "In gaming and in coding, every bug is just an opportunity to level up."
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DutchGamer. Still learning, always gaming. 
              <span className="hidden sm:inline"> - Portfolio powered by passion and lots of Stack Overflow.</span>
            </p>
          </div>

          {/* Fun easter egg */}
          <div className="text-xs text-muted-foreground/70 font-mono">
            <span className="text-primary">console.log</span>
            <span>("Thanks for visiting my portfolio!");</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;