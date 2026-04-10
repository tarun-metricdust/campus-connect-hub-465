
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Calendar, Play } from "lucide-react";

const EventsGallerySection = () => {
  const events = [
    { date: "2024-03-15", title: "Technical Symposium 2024", description: "Annual technical fest with workshops and competitions" },
    { date: "2024-03-20", title: "Industry Connect", description: "Networking event with leading tech companies" },
    { date: "2024-03-25", title: "Alumni Reunion", description: "Annual gathering of UVCE alumni" },
    { date: "2024-04-01", title: "Research Conference", description: "Presentation of latest research projects" },
    { date: "2024-04-10", title: "Cultural Festival", description: "Celebration of arts, music, and dance" },
    { date: "2024-04-15", title: "Sports Day", description: "Inter-departmental sports competition" },
    { date: "2024-04-20", title: "Innovation Fair", description: "Showcase of student projects and innovations" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-red-50 to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar of Events */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-uvce-primary" />
                <CardTitle>Calendar of Events</CardTitle>
              </div>
              <CardDescription>Upcoming events and important dates</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-64">
                <div className="space-y-4 pr-4">
                  {events.map((event, index) => (
                    <div key={index} className="border-l-4 border-uvce-primary pl-4 py-2">
                      <div className="text-sm text-uvce-primary font-semibold">{event.date}</div>
                      <div className="font-medium">{event.title}</div>
                      <div className="text-sm text-muted-foreground">{event.description}</div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Gallery */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Photo Gallery</CardTitle>
              <CardDescription>Glimpses from campus life and events</CardDescription>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>

          {/* Video Section */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Campus Video</CardTitle>
              <CardDescription>Virtual tour of UVCE campus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-uvce-primary rounded-lg flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
                  alt="Campus Video Thumbnail"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="font-semibold">UVCE Campus Tour</div>
                  <div className="text-sm opacity-90">Experience our beautiful campus</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsGallerySection;
