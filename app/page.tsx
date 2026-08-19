import ClearHero from "@/components/ClearHero";
import Pillars from "@/components/Pillars";
import ProjectGallery from "@/components/ProjectGallery";
import ProductLane from "@/components/ProductLane";
import LoopPulse from "@/components/LoopPulse";
import WhyStrip from "@/components/WhyStrip";
import ContactBlast from "@/components/ContactBlast";

export default function Home() {
  return (
    <main id="main">
      <ClearHero />
      <Pillars />
      <ProjectGallery />
      <ProductLane />
      <LoopPulse />
      <WhyStrip />
      <ContactBlast />
    </main>
  );
}
