
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HistoryTestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "UVCE provided me with the foundation to excel in my career. The faculty's guidance and the institution's rich heritage shaped my engineering journey.",
      author: "Dr. Rajesh Kumar",
      designation: "Senior Software Engineer, Google",
      year: "Class of 2010"
    },
    {
      text: "The practical approach to learning at UVCE prepared me for real-world challenges. The campus life and academic rigor were perfectly balanced.",
      author: "Priya Sharma",
      designation: "Product Manager, Microsoft",
      year: "Class of 2015"
    },
    {
      text: "UVCE's emphasis on innovation and research helped me develop critical thinking skills that I use every day in my professional life.",
      author: "Arjun Reddy",
      designation: "Research Scientist, ISRO",
      year: "Class of 2008"
    }
  ];

  const historyImages = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
      title: "Historic Campus Building"
    },
    {
      url: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=400&h=250&fit=crop",
      title: "Sir M. Visvesvaraya Legacy"
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
      title: "Engineering Excellence"
    },
    {
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      title: "Modern Facilities"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="border-b border-border bg-background py-12 md:py-16">
      <div className="container-editorial">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* History and Legacy */}
          <div className="space-y-6">
            <div>
              <p className="eyebrow mb-2">Our Heritage</p>
              <h2 className="section-rule font-serif text-2xl font-bold text-foreground md:text-3xl">
                History &amp; Legacy
              </h2>
              <div className="prose-editorial space-y-4">
                <p>
                  Established in 1917, University Visvesvaraya College of Engineering stands as one of India's premier engineering institutions. Named after the legendary engineer Sir M. Visvesvaraya, UVCE has been at the forefront of engineering education for over a century.
                </p>
                <p>
                  With a rich heritage of producing distinguished engineers, researchers, and leaders, UVCE continues to uphold its tradition of excellence in education and innovation.
                </p>
              </div>
              <Link to="/about" className="mt-6 inline-block">
                <Button className="rounded-none bg-primary px-6 hover:bg-primary-dark">
                  Read our story
                </Button>
              </Link>
            </div>

            {/* Image Carousel */}
            <div className="relative">
              <Carousel className="mx-auto w-full">
                <CarouselContent>
                  {historyImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-48 rounded-lg overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-uvce-primary/60 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-sm font-medium">{image.title}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <p className="eyebrow mb-2">Voices</p>
            <h2 className="section-rule font-serif text-2xl font-bold text-foreground md:text-3xl">
              What our alumni say
            </h2>
            <Card className="relative rounded-none border-l-4 border-l-primary bg-surface shadow-none">
              <CardContent className="p-6 sm:p-8">
                <Quote className="mb-4 h-8 w-8 text-primary" />
                <blockquote className="mb-6 font-serif text-lg leading-relaxed text-foreground sm:text-xl">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{testimonials[currentTestimonial].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].designation}</p>
                  <p className="text-xs text-muted-foreground">{testimonials[currentTestimonial].year}</p>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Button variant="outline" size="icon" onClick={prevTestimonial}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentTestimonial ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                  <Button variant="outline" size="icon" onClick={nextTestimonial}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryTestimonialsSection;
