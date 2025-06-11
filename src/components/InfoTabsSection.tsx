
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, FileText, Trophy, Camera, Heart } from "lucide-react";

const InfoTabsSection = () => {
  const tabsData = {
    faculty: {
      icon: GraduationCap,
      sections: [
        { title: "Faculty Directory", description: "Complete list of faculty members across all departments", link: "/faculty" },
        { title: "Research Publications", description: "Latest research papers and publications by our faculty", link: "/research" },
        { title: "Faculty Achievements", description: "Awards and recognitions received by faculty members", link: "/faculty-achievements" }
      ]
    },
    students: {
      icon: Users,
      sections: [
        { title: "Student Portal", description: "Access student services, results, and academic information", link: "/student-portal" },
        { title: "Student Organizations", description: "Various clubs, societies, and student-led initiatives", link: "/activities" },
        { title: "Student Support", description: "Counseling, mentorship, and support services", link: "/student-support" }
      ]
    },
    examination: {
      icon: FileText,
      sections: [
        { title: "Exam Schedule", description: "Current semester examination timetables and important dates", link: "/exam-schedule" },
        { title: "Results", description: "Semester results and academic performance records", link: "/results" },
        { title: "Examination Guidelines", description: "Rules, regulations, and guidelines for examinations", link: "/exam-guidelines" }
      ]
    },
    achievements: {
      icon: Trophy,
      sections: [
        { title: "Student Achievements", description: "Awards, competitions, and recognitions won by students", link: "/student-achievements" },
        { title: "Faculty Honors", description: "Faculty awards, patents, and professional recognition", link: "/faculty-honors" },
        { title: "Institutional Awards", description: "College-level achievements and accreditations", link: "/institutional-awards" }
      ]
    },
    media: {
      icon: Camera,
      sections: [
        { title: "News & Events", description: "Latest news, events, and happenings at UVCE", link: "/news" },
        { title: "Photo Gallery", description: "Pictures from various events, functions, and activities", link: "/gallery" },
        { title: "Press Releases", description: "Official announcements and media coverage", link: "/press" }
      ]
    },
    alumni: {
      icon: Heart,
      sections: [
        { title: "Alumni Network", description: "Connect with UVCE alumni worldwide", link: "/alumni-network" },
        { title: "Notable Alumni", description: "Distinguished graduates who have made their mark", link: "/notable-alumni" },
        { title: "Alumni Events", description: "Reunions, networking events, and alumni gatherings", link: "/alumni-events" }
      ]
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Information Hub</h2>
          <p className="text-xl text-muted-foreground">Comprehensive information at your fingertips</p>
        </div>

        <Tabs defaultValue="faculty" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            {Object.entries(tabsData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span className="capitalize hidden sm:inline">{key}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(tabsData).map(([key, data]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-3 gap-6">
                {data.sections.map((section, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {section.description}
                      </CardDescription>
                      <Button variant="outline" className="w-full border-orange-600 text-orange-600 hover:bg-orange-50">
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default InfoTabsSection;
