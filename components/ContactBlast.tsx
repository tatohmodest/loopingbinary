"use client";

import { useMemo, useState } from "react";
import { composeInquiry, EMAIL, mailUrl, whatsappUrl } from "@/lib/contact";

export default function ContactBlast() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [need, setNeed] = useState("");

  const message = useMemo(
    () => composeInquiry({ name, company, need }),
    [name, company, need]
  );

  return (
    <section className="blast" id="contact" aria-labelledby="contact-title">
      <p className="blast-kicker">Douala · WhatsApp · {EMAIL}</p>
      <h2 id="contact-title">Let&apos;s build it.</h2>
      <p className="blast-sub">
        Tell us what you&apos;re trying to build, what problem you&apos;re
        trying to solve, or where the business needs to grow. The message is
        already written when you tap.
      </p>

      <form className="blast-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Name
          <input
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </label>
        <label>
          Company
          <input
            name="company"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company or brand"
          />
        </label>
        <label className="blast-need">
          What you need
          <textarea
            name="need"
            rows={3}
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            placeholder="A site, a product, training, something else"
          />
        </label>
      </form>

      <a
        className="blast-num"
        href={whatsappUrl(message)}
        data-cursor="wa"
        target="_blank"
        rel="noopener noreferrer"
      >
        +237 650 318 856
      </a>
      <a className="blast-mail" href={mailUrl(message)} data-cursor="mail">
        {EMAIL}
      </a>
    </section>
  );
}
