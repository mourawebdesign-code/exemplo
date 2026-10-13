"use client";
import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { EXPERIENCE } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import s from "./Experience.module.css";

/** Galeria em leque: os 3 momentos ficam empilhados e levemente rotacionados
 * como um baque de cartas, cada um saindo um pouco mais para o lado e para
 * baixo conforme se afasta do centro. Hover levanta e endireita o card por
 * cima dos demais. Abaixo, a jornada da paciente em 4 etapas conectadas por
 * uma linha fina que se desenha quando a seção entra na tela. */
const ROTATE_STEP = 6;
const OVERLAP = 0.58;
const HOVER_SCALE = 1.06;
const HOVER_LIFT = 16;

/** Largura do card recalculada no resize (não em breakpoints fixos), como
 * fração do viewport, dentro de um piso/teto — mesmo espírito de um
 * clamp() de CSS, só que em JS porque a matemática do leque (translateX
 * proporcional à largura do card) precisa do valor em px. */
function useCardWidth() {
  const [width, setWidth] = useState(320);
  useEffect(() => {
    /* Mobile (<768): o leque ocupa a largura útil da tela (stage ≈ 2,4x o card
       + rotação), em vez de ficar num card mínimo fixo; desktop/tablet seguem
       a fração do viewport. */
    const calc = () => {
      const w = window.innerWidth;
      setWidth(w < 768 ? Math.min(220, (w - 40) / 2.5) : Math.min(320, Math.max(130, w * 0.22)));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);
  return width;
}

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [hovered, setHovered] = useState<number | null>(null);
  const cardWidth = useCardWidth();
  const cardHeight = cardWidth * (4 / 3);
  const yStep = cardHeight * 0.056;

  const photos = EXPERIENCE.photos;
  const total = photos.length;
  const mid = (total - 1) / 2;
  const stageWidth = cardWidth + Math.abs(mid) * 2 * cardWidth * OVERLAP + cardWidth * 0.2;
  const stageHeight = cardHeight + Math.abs(mid) * yStep + 48;

  return (
    <section className={s.section}>
      <div className={`${s.inner} ${visible ? s.visible : ""}`} ref={ref}>
        <div className={s.head}>
          <span className="eyebrow">{EXPERIENCE.eyebrow}</span>
          <h2 className={s.heading}>{EXPERIENCE.heading}</h2>
          <p className={s.body}>{EXPERIENCE.body}</p>
        </div>

        <div className={s.stageWrap}>
          <div className={s.stage} style={{ width: stageWidth, height: stageHeight }} role="group" aria-label="Momentos no Spa Paula Melo">
            {photos.map((it, i) => {
              const offset = i - mid;
              const rotate = offset * ROTATE_STEP;
              const translateY = Math.abs(offset) * yStep;
              const translateX = offset * cardWidth * OVERLAP;
              const baseZ = total - Math.abs(offset);
              const isHovered = hovered === i;

              const cardStyle: CSSProperties = {
                width: cardWidth,
                height: cardHeight,
                marginLeft: -cardWidth / 2,
                marginTop: -cardHeight / 2,
                transform: isHovered
                  ? `translate(${translateX}px, ${translateY - HOVER_LIFT}px) rotate(0deg) scale(${HOVER_SCALE})`
                  : `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(1)`,
                zIndex: isHovered ? total + 1 : baseZ,
              };

              return (
                <div
                  key={it.n}
                  className={s.card}
                  style={cardStyle}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(i)}
                  onBlur={() => setHovered(null)}
                  tabIndex={0}
                  aria-label={it.alt}
                >
                  <Image
                    src={`/images/spapaulamelo/${it.file}`}
                    alt={it.alt}
                    fill
                    sizes="(max-width:767px) 50vw, 320px"
                    quality={95}
                    className={s.img}
                    style={{ objectPosition: it.position }}
                    draggable={false}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <ol className={s.journey}>
          {EXPERIENCE.items.map((it, i) => (
            <li key={it.n} className={s.step} style={{ ["--i" as string]: i }}>
              <div className={s.marker} aria-hidden="true">
                <span className={s.dot} />
                <span className={s.line} />
              </div>
              <span className={s.n}>{it.n}</span>
              <h3 className={s.title}>{it.title}</h3>
              <p className={s.text}>{it.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
