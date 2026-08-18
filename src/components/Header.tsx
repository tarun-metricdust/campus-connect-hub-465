import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Search, GraduationCap, ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  onLoginClick: () => void;
}

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Departments", href: "/departments" },
  { name: "Faculty", href: "/faculty" },
  { name: "Activities", href: "/activities" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Achievements", href: "/achievements" },
];

const utilityLinks = [
  { name: "Admissions", href: "/departments" },
  { name: "Alumni", href: "/achievements" },
  { name: "Contact", href: "/about" },
];

const Header = ({ onLoginClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname === href;

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* Utility bar */}
      <div className="hidden md:block bg-ink text-ink-foreground">
        <div className="container-editorial flex h-9 items-center justify-between text-[13px]">
          <span className="text-ink-foreground/70">
            {siteConfig.affiliation} &middot; Est. {siteConfig.establishedYear}
          </span>
          <nav className="flex items-center gap-6" aria-label="Utility">
            {utilityLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-ink-foreground/80 transition-colors hover:text-ink-foreground"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={onLoginClick}
              className="flex items-center gap-1.5 text-ink-foreground/80 transition-colors hover:text-ink-foreground"
            >
              Login
            </button>
          </nav>
        </div>
      </div>

      {/* Masthead */}
      <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="container-editorial">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="flex items-center gap-3 min-w-0">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary text-primary-foreground md:h-11 md:w-11">
                <GraduationCap className="h-6 w-6" />
              </span>
              <span className="flex min-w-0 flex-col leading-tight">
                <span className="font-serif text-lg font-bold tracking-tight text-foreground md:text-2xl">
                  {siteConfig.shortName}
                </span>
                <span className="truncate text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:text-xs">
                  {siteConfig.fullName}
                </span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="hidden md:inline-flex text-muted-foreground hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                onClick={onLoginClick}
                className="hidden md:inline-flex rounded-none bg-primary px-6 hover:bg-primary-dark"
              >
                Student Login
              </Button>

              {/* Mobile trigger */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" aria-label="Open menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full max-w-sm border-l-0 bg-ink p-0 text-ink-foreground [&>button]:hidden"
                >
                  <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
                    <span className="font-serif text-xl font-bold">{siteConfig.shortName}</span>
                    <button
                      onClick={() => setIsOpen(false)}
                      aria-label="Close menu"
                      className="p-2 text-ink-foreground/70 hover:text-ink-foreground"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <nav className="flex flex-col overflow-y-auto pb-8" aria-label="Mobile">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between border-b border-white/10 px-5 py-4 text-lg transition-colors ${
                          isActive(item.href)
                            ? "bg-primary/90 font-semibold text-primary-foreground"
                            : "text-ink-foreground/90 hover:bg-white/5"
                        }`}
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    ))}

                    <div className="px-5 pt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground/50">
                        Quick links
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {utilityLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className="border border-white/20 px-3 py-1.5 text-sm text-ink-foreground/80"
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                      <Button
                        onClick={() => {
                          setIsOpen(false);
                          onLoginClick();
                        }}
                        className="mt-6 w-full rounded-none bg-primary py-6 text-base hover:bg-primary-dark"
                      >
                        Student Login
                      </Button>
                      <p className="mt-6 text-sm text-ink-foreground/60">
                        {siteConfig.contact.phone}
                        <br />
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Primary navigation (desktop) */}
      <nav
        className="hidden md:block border-b border-border bg-surface"
        aria-label="Primary"
      >
        <div className="container-editorial">
          <ul className="flex items-stretch gap-1 overflow-x-auto no-scrollbar">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`relative flex h-12 items-center whitespace-nowrap px-4 text-sm font-semibold tracking-wide transition-colors ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-2 bottom-0 h-[3px] bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
