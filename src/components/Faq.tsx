"use client";
import { useState } from "react";
import { FAQ } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Faq.module.css";

/** FAQ com abas por categoria + accordion: cabeçalho centralizado, abas com
 * preenchimento que desliza, itens arredondados com "+" que gira ao abrir.
 * Uma pergunta aberta por vez; trocar de aba fecha a pergunta aberta. */
export default function Faq() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.1);
  const [group, setGroup] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const current = FAQ.groups[group];

  function selectGroup(i: number) {
    if (i === group) return;
    setGroup(i);
    setOpen(null);
  }

  return (
    <section id="faq" className={s.section}>
      <div className={`${s.inner} ${visible ? s.visible : ""}`} ref={ref}>
        <div className={s.head}>
          <span className={`eyebrow ${s.eyebrow}`}>{FAQ.eyebrow}</span>
          <h2 className={s.heading}>{FAQ.heading}</h2>
        </div>

        <div className={s.tabs} role="tablist" aria-label="Categorias de perguntas">
          {FAQ.groups.map((g, i) => (
            <button
              key={g.key}
              type="button"
              role="tab"
              aria-selected={i === group}
              className={`${s.tab} ${i === group ? s.tabActive : ""}`}
              onClick={() => selectGroup(i)}
            >
              <span className={s.tabLabel}>{g.label}</span>
              <span className={s.tabFill} aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className={s.list} key={current.key}>
          {current.items.map((it, i) => {
            const isOpen = open === i;
            const id = `${current.key}-${i}`;
            return (
              <div key={it.q} className={`${s.item} ${isOpen ? s.open : ""}`}>
                <h3 className={s.qWrap}>
                  <button
                    type="button"
                    className={s.q}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${id}`}
                    id={`faq-q-${id}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className={s.qText}>{it.q}</span>
                    <svg className={s.plus} viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </button>
                </h3>
                <div id={`faq-a-${id}`} role="region" aria-labelledby={`faq-q-${id}`} className={s.a}>
                  <div className={s.aInner}>
                    <p className={s.aText}>{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
