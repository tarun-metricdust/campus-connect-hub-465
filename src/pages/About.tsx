
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, BookOpen, Building } from "lucide-react";

const About = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const timelineEvents = [
    {
      year: "1917",
      title: "Foundation",
      description: "University Visvesvaraya College of Engineering was established as part of Bangalore University.",
      milestone: true
    },
    {
      year: "1963",
      title: "Autonomous Status",
      description: "UVCE gained autonomous status and expanded its academic programs significantly.",
      milestone: false
    },
    {
      year: "1972",
      title: "Research Excellence",
      description: "Established advanced research facilities and began offering postgraduate programs.",
      milestone: false
    },
    {
      year: "1990",
      title: "Industry Partnerships",
      description: "Forged strong partnerships with leading industries for better placement opportunities.",
      milestone: false
    },
    {
      year: "2000",
      title: "Digital Transformation",
      description: "Modernized infrastructure with state-of-the-art laboratories and digital learning platforms.",
      milestone: true
    },
    {
      year: "2017",
      title: "Centenary Celebrations",
      description: "Celebrated 100 years of excellence in engineering education and innovation.",
      milestone: true
    },
    {
      year: "2024",
      title: "Future Vision",
      description: "Continuing the legacy with cutting-edge research in AI, IoT, and sustainable technologies.",
      milestone: false
    }
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Consistently ranked among top engineering colleges in India",
      icon: Award
    },
    {
      title: "Research Impact",
      description: "Over 500 research publications in international journals annually",
      icon: BookOpen
    },
    {
      title: "Alumni Network",
      description: "50,000+ alumni across the globe in leadership positions",
      icon: Users
    },
    {
      title: "Infrastructure",
      description: "Modern laboratories, libraries, and campus facilities",
      icon: Building
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">About UVCE</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            University Visvesvaraya College of Engineering, established in 1917, stands as a beacon of engineering excellence. 
            Named after the legendary engineer Sir M. Visvesvaraya, our institution has been shaping the future of engineering 
            education for over a century.
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
                  To provide world-class engineering education that combines theoretical knowledge with practical 
                  application, fostering innovation, critical thinking, and ethical responsibility among our students 
                  to meet the evolving needs of society and industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-uvce-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-uvce-primary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be a globally recognized center of excellence in engineering education and research, 
                  producing competent engineers and leaders who contribute to technological advancement 
                  and sustainable development of society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-uvce-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2 text-primary">{achievement.title}</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Journey Through Time</h2>
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
                        <h3 className="text-lg font-semibold text-primary mb-2">{event.title}</h3>
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
            <h2 className="text-3xl font-bold mb-6 text-primary">Legacy of Excellence</h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              For over a century, UVCE has been nurturing engineering talent and contributing to India's technological 
              advancement. Our alumni have made significant contributions in various fields including space research, 
              information technology, infrastructure development, and entrepreneurship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-uvce-primary">100+</h3>
              <p className="text-muted-foreground">Years of Excellence</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-uvce-primary">50,000+</h3>
              <p className="text-muted-foreground">Alumni Worldwide</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl font-bold text-uvce-primary">8</h3>
              <p className="text-muted-foreground">Engineering Departments</p>
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
