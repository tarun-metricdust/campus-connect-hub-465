
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award } from "lucide-react";

const Faculty = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const facultyMembers = [
    { name: "Dr. Rajesh Kumar", position: "Professor & Head, CSE", education: "Ph.D. from IISc Bangalore", experience: "25 years", specialization: "Machine Learning, Data Mining", awards: ["Best Teacher Award 2023", "Research Excellence Award"], email: "rajesh.kumar@uvce.ac.in", phone: "+91 80 2296 1234" },
    { name: "Dr. Priya Sharma", position: "Professor, ECE", education: "Ph.D. from IIT Delhi", experience: "22 years", specialization: "VLSI Design, Signal Processing", awards: ["Outstanding Faculty Award", "IEEE Fellow"], email: "priya.sharma@uvce.ac.in", phone: "+91 80 2296 1235" },
    { name: "Dr. Arjun Reddy", position: "Associate Professor, Mechanical", education: "Ph.D. from IIIT Hyderabad", experience: "18 years", specialization: "Thermal Engineering, CFD", awards: ["Young Scientist Award", "Innovation Award"], email: "arjun.reddy@uvce.ac.in", phone: "+91 80 2296 1236" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Faculty</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet our distinguished faculty members who are leaders in their respective fields
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {faculty.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-bold text-primary">{faculty.name}</h3>
                    <p className="text-muted-foreground">{faculty.position}</p>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="font-semibold">Education: </span>
                      <span className="text-muted-foreground">{faculty.education}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Experience: </span>
                      <span className="text-muted-foreground">{faculty.experience}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Specialization: </span>
                      <span className="text-muted-foreground">{faculty.specialization}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-uvce-primary" />
                        <span>{faculty.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-green-600" />
                        <span>{faculty.phone}</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="h-4 w-4 text-uvce-primary" />
                        <span className="font-semibold">Awards:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {faculty.awards.map((award, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {award}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Faculty;
