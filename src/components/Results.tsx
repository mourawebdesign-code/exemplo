"use client";
import type { CSSProperties } from "react";
import { RESULTS } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Results.module.css";

type Case = (typeof RESULTS.cases)[number];

/** Antes e depois lado a lado, na horizontal. Imagens "side" são mostradas
 * inteiras, sem recorte nem recompressão (<img> direto no arquivo original,
 * para manter a qualidade máxima). Imagens "stacked" (antes em cima, depois
 * embaixo) são divididas em dois quadros, um ao lado do outro. */
function BeforeAfter({ c }: { c: Case }) {
  const frameStyle = { maxWidth: c.width } as CSSProperties;

  if (c.layout === "stacked") {
    /* Cada metade mantém a proporção real da foto (sem zoom). Metades bem
       horizontais (corpo deitado na maca) ficam uma sobre a outra; as mais
       verticais, lado a lado. */
    const halfRatio = c.w / (c.h / 2);
    const vertical = halfRatio > 1.3;
    const pairStyle = {
      ...frameStyle,
      gridTemplateColumns: vertical ? "1fr" : undefined,
    } as CSSProperties;
    return (
      <div className={s.pair} style={pairStyle}>
        {(["before", "after"] as const).map((which) => (
          <div key={which} className={s.tile} style={{ aspectRatio: `${c.w} / ${c.h / 2}` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={c.image}
              alt={which === "before" ? `${c.treatment}, antes` : `${c.treatment}, depois`}
              className={s.tileImg}
              style={{ [which === "before" ? "top" : "bottom"]: 0 }}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <span className={`${s.tag} ${which === "before" ? s.tagBefore : s.tagAfter}`}>
              {which === "before" ? RESULTS.beforeLabel : RESULTS.afterLabel}
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={s.single} style={frameStyle}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={c.image}
        alt={`${c.treatment}, antes e depois`}
        width={c.w}
        height={c.h}
        className={s.singleImg}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
      <span className={`${s.tag} ${s.tagBefore}`}>{RESULTS.beforeLabel}</span>
      <span className={`${s.tag} ${s.tagAfter}`}>{RESULTS.afterLabel}</span>
    </div>
  );
}

function CaseBlock({ c }: { c: Case }) {
  const { ref, visible } = useReveal<HTMLElement>(0.15);
  return (
    <article ref={ref} className={`${s.case} ${visible ? s.visible : ""}`}>
      <h3 className={s.name}>{c.treatment}</h3>
      <BeforeAfter c={c} />
      <p className={s.text}>{c.text}</p>
    </article>
  );
}

/* Casos clínicos em sequência vertical: nome, descrição e o antes/depois
 * lado a lado em tamanho grande. */
export default function Results() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="results" className={s.section}>
      <div className={`${s.inner} ${visible ? s.visible : ""}`} ref={ref}>
        <div className={s.head} data-reveal>
          <span className="eyebrow">{RESULTS.eyebrow}</span>
          <h2 className={s.heading}>
            <span className={s.line}>{RESULTS.headingLine1}</span>
            <span className={s.line}>
              {RESULTS.headingLine2Pre} <span className={s.hl}>{RESULTS.headingLine2Highlight}</span>
            </span>
          </h2>
          <p className={s.body}>{RESULTS.body}</p>
        </div>
      </div>

      <div className={s.cases}>
        {RESULTS.cases.map((c) => <CaseBlock key={c.slug} c={c} />)}
      </div>
      <p className={s.disclaimer}>{RESULTS.demoDisclaimer}</p>
    </section>
  );
}
