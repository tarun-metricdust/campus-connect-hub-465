
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Bell } from "lucide-react";

const AnnouncementSection = () => {
  const announcements = [
    {
      id: 1,
      title: "Semester Registration Open",
      date: "2024-03-15",
      category: "Academic",
      content: "Registration for the upcoming semester is now open. Students must complete registration by March 30th.",
      priority: "high"
    },
    {
      id: 2,
      title: "Pravega 2024 - Technical Festival",
      date: "2024-03-20",
      category: "Events",
      content: "Annual technical festival featuring workshops, competitions, and guest lectures by industry experts.",
      priority: "medium"
    },
    {
      id: 3,
      title: "Library Timings Extended",
      date: "2024-03-12",
      category: "Notice",
      content: "Central library will now remain open until 10 PM during examination period.",
      priority: "low"
    },
    {
      id: 4,
      title: "Industry Visit to Tech Parks",
      date: "2024-03-25",
      category: "Events",
      content: "Final year students are invited for industry visits to leading tech companies in Bangalore.",
      priority: "medium"
    },
    {
      id: 5,
      title: "Scholarship Applications",
      date: "2024-03-18",
      category: "Academic",
      content: "Merit-based scholarship applications are now being accepted for the next academic year.",
      priority: "high"
    },
    {
      id: 6,
      title: "Cultural Festival - Utkarshra",
      date: "2024-04-05",
      category: "Events",
      content: "Annual cultural festival showcasing talents in music, dance, drama, and arts.",
      priority: "medium"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "medium": return "bg-orange-100 text-orange-800 border-orange-200";
      case "low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Academic": return "bg-blue-100 text-blue-800";
      case "Events": return "bg-purple-100 text-purple-800";
      case "Notice": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-orange-600" />
          <CardTitle className="text-2xl font-bold text-orange-600">Announcements</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4 pr-4">
            {announcements.map((announcement) => (
              <div
                key={announcement.id}
                className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200 bg-white"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-primary text-sm">{announcement.title}</h4>
                  <Badge className={getPriorityColor(announcement.priority)}>
                    {announcement.priority}
                  </Badge>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{announcement.date}</span>
                  <Badge variant="outline" className={getCategoryColor(announcement.category)}>
                    {announcement.category}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {announcement.content}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default AnnouncementSection;
