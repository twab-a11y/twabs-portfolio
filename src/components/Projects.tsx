import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, ExternalLink, Github, Gamepad2, Lightbulb, Rocket } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "This very website! My first major project combining React, TypeScript, and modern web technologies. Built with a gaming-inspired design system.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      status: "completed",
      type: "web",
      icon: <Code className="w-5 h-5" />
    },
    {
      title: "Simple Calculator Script",
      description: "Learning JavaScript fundamentals by building a basic calculator with clean UI and error handling. Focus on core programming concepts.",
      technologies: ["JavaScript", "HTML", "CSS"],
      status: "in-progress",
      type: "learning",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      title: "Gaming Stats Tracker",
      description: "Planning a tool to track personal gaming statistics and achievements. Will integrate with popular gaming platforms.",
      technologies: ["Python", "APIs", "Data Analysis"],
      status: "planned",
      type: "gaming",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      title: "Dutch Learning Bot",
      description: "Future project: A Discord bot to help international friends learn Dutch phrases and gaming terms. Combining my culture with code!",
      technologies: ["Node.js", "Discord.js", "Database"],
      status: "planned",
      type: "bot",
      icon: <Rocket className="w-5 h-5" />
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-primary text-primary-foreground";
      case "in-progress": return "bg-secondary text-secondary-foreground";
      case "planned": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "in-progress": return "In Progress";
      case "planned": return "Planned";
      default: return "Unknown";
    }
  };

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Projects & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From small learning experiments to ambitious future projects. 
            Here's what I'm building as I grow my scripting skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-gaming group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs border-muted-foreground/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {project.status === "completed" && (
                    <>
                      <Button size="sm" variant="outline" className="hover:bg-primary/10">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="hover:bg-secondary/10">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </Button>
                    </>
                  )}
                  {project.status === "in-progress" && (
                    <Button size="sm" variant="outline" disabled className="opacity-60">
                      <Code className="w-4 h-4" />
                      In Development
                    </Button>
                  )}
                  {project.status === "planned" && (
                    <Button size="sm" variant="outline" disabled className="opacity-60">
                      <Lightbulb className="w-4 h-4" />
                      Coming Soon
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-accent/20 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-accent">What's Next?</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always looking for new challenges and learning opportunities. 
              Got an idea for a beginner-friendly project or want to collaborate?
            </p>
            <Button variant="gaming" size="lg">
              <Code className="w-5 h-5" />
              Let's Build Something!
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;