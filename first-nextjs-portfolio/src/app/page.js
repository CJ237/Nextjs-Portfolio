import HeroSection from "./components/HeroSection";
import React from "react";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievements from "./components/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(18,18,18)] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <Achievements/>
        <AboutSection/>
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer/>
    </main>
  );
}
