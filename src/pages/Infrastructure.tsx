
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, BookOpen, FlaskConical, Home, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import LoginModal from "@/components/LoginModal";

const Infrastructure = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const facilities = [
    { title: "Central Library", description: "State-of-the-art library with over 50,000 books, digital resources, and modern study spaces", features: ["Digital library with online journals and databases", "24/7 reading halls with Wi-Fi connectivity", "Special collections and rare books section", "Group study rooms and quiet zones"], icon: BookOpen, image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop" },
    { title: "Advanced Laboratories", description: "Well-equipped labs for all engineering departments with modern instruments and equipment", features: ["Computer labs with latest software and hardware", "Research laboratories for advanced projects", "Workshop facilities for practical training", "Industry-standard equipment and tools"], icon: FlaskConical, image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop" },
    { title: "Hostel Facilities", description: "Comfortable accommodation for students with all modern amenities", features: ["Separate hostels for boys and girls", "24/7 security and medical facilities", "Recreation rooms and sports facilities", "Nutritious mess facilities with varied menu"], icon: Home, image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Infrastructure</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              World-class facilities and infrastructure supporting academic excellence and student life
            </p>
            
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-6 py-3 rounded-full mb-8">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Located in the heart of Bangalore city center</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="h-8 w-8 text-uvce-primary" />
                      <h2 className="text-3xl font-bold text-primary">{facility.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">{facility.description}</p>
                    <ul className="space-y-3">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-uvce-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Additional Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sports Complex", description: "Basketball, volleyball, and badminton courts", icon: Users },
              { title: "Auditorium", description: "500-seat auditorium for events and seminars", icon: Building },
              { title: "Cafeteria", description: "Multiple food courts and dining options", icon: Users },
              { title: "Medical Center", description: "24/7 medical facilities with qualified staff", icon: Building },
              { title: "Transportation", description: "Bus services connecting to all parts of the city", icon: Users },
              { title: "Parking", description: "Ample parking space for students and visitors", icon: Building }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <Icon className="h-12 w-12 text-uvce-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Infrastructure;
