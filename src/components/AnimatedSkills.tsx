import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const AnimatedSkills = () => {
  const skills = [
    { name: 'JavaScript', level: 30, category: 'Programming' },
    { name: 'HTML/CSS', level: 45, category: 'Web Development' },
    { name: 'React', level: 20, category: 'Framework' },
    { name: 'Design Principles', level: 35, category: 'Design' },
    { name: 'Problem Solving', level: 60, category: 'General' },
    { name: 'Learning', level: 95, category: 'Personal' }
  ];

  const interests = [
    'Gaming', 'Web Development', 'UI/UX Design', 'Animation', 
    'Technology', 'Creative Coding', 'Digital Art', 'Open Source'
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent 
                         bg-clip-text text-transparent animate-fade-in">
            Skills & Interests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Currently developing these skills and exploring new technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={skill.name} 
                  className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover-lift 
                           animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <Badge variant="outline" className="border-primary/30">
                    {skill.category}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Interests Section */}
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              Current Interests
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {interests.map((interest, index) => (
                <Badge key={interest} 
                       variant="secondary" 
                       className="px-4 py-2 text-sm hover-scale bg-primary/10 border-primary/30
                                hover:bg-primary/20 transition-colors duration-300"
                       style={{ animationDelay: `${index * 0.1}s` }}>
                  {interest}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-muted-foreground italic">
                "Always learning, always growing 🌱"
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnimatedSkills;