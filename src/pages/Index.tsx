
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnnouncementSection from "@/components/AnnouncementSection";
import DepartmentSection from "@/components/DepartmentSection";
import FacultySection from "@/components/FacultySection";
import ActivitiesSection from "@/components/ActivitiesSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection />
      <AnnouncementSection />
      <DepartmentSection />
      <FacultySection />
      <ActivitiesSection />
      <InfrastructureSection />
      <AchievementsSection />
      <Footer />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
};

export default Index;
