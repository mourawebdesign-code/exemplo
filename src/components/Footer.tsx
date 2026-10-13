"use client";
import Image from "next/image";
import { FOOTER, BRAND } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import { onAnchorClick } from "@/lib/scroll";
import SocialLogos from "./SocialLogos";
import s from "./Footer.module.css";

export default function Footer() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={`${s.top} ${visible ? s.visible : ""}`} ref={ref}>
          <div className={s.brand} data-reveal>
            <Image
              src="/images/spapaulamelo/logo-spa-paula-melo.png"
              alt={BRAND.name}
              width={953}
              height={256}
              quality={100}
              className={s.logo}
            />
            <p className={s.institutional}>{FOOTER.institutional}</p>
            <p className={s.headline}>
              {FOOTER.headline[0]}
              <br />
              <span className={s.headlineAccent}>{FOOTER.headline[1]}</span>
            </p>
            <SocialLogos />
          </div>

          <div className={s.navGroup}>
            <div className={s.col} data-reveal style={{ ["--i" as string]: 1 }}>
              <h3 className={s.colHeading}>Spa</h3>
              <nav className={s.colLinks} aria-label="Navegação do rodapé">
                {FOOTER.clinicLinks.map((l) => (
                  <a key={l.label} href={l.href} className={s.link} onClick={onAnchorClick}>{l.label}</a>
                ))}
              </nav>
            </div>

            <div className={s.col} data-reveal style={{ ["--i" as string]: 2 }}>
              <h3 className={s.colHeading}>Massagens</h3>
              <nav className={s.colLinks} aria-label="Massagens">
                {FOOTER.treatmentLinks.map((l) => (
                  <a key={l.label} href={l.href} className={s.link} onClick={onAnchorClick}>{l.label}</a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className={s.divider} />

        <div className={s.bottom}>
          <span className={s.copy}>
            {FOOTER.copyright}
            <span className={s.dot} aria-hidden="true">·</span>
            {FOOTER.rightsLine}
          </span>
          <div className={s.legal}>
            {FOOTER.legalLinks.map((l, i) => (
              <span key={l.label} className={s.legalItem}>
                {i > 0 && <span className={s.dot} aria-hidden="true">·</span>}
                <a href={l.href} className={s.legalLink}>{l.label}</a>
              </span>
            ))}
            <span className={s.legalItem}>
              <span className={s.dot} aria-hidden="true">·</span>
              <span className={s.conceptNote}>{FOOTER.conceptNote}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
