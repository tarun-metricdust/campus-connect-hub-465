
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Trophy } from "lucide-react";

const Departments = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const departments = [
    {
      name: "Computer Science & Engineering",
      head: "Dr. Rajesh Kumar",
      students: 480,
      established: "1963",
      specializations: ["AI/ML", "Data Science", "Cybersecurity", "Software Engineering"]
    },
    {
      name: "Electronics & Communication",
      head: "Dr. Priya Sharma",
      students: 360,
      established: "1946",
      specializations: ["VLSI Design", "Signal Processing", "IoT", "Embedded Systems"]
    },
    {
      name: "Mechanical Engineering",
      head: "Dr. Arjun Reddy",
      students: 420,
      established: "1917",
      specializations: ["Thermal Engineering", "Design", "Manufacturing", "Robotics"]
    },
    {
      name: "Civil Engineering",
      head: "Dr. Meera Nair",
      students: 320,
      established: "1917",
      specializations: ["Structural Engineering", "Environmental", "Transportation", "Geotechnical"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Departments</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              UVCE houses multiple prestigious departments, each with a rich legacy of academic excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-orange-500">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <GraduationCap className="h-8 w-8 text-orange-600" />
                    <Badge variant="secondary">Est. {dept.established}</Badge>
                  </div>
                  <CardTitle className="text-xl text-primary">{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>Head: {dept.head}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="h-4 w-4" />
                      <span>{dept.students} Students</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Specializations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.specializations.map((spec, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {spec}
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

export default Departments;
