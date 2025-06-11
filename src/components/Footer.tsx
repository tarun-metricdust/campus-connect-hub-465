
import { GraduationCap, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">TechEng College</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Excellence in engineering education, research, and innovation since 1985.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 80 2345 6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@techengcollege.edu</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Tech Campus, Innovation City, Karnataka 560001</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Departments</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Academic Calendar</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Student Life</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Clubs & Societies</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sports</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Hostels</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Student Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Alumni</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 TechEng College. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
