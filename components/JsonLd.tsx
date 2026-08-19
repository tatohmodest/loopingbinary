import { EMAIL, WHATSAPP_E164 } from "@/lib/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: SITE_NAME,
        alternateName: ["LoopingBinary", "LB", "Looping Binary Douala"],
        url: SITE_URL,
        logo: `${SITE_URL}/lblogo/infinity.png`,
        email: EMAIL,
        telephone: `+${WHATSAPP_E164}`,
        slogan: "We Build. We Grow. We Train.",
        foundingDate: "2024",
        founder: {
          "@type": "Person",
          name: "Tatoh Modest Wilton",
          alternateName: ["Modest Wilton", "Tatoh Modest"],
          url: "https://tatohmodest.vercel.app",
          image: `${SITE_URL}/assets/team/tatoh-modest-wilton.jpg`,
          sameAs: [
            "https://www.linkedin.com/in/tatoh-modest-97036a212/",
            "https://github.com/tatohmodest",
          ],
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Douala",
          addressRegion: "Littoral",
          addressCountry: "CM",
        },
        areaServed: ["CM", "Africa", "United States"],
        sameAs: [
          SITE_URL,
          "https://www.linkedin.com/company/looping-binary/",
          "https://web.facebook.com/profile.php?id=61586371936567",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#studio`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/assets/og-loopingbinary.png`,
        description: SITE_DESCRIPTION,
        priceRange: "$$",
        telephone: `+${WHATSAPP_E164}`,
        email: EMAIL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Douala",
          addressRegion: "Littoral",
          addressCountry: "CM",
        },
        areaServed: ["CM", "Africa"],
        knowsAbout: [
          "Web development",
          "Mobile development",
          "Product design",
          "Marketplaces",
          "Education software",
          "EdTech",
          "Authentication",
          "Digital transformation",
          "Developer training",
          "Junior Dev programs",
          "The Loop education-to-product model",
          "African technology ecosystem",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Looping Binary services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software & Web Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile Development" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "EdTech & Digital Learning" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technology Training" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Developer Programs" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Solutions" } },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: ["en", "fr"],
        publisher: { "@id": `${SITE_URL}/#org` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/work?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
