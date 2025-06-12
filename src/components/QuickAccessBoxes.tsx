
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Building, TrendingUp } from "lucide-react";

const QuickAccessBoxes = () => {
  const quickAccess = [
    {
      title: "Departments",
      description: "Explore our 8 engineering departments",
      icon: GraduationCap,
      link: "/departments"
    },
    {
      title: "Administration",
      description: "Meet our leadership team",
      icon: Users,
      link: "/administration"
    },
    {
      title: "Facilities",
      description: "State-of-the-art infrastructure",
      icon: Building,
      link: "/facilities"
    },
    {
      title: "Placements",
      description: "Excellent placement records",
      icon: TrendingUp,
      link: "/placements"
    }
  ];

  return (
    <div className="space-y-4">
      {quickAccess.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-uvce-primary" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3 text-sm">
                {item.description}
              </CardDescription>
              <Button 
                size="sm"
                className="w-full bg-uvce-primary hover:bg-uvce-primary-light"
                onClick={() => window.location.href = item.link}
              >
                Explore
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickAccessBoxes;
