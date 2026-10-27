import React from "react";
import AboutHero from "./AboutHero";
import MissionVision from "./MissionVision";
import VisionPillars from "./VisionPillars";
import CoreValues from "./CoreValues";
import YouthAuthors from "./YouthAuthors";
import TeamSection from "./TeamSection";

export default function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <MissionVision />
      <VisionPillars />
      <CoreValues />
      <YouthAuthors />
      <TeamSection />
    </main>
  );
}