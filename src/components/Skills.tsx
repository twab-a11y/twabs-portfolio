import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Gamepad2, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 15, learning: true },
        { name: "Python", level: 10, learning: true },
        { name: "HTML/CSS", level: 25, learning: false },
      ]
    },
    {
      icon: <Wrench className="w-6 h-6 text-secondary" />,
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 12, learning: true },
        { name: "VS Code", level: 35, learning: false },
        { name: "React", level: 8, learning: true },
      ]
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-accent" />,
      title: "Gaming & Design",
      skills: [
        { name: "Game Logic", level: 45, learning: false },
        { name: "UI/UX Thinking", level: 20, learning: true },
        { name: "Problem Solving", level: 55, learning: false },
      ]
    }
  ];

  const interests = [
    "Web Development", "Game Development", "Open Source", "Netherlands Tech Scene", 
    "Indie Games", "Scripting Automation", "Gaming Communities", "Learning"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Skills & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a new scripter, I'm actively building my skills and embracing the learning journey. 
            Here's what I'm working on and where my gaming background gives me an edge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-muted rounded-lg">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        {skill.learning && (
                          <Badge variant="outline" className="text-xs border-primary text-primary">
                            Learning
                          </Badge>
                        )}
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-secondary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              <Database className="w-8 h-8 text-secondary mx-auto mb-4" />
              Current Interests & Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {interests.map((interest, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-muted hover:bg-secondary/20 transition-colors duration-300 cursor-default"
                >
                  {interest}
                </Badge>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              "Every master was once a disaster" - Learning one script at a time! 🇳🇱
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;