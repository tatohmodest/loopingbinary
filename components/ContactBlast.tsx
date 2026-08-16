"use client";

import { useMemo, useState } from "react";
import { composeInquiry, mailUrl, whatsappUrl } from "@/lib/contact";

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
      <p className="blast-kicker">Douala · WhatsApp · Email</p>
      <h2 id="contact-title">Say it.</h2>
      <p className="blast-sub">
        Tap WhatsApp or email and the message is already written. Fill the
        lines if you want it to arrive with your name on it.
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
        loopingbinary@gmail.com
      </a>
    </section>
  );
}
