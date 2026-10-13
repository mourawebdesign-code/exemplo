"use client";
import Image from "next/image";
import { HERO, WHATSAPP_HREF } from "@/lib/content";
import { onAnchorClick } from "@/lib/scroll";
import s from "./Hero.module.css";

/**
 * Composição centralizada em canvas de 2252x1080 (aspect-ratio travado): cada
 * elemento usa % de posição/tamanho e vw de tipografia, então a cena escala
 * inteira em qualquer largura ≥1024px. Abaixo disso, o mesmo palco escala por
 * --u (ver CSS).
 *
 * Camadas: frase de abertura → palavra gigante (inteira e legível) → retrato
 * da Paula, cuja cabeça fica logo ABAIXO da palavra e só os ombros encostam
 * na base das letras → glow branco → descrição e CTAs.
 */
export default function Hero() {
  return (
    <section id="top" className={s.section}>
      <div className={s.canvas}>
        <div className={s.gradientBg} aria-hidden="true" />

        <h1 className={s.headline}>
          <span className={s.lead}>{HERO.lead}</span>
          <span className={s.word}>{HERO.word}</span>
        </h1>

        <div className={s.portrait}>
          <Image
            src="/images/spapaulamelo/hero-paula-melo.png"
            alt="Paula Melo, massoterapeuta do Spa Paula Melo"
            fill
            priority
            quality={95}
            className={s.portraitImg}
            sizes="(max-width:1023px) 90vw, 40vw"
          />
        </div>

        <div className={s.glow} aria-hidden="true">
          <div className={s.glowInner}>
            <Image src="/images/spapaulamelo/hero/glow-ellipse.svg" alt="" fill className={s.glowImg} />
          </div>
        </div>

        {/* body + actions num bloco só (fluxo normal por dentro): se o texto
            quebrar em mais linhas, o CTA desce junto em vez de sobrepor. */}
        <div className={s.footer}>
          <p className={s.body}>{HERO.body}</p>
          <div className={s.actions}>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${s.primary}`}>{HERO.primary}</a>
            <a href={HERO.secondaryHref} className={`btn btn-ghost ${s.ghost}`} onClick={onAnchorClick}>{HERO.secondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
