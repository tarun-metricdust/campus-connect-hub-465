import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const HeroSection = () => {
  const stats = [
    siteConfig.hero.stats.departments,
    siteConfig.hero.stats.students,
    siteConfig.hero.stats.faculty,
  ];

  return (
    <section id="home" className="pt-16 md:pt-[140px]">
      {/* Editorial feature banner */}
      <div className="relative">
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden md:h-[70vh]">
          <img
            src="/uvce-campus.jpg"
            alt={`${siteConfig.fullName} campus`}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/20" />
          <div className="absolute inset-0 flex items-center">
            <div className="container-editorial">
              <div className="max-w-2xl py-10 text-ink-foreground">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-foreground/70">
                  Est. {siteConfig.establishedYear} &middot; {siteConfig.affiliation}
                </p>
                <h1 className="font-serif text-3xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
                  {siteConfig.fullName}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/85 sm:text-lg">
                  {siteConfig.hero.subheadline}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    size="lg"
                    className="w-full rounded-none bg-primary px-7 text-base hover:bg-primary-dark sm:w-auto"
                  >
                    {siteConfig.hero.ctaPrimary}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full rounded-none border-ink-foreground/40 bg-transparent px-7 text-base text-ink-foreground hover:bg-ink-foreground hover:text-ink sm:w-auto"
                  >
                    <PlayCircle className="mr-2 h-4 w-4" />
                    {siteConfig.hero.ctaSecondary}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key figures strip */}
        <div className="border-b border-border bg-surface">
          <div className="container-editorial">
            <dl className="grid grid-cols-3 divide-x divide-border">
              {stats.map((stat) => (
                <div key={stat.label} className="px-2 py-6 text-center sm:py-8">
                  <dt className="order-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-normal">
                    {stat.label}
                  </dt>
                  <dd className="font-serif text-2xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
