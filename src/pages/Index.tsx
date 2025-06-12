
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import QuickAccessBoxes from "@/components/QuickAccessBoxes";
import InfoTabsSection from "@/components/InfoTabsSection";
import HistoryTestimonialsSection from "@/components/HistoryTestimonialsSection";
import EventsGallerySection from "@/components/EventsGallerySection";
import RecruitersSection from "@/components/RecruitersSection";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection />
      
      {/* Announcements and Quick Access Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="h-full">
              <AnnouncementSection />
            </div>
            <div className="h-full">
              <QuickAccessBoxes />
            </div>
          </div>
        </div>
      </section>

      <InfoTabsSection />
      <HistoryTestimonialsSection />
      <EventsGallerySection />
      <RecruitersSection />
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Index;
