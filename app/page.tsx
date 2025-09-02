"use client";

import { useState } from "react";
import ResponsiveImageCard from "@/components/ResponsiveImageCard";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import HighlightsSection from "@/components/HighlightsSection";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [videoId, setVideoId] = useState<string | null>(null);

  return (
    <>
      {/* Main component with background */}
      <main className="relative min-h-screen overflow-hidden">
        {/* Enhanced background with more visible gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-rose-100 via-white to-rose-100">
          {/* More visible decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute top-1/3 right-[-5rem] w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
          <div className="absolute bottom-[-6rem] left-1/4 w-80 h-80 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>

          {/* Additional decorative elements */}
          <div className="absolute top-[-40px] left-[-40px] w-64 h-64 bg-rose-200 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-60px] right-[-60px] w-80 h-80 bg-rose-300 rounded-full blur-3xl opacity-40"></div>
        </div>

        <HeroSection />

        {/* Inspiring Stories Section */}
        <section id="inspiring" className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-heading font-bold text-brand-dark mb-12">
              Inspiring Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ResponsiveImageCard
                src="/images/marylydia.png"
                alt="Mary"
                title="Mary"
                shortDescription="Her story embodies resilience and compassion."
                longDescription="Mary, a resilient mother of two living with disability, cares for her disabled daughter Lydia and also supports her young orphaned niece after losing her sister and their caregiver. Despite hardships, her determination embodies the heart of AbleHearts."
                onWatch={() => setVideoId("XEoekzHT3rE")}
                index={0}
              />

              <ResponsiveImageCard
                src="/images/lydia.png"
                alt="Lydia"
                title="Lydia"
                shortDescription="Her journey inspires giving without borders."
                longDescription="Lydia, a single mother living with physical challenges, struggles with urgent medical needs for leg wounds while raising her child. Her courage and willpower stand as a beacon of hope to others facing adversity."
                onWatch={() => setVideoId("iwoxJxv6sl8")}
                index={1}
              />
            </div>
          </div>
        </section>

        <MissionSection />
        <HighlightsSection />
      </main>

      <VideoModal videoId={videoId} setVideoId={setVideoId} />
    </>
  );
}
