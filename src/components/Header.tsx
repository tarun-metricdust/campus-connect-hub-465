import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, GraduationCap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  onLoginClick: () => void;
}

const Header = ({ onLoginClick }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Departments", href: "/departments" },
    { name: "Faculty", href: "/faculty" },
    { name: "Activities", href: "/activities" },
    { name: "Infrastructure", href: "/infrastructure" },
    { name: "Achievements", href: "/achievements" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-uvce-primary" />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary">{siteConfig.shortName}</span>
              <span className="text-xs text-muted-foreground hidden sm:block">{siteConfig.fullName}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.href) 
                    ? "text-uvce-primary font-semibold" 
                    : "text-muted-foreground hover:text-uvce-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button onClick={onLoginClick} variant="outline" className="hidden sm:flex border-uvce-primary text-uvce-primary hover:bg-uvce-primary-50">
              Login
            </Button>
            
            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`transition-colors duration-200 ${
                        isActive(item.href) 
                          ? "text-uvce-primary font-semibold" 
                          : "text-muted-foreground hover:text-uvce-primary"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button onClick={onLoginClick} variant="outline" className="mt-4 border-uvce-primary text-uvce-primary hover:bg-uvce-primary-50">
                    Login
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
