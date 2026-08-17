import { GraduationCap, Phone, Mail, MapPin, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-uvce-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <div>
                <span className="text-xl font-bold">{siteConfig.shortName}</span>
                <div className="text-sm opacity-90">Est. {siteConfig.establishedYear}</div>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              {siteConfig.footer.description}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{siteConfig.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{siteConfig.contact.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>{siteConfig.contact.website}</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="/departments" className="hover:text-white transition-colors">Departments</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Undergraduate Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Postgraduate Programs</a></li>
              <li><a href="/faculty" className="hover:text-white transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Academic Calendar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Examination</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Student Life</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="/activities" className="hover:text-white transition-colors">Clubs & Societies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pravega - Tech Fest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Utkarshra - Cultural Fest</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports & Recreation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hostels</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li><a href="#" className="hover:text-white transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Placements</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Association</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research & Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">IQAC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-white/90">
          <p>&copy; {siteConfig.footer.copyright}</p>
          <p className="mt-2">Affiliated to {siteConfig.affiliation} | {siteConfig.accreditation}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
