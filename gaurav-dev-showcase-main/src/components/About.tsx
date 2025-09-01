import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Smartphone, Zap } from "lucide-react";
import codingWorkspace from "@/assets/coding-workspace.jpg";

const About = () => {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "HTML", level: 95 },
    { name: "CSS", level: 80 },
     { name: "Redux Toolkit", level: 80 },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={codingWorkspace} 
                alt="Modern coding workspace"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">
                Frontend Developer from Surat, India
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over a year of hands-on experience in frontend development, 
                I specialize in creating modern, responsive web applications using 
                React, TypeScript, and the latest web technologies. Currently working 
                in Surat since December, I'm passionate about clean code, user 
                experience, and continuous learning.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-4 text-center">
                  <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Clean Code</h4>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-4 text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Web Apps</h4>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-4 text-center">
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Responsive</h4>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-4 text-center">
                  <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Fast Loading</h4>
                </CardContent>
              </Card>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-foreground">Technical Skills</h4>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;