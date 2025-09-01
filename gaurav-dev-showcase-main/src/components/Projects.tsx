import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Shopit from "../../public/Cloth-banner_ylavk9.jpg"
import Healthcare from "../../public/Screenshot 2025-08-27 111609.png"
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: " E-Commerce Platform",
      description: "A full-stack e-commerce application built with MERN stack featuring user authentication, product catalog, shopping cart, and payment integration. Responsive design with modern UI/UX.",
      image: Shopit,
      technologies: ["HTML", "JavaScript","Tailwind CSS"],
      liveUrl: "https://mern-e-commerce-frontend-coral.vercel.app/",
      githubUrl: "https://github.com/gaurav69696969/MERN-E-Commerce-Frontend",
      featured: true
    },
    {
      id: 2,
      title: "React Developer Tools",
      description: "A collection of useful React development tools and utilities to enhance developer productivity. Includes components library, hooks collection, and development helpers.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Vite", "CSS3"],
      liveUrl: "https://github.com/gaurav69696969/react-tools",
      githubUrl: "https://github.com/gaurav69696969",
      featured: false
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Modern healthcare management application with patient records, appointment scheduling, and medical history tracking. Built with focus on user experience and data security.",
      image: Healthcare,
      technologies: ["React", "JavaScript", "CSS3", "REST API"],
      liveUrl: "https://vercel.com/kamal21gaurav-gmailcoms-projects/health-care",
      githubUrl: "https://github.com/gaurav69696969/HEALTH-CARE",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my recent work in web development
          </p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow ${
                project.featured ? 'lg:p-8' : ''
              } ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''} ${!project.featured ? 'md:grid md:grid-cols-2 md:gap-6' : ''}`}>
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4 flex flex-col justify-center">
                  <CardHeader className="p-0">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className={`${project.featured ? 'text-2xl' : 'text-xl'} text-foreground`}>
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge variant="default" className="bg-primary/20 text-primary border-primary/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-muted/50 text-muted-foreground border-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 pt-2">
                      <Button 
                        variant="hero" 
                        size="sm"
                        asChild
                      >
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      
                      <Button 
                        variant="glow" 
                        size="sm"
                        asChild
                      >
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Button 
            variant="glow" 
            size="lg"
            asChild
          >
            <a 
              href="https://github.com/gaurav69696969" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;