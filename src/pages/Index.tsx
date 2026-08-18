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
      <main>
        <HeroSection />

        {/* Notices and quick access */}
        <section className="border-b border-border bg-background py-12 md:py-16">
          <div className="container-editorial">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
              <div>
                <AnnouncementSection />
              </div>
              <div>
                <h2 className="section-rule font-serif text-2xl font-bold text-foreground md:text-3xl">
                  Explore the College
                </h2>
                <QuickAccessBoxes />
              </div>
            </div>
          </div>
        </section>

        <InfoTabsSection />
        <HistoryTestimonialsSection />
        <EventsGallerySection />
        <RecruitersSection />
      </main>
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Index;
