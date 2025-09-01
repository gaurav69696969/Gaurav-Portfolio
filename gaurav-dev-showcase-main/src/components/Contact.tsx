import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gaurav21kamal@gmail.com",
      href: "mailto:gaurav21kamal@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surat, Gujarat, India",
      href: "#"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "gaurav69696969",
      href: "https://github.com/gaurav69696969"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: "gaurav-kamal",
      href: "https://www.linkedin.com/in/gaurav-kamal-663a8b26b/"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm currently available for freelance work and full-time opportunities. 
                  Whether you have a project in mind or just want to connect, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href && info.href !== "#" ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? "_blank" : undefined}
                            rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/gaurav69696969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/gaurav-kamal-663a8b26b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  
                  <a
                    href="mailto:gaurav21kamal@gmail.com"
                    className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 hover:scale-110"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-secondary border-primary/20 shadow-elegant">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-foreground">Ready to Start?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Let's discuss your project and bring your ideas to life with modern web technologies.
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="hero" 
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href="mailto:gaurav21kamal@gmail.com">
                        <Mail className="w-5 h-5 mr-2" />
                        Send Email
                      </a>
                    </Button>
                    
                    <Button 
                      variant="glow" 
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a 
                        href="https://www.linkedin.com/in/gaurav-kamal-663a8b26b/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary/20">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">1+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;