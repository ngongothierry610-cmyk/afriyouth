import ProgramsHero from "./ProgramsHero";
import ProgramsList from "./ProgramsList";
import ProgramsValue from "./ProgramsValue";
import ProgramsExtraBottom from "./ProgramsExtraBottom";
import ProgramsFAQ from "./ProgramsFAQ";

export default function Programs() {
  return (
    <main className="programs-page">
      <ProgramsHero />
      <ProgramsList />
      <ProgramsValue />
      <ProgramsExtraBottom />
      <ProgramsFAQ />
    </main>
  );
}