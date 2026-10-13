"use client";
import Image from "next/image";
import { RUPTURE, WHATSAPP_HREF } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Rupture.module.css";

/** Banner CTA entre Tratamentos e Especialista: card editorial quase
 * full-width (não mais full-bleed) — headline de 2 linhas + descrição + 1
 * único CTA, sem cards, sem números. */
export default function Rupture() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <section className={s.wrapper}>
      <div className={`${s.frame} ${visible ? s.visible : ""}`} ref={ref}>
        <Image
          src={RUPTURE.image.src}
          alt={RUPTURE.image.alt}
          fill
          sizes="100vw"
          quality={95}
          className={s.image}
        />
        <div className={s.overlay} />
        <div className={s.content}>
          <p className={s.headline}>
            <span className={s.line}>
              {RUPTURE.headingPre} <span className={s.hl}>{RUPTURE.headingHighlight}</span>
            </span>{" "}
            <span className={s.line}>{RUPTURE.headingLine2}</span>
          </p>
          <p className={s.body}>{RUPTURE.body}</p>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${s.cta}`}>
            {RUPTURE.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
