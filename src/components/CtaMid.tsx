"use client";
import { CTA_MID, WHATSAPP_HREF } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./CtaMid.module.css";

export default function CtaMid() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  return (
    <section className={s.section}>
      <div className={`${s.inner} ${visible ? s.visible : ""}`} ref={ref} data-reveal>
        <p className={s.text}>{CTA_MID.text}</p>
        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{CTA_MID.button}</a>
      </div>
    </section>
  );
}
