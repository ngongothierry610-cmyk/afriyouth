import ServicesHero from "./ServicesHero";
import ServicesGrid from "./ServicesGrid";
import ServicesValue from "./ServicesValue";
import ServicesExtra from "./ServicesExtra";

export default function Services() {
  return (
    <main className="about-page">
        <ServicesHero />
        <ServicesGrid />
        <ServicesValue />
        <ServicesExtra />
    </main>
  );
}