import ImpactHero from "./ImpactHero";
import ImpactApproach from "./ImpactApproach";
import ImpactPartnerships from "./ImpactPartnerships";
import ImpactExtraBottom from "./ImpactExtraBottom";
import ImpactPublications from "./ImpactPublications";
import ImpactPurposeAndCTA from "./ImpactPurposeAndCTA";

export default function Impact() {
  return (
    <main className="impact-page">
      <ImpactHero />
      <ImpactApproach />
      <ImpactPartnerships />
      <ImpactExtraBottom />
      <ImpactPublications />
      <ImpactPurposeAndCTA />
    </main>
  );
}