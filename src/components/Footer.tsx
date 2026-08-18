import { GraduationCap, Phone, Mail, MapPin, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Academics",
    links: [
      { name: "Departments", href: "/departments" },
      { name: "Undergraduate Programs", href: "/departments" },
      { name: "Postgraduate Programs", href: "/departments" },
      { name: "Faculty", href: "/faculty" },
      { name: "Academic Calendar", href: "#" },
      { name: "Examination", href: "#" },
    ],
  },
  {
    title: "Student Life",
    links: [
      { name: "Clubs & Societies", href: "/activities" },
      { name: "Technical Festival", href: "/activities" },
      { name: "Cultural Festival", href: "/activities" },
      { name: "Sports & Recreation", href: "/infrastructure" },
      { name: "Hostels", href: "/infrastructure" },
      { name: "Student Services", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { name: "Admissions", href: "#" },
      { name: "Placements", href: "/achievements" },
      { name: "Alumni Association", href: "#" },
      { name: "Research & Development", href: "#" },
      { name: "IQAC", href: "#" },
      { name: "Contact Us", href: "/about" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-editorial py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center bg-primary text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span>
                <span className="block font-serif text-xl font-bold">{siteConfig.shortName}</span>
                <span className="block text-xs uppercase tracking-[0.14em] text-ink-foreground/60">
                  Est. {siteConfig.establishedYear}
                </span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-ink-foreground/75">
              {siteConfig.footer.description}
            </p>
            <ul className="space-y-3 text-sm text-ink-foreground/80">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary-light" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-ink-foreground">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary-light" />
                <a href={`mailto:${siteConfig.contact.email}`} className="break-all hover:text-ink-foreground">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="h-4 w-4 shrink-0 text-primary-light" />
                <span>{siteConfig.contact.website}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary-light" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3 className="mb-4 border-b border-white/15 pb-2 font-serif text-base font-semibold uppercase tracking-[0.1em]">
                {column.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-ink-foreground/75">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="transition-colors hover:text-ink-foreground">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-8 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>&copy; {siteConfig.footer.copyright}</p>
          <p>
            Affiliated to {siteConfig.affiliation} &middot; {siteConfig.accreditation}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
