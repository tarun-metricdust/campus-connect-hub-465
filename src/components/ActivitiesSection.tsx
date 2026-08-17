
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar } from "lucide-react";

const ActivitiesSection = () => {
  const clubs = [
    {
      name: "Robotics Club",
      category: "Technical",
      members: 120,
      description: "Building autonomous robots and competing in national competitions",
      achievements: ["National Robotics Championship 2023", "Innovation Award"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    },
    {
      name: "Coding Society",
      category: "Technical",
      members: 200,
      description: "Programming competitions, hackathons, and skill development",
      achievements: ["ACM ICPC Regional Winners", "Google Code-in Mentors"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop"
    },
    {
      name: "Cultural Committee",
      category: "Cultural",
      members: 150,
      description: "Organizing festivals, performances, and cultural events",
      achievements: ["Best Cultural Fest 2023", "Inter-college Dance Champions"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      name: "Sports Council",
      category: "Sports",
      members: 180,
      description: "Cricket, football, basketball, and other sports activities",
      achievements: ["University Cricket Champions", "Best Sports Infrastructure"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop"
    }
  ];

  const events = [
    {
      title: "TechFest 2024",
      date: "March 15-17, 2024",
      type: "Technical",
      description: "Annual technical festival with competitions, workshops, and exhibitions"
    },
    {
      title: "Cultural Night",
      date: "February 28, 2024",
      type: "Cultural",
      description: "Evening of music, dance, and drama performances by students"
    },
    {
      title: "Innovation Summit",
      date: "April 5, 2024",
      type: "Academic",
      description: "Showcase of student research projects and startup ideas"
    }
  ];

  return (
    <section id="activities" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Life & Activities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the vibrant student community with numerous clubs, activities, and events that enrich campus life
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Student Clubs & Societies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clubs.map((club, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{club.name}</CardTitle>
                    <Badge variant="secondary">{club.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{club.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="h-4 w-4 text-foreground" />
                    <span className="text-sm">{club.members} members</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Recent Achievements:</p>
                    {club.achievements.map((achievement, i) => (
                      <p key={i} className="text-xs text-muted-foreground">• {achievement}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-lg">{event.title}</h4>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="h-4 w-4 text-foreground" />
                    <span className="text-sm text-muted-foreground">{event.date}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
