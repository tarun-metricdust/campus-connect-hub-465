import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Play } from "lucide-react";

const EventsGallerySection = () => {
  const events = [
    { date: "15 Mar 2024", title: "Technical Symposium 2024", description: "Annual technical fest with workshops and competitions" },
    { date: "20 Mar 2024", title: "Industry Connect", description: "Networking event with leading technology companies" },
    { date: "25 Mar 2024", title: "Alumni Reunion", description: "Annual gathering of our alumni community" },
    { date: "01 Apr 2024", title: "Research Conference", description: "Presentation of latest research projects" },
    { date: "10 Apr 2024", title: "Cultural Festival", description: "A celebration of arts, music and dance" },
    { date: "20 Apr 2024", title: "Innovation Fair", description: "Showcase of student projects and innovations" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
  ];

  return (
    <section className="border-b border-border bg-surface py-12 md:py-16">
      <div className="container-editorial">
        <div className="section-rule">
          <p className="eyebrow mb-2">Campus Life</p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-4xl">
            Events &amp; gallery
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Events diary */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
              <Calendar className="h-5 w-5 text-primary" />
              Calendar of events
            </h3>
            <ul className="divide-y divide-border border-t border-border">
              {events.map((event, index) => (
                <li key={index} className="py-3.5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {event.date}
                  </p>
                  <p className="mt-1 font-medium text-foreground">{event.title}</p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Photo gallery</h3>
            <Carousel className="w-full">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={`Campus life ${index + 1}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 rounded-none border-border bg-background/90" />
              <CarouselNext className="right-2 rounded-none border-border bg-background/90" />
            </Carousel>
          </div>

          {/* Video */}
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Campus film</h3>
            <button className="group relative block w-full overflow-hidden bg-ink text-left">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
                  alt="Campus tour video thumbnail"
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-45"
                />
              </div>
              <span className="absolute inset-0 flex items-center justify-center">
                <Play className="h-14 w-14 text-ink-foreground" strokeWidth={1.2} />
              </span>
              <span className="absolute bottom-4 left-4 text-ink-foreground">
                <span className="block font-serif text-lg font-semibold">Campus tour</span>
                <span className="block text-sm text-ink-foreground/80">
                  A short walk through our grounds
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsGallerySection;
