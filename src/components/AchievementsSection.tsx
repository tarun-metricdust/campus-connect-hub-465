
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Target } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      title: "NIRF Ranking #15",
      description: "Ranked among top 15 engineering colleges in India by NIRF 2023",
      year: "2023",
      category: "Ranking",
      icon: Trophy,
      color: "text-yellow-600"
    },
    {
      title: "Best Research Institution Award",
      description: "Recognized for outstanding research contributions in engineering",
      year: "2023",
      category: "Research",
      icon: Award,
      color: "text-blue-600"
    },
    {
      title: "100% Placement Record",
      description: "Achieved 100% placement for final year students with average package of ₹12 LPA",
      year: "2023",
      category: "Placement",
      icon: Target,
      color: "text-green-600"
    },
    {
      title: "Excellence in Innovation",
      description: "Awarded for promoting innovation and entrepreneurship among students",
      year: "2022",
      category: "Innovation",
      icon: Star,
      color: "text-purple-600"
    }
  ];

  const stats = [
    { number: "95%", label: "Graduate Employment Rate", description: "Within 6 months of graduation" },
    { number: "₹12 LPA", label: "Average Package", description: "For final year placements" },
    { number: "500+", label: "Research Papers", description: "Published in last 3 years" },
    { number: "50+", label: "Patents Filed", description: "By faculty and students" }
  ];

  const topRecruiters = [
    "Google", "Microsoft", "Amazon", "TCS", "Infosys", "Wipro", "Accenture", "IBM",
    "Adobe", "Intel", "Samsung", "L&T", "Mahindra", "Bajaj", "Hero", "Maruti"
  ];

  return (
    <section id="achievements" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence has earned us recognition and accolades from prestigious institutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`inline-flex p-3 rounded-full bg-secondary/50 ${achievement.color}`}>
                    <achievement.icon className="h-8 w-8" />
                  </div>
                </div>
                <Badge variant="outline" className="mb-2">{achievement.category}</Badge>
                <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{achievement.description}</p>
                <p className="text-xs text-muted-foreground">{achievement.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Top Recruiters</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 items-center justify-items-center">
            {topRecruiters.map((company, index) => (
              <div
                key={index}
                className="p-3 bg-secondary/30 rounded-lg text-sm font-medium text-center hover:bg-secondary/50 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
