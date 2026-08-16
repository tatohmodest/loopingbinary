import KineticHero from "@/components/KineticHero";
import Pillars from "@/components/Pillars";
import WorkFilm from "@/components/WorkFilm";
import ProductStack from "@/components/ProductStack";
import LoopPulse from "@/components/LoopPulse";
import WhyStrip from "@/components/WhyStrip";
import ContactBlast from "@/components/ContactBlast";

export default function Home() {
  return (
    <main id="main">
      <KineticHero />
      <Pillars />
      <WorkFilm />
      <ProductStack />
      <LoopPulse />
      <WhyStrip />
      <ContactBlast />
    </main>
  );
}
