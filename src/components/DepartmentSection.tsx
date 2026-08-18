
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DepartmentSection = () => {
  const departments = [
    {
      name: "Computer Science & Engineering",
      description: "Cutting-edge research in AI, ML, cybersecurity, and software engineering",
      students: 850,
      faculty: 45,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      specializations: ["Artificial Intelligence", "Data Science", "Cybersecurity"]
    },
    {
      name: "Electrical & Electronics",
      description: "Power systems, electronics, telecommunications, and renewable energy",
      students: 720,
      faculty: 38,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      specializations: ["Power Systems", "VLSI", "Communications"]
    },
    {
      name: "Mechanical Engineering",
      description: "Design, manufacturing, automation, and thermal engineering",
      students: 680,
      faculty: 42,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      specializations: ["CAD/CAM", "Robotics", "Thermal Engineering"]
    },
    {
      name: "Civil Engineering",
      description: "Infrastructure development, construction technology, and urban planning",
      students: 520,
      faculty: 35,
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop",
      specializations: ["Structural", "Transportation", "Environmental"]
    },
    {
      name: "Chemical Engineering",
      description: "Process engineering, materials science, and biotechnology",
      students: 380,
      faculty: 28,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      specializations: ["Process Design", "Materials", "Biotechnology"]
    },
    {
      name: "Information Technology",
      description: "Software development, web technologies, and database systems",
      students: 450,
      faculty: 32,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      specializations: ["Web Development", "Database Systems", "Mobile Apps"]
    }
  ];

  return (
    <section id="departments" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Departments</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of engineering departments, each equipped with state-of-the-art facilities and renowned faculty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{dept.description}</p>
                
                <div className="flex justify-between text-sm mb-4">
                  <span><strong>{dept.students}</strong> Students</span>
                  <span><strong>{dept.faculty}</strong> Faculty</span>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Specializations:</p>
                  <div className="flex flex-wrap gap-1">
                    {dept.specializations.map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
