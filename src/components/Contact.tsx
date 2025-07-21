import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, MessageCircle, MapPin, Coffee } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      description: "Get in touch for opportunities or just to chat about coding!",
      action: "Send Email",
      link: "mailto:twabgaming31@gmail.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-secondary" />,
      title: "Discord",
      description: "Let's connect in the gaming and coding communities!",
      action: "Add Friend",
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to meet fellow developers, gamers, and anyone passionate about technology. 
            Let's build something awesome together! 🇳🇱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gaming group text-center"
            >
              <CardHeader>
                <div className="p-4 bg-muted rounded-full w-fit mx-auto group-hover:bg-primary/10 transition-colors duration-300">
                  {method.icon}
                </div>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {method.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary/10"
                  asChild
                >
                  <a href={method.link} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-card border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" />
                Located in the Netherlands
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Based in the heart of Europe's tech scene, I'm open to remote collaboration, 
                local meetups, and connecting with the vibrant Dutch developer community.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-secondary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Coffee className="w-6 h-6 text-secondary" />
                Coffee Chat?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a seasoned developer willing to mentor, a fellow beginner to learn with, 
                or just want to discuss the latest games - I'm always up for a good conversation!
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-gaming border-accent/30 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-background">Ready to Start Something New?</h3>
              <p className="text-background/80 mb-6 max-w-md">
                From small scripts to big dreams - every journey starts with a single line of code.
              </p>
              <Button variant="outline" size="lg" className="bg-background text-foreground hover:bg-background/90">
                <Mail className="w-5 h-5" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;