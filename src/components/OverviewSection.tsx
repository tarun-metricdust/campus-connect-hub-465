
import { Card, CardContent } from "@/components/ui/card";

const OverviewSection = () => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-uvce-primary">Overview & History</h3>
        <div className="space-y-4">
          <div className="aspect-video w-full mb-4 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop"
              alt="UVCE Historic Building"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            University Visvesvaraya College of Engineering (UVCE), established in 1917, stands as one of India's premier engineering institutions. Named after the legendary engineer Sir M. Visvesvaraya, the college has been at the forefront of technical education for over a century.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Located in the heart of Bangalore, UVCE has produced distinguished engineers, entrepreneurs, and leaders who have contributed significantly to India's technological advancement. The institution continues to uphold its tradition of excellence in engineering education.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            With state-of-the-art facilities, renowned faculty, and strong industry connections, UVCE remains committed to nurturing innovative minds and shaping the future of engineering in India.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OverviewSection;
