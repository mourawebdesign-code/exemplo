"use client";
import Image from "next/image";
import { VISIT_CTA, WHATSAPP_HREF } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./VisitCta.module.css";

/** CTA final: mesmo sistema visual do banner "Não sabe por onde começar?"
 * (foto, véu escuro, headline em 2 blocos, descrição e botão branco),
 * fechando a jornada com a chamada para o WhatsApp. */
export default function VisitCta() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.3);

  return (
    <section id="visit" className={s.wrapper}>
      <div className={`${s.frame} ${visible ? s.visible : ""}`} ref={ref}>
        <Image
          src={VISIT_CTA.image.src}
          alt={VISIT_CTA.image.alt}
          fill
          sizes="100vw"
          quality={95}
          className={s.image}
        />
        <div className={s.overlay} />
        <div className={s.content}>
          <h2 className={s.headline}>
            <span className={s.line}>
              {VISIT_CTA.headingPre} <span className={s.hl}>{VISIT_CTA.headingHighlight}</span>
            </span>{" "}
            <span className={s.line}>{VISIT_CTA.headingLine2}</span>
          </h2>
          <p className={s.body}>{VISIT_CTA.body}</p>
          <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${s.cta}`}>
            {VISIT_CTA.button}
          </a>
        </div>
      </div>
    </section>
  );
}
