import SuperMotion from "@/components/motion_compo/SuperMotion";
import HeroSection from "@/components/shared/HeroSection";
import Skills from "@/components/shared/Skills";
import WorkExp from "@/components/shared/WorkExp";
import React from "react";

export default function HomePage() {
  return (
    <SuperMotion>
      <div className="flex flex-col space-y-20">
        <HeroSection />
        <Skills />
        <WorkExp />
      </div>
    </SuperMotion>
  );
}
