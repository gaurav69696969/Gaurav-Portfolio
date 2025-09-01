import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Avatar */}
        <div className="mb-8 relative inline-block">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
            <img
              src={developerAvatar}
              alt="Gaurav Kamal - Frontend Developer"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
        </div>

        {/* Main content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
          Gaurav Kamal
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
          Frontend Developer
        </h2>

        {/* Bio Section with Blue Highlights */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <p className="font-Header text-gray-400 text-justify">
            Hey there! I&apos;m{" "}
            <span className="text-blue-400 font-semibold">Gaurav Kamal</span>, and I&apos;m passionate
            about building clean, modern, and{" "}
            <span className="text-blue-400">user-friendly web experiences</span>.
            My journey into tech started with curiosity about how websites are
            built, and that curiosity soon grew into a love for{" "}
            <span className="text-blue-400">frontend development</span> and{" "}
            <span className="text-blue-400">UI/UX design</span>.
          </p>

          <p className="font-Header text-gray-400 text-justify">
            I have been working as a{" "}
            <span className="text-blue-400">Frontend Developer</span>, gaining
            experience with{" "}
            <span className="text-blue-400">HTML</span>,{" "}
            <span className="text-blue-400">CSS</span>,{" "}
            <span className="text-blue-400">JavaScript</span>, and{" "}
            <span className="text-blue-400">React</span> to build{" "}
            <span className="text-blue-400">responsive</span> and{" "}
            <span className="text-blue-400">interactive applications</span>. I
            enjoy turning ideas into functional solutions and focusing on{" "}
            <span className="text-blue-400">performance</span>,{" "}
            <span className="text-blue-400">usability</span>, and{" "}
            <span className="text-blue-400">modern design</span>.
          </p>

          <p className="font-Header text-gray-400 text-justify">
            What I love most is taking on{" "}
            <span className="text-blue-400">new challenges</span> and
            continuously learning{" "}
            <span className="text-blue-400">fresh skills</span> – whether it&apos;s
            improving UI/UX, exploring{" "}
            <span className="text-blue-400">modern frameworks</span>, or
            experimenting with{" "}
            <span className="text-blue-400">creative design solutions</span>.
            There&apos;s always something new to learn in this field, and I&apos;m
            excited to grow every day.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10 mb-12">
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
            <ArrowDown className="ml-2 w-5 h-5" />
          </Button>

          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/gaurav69696969"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-blue-400 hover:scale-110 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>

          <a
            href="https://www.linkedin.com/in/gaurav-kamal-663a8b26b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-blue-400 hover:scale-110 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="mailto:gaurav21kamal@gmail.com"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-blue-400 hover:scale-110 transition-all duration-300"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
