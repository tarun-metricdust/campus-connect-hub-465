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
    { name: "Cognizant", logo: "https://logo.clearbit.com/cognizant.com" },
  ];

  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="container-editorial">
        <div className="mb-8 text-center">
          <p className="eyebrow mb-2">Careers</p>
          <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
            Where our graduates go
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Leading organisations that recruit from our campus each year.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-border bg-background py-6">
        <div className="flex animate-scroll items-center" style={{ width: "max-content" }}>
          {[...recruiters, ...recruiters].map((company, index) => (
            <div
              key={index}
              className="mx-5 flex h-14 w-28 shrink-0 items-center justify-center sm:mx-8 sm:w-32"
            >
              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="max-h-10 max-w-24 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;
