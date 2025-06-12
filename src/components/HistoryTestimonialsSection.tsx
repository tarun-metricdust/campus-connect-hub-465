
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* History and Legacy */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">History & Legacy</h2>
              <p className="text-muted-foreground mb-4">
                Established in 1917, University Visvesvaraya College of Engineering stands as one of India's premier engineering institutions. Named after the legendary engineer Sir M. Visvesvaraya, UVCE has been at the forefront of engineering education for over a century.
              </p>
              <p className="text-muted-foreground mb-6">
                With a rich heritage of producing distinguished engineers, researchers, and leaders, UVCE continues to uphold its tradition of excellence in education and innovation.
              </p>
              <Link to="/about">
                <Button className="bg-uvce-primary hover:bg-uvce-primary-light">
                  Know More
                </Button>
              </Link>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-uvce-primary to-red-900 opacity-90"></div>
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">100+ Years</h3>
                  <p className="text-lg">of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">What Our Alumni Say</h2>
            <Card className="relative">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-uvce-primary mb-4" />
                <blockquote className="text-lg italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="font-semibold text-primary">{testimonials[currentTestimonial].author}</p>
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
                          index === currentTestimonial ? 'bg-uvce-primary' : 'bg-gray-300'
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
