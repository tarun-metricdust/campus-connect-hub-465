
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Award, Star, Calendar, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";

const Achievements = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const recentAchievements = [
    {
      year: "2024",
      title: "NIRF Ranking Recognition",
      description: "UVCE ranked among top 50 engineering colleges in India by NIRF",
      category: "Institutional",
      icon: Trophy
    },
    {
      year: "2024",
      title: "IEEE Student Competition Winners",
      description: "Students won first place in IEEE International Robotics Competition",
      category: "Student Achievement",
      icon: Award
    },
    {
      year: "2023",
      title: "Research Publication Milestone",
      description: "Faculty published 150+ research papers in international journals",
      category: "Research",
      icon: Star
    },
    {
      year: "2023",
      title: "Industry Partnership Excellence",
      description: "Signed MoUs with 25+ leading tech companies for placements",
      category: "Industry Relations",
      icon: Target
    }
  ];

  const historicalAchievements = [
    {
      year: "1917",
      title: "Foundation Legacy",
      description: "Established as one of the first engineering colleges in South India, pioneering technical education in the region",
      impact: "Set the foundation for engineering education in Karnataka"
    },
    {
      year: "1960s",
      title: "Academic Excellence Recognition",
      description: "UVCE became affiliated with Bangalore University and gained recognition for its rigorous academic programs",
      impact: "Established reputation for quality engineering education"
    },
    {
      year: "1980s",
      title: "Computer Science Pioneer",
      description: "Among the first colleges in India to introduce Computer Science and Engineering department",
      impact: "Led the digital revolution in engineering education"
    },
    {
      year: "2000s",
      title: "Research Innovation Hub",
      description: "Established multiple research centers and secured significant research funding from government and industry",
      impact: "Transformed into a leading research institution"
    }
  ];

  const achievementStats = [
    { number: "100+", label: "Years of Excellence", icon: Calendar },
    { number: "50,000+", label: "Alumni Worldwide", icon: Users },
    { number: "200+", label: "Research Publications (Annual)", icon: Star },
    { number: "95%", label: "Placement Rate", icon: Target }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Achievements</h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              A century of excellence, innovation, and outstanding contributions to engineering and technology
            </p>
            
            {/* Achievement Stats */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {achievementStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Recent Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentAchievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-orange-600" />
                        <span className="text-sm font-semibold text-orange-600">{achievement.year}</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {achievement.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Legacy */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Historical Legacy</h2>
          <div className="space-y-8">
            {historicalAchievements.map((achievement, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">{achievement.year}</div>
                    <div className="w-4 h-4 bg-orange-600 rounded-full mx-auto"></div>
                    {index < historicalAchievements.length - 1 && (
                      <div className="w-0.5 h-16 bg-orange-200 mx-auto mt-4"></div>
                    )}
                  </div>
                  <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{achievement.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">{achievement.description}</CardDescription>
                      <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-600">
                        <p className="text-sm font-semibold text-orange-800 mb-1">Impact:</p>
                        <p className="text-sm text-orange-700">{achievement.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-4">Be Part of Our Legacy</h3>
              <p className="text-lg mb-6 opacity-90">
                Join UVCE and contribute to our continuing tradition of excellence in engineering education
              </p>
              <Button asChild variant="secondary" size="lg">
                <Link to="/departments">Explore Programs</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Achievements;
