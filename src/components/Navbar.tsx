"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV, HERO, BRAND, WHATSAPP_HREF } from "@/lib/content";
import { onAnchorClick } from "@/lib/scroll";
import s from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Esc fecha o menu; ao crescer para desktop o menu mobile é descartado. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`${s.header} ${scrolled ? s.scrolled : ""} ${open ? s.menuOpen : ""}`}>
      <div className={s.inner}>
        <a href="#top" className={s.logo} aria-label={`Página inicial, ${BRAND.name}`} onClick={onAnchorClick}>
          <Image
            src="/images/spapaulamelo/logo-spa-paula-melo.png"
            alt={BRAND.name}
            width={953}
            height={256}
            priority
            quality={100}
            className={s.logoMark}
          />
        </a>

        <nav className={s.nav} aria-label="Navegação principal">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className={s.link} onClick={onAnchorClick}>{n.label}</a>
          ))}
        </nav>

        <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${s.cta}`}>{HERO.primary}</a>

        <button
          className={s.burger}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${s.bar} ${s.barTop} ${open ? s.barTopOpen : ""}`} />
          <span className={`${s.bar} ${s.barBot} ${open ? s.barBotOpen : ""}`} />
        </button>
      </div>

      {/* Fundo escurecido: toque fora do painel fecha o menu. */}
      <div className={`${s.backdrop} ${open ? s.backdropOpen : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />

      <div className={`${s.mobile} ${open ? s.mobileOpen : ""}`} aria-hidden={!open}>
        {NAV.map((n, i) => (
          <a
            key={n.label}
            href={n.href}
            className={s.mobileLink}
            style={{ ["--i" as string]: i }}
            tabIndex={open ? 0 : -1}
            onClick={(e) => { onAnchorClick(e); setOpen(false); }}
          >
            {n.label}
          </a>
        ))}
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${s.mobileCta}`}
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
        >
          {HERO.primary}
        </a>
      </div>
    </header>
  );
}
