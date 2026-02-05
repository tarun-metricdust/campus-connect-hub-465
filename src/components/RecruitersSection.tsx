
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RecruitersSection = () => {
  const recruiters = [
    { name: "Infosys", logo: "https://logo.clearbit.com/infosys.com" },
    { name: "TCS", logo: "https://logo.clearbit.com/tcs.com" },
    { name: "Wipro", logo: "https://logo.clearbit.com/wipro.com" },
    { name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", logo: "https://logo.clearbit.com/google.com" },
    { name: "Amazon", logo: "https://logo.clearbit.com/amazon.com" },
    { name: "IBM", logo: "https://logo.clearbit.com/ibm.com" },
    { name: "Oracle", logo: "https://logo.clearbit.com/oracle.com" },
    { name: "Accenture", logo: "https://logo.clearbit.com/accenture.com" },
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Our Recruiters</CardTitle>
            <p className="text-xl text-muted-foreground mt-4">
              Leading companies that trust UVCE graduates
            </p>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll items-center" style={{ width: 'max-content' }}>
                {[...recruiters, ...recruiters].map((company, index) => (
                  <div key={index} className="flex-shrink-0 w-32 h-16 mx-6 flex items-center justify-center bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-24 max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/120x60/f3f4f6/6b7280?text=${company.name}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RecruitersSection;
