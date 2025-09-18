import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Github } from "lucide-react";

const AnimatedContact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Let's connect via email",
      action: "Send Email",
      href: "mailto:twab@example.com"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      description: "Chat with me on Discord",
      action: "Message Me",
      href: "#"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my projects",
      action: "View Profile",
      href: "https://github.com"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent 
                         bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            I'm always excited to connect with fellow developers, gamers, and creators!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.title} 
                    className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover-lift 
                             animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-accent/20 
                                rounded-full flex items-center justify-center group-hover:scale-110 
                                transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  <Button 
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg 
                             hover:shadow-primary/30 transition-all duration-300"
                    onClick={() => window.open(method.href, '_blank')}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 animate-fade-in">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent 
                         bg-clip-text text-transparent">
              Ready to Start Something Amazing?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you want to collaborate on a project, share gaming experiences, 
              or just have a friendly chat about technology - I'd love to hear from you!
            </p>
            <Button size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:shadow-lg 
                             hover:shadow-primary/30 hover-scale">
              Get In Touch
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnimatedContact;