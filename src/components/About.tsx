import { Card, CardContent } from "@/components/ui/card";
import { Gamepad2, Code, Heart, MapPin } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "From the Netherlands",
      description: "Born and raised in the land of windmills and innovative tech culture."
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-secondary" />,
      title: "Gaming Enthusiast",
      description: "Passionate gamer who loves exploring virtual worlds and understanding game mechanics."
    },
    {
      icon: <Code className="w-6 h-6 text-accent" />,
      title: "New to Scripting",
      description: "Just started my journey into programming and loving every challenge along the way."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Driven by Passion",
      description: "Combining my love for gaming with the endless possibilities of code."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a new scripter from the Netherlands with a deep passion for gaming. 
            Currently exploring the fascinating world of programming and how it powers 
            the games and digital experiences I love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gaming group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-primary/20 shadow-glow">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">My Journey Starts Here</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Every expert was once a beginner. I'm excited to share my learning process, 
              the projects I'm working on, and how my gaming background influences my 
              approach to problem-solving in code.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;