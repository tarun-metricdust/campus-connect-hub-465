
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Building, TrendingUp } from "lucide-react";

const QuickAccessSection = () => {
  const quickAccess = [
    {
      title: "Departments",
      description: "Explore our 8 engineering departments with cutting-edge programs and world-class faculty.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
      link: "/departments"
    },
    {
      title: "Administration",
      description: "Meet our leadership team and administrative staff dedicated to academic excellence.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
      link: "/administration"
    },
    {
      title: "Facilities",
      description: "State-of-the-art laboratories, libraries, hostels, and recreational facilities for students.",
      icon: Building,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
      link: "/facilities"
    },
    {
      title: "Placements",
      description: "Excellent placement records with top companies recruiting our talented graduates.",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
      link: "/placements"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Quick Access</h2>
          <p className="text-xl text-muted-foreground">Explore key areas of UVCE</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickAccess.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="h-8 w-8 text-uvce-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-sm">
                    {item.description}
                  </CardDescription>
                  <Button 
                    className="w-full bg-uvce-primary hover:bg-uvce-primary-light"
                    onClick={() => window.location.href = item.link}
                  >
                    Explore {item.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
