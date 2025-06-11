
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import OverviewSection from "@/components/OverviewSection";
import QuickAccessSection from "@/components/QuickAccessSection";
import InfoTabsSection from "@/components/InfoTabsSection";
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
      
      {/* Announcements and Overview Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <AnnouncementSection />
            <OverviewSection />
          </div>
        </div>
      </section>

      <QuickAccessSection />
      <InfoTabsSection />
      <EventsGallerySection />
      <RecruitersSection />
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Index;
