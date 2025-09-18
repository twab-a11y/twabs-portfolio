import { Card, CardContent } from "@/components/ui/card";

const AnimatedAbout = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent 
                         bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Passionate about creating digital experiences and learning new technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">🚀 New to Development</h3>
                <p className="text-muted-foreground">
                  Just starting my journey in the world of programming and scripting. 
                  Every day brings new challenges and opportunities to learn.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">🎮 Gaming Enthusiast</h3>
                <p className="text-muted-foreground">
                  Gaming has been a huge part of my life, influencing my interest in 
                  technology and interactive experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover-lift">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">🎨 Design Explorer</h3>
                <p className="text-muted-foreground">
                  Exploring the world of design, learning about UI/UX principles 
                  and how to create beautiful digital interfaces.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full 
                            animate-pulse absolute -inset-4"></div>
              <div className="w-80 h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full 
                            relative flex items-center justify-center">
                <div className="text-6xl animate-float">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedAbout;