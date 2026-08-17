
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Trophy, Music, Code, BookOpen } from "lucide-react";

const Activities = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const clubs = [
    { name: "IEEE Student Branch", type: "Technical", members: 150, description: "Promoting technological innovation and excellence in engineering", activities: ["Workshops", "Conferences", "Project Competitions"], icon: Code },
    { name: "Cultural Committee", type: "Cultural", members: 200, description: "Celebrating the rich cultural heritage through various programs", activities: ["Classical Dance", "Music Concerts", "Drama", "Art Exhibitions"], icon: Music },
    { name: "Sports Committee", type: "Sports", members: 180, description: "Promoting physical fitness and sportsmanship", activities: ["Cricket", "Football", "Basketball", "Athletics"], icon: Trophy },
    { name: "Literary Society", type: "Literary", members: 120, description: "Fostering love for literature and creative writing", activities: ["Poetry", "Debates", "Story Writing", "Book Clubs"], icon: BookOpen }
  ];

  const events = [
    { name: "Pravega - Annual Technical Fest", date: "March 15-17, 2024", description: "UVCE's flagship technical festival featuring competitions, workshops, and exhibitions", type: "Technical" },
    { name: "Utkarshra - Cultural Fest", date: "February 20-22, 2024", description: "Celebrating Karnataka's rich cultural heritage through performances and competitions", type: "Cultural" },
    { name: "Inter-College Sports Meet", date: "January 10-15, 2024", description: "Annual sports championship bringing together colleges from across Karnataka", type: "Sports" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Student Activities</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the vibrant student life at UVCE through our diverse clubs, societies, and events
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Student Clubs & Societies</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {clubs.map((club, index) => {
                const IconComponent = club.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-uvce-primary">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-full">
                          <IconComponent className="h-6 w-6 text-uvce-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-foreground">{club.name}</CardTitle>
                          <Badge variant="outline">{club.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{club.members} Active Members</span>
                        </div>
                        <p className="text-muted-foreground">{club.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Activities:</h4>
                          <div className="flex flex-wrap gap-2">
                            {club.activities.map((activity, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {activity}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Major Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-full w-fit mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-uvce-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{event.name}</h3>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <div className="space-y-3">
                      <div className="text-center text-muted-foreground">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        {event.date}
                      </div>
                      <p className="text-muted-foreground text-sm text-center">{event.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Activities;
