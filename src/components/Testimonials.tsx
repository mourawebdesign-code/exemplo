"use client";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { TESTIMONIALS } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Testimonials.module.css";

const AUTOPLAY_MS = 5500;

function Stars({ value }: { value: number }) {
  return (
    <span className={s.stars} role="img" aria-label={`${value} de 5 estrelas`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={i < value ? s.starOn : s.starOff} aria-hidden="true">
          <path d="M10 1.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6L10 15l-5.4 3 1.2-6L1.3 7.8l6.1-.7L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ t }: { t: (typeof TESTIMONIALS.items)[number] }) {
  return (
    <article className={s.card}>
      <div className={s.author}>
        <span className={s.avatar} aria-hidden="true">{t.name.charAt(0)}</span>
        <div className={s.who}>
          <span className={s.name}>{t.name}</span>
          <span className={s.when}>{t.when}</span>
        </div>
      </div>
      <Stars value={t.stars} />
      <p className={s.quote}>{t.quote}</p>
    </article>
  );
}

/** Quantos cards cabem por vez: 3 (desktop), 2 (tablet), 1 (mobile). */
function usePerView() {
  const [pv, setPv] = useState(3);
  useEffect(() => {
    const calc = () => setPv(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return pv;
}

/** Carrossel automático de avaliações: avança um card por vez, pausa no hover
 * ou foco, volta ao início ao chegar no fim e respeita prefers-reduced-motion. */
export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const items = TESTIMONIALS.items;
  const pv = usePerView();
  const maxIndex = items.length - pv;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const current = Math.min(index, maxIndex);
  /* Swipe no toque: arrastar > 40px horizontalmente troca de avaliação,
     sem atrapalhar a rolagem vertical (só reage se o gesto for mais
     horizontal que vertical). */
  const touch = useRef<{ x: number; y: number } | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const t = touch.current;
    touch.current = null;
    setPaused(false);
    if (!t) return;
    const dx = e.changedTouches[0].clientX - t.x;
    const dy = e.changedTouches[0].clientY - t.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
    setIndex((i) => {
      const cur = Math.min(i, maxIndex);
      return dx < 0 ? Math.min(maxIndex, cur + 1) : Math.max(0, cur - 1);
    });
  };

  const next = useCallback(() => setIndex((i) => (Math.min(i, maxIndex) >= maxIndex ? 0 : i + 1)), [maxIndex]);

  useEffect(() => {
    if (paused || reduced || !visible) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduced, visible, next]);

  return (
    <section className={s.section}>
      <div className={`${s.head} ${visible ? s.visible : ""}`} ref={ref} data-reveal>
        <div className={s.summary}>
          <span className={s.score}>{TESTIMONIALS.rating}</span>
          <Stars value={5} />
          <span className={s.summaryLabel}>{TESTIMONIALS.ratingLabel}</span>
        </div>
      </div>

      <div
        className={s.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        role="region"
        aria-roledescription="carrossel"
        aria-label="Avaliações de clientes"
      >
        <div className={s.viewport} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <div className={s.track} style={{ ["--idx" as string]: current, ["--pv" as string]: pv } as CSSProperties}>
            {items.map((t) => <ReviewCard key={t.id} t={t} />)}
          </div>
        </div>

        {/* Mobile: contador no lugar da fileira de 12 pontos. */}
        <div className={s.counter} aria-hidden="true">
          <span className={s.counterNow}>{String(current + 1).padStart(2, "0")}</span>
          <span className={s.counterSep} />
          <span>{String(items.length).padStart(2, "0")}</span>
        </div>

        <div className={s.dots} role="tablist" aria-label="Escolher avaliação">
          {Array.from({ length: maxIndex + 1 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === current}
              aria-label={`Ir para avaliação ${i + 1}`}
              className={`${s.dot} ${i === current ? s.dotActive : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
