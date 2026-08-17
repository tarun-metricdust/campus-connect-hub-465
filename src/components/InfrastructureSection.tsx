
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Users, Image as ImageIcon, Activity } from "lucide-react";

const InfrastructureSection = () => {
  const facilities = [
    {
      name: "Central Library",
      description: "Modern library with 100,000+ books, digital resources, and quiet study spaces",
      features: ["Digital Archives", "24/7 Access", "Research Databases", "Group Study Rooms"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      icon: Book
    },
    {
      name: "Research Laboratories",
      description: "State-of-the-art labs equipped with latest technology for hands-on learning",
      features: ["Advanced Equipment", "Safety Systems", "Research Support", "Industry Partnerships"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      icon: Activity
    },
    {
      name: "Student Center",
      description: "Hub for student activities with cafeteria, recreation rooms, and meeting spaces",
      features: ["Food Court", "Recreation Area", "Event Halls", "Student Services"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      icon: Users
    },
    {
      name: "Auditorium Complex",
      description: "Multiple auditoriums and seminar halls for conferences and cultural events",
      features: ["500+ Seating", "AV Equipment", "AC Halls", "Recording Facilities"],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      icon: ImageIcon
    }
  ];

  const stats = [
    { label: "Campus Area", value: "150 Acres", description: "Sprawling green campus" },
    { label: "Buildings", value: "25+", description: "Modern infrastructure" },
    { label: "Laboratories", value: "80+", description: "Well-equipped labs" },
    { label: "Hostels", value: "8", description: "Comfortable accommodation" }
  ];

  return (
    <section id="infrastructure" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Infrastructure</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our campus boasts modern facilities and infrastructure designed to provide the best learning environment
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <facility.icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CardTitle className="text-xl">{facility.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{facility.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {facility.features.map((feature, i) => (
                    <div key={i} className="text-sm bg-secondary/50 rounded px-2 py-1">
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
