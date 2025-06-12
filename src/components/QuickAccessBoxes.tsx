
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
    <div className="grid grid-cols-2 gap-4 h-full">
      {quickAccess.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader className="pb-2 flex-shrink-0">
              <div className="flex items-center gap-2">
                <Icon className="h-5 w-5 text-uvce-primary" />
                <CardTitle className="text-base">{item.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <CardDescription className="mb-3 text-xs flex-1">
                {item.description}
              </CardDescription>
              <Button 
                size="sm"
                className="w-full bg-uvce-primary hover:bg-uvce-primary-light text-xs"
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
