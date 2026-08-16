import type { Metadata } from "next";
import ContactBlast from "@/components/ContactBlast";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project with Looping Binary. Douala, Cameroon. WhatsApp +237 650 318 856. hello@loopingbinary.com",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main id="main">
      <ContactBlast />
    </main>
  );
}
