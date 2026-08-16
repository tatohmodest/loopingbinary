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
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo.svg`,
        email: EMAIL,
        telephone: `+${WHATSAPP_E164}`,
        slogan: "We Build. We Grow. We Train.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Douala",
          addressCountry: "CM",
        },
        areaServed: ["CM", "Africa", "United States"],
        sameAs: ["https://loopingbinary.com"],
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
          addressCountry: "CM",
        },
        knowsAbout: [
          "Web development",
          "Product design",
          "Marketplaces",
          "Education software",
          "Authentication",
          "Developer training",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#site`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: ["en", "fr"],
        publisher: { "@id": `${SITE_URL}/#org` },
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
