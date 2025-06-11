
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import OverviewSection from "@/components/OverviewSection";
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
      
      {/* Announcements, Overview and Quick Access Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <AnnouncementSection />
            <OverviewSection />
            <QuickAccessBoxes />
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
