import { GraduationCap, Users, Building, TrendingUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const QuickAccessBoxes = () => {
  const quickAccess = [
    { title: "Departments", description: "Explore our engineering departments", icon: GraduationCap, link: "/departments" },
    { title: "Faculty", description: "Meet our academic community", icon: Users, link: "/faculty" },
    { title: "Facilities", description: "Laboratories, library and campus", icon: Building, link: "/infrastructure" },
    { title: "Placements", description: "Recruiters and outcomes", icon: TrendingUp, link: "/achievements" },
  ];

  return (
    <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
      {quickAccess.map((item) => {
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            to={item.link}
            className="group flex min-h-[128px] flex-col justify-between bg-background p-5 transition-colors hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon className="h-6 w-6 text-primary" strokeWidth={1.6} />
            <div className="mt-4">
              <h3 className="flex items-center gap-1.5 font-serif text-lg font-semibold text-foreground">
                {item.title}
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickAccessBoxes;
