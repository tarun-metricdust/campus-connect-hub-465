
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
    <section className="border-b border-border bg-surface py-12 md:py-16">
      <div className="container-editorial">
        <div className="section-rule">
          <p className="eyebrow mb-2">Information Hub</p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-4xl">
            Everything you need, in one place
          </h2>
        </div>

        <Tabs defaultValue="faculty" className="w-full">
          <TabsList className="mb-8 flex h-auto w-full justify-start gap-1 overflow-x-auto rounded-none border-b border-border bg-transparent p-0 no-scrollbar">
            {Object.entries(tabsData).map(([key, data]) => {
              const Icon = data.icon;
              return (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="flex shrink-0 items-center gap-2 rounded-none border-b-[3px] border-transparent bg-transparent px-3 py-3 text-sm font-semibold capitalize text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none sm:px-4"
                >
                  <Icon className="h-4 w-4" />
                  <span>{key}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(tabsData).map(([key, data]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
                {data.sections.map((section, index) => (
                  <article
                    key={index}
                    className="flex flex-col bg-background p-6 transition-colors hover:bg-surface"
                  >
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {section.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {section.description}
                    </p>
                    <a href={section.link} className="link-underline mt-5 text-sm">
                      Learn more
                    </a>
                  </article>
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
