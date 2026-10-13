"use client";
import Image from "next/image";
import { SPECIALIST } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Specialist.module.css";

export default function Specialist() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="specialist" className={s.section}>
      <div className={s.inner}>
        <div className={`${s.grid} ${visible ? s.visible : ""}`} ref={ref}>
          <div className={s.mediaCol} data-reveal>
            <div className={s.portrait}>
              <Image
                src={SPECIALIST.portrait.src}
                alt={SPECIALIST.portrait.alt}
                fill
                sizes="(max-width:1023px) 90vw, 40vw"
                quality={100}
                className={s.portraitImg}
              />
            </div>
          </div>

          <div className={s.copy}>
            <span className="eyebrow" data-reveal>{SPECIALIST.eyebrow}</span>
            <h2 className={s.name} data-reveal>{SPECIALIST.name}</h2>
            <p className={s.role} data-reveal>{SPECIALIST.role}</p>

            <blockquote className={s.quote} data-reveal>“{SPECIALIST.quote}”</blockquote>

            <p className={s.bio} data-reveal>{SPECIALIST.bio}</p>

            <ul className={s.credentials}>
              {SPECIALIST.credentials.map((c, i) => (
                <li key={c} className={s.row} data-reveal style={{ ["--i" as string]: i }}>
                  <span className={s.text}>{c}</span>
                </li>
              ))}
            </ul>

            <dl className={s.stats}>
              {SPECIALIST.stats.map((st, i) => (
                <div key={st.label} className={s.stat} data-reveal style={{ ["--i" as string]: i + SPECIALIST.credentials.length }}>
                  <dt className={s.statValue}>{st.value}</dt>
                  <dd className={s.statLabel}>{st.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
