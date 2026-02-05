
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Book, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-background to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-orange-600">UVCE</span>
                <span className="text-primary block text-3xl md:text-4xl mt-2">
                  University Visvesvaraya College of Engineering
                </span>
              </h1>
              <div className="flex items-center space-x-2 text-lg text-muted-foreground">
                <Award className="h-5 w-5 text-orange-600" />
                <span>Established 1917 • Bangalore University</span>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
              Legacy of excellence in engineering education for over a century. 
              Nurturing innovative minds and building tomorrow's engineers with 
              strong Indian values and global perspective.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 bg-orange-600 hover:bg-orange-700">
                Explore Programs
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-green-600 text-green-700 hover:bg-green-50">
                Virtual Campus Tour
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <GraduationCap className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Departments</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-primary">3000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Book className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Faculty</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-200">
              <img
                src="/lovable-uploads/acef2ee4-6146-4598-974e-f79e9b1b5439.png"
                alt="UVCE Campus - Historic Engineering College"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
