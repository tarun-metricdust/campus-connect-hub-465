
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Book } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Empowering Future
              <span className="text-primary block">Engineers</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Excellence in engineering education, research, and innovation. Join us in shaping tomorrow's technology leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Virtual Tour
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Departments</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Book className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
                alt="Engineering College Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
