
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Info } from "lucide-react";

const AnnouncementSection = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const announcements = [
    {
      id: 1,
      title: "New Semester Registration Open",
      content: "Registration for Spring 2024 semester is now open. Students can register through the online portal.",
      date: "2024-01-15",
      type: "Academic",
      urgent: true
    },
    {
      id: 2,
      title: "Research Symposium 2024",
      content: "Annual research symposium will be held on March 15-16, 2024. Call for papers is now open.",
      date: "2024-01-10",
      type: "Research",
      urgent: false
    },
    {
      id: 3,
      title: "Career Fair Next Week",
      content: "Top tech companies will be visiting campus for recruitment. Register now for interview slots.",
      date: "2024-01-08",
      type: "Placement",
      urgent: true
    },
    {
      id: 4,
      title: "Library Extended Hours",
      content: "Central library will remain open 24/7 during exam week. Additional study spaces available.",
      date: "2024-01-05",
      type: "Facility",
      urgent: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Announcements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news and important updates from our college
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="mb-8 border-2 border-primary/20 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={announcements[currentAnnouncement].urgent ? "destructive" : "secondary"}>
                      {announcements[currentAnnouncement].type}
                    </Badge>
                    {announcements[currentAnnouncement].urgent && (
                      <Badge variant="destructive">Urgent</Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {announcements[currentAnnouncement].title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {announcements[currentAnnouncement].content}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2" />
                    {new Date(announcements[currentAnnouncement].date).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.slice(0, 3).map((announcement, index) => (
              <Card key={announcement.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{announcement.type}</Badge>
                  </div>
                  <h4 className="font-semibold mb-2 line-clamp-2">{announcement.title}</h4>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {announcement.content}
                  </p>
                  <div className="text-xs text-muted-foreground">
                    {new Date(announcement.date).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
