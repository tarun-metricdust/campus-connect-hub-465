
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const HistoryTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Alumni, Class of 1995",
      company: "Chief Technology Officer, Tech Mahindra",
      text: "UVCE provided me with a strong foundation in engineering principles and critical thinking. The faculty's dedication and the college's emphasis on practical learning shaped my career.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Alumni, Class of 2010",
      company: "Senior Software Engineer, Google",
      text: "The diverse learning environment at UVCE and exposure to cutting-edge technology prepared me well for the global tech industry. Forever grateful to this institution.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Prof. Suresh Nair",
      position: "Industry Expert",
      company: "Former Director, ISRO",
      text: "UVCE graduates consistently demonstrate exceptional technical competence and leadership qualities. The institution's commitment to excellence is evident in its alumni.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Anita Reddy",
      position: "Alumni, Class of 2005",
      company: "Founder & CEO, StartupTech",
      text: "UVCE not only taught me engineering but also instilled entrepreneurial thinking. The supportive environment and quality education helped me build my own company.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* History and Legacy */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-600">History & Legacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
                  alt="UVCE Historic Building"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Established in 1917, University Visvesvaraya College of Engineering stands as a testament to over a century of academic excellence in engineering education. Named after Sir M. Visvesvaraya, the father of modern Indian engineering, UVCE has been instrumental in shaping India's technological landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From its humble beginnings with just a few departments, UVCE has grown into one of India's most prestigious engineering institutions. Our alumni have contributed significantly to India's space program, IT revolution, and industrial development.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The institution's commitment to innovation, research, and holistic development continues to inspire generations of engineers who go on to become leaders in their respective fields.
              </p>
            </CardContent>
          </Card>

          {/* Testimonials */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-600">Testimonials</CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full">
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="p-6 space-y-4">
                        <Quote className="h-8 w-8 text-orange-600" />
                        <p className="text-muted-foreground italic leading-relaxed">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center space-x-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="font-semibold text-primary">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                            <div className="text-sm text-orange-600">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HistoryTestimonialsSection;
