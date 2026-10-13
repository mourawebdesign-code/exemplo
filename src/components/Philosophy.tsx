"use client";
import { PHILOSOPHY } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Philosophy.module.css";

type IconKey = (typeof PHILOSOPHY.features)[number]["icon"];

/* Ícones lineares próprios (24x24), cada um ligado ao que o diferencial diz:
   expressão (rosto sorrindo), planejamento (rosto com linhas de proporção),
   precisão (régua) e acompanhamento (coração, cuidado). Sem biblioteca de
   ícones: SVG inline, como no resto do projeto. */
function FeatureIcon({ icon }: { icon: IconKey }) {
  const common = { viewBox: "0 0 24 24", width: 24, height: 24, fill: "none" as const, "aria-hidden": true };
  const stroke = { stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "expression":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" {...stroke} />
          <path d="M8.5 14.2c1 1.3 2.2 1.9 3.5 1.9s2.5-.6 3.5-1.9" {...stroke} />
          <circle cx="9.3" cy="10" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="14.7" cy="10" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "proportion":
      return (
        <svg {...common}>
          <path d="M12 3.5c-3.6 0-6 2.9-6 6.6 0 3.9 2.4 8.4 6 10.4 3.6-2 6-6.5 6-10.4 0-3.7-2.4-6.6-6-6.6Z" {...stroke} />
          <path d="M12 3.5v17" {...stroke} strokeDasharray="1.6 2.2" />
          <path d="M6.2 9.6h11.6M7.2 15h9.6" {...stroke} strokeDasharray="1.6 2.2" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...common}>
          <rect x="2.5" y="8" width="19" height="8" rx="1.5" {...stroke} />
          <path d="M6.5 8v3M10 8v4.5M13.5 8v3M17 8v4.5" {...stroke} />
        </svg>
      );
    case "care":
      return (
        <svg {...common}>
          <path d="M12 20s-7.5-4.6-7.5-10.3A4.2 4.2 0 0 1 12 7.2a4.2 4.2 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" {...stroke} />
        </svg>
      );
  }
}

function Feature({ f, i }: { f: (typeof PHILOSOPHY.features)[number]; i: number }) {
  return (
    <div className={s.feature} style={{ ["--i" as string]: i }}>
      <span className={s.featureIcon}><FeatureIcon icon={f.icon} /></span>
      <div className={s.featureBody}>
        <h3 className={s.featureTitle}>{f.title}</h3>
        <p className={s.featureText}>{f.text}</p>
      </div>
    </div>
  );
}

export default function Philosophy() {
  const { ref: topRef, visible: topVisible } = useReveal<HTMLDivElement>();
  const { ref: composeRef, visible: composeVisible } = useReveal<HTMLDivElement>(0.1);

  return (
    <section id="philosophy" className={s.section}>
      <div className={s.inner}>
        <div className={`${s.top} ${topVisible ? s.visible : ""}`} ref={topRef}>
          <span className={`eyebrow ${s.eyebrow}`}>{PHILOSOPHY.eyebrow}</span>
          <h2 className={s.heading}>
            {PHILOSOPHY.headingLead}{" "}
            <br />
            {PHILOSOPHY.headingLine2Pre} <span className={s.highlight}>{PHILOSOPHY.headingHighlight}</span>{PHILOSOPHY.headingLine2Post}
          </h2>
          <p className={s.lead}>
            <span className={s.leadFull}>{PHILOSOPHY.lead}</span>
            <span className={s.leadShort}>{PHILOSOPHY.leadShort}</span>
          </p>
        </div>

        <div className={`${s.compose} ${composeVisible ? s.visible : ""}`} ref={composeRef}>
          {/* Foto original, sem zoom nem recompressão; o quadro mostra só a
              faixa inferior da imagem (paciente). */}
          <div className={s.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHILOSOPHY.image.src}
              alt={PHILOSOPHY.image.alt}
              width={PHILOSOPHY.image.w}
              height={PHILOSOPHY.image.h}
              className={s.photoImg}
              decoding="async"
              draggable={false}
            />
          </div>

          {/* Quatro diferenciais como uma só filosofia, em sequência:
              naturalidade → planejamento → precisão → acompanhamento. */}
          <div className={s.features}>
            {PHILOSOPHY.features.map((f, i) => <Feature key={f.title} f={f} i={i} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
