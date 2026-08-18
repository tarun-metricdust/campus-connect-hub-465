
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const FacultySection = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Professor & Head",
      department: "Computer Science",
      qualifications: "Ph.D. MIT, M.S. Stanford",
      specialization: "Artificial Intelligence, Machine Learning",
      experience: "15 years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Michael Chen",
      position: "Associate Professor",
      department: "Electrical Engineering",
      qualifications: "Ph.D. Berkeley, M.Tech IIT",
      specialization: "Power Systems, Renewable Energy",
      experience: "12 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      position: "Professor",
      department: "Mechanical Engineering",
      qualifications: "Ph.D. Caltech, M.S. Carnegie Mellon",
      specialization: "Robotics, Automation",
      experience: "18 years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. James Wilson",
      position: "Associate Professor",
      department: "Civil Engineering",
      qualifications: "Ph.D. Harvard, M.Tech IISc",
      specialization: "Structural Engineering, Seismic Design",
      experience: "10 years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section id="faculty" className="py-16 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Distinguished Faculty</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet our world-class faculty members who are leaders in their respective fields and dedicated to student success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {facultyMembers.map((faculty, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-1">{faculty.name}</h3>
                <p className="text-foreground font-medium mb-2">{faculty.position}</p>
                <Badge variant="outline" className="mb-3">{faculty.department}</Badge>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Education:</strong> {faculty.qualifications}</p>
                  <p><strong>Specialization:</strong> {faculty.specialization}</p>
                  <p><strong>Experience:</strong> {faculty.experience}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Faculty Members
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
