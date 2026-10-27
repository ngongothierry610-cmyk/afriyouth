import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import Programs from "./components/Programs";
import Accountability from "./components/Accountability";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <WhoWeAre />
      <Services />
      <Programs />
      <Accountability />
    </div>
  );
}
