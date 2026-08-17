import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, BookOpen, Building } from "lucide-react";
import { siteConfig } from "@/config/site";

const About = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const timelineEvents = siteConfig.about.timeline;

  const achievements = siteConfig.about.achievements.map((achievement, index) => {
    const icons = [Award, BookOpen, Users, Building];
    return { ...achievement, icon: icons[index] };
  });

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{siteConfig.about.title}</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {siteConfig.about.intro}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-uvce-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-uvce-primary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.about.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-uvce-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-uvce-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {siteConfig.about.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-uvce-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Journey Through Time</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-uvce-primary"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className={`${event.milestone ? 'border-2 border-uvce-primary' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-uvce-primary" />
                          <Badge variant="outline" className="text-uvce-primary border-uvce-primary">
                            {event.year}
                          </Badge>
                          {event.milestone && (
                            <Badge className="bg-uvce-primary">Milestone</Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{event.title}</h3>
                        <p className="text-muted-foreground text-sm">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`w-4 h-4 rounded-full z-10 ${event.milestone ? 'bg-uvce-primary' : 'bg-gray-400'}`}></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              {siteConfig.about.legacy}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-uvce-primary">{siteConfig.about.stats.years.value}</h3>
              <p className="text-muted-foreground">{siteConfig.about.stats.years.label}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-uvce-primary">{siteConfig.about.stats.alumni.value}</h3>
              <p className="text-muted-foreground">{siteConfig.about.stats.alumni.label}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-uvce-primary">{siteConfig.about.stats.departments.value}</h3>
              <p className="text-muted-foreground">{siteConfig.about.stats.departments.label}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default About;
