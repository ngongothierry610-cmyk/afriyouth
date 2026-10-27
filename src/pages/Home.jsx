import React from "react";
import Hero from "../components/Hero";
import WhoWeAre from "../components/WhoWeAre";
import Services from "../components/Services";
import Programs from "../components/Programs";
import Accountability from "../components/Accountability";

export default function Home() {
  return (
    <main className="home-page">
      <Hero />
      <WhoWeAre />
      <Services />
      <Programs />
      <Accountability />
    </main>
  );
}