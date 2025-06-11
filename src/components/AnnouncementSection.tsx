
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CalendarDays, Info, Bell } from "lucide-react";

const AnnouncementSection = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const announcements = [
    {
      id: 1,
      title: "Admissions Open for Academic Year 2024-25",
      content: "Applications are now being accepted for B.E programs. Online application process starts from March 1st, 2024. Visit the official Karnataka CET website for more details.",
      date: "2024-01-15",
      type: "Admissions",
      urgent: true
    },
    {
      id: 2,
      title: "Pravega 2024 - Annual Technical Festival",
      content: "UVCE's flagship technical festival Pravega will be held from March 15-17, 2024. Register for various competitions including robotics, coding, and project exhibitions.",
      date: "2024-01-12",
      type: "Events",
      urgent: false
    },
    {
      id: 3,
      title: "Industry Interface Program with Infosys",
      content: "Campus placement drive by Infosys scheduled for January 25-27, 2024. Eligible students must register through the placement portal by January 20th.",
      date: "2024-01-10",
      type: "Placements",
      urgent: true
    },
    {
      id: 4,
      title: "Library Extension - New Digital Resources",
      content: "Central library now provides access to IEEE Xplore, SpringerLink, and other premium digital resources. Students can access these 24/7 through campus network.",
      date: "2024-01-08",
      type: "Facilities",
      urgent: false
    },
    {
      id: 5,
      title: "Research Grant Opportunity - DRDO",
      content: "Faculty members are invited to submit research proposals for DRDO funded projects. Last date for submission is February 15th, 2024.",
      date: "2024-01-05",
      type: "Research",
      urgent: false
    },
    {
      id: 6,
      title: "Republic Day Celebrations",
      content: "UVCE will celebrate Republic Day with flag hoisting ceremony at 9:00 AM on January 26th, 2024. Cultural programs and award distribution ceremony will follow.",
      date: "2024-01-03",
      type: "Cultural",
      urgent: false
    },
    {
      id: 7,
      title: "Workshop on Emerging Technologies",
      content: "Three-day workshop on AI, ML, and Data Science from February 5-7, 2024. Registration fee: ₹500 for students, ₹1000 for external participants.",
      date: "2024-01-02",
      type: "Workshop",
      urgent: false
    },
    {
      id: 8,
      title: "Fee Payment Reminder",
      content: "Last date for fee payment for current semester is January 31st, 2024. Late fee charges will apply after the deadline. Pay online through college portal.",
      date: "2024-01-01",
      type: "Administrative",
      urgent: true
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const getTypeColor = (type: string) => {
    const colors = {
      "Admissions": "bg-orange-100 text-orange-800 border-orange-200",
      "Events": "bg-blue-100 text-blue-800 border-blue-200",
      "Placements": "bg-green-100 text-green-800 border-green-200",
      "Facilities": "bg-purple-100 text-purple-800 border-purple-200",
      "Research": "bg-indigo-100 text-indigo-800 border-indigo-200",
      "Cultural": "bg-pink-100 text-pink-800 border-pink-200",
      "Workshop": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "Administrative": "bg-red-100 text-red-800 border-red-200"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Bell className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Latest Announcements</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest news, events, and important notifications from UVCE
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Announcement */}
          <Card className="mb-8 border-2 border-orange-200 shadow-lg bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-orange-100 rounded-full border-2 border-orange-200">
                    <Info className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`${getTypeColor(announcements[currentAnnouncement].type)} border`}>
                      {announcements[currentAnnouncement].type}
                    </Badge>
                    {announcements[currentAnnouncement].urgent && (
                      <Badge variant="destructive">Urgent</Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    {announcements[currentAnnouncement].title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {announcements[currentAnnouncement].content}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4 mr-2 text-orange-600" />
                    {new Date(announcements[currentAnnouncement].date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scrollable Announcements List */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary flex items-center gap-2">
                <Bell className="h-5 w-5 text-orange-600" />
                All Announcements
              </h3>
              <ScrollArea className="h-96 w-full rounded-md border p-4">
                <div className="space-y-4">
                  {announcements.map((announcement, index) => (
                    <Card key={announcement.id} className="hover:shadow-md transition-shadow duration-200 border-l-4 border-l-orange-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`${getTypeColor(announcement.type)} border text-xs`}>
                            {announcement.type}
                          </Badge>
                          {announcement.urgent && (
                            <Badge variant="destructive" className="text-xs">Urgent</Badge>
                          )}
                        </div>
                        <h4 className="font-semibold mb-2 text-primary">{announcement.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                          {announcement.content}
                        </p>
                        <div className="text-xs text-muted-foreground flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1 text-orange-600" />
                          {new Date(announcement.date).toLocaleDateString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
