import HeroSection from "./components/HeroSection";
import React from 'react';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[rgb(18,18,18)] ">
    <container className="container mx-auto px-12 py-4">
    <HeroSection/>
    </container>
    </main>
  );
}
