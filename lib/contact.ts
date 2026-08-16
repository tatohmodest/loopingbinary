export const WHATSAPP_E164 = "237650318856";
export const EMAIL = "hello@loopingbinary.com";
export const SUBJECT = "Project inquiry — Looping Binary";

export function composeInquiry(input: {
  name?: string;
  company?: string;
  need?: string;
}) {
  return [
    "Hello Looping Binary,",
    "",
    "I want to start a project with you.",
    "",
    `Name: ${input.name?.trim() || "—"}`,
    `Company: ${input.company?.trim() || "—"}`,
    `What we need: ${input.need?.trim() || "—"}`,
    "",
    "Sent from loopingbinary.com",
  ].join("\n");
}

export function whatsappUrl(text: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

export function mailUrl(text: string, subject = SUBJECT) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}
