const express = require("express");
const app = express();

// Serve static files if needed (optional)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Glowup Dental Clinic — Thane's Trusted Dental Clinic</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&family=Figtree:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <style>
      /* ═══════════════════════════════════════
   TOKENS
═══════════════════════════════════════ */
      :root {
        /* Glowup Dental — logo-matched palette */
        --blue: #ff6b00; /* primary CTA  → logo orange */
        --blue-lt: #fff3e8; /* light tint of orange */
        --coral: #e05500; /* darker orange accent */
        --coral-lt: #fff0e0;
        --mint: #ff8c2a; /* warm orange highlight */
        --mint-lt: #fff3e8;
        --amber: #ff6b00; /* stars / gold → same orange */
        --amber-lt: #fff3e8;
        --ink: #111111; /* near-black, like logo bg */
        --ink60: rgba(17, 17, 17, 0.6);
        --ink30: rgba(17, 17, 17, 0.28);
        --ink10: rgba(17, 17, 17, 0.07);
        --white: #ffffff;
        --surface: #faf8f5; /* warm off-white */
        --surface2: #f2ede6; /* slightly warmer */
        --border: rgba(17, 17, 17, 0.1);

        --ff-h: "Fraunces", serif;
        --ff-b: "Figtree", sans-serif;
        --r: 16px;
        --r2: 24px;
        --sh: 0 4px 32px rgba(255, 107, 0, 0.12);
      }
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html {
        scroll-behavior: smooth;
        font-size: 16px;
      }
      body {
        font-family: var(--ff-b);
        background: var(--white);
        color: var(--ink);
        overflow-x: hidden;
        -webkit-font-smoothing: antialiased;
      }
      img {
        display: block;
        max-width: 100%;
        object-fit: cover;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
      ::selection {
        background: var(--blue);
        color: #fff;
      }
      ::-webkit-scrollbar {
        width: 4px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--blue);
        border-radius: 4px;
      }

      /* ═══════════════════════════════════════
   UTILITY
═══════════════════════════════════════ */
      .wrap {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 5%;
      }
      .chip {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--ff-b);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 5px 13px;
        border-radius: 100px;
      }
      .chip-blue {
        background: var(--blue-lt);
        color: var(--blue);
      }
      .chip-coral {
        background: var(--coral-lt);
        color: var(--coral);
      }
      .chip-mint {
        background: var(--mint-lt);
        color: var(--mint);
      }
      .chip-amber {
        background: var(--amber-lt);
        color: var(--amber);
      }
      .section-label {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--blue);
        display: block;
        margin-bottom: 10px;
      }
      h2.serif {
        font-family: var(--ff-h);
        font-weight: 400;
        letter-spacing: -0.025em;
        line-height: 1.08;
      }
      .body-sm {
        font-size: 0.88rem;
        line-height: 1.82;
        color: var(--ink60);
        font-weight: 400;
      }

      /* Buttons */
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-family: var(--ff-b);
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        border: none;
        cursor: pointer;
        transition:
          transform 0.18s,
          box-shadow 0.18s,
          background 0.18s;
        border-radius: 100px;
        white-space: nowrap;
      }
      .btn:hover {
        transform: translateY(-1px);
      }
      .btn-primary {
        background: var(--blue);
        color: #fff;
        padding: 14px 28px;
        box-shadow: 0 6px 24px rgba(255, 107, 0, 0.28);
      }
      .btn-primary:hover {
        background: #e05500;
        box-shadow: 0 10px 32px rgba(255, 107, 0, 0.36);
      }
      .btn-white {
        background: #fff;
        color: var(--ink);
        padding: 13px 27px;
        border: 1.5px solid var(--border);
      }
      .btn-white:hover {
        border-color: var(--blue);
        color: var(--blue);
      }
      .btn-coral {
        background: var(--coral);
        color: #fff;
        padding: 14px 28px;
        box-shadow: 0 6px 24px rgba(255, 107, 0, 0.22);
      }
      .btn-coral:hover {
        background: #cc4d00;
      }
      .btn-outline-blue {
        background: transparent;
        color: var(--blue);
        padding: 13px 27px;
        border: 1.5px solid var(--blue);
      }
      .btn-outline-blue:hover {
        background: var(--blue);
        color: #fff;
      }

      /* Fade-in on scroll */
      .reveal {
        opacity: 0;
        transform: translateY(24px);
        transition:
          opacity 0.65s ease,
          transform 0.65s ease;
      }
      .reveal.in {
        opacity: 1;
        transform: none;
      }

      /* ═══════════════════════════════════════
   NAV
═══════════════════════════════════════ */
      #nav {
        position: fixed;
        top: 0;
        inset-inline: 0;
        z-index: 900;
        height: 64px;
        display: flex;
        align-items: center;
        background: rgba(17, 17, 17, 0.97);
        backdrop-filter: blur(16px);
        border-bottom: 1px solid transparent;
        transition:
          border-color 0.3s,
          box-shadow 0.3s;
      }
      #nav.scrolled {
        border-color: rgba(255, 107, 0, 0.2);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
      }
      .nav-inner {
        width: 100%;
        padding: 0 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
      }
      .nav-logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-family: var(--ff-h);
        font-size: 1.25rem;
        color: #fff;
        font-weight: 600;
      }
      .nav-logo-img {
        height: 38px;
        width: auto;
        object-fit: contain;
        display: block;
      }
      .nav-logo-sq {
        width: 40px;
        height: 46px;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: -6px;
      }
      .nav-logo-sq img {
        width: 40px;
        height: 46px;
        object-fit: contain;
        display: block;
      }
      .nav-links {
        display: flex;
        align-items: center;
        gap: 6px;
        list-style: none;
      }
      .nav-links a {
        font-size: 0.8rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.55);
        padding: 7px 13px;
        border-radius: 8px;
        transition:
          background 0.18s,
          color 0.18s;
        cursor: pointer;
      }
      .nav-links a:hover {
        background: rgba(255, 107, 0, 0.15);
        color: var(--blue);
      }
      .nav-links a.active {
        color: var(--blue);
      }
      .nav-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .nav-tel {
        font-size: 0.78rem;
        font-weight: 700;
        color: rgba(255, 255, 255, 0.55);
        display: flex;
        align-items: center;
        gap: 6px;
        transition: color 0.2s;
        white-space: nowrap;
      }
      .nav-tel:hover {
        color: var(--blue);
      }
      @media (max-width: 960px) {
        .nav-tel .nav-tel-num {
          display: none;
        }
        .nav-tel-icon-only {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 107, 0, 0.18);
        }
        .nav-tel-icon-only svg {
          stroke: var(--blue);
        }
      }

      /* ═══════════════════════════════════════
   HERO  — compact, centered right column
═══════════════════════════════════════ */
      .hero {
        padding-top: 64px;
        min-height: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        background: var(--white);
        position: relative;
        overflow: hidden;
      }
      /* decorative blobs */
      .hero::before {
        content: "";
        position: absolute;
        width: 600px;
        height: 600px;
        background: radial-gradient(
          circle,
          rgba(255, 107, 0, 0.07),
          transparent 65%
        );
        right: -100px;
        top: -100px;
        pointer-events: none;
      }
      .hero-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 44px 5% 44px 12%;
        position: relative;
        z-index: 1;
      }
      .hero-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 22px;
      }
      .hero-badge-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--blue);
        animation: blink 2s ease-in-out infinite;
      }
      @keyframes blink {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.4;
          transform: scale(1.5);
        }
      }
      .hero-badge-text {
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--blue);
      }
      .hero h1 {
        font-family: var(--ff-h);
        font-size: clamp(2.8rem, 5vw, 4.4rem);
        font-weight: 400;
        line-height: 1.06;
        letter-spacing: -0.03em;
        color: var(--ink);
        margin-bottom: 18px;
      }
      .hero h1 .accent {
        font-style: italic;
        color: var(--blue);
      }
      .hero h1 .accent2 {
        color: var(--coral);
      }
      .hero-sub {
        font-size: 1rem;
        line-height: 1.78;
        color: var(--ink60);
        max-width: 400px;
        margin-bottom: 36px;
        font-weight: 400;
      }
      .hero-actions {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 40px;
      }
      .hero-trust {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        padding-top: 20px;
        border-top: 1px solid var(--border);
      }
      .trust-left {
        display: flex;
        flex-direction: column;
        gap: 2px;
      }
      .trust-stars {
        color: var(--amber);
        font-size: 0.95rem;
        letter-spacing: 1px;
        line-height: 1;
        margin-bottom: 1px;
      }
      .trust-rating strong {
        color: var(--ink);
        font-size: 0.82rem;
        font-weight: 700;
        display: block;
        line-height: 1.4;
      }
      .trust-rating span {
        font-size: 0.72rem;
        color: var(--ink60);
      }
      .trust-sep {
        width: 1px;
        background: var(--border);
        flex-shrink: 0;
        align-self: stretch;
      }
      .trust-badge {
        display: flex;
        align-items: center;
        gap: 8px;
        padding-top: 18px;
      }
      .trust-badge-icon {
        width: 26px;
        height: 26px;
        background: transparent;
        border-radius: 7px;
        display: grid;
        place-items: center;
        flex-shrink: 0;
      }
      .trust-badge-text strong {
        color: var(--ink);
        font-size: 0.82rem;
        font-weight: 700;
        display: block;
        line-height: 1.4;
      }
      .trust-badge-text span {
        font-size: 0.72rem;
        color: var(--ink60);
      }

      .hfc-text strong {
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--ink);
        display: block;
      }
      .hfc-text span {
        font-size: 0.72rem;
        color: var(--ink60);
      }
      .hero-badge-card {
        position: absolute;
        top: 20px;
        right: -12px;
        background: var(--blue);
        color: #fff;
        border-radius: var(--r);
        padding: 12px 16px;
        text-align: center;
        box-shadow: 0 8px 24px rgba(255, 107, 0, 0.35);
      }
      .hero-badge-card .n {
        font-family: var(--ff-h);
        font-size: 1.6rem;
        font-weight: 600;
        display: block;
        line-height: 1;
      }
      .hero-badge-card .l {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        opacity: 0.8;
        text-transform: uppercase;
      }

      /* ═══════════════════════════════════════
   HERO RIGHT — practical info panel
═══════════════════════════════════════ */
      .hero-right {
        background: #111111;
        display: flex;
        flex-direction: column;
        padding: 44px 40px;
        position: relative;
        overflow: hidden;
        gap: 24px;
      }
      /* subtle dot grid */
      .hero-right::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 0;
        background-image: radial-gradient(
          circle,
          rgba(255, 107, 0, 0.18) 1px,
          transparent 1px
        );
        background-size: 28px 28px;
        pointer-events: none;
      }
      /* one soft radial glow */
      .hero-right::after {
        content: "";
        position: absolute;
        width: 440px;
        height: 440px;
        background: radial-gradient(
          circle,
          rgba(255, 107, 0, 0.15),
          transparent 65%
        );
        right: -80px;
        bottom: -80px;
        z-index: 0;
        pointer-events: none;
      }
      /* clinic photo */
      .hr-photo {
        position: relative;
        z-index: 1;
        width: 100%;
        border-radius: var(--r2);
        overflow: hidden;
        flex-shrink: 0;
      }
      .hr-photo img {
        width: 100%;
        height: 220px;
        object-fit: cover;
        object-position: center top;
        display: block;
      }
      .hr-photo-badge {
        position: absolute;
        top: 12px;
        right: 12px;
        background: var(--blue);
        color: #fff;
        border-radius: var(--r);
        padding: 10px 14px;
        text-align: center;
      }
      .hr-photo-badge .n {
        font-family: var(--ff-h);
        font-size: 1.4rem;
        font-weight: 600;
        display: block;
        line-height: 1;
      }
      .hr-photo-badge .l {
        font-size: 0.6rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        opacity: 0.85;
        text-transform: uppercase;
      }
      /* stats 2×2 grid */
      .hr-stats {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .hr-stat {
        background: rgba(255, 255, 255, 0.07);
        border-radius: 14px;
        padding: 16px;
        border: 1px solid rgba(255, 107, 0, 0.2);
      }
      .hr-stat-val {
        font-family: var(--ff-h);
        font-size: 1.55rem;
        font-weight: 600;
        line-height: 1;
        display: block;
        margin-bottom: 3px;
        color: #fff;
      }
      .hr-stat-lbl {
        font-size: 0.72rem;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.5);
        display: block;
        line-height: 1.3;
      }
      /* service quick-tags */
      .hr-services {
        position: relative;
        z-index: 1;
      }
      .hr-services-title {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
        display: block;
        margin-bottom: 8px;
      }
      .hr-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 7px;
      }
      .hr-tag {
        font-size: 0.74rem;
        font-weight: 600;
        padding: 7px 13px;
        border-radius: 100px;
        background: rgba(255, 255, 255, 0.08);
        border: 1.5px solid rgba(255, 107, 0, 0.25);
        color: rgba(255, 255, 255, 0.65);
        cursor: default;
        transition: all 0.18s;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .hr-tag svg {
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        stroke: #e05500;
        display: block;
      }
      .hr-tag:hover {
        border-color: var(--blue);
        color: var(--blue);
      }
      .hr-tag:hover svg {
        stroke: var(--blue);
      }
      .hfc-icon {
        width: 40px;
        height: 40px;
        background: rgba(255, 107, 0, 0.15);
        border-radius: 12px;
        display: grid;
        place-items: center;
        font-size: 1.2rem;
        flex-shrink: 0;
      }
      .hfc-text strong {
        font-size: 0.88rem;
        font-weight: 700;
        color: #fff;
        display: block;
      }
      .hfc-text span {
        font-size: 0.72rem;
        color: rgba(255, 255, 255, 0.5);
      }
      .marquee-strip {
        background: var(--ink);
        padding: 13px 0;
        overflow: hidden;
      }
      .marquee-track {
        display: flex;
        width: max-content;
        animation: marquee 24s linear infinite;
      }
      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-50%);
        }
      }
      .mitem {
        font-family: var(--ff-b);
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.55);
        padding: 0 32px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .mdot {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: var(--blue);
        flex-shrink: 0;
      }

      /* ═══════════════════════════════════════
   SERVICES — 4 clean cards, no radar
═══════════════════════════════════════ */
      .services {
        padding: 88px 5%;
        background: var(--surface);
      }
      .section-head {
        margin-bottom: 52px;
      }
      .section-head-row {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
      }
      .services-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
      }
      .svc-card {
        background: #fff;
        border-radius: var(--r2);
        padding: 32px 24px;
        border: 1.5px solid var(--border);
        position: relative;
        overflow: hidden;
        transition:
          border-color 0.25s,
          transform 0.25s,
          box-shadow 0.25s;
        cursor: default;
      }
      .svc-card:hover {
        border-color: var(--blue);
        transform: translateY(-5px);
        box-shadow: var(--sh);
      }
      .svc-img {
        width: 100%;
        height: 160px;
        border-radius: 12px;
        object-fit: cover;
        margin-bottom: 20px;
      }
      .svc-num {
        position: absolute;
        top: 16px;
        right: 20px;
        font-family: var(--ff-h);
        font-size: 1.8rem;
        color: var(--ink10);
        font-weight: 600;
        line-height: 1;
      }
      .svc-chip {
        margin-bottom: 12px;
      }
      .svc-card h3 {
        font-family: var(--ff-h);
        font-size: 1.2rem;
        font-weight: 400;
        color: var(--ink);
        margin-bottom: 8px;
        line-height: 1.2;
      }
      .svc-card p {
        font-size: 0.82rem;
        line-height: 1.75;
        color: var(--ink60);
      }
      .svc-arrow {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        margin-top: 16px;
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--blue);
        letter-spacing: 0.04em;
        transition: gap 0.2s;
      }
      .svc-card:hover .svc-arrow {
        gap: 9px;
      }

      /* ═══════════════════════════════════════
   HOW IT WORKS
═══════════════════════════════════════ */
      .how {
        padding: 88px 5%;
        background: var(--white);
      }
      .how-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 72px;
        align-items: center;
      }
      .how-steps {
        display: flex;
        flex-direction: column;
        gap: 0;
        margin-top: 32px;
      }
      .how-step {
        display: flex;
        gap: 18px;
        padding: 20px 0;
        border-bottom: 1px solid var(--border);
        cursor: default;
      }
      .how-step:first-child {
        padding-top: 0;
      }
      .how-step:last-child {
        border-bottom: none;
      }
      .how-step:hover .hs-n {
        background: var(--blue);
        color: #fff;
        border-color: var(--blue);
        transform: scale(1.12);
      }
      .hs-n {
        width: 36px;
        height: 36px;
        min-width: 36px;
        border-radius: 50%;
        border: 1.5px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--ff-h);
        font-size: 0.88rem;
        color: var(--ink60);
        transition:
          background 0.2s,
          color 0.2s,
          border-color 0.2s,
          transform 0.2s;
        flex-shrink: 0;
        margin-top: 2px;
      }
      .hs-body h4 {
        font-family: var(--ff-b);
        font-size: 0.9rem;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 4px;
      }
      .hs-body p {
        font-size: 0.82rem;
        line-height: 1.72;
        color: var(--ink60);
      }
      .how-image-panel {
        border-radius: var(--r2);
        overflow: hidden;
        position: relative;
      }
      .how-img {
        width: 100%;
        height: 480px;
        object-fit: cover;
      }
      .how-img-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          transparent 50%,
          rgba(13, 13, 13, 0.6)
        );
      }
      .how-img-caption {
        position: absolute;
        bottom: 28px;
        left: 28px;
        right: 28px;
        color: #fff;
      }
      .how-img-caption h4 {
        font-family: var(--ff-h);
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 6px;
      }
      .how-img-caption p {
        font-size: 0.82rem;
        opacity: 0.75;
        font-weight: 400;
      }

      /* ═══════════════════════════════════════
   BEFORE / AFTER
═══════════════════════════════════════ */
      .ba {
        padding: 88px 5%;
        background: var(--surface);
      }
      .ba-top {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: 44px;
        flex-wrap: wrap;
        gap: 20px;
      }
      .ba-cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      .ba-card {
        background: #fff;
        border-radius: var(--r2);
        padding: 22px;
        border: 1px solid var(--border);
      }
      .ba-header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 12px;
      }
      .ba-treatment-title {
        font-family: var(--ff-h);
        font-size: 1rem;
        font-weight: 400;
        color: var(--ink);
      }
      .ba-split-labels {
        display: flex;
        align-items: center;
        gap: 0;
        background: var(--surface);
        border-radius: 100px;
        padding: 3px;
        overflow: hidden;
      }
      .ba-split-lbl {
        font-size: 0.62rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 4px 11px;
        border-radius: 100px;
        transition:
          background 0.2s,
          color 0.2s;
      }
      .ba-split-lbl.before {
        color: var(--ink60);
      }
      .ba-split-lbl.after {
        background: var(--ink);
        color: #fff;
      }
      .ba-drag-row {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin-bottom: 10px;
      }
      .ba-drag-line {
        flex: 1;
        height: 1px;
        background: var(--border);
      }
      .ba-drag-text {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--ink30);
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 5px;
      }
      .ba-drag-text svg {
        width: 14px;
        height: 14px;
        stroke: var(--ink30);
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .slider-wrap {
        position: relative;
        width: 100%;
        height: 260px;
        border-radius: 14px;
        overflow: hidden;
        cursor: ew-resize;
        user-select: none;
        touch-action: pan-y;
      }
      .sl-base,
      .sl-clip-layer {
        position: absolute;
        inset: 0;
      }
      .sl-base {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
      }
      .sl-clip-layer {
        width: 50%;
        overflow: hidden;
      }
      .sl-clip-inner {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
      }
      /* Photo labels */
      .sl-photo-lbl {
        position: absolute;
        bottom: 12px;
        font-family: var(--ff-b);
        font-size: 0.65rem;
        font-weight: 800;
        letter-spacing: 0.13em;
        text-transform: uppercase;
        color: #fff;
        background: rgba(0, 0, 0, 0.45);
        backdrop-filter: blur(6px);
        padding: 4px 11px;
        border-radius: 100px;
        z-index: 7;
        pointer-events: none;
      }
      .sl-lbl-right {
        right: 12px;
      }
      .sl-lbl-left {
        left: 12px;
      }
      .sl-divider {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        width: 2px;
        background: rgba(255, 255, 255, 0.9);
        transform: translateX(-50%);
        z-index: 8;
        pointer-events: none;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
      }
      .sl-handle-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: #fff;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.35);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        pointer-events: none;
        gap: 0;
      }
      .sl-handle-btn svg {
        width: 18px;
        height: 18px;
        fill: none;
        stroke: var(--blue);
        stroke-width: 2.5;
        stroke-linecap: round;
        stroke-linejoin: round;
      }
      .tooth-row {
        display: flex;
        gap: 3px;
        align-items: flex-end;
      }
      .t {
        border: 1.5px solid rgba(0, 0, 0, 0.06);
        border-radius: 4px 4px 9px 9px;
      }
      .slot-lbl {
        font-size: 0.66rem;
        font-family: var(--ff-b);
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }
      .ba-card h4 {
        font-family: var(--ff-h);
        font-size: 1rem;
        font-weight: 400;
        color: var(--ink);
        margin-top: 14px;
        margin-bottom: 4px;
      }
      .ba-card p {
        font-size: 0.79rem;
        line-height: 1.6;
        color: var(--ink60);
      }

      /* ═══════════════════════════════════════
   GALLERY
═══════════════════════════════════════ */
      .gallery {
        padding: 88px 5%;
        background: var(--white);
      }
      .gfilters {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-top: 8px;
      }
      .gf {
        font-family: var(--ff-b);
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding: 7px 16px;
        border-radius: 100px;
        border: 1.5px solid var(--border);
        background: transparent;
        color: var(--ink60);
        cursor: pointer;
        transition: all 0.18s;
      }
      .gf.on,
      .gf:hover {
        background: var(--blue);
        border-color: var(--blue);
        color: #fff;
      }
      .gallery-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 210px;
        gap: 12px;
        margin-top: 36px;
      }
      .gi {
        border-radius: var(--r);
        overflow: hidden;
        position: relative;
        cursor: pointer;
      }
      .gi img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .gi:hover img {
        transform: scale(1.07);
      }
      .gi-ov {
        position: absolute;
        inset: 0;
        background: linear-gradient(
          180deg,
          transparent 40%,
          rgba(13, 13, 13, 0.72)
        );
        opacity: 0;
        transition: opacity 0.3s;
        display: flex;
        align-items: flex-end;
        padding: 14px;
      }
      .gi:hover .gi-ov {
        opacity: 1;
      }
      .gi-lbl {
        font-size: 0.76rem;
        font-weight: 700;
        color: #fff;
        font-family: var(--ff-b);
      }
      .gi-sub {
        font-size: 0.68rem;
        color: rgba(255, 255, 255, 0.65);
        margin-top: 1px;
      }
      .gi.wide {
        grid-column: span 2;
      }
      .gi.tall {
        grid-row: span 2;
      }

      /* ═══════════════════════════════════════
   CERTIFICATIONS
═══════════════════════════════════════ */
      .certs {
        padding: 88px 5%;
        background: var(--surface);
      }
      .certs-layout {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 64px;
        align-items: start;
      }
      .certs-left {
        position: sticky;
        top: 80px;
      }
      .certs-left p {
        font-size: 0.9rem;
        line-height: 1.8;
        color: var(--ink60);
        margin-top: 12px;
        margin-bottom: 28px;
      }
      .certs-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .ct {
        background: #fff;
        border-radius: var(--r);
        padding: 22px 20px;
        border: 1px solid var(--border);
        transition:
          border-color 0.2s,
          transform 0.2s;
      }
      .ct:hover {
        border-color: var(--blue);
        transform: translateY(-3px);
      }
      .ct-icon {
        font-size: 1.4rem;
        margin-bottom: 12px;
        display: block;
      }
      .ct h4 {
        font-family: var(--ff-b);
        font-size: 0.84rem;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 5px;
      }
      .ct p {
        font-size: 0.76rem;
        line-height: 1.6;
        color: var(--ink60);
      }
      .assoc-row {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 28px;
      }
      .assoc-tag {
        font-size: 0.72rem;
        font-weight: 600;
        padding: 6px 14px;
        border-radius: 100px;
        background: #fff;
        border: 1px solid var(--border);
        color: var(--ink60);
        transition: all 0.18s;
        cursor: default;
      }
      .assoc-tag:hover {
        border-color: var(--blue);
        color: var(--blue);
      }

      /* ═══════════════════════════════════════
   AWARDS
═══════════════════════════════════════ */
      .awards {
        padding: 88px 5%;
        background: #0d0d0d;
      }
      .awards h2,
      .awards .section-label,
      .awards .body-sm {
        color: #fff;
      }
      .awards .section-label {
        color: rgba(255, 255, 255, 0.45);
      }
      .awards .body-sm {
        color: rgba(255, 255, 255, 0.6);
      }
      .awards-top {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        flex-wrap: wrap;
        margin-bottom: 48px;
      }
      .awards-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px;
        margin-bottom: 48px;
      }
      .aw {
        background: #181818;
        border: 1px solid rgba(255, 107, 0, 0.18);
        border-radius: var(--r2);
        padding: 28px 22px;
        transition:
          background 0.2s,
          transform 0.2s,
          border-color 0.2s;
      }
      .aw:hover {
        background: #202020;
        border-color: rgba(255, 107, 0, 0.5);
        transform: translateY(-4px);
      }
      .aw-icon {
        width: 48px;
        height: 48px;
        background: rgba(255, 107, 0, 0.12);
        border: 1px solid rgba(255, 107, 0, 0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 18px;
      }
      .aw-icon svg {
        width: 22px;
        height: 22px;
        stroke: #ff6b00;
        fill: none;
        stroke-width: 1.8;
        stroke-linecap: round;
        stroke-linejoin: round;
        flex-shrink: 0;
      }
      .aw h4 {
        font-size: 0.95rem;
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 8px;
      }
      .aw p {
        font-size: 0.8rem;
        line-height: 1.7;
        color: rgba(255, 255, 255, 0.6);
      }
      .aw-year {
        display: inline-block;
        margin-top: 14px;
        font-size: 0.65rem;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #ff6b00;
        background: rgba(255, 107, 0, 0.1);
        padding: 3px 8px;
        border-radius: 100px;
      }
      .media-belt {
        border-top: 1px solid rgba(255, 107, 0, 0.2);
        padding-top: 36px;
        text-align: center;
      }
      .media-label {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.4);
        margin-bottom: 16px;
      }
      .media-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }
      .mtag {
        font-size: 0.75rem;
        font-weight: 600;
        padding: 8px 18px;
        border-radius: 100px;
        background: rgba(255, 107, 0, 0.08);
        border: 1px solid rgba(255, 107, 0, 0.25);
        color: rgba(255, 255, 255, 0.75);
        transition: all 0.18s;
        cursor: default;
      }
      .mtag:hover {
        background: rgba(255, 107, 0, 0.18);
        border-color: var(--blue);
        color: #fff;
      }

      /* ═══════════════════════════════════════
   TESTIMONIALS
═══════════════════════════════════════ */
      .testi {
        padding: 88px 5%;
        background: var(--white);
      }
      .testi-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 48px;
      }
      .tc {
        background: var(--surface);
        border-radius: var(--r2);
        padding: 28px 24px;
        border: 1px solid var(--border);
        transition:
          border-color 0.2s,
          transform 0.2s,
          box-shadow 0.2s;
      }
      .tc:hover {
        border-color: var(--blue);
        transform: translateY(-4px);
        box-shadow: var(--sh);
      }
      .tc-stars {
        color: var(--amber);
        font-size: 0.9rem;
        letter-spacing: 2px;
        margin-bottom: 12px;
      }
      .tc-q {
        font-family: var(--ff-h);
        font-size: 2rem;
        color: var(--blue);
        opacity: 0.25;
        line-height: 1;
        margin-bottom: 4px;
      }
      .tc blockquote {
        font-size: 0.86rem;
        line-height: 1.82;
        color: var(--ink60);
        margin-bottom: 20px;
        font-weight: 400;
      }
      .tc-author {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .tc-av {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: var(--blue);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-size: 0.82rem;
        flex-shrink: 0;
      }
      .tc-author strong {
        font-size: 0.82rem;
        font-weight: 700;
        color: var(--ink);
        display: block;
      }
      .tc-author span {
        font-size: 0.72rem;
        color: var(--ink60);
      }

      /* ═══════════════════════════════════════
   BOOKING
═══════════════════════════════════════ */
      .booking {
        padding: 88px 5%;
        background: var(--surface);
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 72px;
        align-items: start;
      }
      .bf-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 13px;
        margin-bottom: 13px;
      }
      .fg {
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .fg label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ink60);
      }
      .fg input,
      .fg select,
      .fg textarea {
        border: 1.5px solid var(--border);
        border-radius: 10px;
        padding: 11px 15px;
        font-family: var(--ff-b);
        font-size: 0.87rem;
        color: var(--ink);
        outline: none;
        background: #fff;
        transition:
          border-color 0.2s,
          box-shadow 0.2s;
      }
      .fg input:focus,
      .fg select:focus,
      .fg textarea:focus {
        border-color: var(--blue);
        box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.08);
      }
      .fg textarea {
        resize: vertical;
        min-height: 90px;
      }
      .booking-panel {
        background: var(--ink);
        border-radius: var(--r2);
        padding: 36px 30px;
        color: #fff;
      }
      .bp-eyebrow {
        font-size: 0.65rem;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.35);
        display: block;
        margin-bottom: 8px;
      }
      .bp-title {
        font-family: var(--ff-h);
        font-size: 1.6rem;
        color: #fff;
        margin-bottom: 4px;
        font-weight: 400;
      }
      .bp-sub {
        font-size: 0.79rem;
        color: rgba(255, 255, 255, 0.4);
        margin-bottom: 24px;
      }
      .bp-hours {
        list-style: none;
        border: 1px solid rgba(255, 255, 255, 0.09);
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 18px;
      }
      .bp-hours li {
        display: flex;
        justify-content: space-between;
        padding: 11px 16px;
        font-size: 0.82rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      }
      .bp-hours li:last-child {
        border-bottom: none;
      }
      .bp-hours li span:first-child {
        color: rgba(255, 255, 255, 0.5);
      }
      .bp-hours li span:last-child {
        color: var(--mint);
        font-weight: 700;
      }
      .bp-addr {
        font-size: 0.77rem;
        color: rgba(255, 255, 255, 0.35);
        line-height: 1.75;
        padding: 12px 14px;
        background: rgba(255, 255, 255, 0.04);
        border-radius: 10px;
        margin-top: 14px;
      }

      /* ═══════════════════════════════════════
   MAP
═══════════════════════════════════════ */
      .map-sec {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: stretch;
      }
      .map-frame {
        display: flex;
        flex-direction: column;
      }
      .map-frame iframe {
        width: 100%;
        height: 100%;
        min-height: 440px;
        border: none;
        display: block;
        flex: 1;
      }
      .map-panel {
        padding: 56px 48px;
        background: var(--blue-lt);
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .mi-items {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 24px;
      }
      .mi-row {
        display: flex;
        gap: 13px;
        align-items: flex-start;
      }
      .mi-icon {
        width: 36px;
        height: 36px;
        min-width: 36px;
        background: #fff;
        border-radius: 10px;
        display: grid;
        place-items: center;
        font-size: 0.95rem;
        box-shadow: 0 2px 8px rgba(255, 107, 0, 0.1);
      }
      .mi-row h5 {
        font-size: 0.78rem;
        font-weight: 700;
        color: var(--ink);
        margin-bottom: 2px;
      }
      .mi-row p {
        font-size: 0.78rem;
        color: var(--ink60);
        line-height: 1.55;
      }
      .mi-btns {
        margin-top: 24px;
      }

      /* ═══════════════════════════════════════
   FAQ
═══════════════════════════════════════ */
      .faq {
        padding: 88px 5%;
        background: var(--white);
      }
      .faq-layout {
        display: grid;
        grid-template-columns: 1fr 1.6fr;
        gap: 72px;
        align-items: start;
      }
      .faq-left {
        position: sticky;
        top: 80px;
      }
      .faq-left p {
        font-size: 0.9rem;
        line-height: 1.8;
        color: var(--ink60);
        margin: 12px 0 28px;
      }
      .faq-cta-box {
        background: var(--surface);
        border: 1.5px solid var(--border);
        border-radius: var(--r2);
        padding: 26px 22px;
      }
      .faq-cta-box h4 {
        font-family: var(--ff-h);
        font-size: 1.15rem;
        font-weight: 400;
        color: var(--ink);
        margin-bottom: 8px;
      }
      .faq-cta-box p {
        font-size: 0.8rem;
        color: var(--ink60);
        line-height: 1.7;
        margin-bottom: 18px;
      }
      .faq-items {
        display: flex;
        flex-direction: column;
      }
      .faq-item {
        border-bottom: 1px solid var(--border);
      }
      .faq-q {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 18px 0;
        cursor: pointer;
        gap: 14px;
        user-select: none;
      }
      .faq-q h4 {
        font-size: 0.88rem;
        font-weight: 600;
        color: var(--ink);
        line-height: 1.4;
      }
      .faq-ico {
        width: 26px;
        height: 26px;
        min-width: 26px;
        border-radius: 50%;
        border: 1.5px solid var(--border);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.9rem;
        color: var(--ink30);
        transition:
          transform 0.3s,
          background 0.2s,
          border-color 0.2s;
      }
      .faq-item.open .faq-ico {
        transform: rotate(45deg);
        background: var(--blue);
        border-color: var(--blue);
        color: #fff;
      }
      .faq-a {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.38s ease;
      }
      .faq-a p {
        padding: 0 0 18px;
        font-size: 0.84rem;
        line-height: 1.82;
        color: var(--ink60);
      }
      .faq-item.open .faq-a {
        max-height: 220px;
      }

      /* ═══════════════════════════════════════
   BLOG
═══════════════════════════════════════ */
      .blog {
        padding: 88px 5%;
        background: var(--surface);
      }
      .blog-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        margin-top: 48px;
      }
      .bl {
        background: #fff;
        border-radius: var(--r2);
        overflow: hidden;
        border: 1px solid var(--border);
        transition:
          border-color 0.2s,
          transform 0.2s,
          box-shadow 0.2s;
      }
      .bl:hover {
        border-color: var(--blue);
        transform: translateY(-4px);
        box-shadow: var(--sh);
      }
      .bl-thumb {
        height: 170px;
        overflow: hidden;
      }
      .bl-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s;
      }
      .bl:hover .bl-thumb img {
        transform: scale(1.06);
      }
      .bl-body {
        padding: 20px;
      }
      .bl-date {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ink30);
        margin-bottom: 8px;
      }
      .bl h4 {
        font-family: var(--ff-h);
        font-size: 1rem;
        font-weight: 400;
        color: var(--ink);
        line-height: 1.4;
        margin-bottom: 12px;
      }
      .bl-link {
        font-size: 0.74rem;
        font-weight: 700;
        color: var(--blue);
        letter-spacing: 0.05em;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        transition: gap 0.18s;
      }
      .bl:hover .bl-link {
        gap: 9px;
      }

      /* ═══════════════════════════════════════
   CTA BANNER
═══════════════════════════════════════ */
      .cta-banner {
        background: var(--ink);
        padding: 80px 5%;
        text-align: center;
        color: #fff;
        position: relative;
        overflow: hidden;
      }
      .cta-banner::before {
        content: "";
        position: absolute;
        top: -120px;
        left: 50%;
        transform: translateX(-50%);
        width: 700px;
        height: 400px;
        background: radial-gradient(
          ellipse,
          rgba(255, 107, 0, 0.2),
          transparent 65%
        );
        pointer-events: none;
      }
      .cta-banner h2 {
        font-family: var(--ff-h);
        font-size: clamp(2.2rem, 4.5vw, 3.6rem);
        line-height: 1.06;
        letter-spacing: -0.02em;
        margin-bottom: 12px;
        position: relative;
        font-weight: 400;
      }
      .cta-banner p {
        font-size: 0.92rem;
        color: rgba(255, 255, 255, 0.45);
        margin-bottom: 32px;
        position: relative;
      }
      .email-row {
        display: flex;
        gap: 10px;
        justify-content: center;
        max-width: 420px;
        margin: 0 auto;
        flex-wrap: wrap;
        position: relative;
      }
      .email-row input {
        flex: 1;
        padding: 13px 20px;
        border-radius: 100px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.08);
        font-family: var(--ff-b);
        font-size: 0.86rem;
        color: #fff;
        outline: none;
        min-width: 190px;
      }
      .email-row input::placeholder {
        color: rgba(255, 255, 255, 0.35);
      }
      .email-row input:focus {
        border-color: rgba(255, 107, 0, 0.5);
      }

      /* ═══════════════════════════════════════
   FOOTER
═══════════════════════════════════════ */
      footer {
        background: var(--ink);
        border-top: 1px solid rgba(255, 107, 0, 0.2);
        padding: 56px 5% 22px;
        color: rgba(255, 255, 255, 0.45);
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
        gap: 40px;
        margin-bottom: 40px;
      }
      .f-brand {
        font-family: var(--ff-h);
        font-size: 1.3rem;
        color: #fff;
        display: block;
        margin-bottom: 10px;
        font-weight: 400;
      }
      .f-about {
        font-size: 0.79rem;
        line-height: 1.82;
      }
      footer h5 {
        font-size: 0.65rem;
        font-weight: 800;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: rgba(255, 255, 255, 0.28);
        margin-bottom: 14px;
      }
      footer ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      footer ul a {
        font-size: 0.78rem;
        color: rgba(255, 255, 255, 0.45);
        transition: color 0.18s;
      }
      footer ul a:hover {
        color: var(--blue);
      }
      .f-contact {
        display: flex;
        flex-direction: column;
        gap: 9px;
      }
      .f-contact span {
        font-size: 0.78rem;
        line-height: 1.55;
        display: flex;
        align-items: flex-start;
        gap: 7px;
      }
      .fbot {
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        padding-top: 18px;
        display: flex;
        justify-content: space-between;
        font-size: 0.73rem;
        flex-wrap: wrap;
        gap: 10px;
      }
      .fbot a {
        color: rgba(255, 255, 255, 0.28);
        margin-left: 14px;
        transition: color 0.18s;
      }
      .fbot a:hover {
        color: #fff;
      }

      /* ═══════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════ */
      @media (max-width: 960px) {
        .hero {
          grid-template-columns: 1fr;
          min-height: auto;
        }
        .hero-right {
          min-height: auto;
          padding: 32px 4%;
        }
        .hr-stats {
          grid-template-columns: 1fr 1fr;
        }
        .services-grid,
        .testi-grid,
        .blog-grid,
        .awards-grid,
        .footer-grid {
          grid-template-columns: 1fr 1fr;
        }
        .how-layout,
        .ba-cols,
        .booking,
        .certs-layout,
        .map-sec,
        .faq-layout {
          grid-template-columns: 1fr;
        }
        .certs-left,
        .faq-left {
          position: static;
        }
        .gallery-grid {
          grid-template-columns: 1fr 1fr;
        }
        .gi.wide {
          grid-column: span 1;
        }
        .map-panel {
          padding: 36px 4%;
        }
        .map-frame iframe {
          min-height: 340px;
        }
        #nav .nav-links {
          display: none;
        }
        /* Mobile nav: hide phone text + book button, show icon-only phone link */
        .nav-tel-num {
          display: none;
        }
        .nav-tel {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--blue-lt);
          justify-content: center;
          gap: 0;
        }
        .nav-tel svg {
          stroke: var(--blue);
          width: 15px;
          height: 15px;
        }
        .nav-right .btn {
          display: none;
        }
      }
      @media (max-width: 600px) {
        .services-grid,
        .testi-grid,
        .blog-grid,
        .awards-grid,
        .certs-grid {
          grid-template-columns: 1fr;
        }
        .bf-row {
          grid-template-columns: 1fr;
        }
        .gallery-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <!-- ══ NAV ══ -->
    <nav id="nav">
      <div class="nav-inner">
        <a href="#" class="nav-logo">
          <div
            class="nav-logo-sq"
            style="background: transparent; width: 40px; height: 46px"
          >
            <img
              src="/glowup-dental.svg"
              alt="Glowup Dental Logo"
              style="
                width: 40px;
                height: 46px;
                object-fit: contain;
                display: block;
              "
            />
          </div>
          Glowup Dental
        </a>
        <ul class="nav-links">
          <li>
            <a href="#services" onclick="scrollTo('services')">Services</a>
          </li>
          <li><a href="#gallery" onclick="scrollTo('gallery')">Gallery</a></li>
          <li><a href="#ba" onclick="scrollTo('ba')">Results</a></li>
          <li><a href="#certs" onclick="scrollTo('certs')">Credentials</a></li>
          <li><a href="#faq" onclick="scrollTo('faq')">FAQ</a></li>
        </ul>
        <div class="nav-right">
          <a
            href="https://maps.google.com/?q=Glowup+Dental+Clinic+Naupada+Thane+West"
            target="_blank"
            class="nav-tel"
          >
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span class="nav-tel-num">Naupada, Thane West</span>
          </a>
          <a
            href="#booking"
            class="btn btn-primary"
            style="font-size: 0.78rem; padding: 10px 20px"
            >Book a Visit</a
          >
        </div>
      </div>
    </nav>

    <!-- ══ HERO ══ -->
    <section class="hero" id="home">
      <div class="hero-left">
        <div class="hero-badge">
          <span class="hero-badge-dot"></span>
          <span class="hero-badge-text"
            >5.0 Stars · Top Rated in Thane West</span
          >
        </div>
        <h1>
          Your Smile<br />Deserves <span class="accent">the</span><br /><span
            class="accent2"
            >Very Best</span
          >
        </h1>
        <p class="hero-sub">
          Glowup Dental brings expert, compassionate dental care to Thane West —
          from routine check-ups to complete smile makeovers, right in your
          neighbourhood.
        </p>
        <div class="hero-actions">
          <a href="#booking" class="btn btn-primary">Book Appointment</a>
          <a href="#services" class="btn btn-white">Our Services →</a>
        </div>
        <div class="hero-trust">
          <div class="trust-left">
            <div class="trust-rating">
              <div class="trust-stars">★★★★★</div>
              <strong>5.0 Excellent</strong>
              <span>10 Google Reviews</span>
            </div>
          </div>
          <div class="trust-sep"></div>
          <div class="trust-badge">
            <div class="trust-badge-icon">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L20 6V12C20 16.4 16.4 20.4 12 22C7.6 20.4 4 16.4 4 12V6L12 2Z"
                  fill="var(--blue)"
                  stroke="none"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div class="trust-badge-text">
              <strong>Family-Friendly</strong>
              <span>Patients of All Ages Welcome</span>
            </div>
          </div>
        </div>
      </div>

      <!-- practical info right panel -->
      <div class="hero-right">
        <!-- clinic photo -->
        <div class="hr-photo">
          <img
            src="/clinic.jpeg"
            alt="Inside Glowup Dental Clinic clinic, Thane West"
            loading="eager"
          />
          <div class="hr-photo-badge">
            <span class="n">5.0</span>
            <span class="l">Google</span>
          </div>
        </div>
        <!-- 2×2 stats -->
        <div class="hr-stats">
          <div class="hr-stat">
            <span class="hr-stat-val" style="color: var(--blue)">10+</span>
            <span class="hr-stat-lbl">Google Reviews<br />5.0★ Average</span>
          </div>
          <div class="hr-stat">
            <span class="hr-stat-val" style="color: var(--surface)">224+</span>
            <span class="hr-stat-lbl">Justdial Votes<br />Top Rated 2024</span>
          </div>
          <div class="hr-stat">
            <span class="hr-stat-val" style="color: var(--coral)">500+</span>
            <span class="hr-stat-lbl"
              >Happy Patients<br />Treated This Year</span
            >
          </div>
          <div class="hr-stat">
            <span class="hr-stat-val" style="color: var(--surface)">10+</span>
            <span class="hr-stat-lbl">Years of Trusted<br />Dental Care</span>
          </div>
        </div>
        <!-- services quick tags -->
        <div class="hr-services">
          <span class="hr-services-title">Services We Offer</span>
          <div class="hr-tags">
            <span class="hr-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 3c-2.5 0-5 2-5 5 0 2 .8 3.5 1 5 .3 2 0 4 1 5h2c.5-1 .5-3 1-5h0c.5 2 .5 4 1 5h2c1-1 .7-3 1-5 .2-1.5 1-3 1-5 0-3-2.5-5-5-5z"
                />
              </svg>
              General Dentistry
            </span>
            <span class="hr-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"
                />
                <path
                  d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z"
                />
              </svg>
              Whitening
            </span>
            <span class="hr-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 2v8m-3-3l3 3 3-3" />
                <rect x="9" y="14" width="6" height="8" rx="1" />
              </svg>
              Implants
            </span>
            <span class="hr-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 9h12M6 15h12" />
                <rect x="3" y="7" width="18" height="10" rx="3" />
              </svg>
              Braces &amp; Aligners
            </span>
            <span class="hr-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Emergency Care
            </span>
            <span class="hr-tag">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 3h12l4 6-10 12L2 9z" />
                <line x1="2" y1="9" x2="22" y2="9" />
              </svg>
              Cosmetic
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ MARQUEE ══ -->
    <div class="marquee-strip">
      <div class="marquee-track">
        <div class="mitem">General Dentistry<span class="mdot"></span></div>
        <div class="mitem">Teeth Whitening<span class="mdot"></span></div>
        <div class="mitem">Dental Implants<span class="mdot"></span></div>
        <div class="mitem">Orthodontics<span class="mdot"></span></div>
        <div class="mitem">Cosmetic Dentistry<span class="mdot"></span></div>
        <div class="mitem">Emergency Care<span class="mdot"></span></div>
        <div class="mitem">5.0 ★ Google Rated<span class="mdot"></span></div>
        <div class="mitem">
          Thane West's Rising Clinic<span class="mdot"></span>
        </div>
        <div class="mitem">General Dentistry<span class="mdot"></span></div>
        <div class="mitem">Teeth Whitening<span class="mdot"></span></div>
        <div class="mitem">Dental Implants<span class="mdot"></span></div>
        <div class="mitem">Orthodontics<span class="mdot"></span></div>
        <div class="mitem">Cosmetic Dentistry<span class="mdot"></span></div>
        <div class="mitem">Emergency Care<span class="mdot"></span></div>
        <div class="mitem">5.0 ★ Google Rated<span class="mdot"></span></div>
        <div class="mitem">
          Thane West's Rising Clinic<span class="mdot"></span>
        </div>
      </div>
    </div>

    <!-- ══ SERVICES ══ -->
    <section id="services" class="services">
      <div class="section-head reveal">
        <div class="section-head-row">
          <div>
            <span class="section-label">Our Services</span>
            <h2
              class="serif"
              style="font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--ink)"
            >
              Every treatment,<br />under one roof.
            </h2>
          </div>
          <p class="body-sm" style="max-width: 280px; text-align: right">
            From everyday preventive care to smile-changing cosmetic treatments.
          </p>
        </div>
      </div>
      <div class="services-grid reveal">
        <div class="svc-card">
          <img
            class="svc-img"
            src="/gumops.jpeg"
            alt="General Dentistry"
          />
          <span class="svc-num">01</span>
          <span class="chip chip-blue svc-chip">Most Popular</span>
          <h3>General Dentistry</h3>
          <p>
            Check-ups, fillings, cleaning, and preventive care to keep your
            teeth strong and healthy for life.
          </p>
          <span class="svc-arrow">Learn more →</span>
        </div>
        <div class="svc-card">
          <img
            class="svc-img"
            src="/odcc.png"
            alt="Teeth Whitening"
          />
          <span class="svc-num">02</span>
          <span class="chip chip-coral svc-chip">1 Session</span>
          <h3>Teeth Whitening</h3>
          <p>
            Professional in-clinic whitening delivering up to 8 shades brighter
            in a single appointment.
          </p>
          <span class="svc-arrow">Learn more →</span>
        </div>
        <div class="svc-card">
          <img
            class="svc-img"
            src="/alligners.jpeg"
            alt="Dental Implants"
          />
          <span class="svc-num">03</span>
          <span class="chip chip-mint svc-chip">Permanent</span>
          <h3>Dental Implants</h3>
          <p>
            Natural-looking, permanent tooth replacements that restore your
            smile and full chewing function.
          </p>
          <span class="svc-arrow">Learn more →</span>
        </div>
        <div class="svc-card">
          <img
            class="svc-img"
            src="/odc.jpg"
            alt="Orthodontics"
          />
          <span class="svc-num">04</span>
          <span class="chip chip-amber svc-chip">Braces & Aligners</span>
          <h3>Orthodontics</h3>
          <p>
            Braces and modern clear aligners to straighten teeth and correct
            bite issues at any age.
          </p>
          <span class="svc-arrow">Learn more →</span>
        </div>
      </div>
    </section>

    <!-- ══ HOW IT WORKS ══ -->
    <section id="how" class="how">
      <div class="how-layout wrap" style="padding: 0">
        <div class="reveal">
          <span class="section-label">Our Process</span>
          <h2
            class="serif"
            style="
              font-size: clamp(2rem, 3.5vw, 2.8rem);
              color: var(--ink);
              margin-bottom: 4px;
            "
          >
            How we care<br />for your smile
          </h2>
          <div class="how-steps">
            <div class="how-step">
              <div class="hs-n">1</div>
              <div class="hs-body">
                <h4>Your First Consultation</h4>
                <p>
                  A warm welcome and a thorough assessment — we listen carefully
                  to understand your goals and concerns.
                </p>
              </div>
            </div>
            <div class="how-step">
              <div class="hs-n">2</div>
              <div class="hs-body">
                <h4>Personalised Treatment Plan</h4>
                <p>
                  A plan built entirely around your needs, with clear options
                  and honest guidance at every step.
                </p>
              </div>
            </div>
            <div class="how-step">
              <div class="hs-n">3</div>
              <div class="hs-body">
                <h4>Comfortable Treatment</h4>
                <p>
                  Latest technology, gentle hands, and a team that makes every
                  visit reassuring and comfortable.
                </p>
              </div>
            </div>
            <div class="how-step">
              <div class="hs-n">4</div>
              <div class="hs-body">
                <h4>Follow-Up & Aftercare</h4>
                <p>
                  We stay with you long after treatment — checking in and
                  helping you maintain lasting results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="how-image-panel reveal">
          <img
            class="how-img"
            src="/clinic.jpeg"
            alt="Inside Glowup Dental Clinic clinic, Thane West"
          />
          <div class="how-img-overlay"></div>
          <div class="how-img-caption">
            <h4>Expert care, every time</h4>
            <p>⭐ 5.0 · 10 Google Reviews · Thane West</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ BEFORE & AFTER ══ -->
    <section id="ba" class="ba">
      <div class="ba-top reveal">
        <div>
          <span class="section-label">Before & After</span>
          <h2
            class="serif"
            style="font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--ink)"
          >
            Real results,<br />real smiles.
          </h2>
        </div>
        <p class="body-sm" style="max-width: 260px; text-align: right">
          Drag the handle left or right to compare actual patient results.
        </p>
      </div>
      <div class="ba-cols reveal">
        <!-- SLIDER 1: Whitening -->
        <div class="ba-card">
          <div class="ba-header-row">
            <span class="ba-treatment-title">Teeth Whitening</span>
            <div class="ba-split-labels">
              <span class="ba-split-lbl before">Before</span>
              <span class="ba-split-lbl after">After</span>
            </div>
          </div>
          <div class="ba-drag-row">
            <div class="ba-drag-line"></div>
            <span class="ba-drag-text">
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Drag to compare
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
            <div class="ba-drag-line"></div>
          </div>
          <div class="slider-wrap" id="s1">
            <!-- RIGHT side = BEFORE (visible when handle is right) -->
            <div
              class="sl-base"
              style="background: #000; padding: 0; margin: 0"
            >
              <img
                src="/ydownload.jpg"
                alt="Before whitening"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: center;
                  position: absolute;
                  inset: 0;
                "
              />
              <span class="sl-photo-lbl sl-lbl-right">Before</span>
            </div>
            <!-- LEFT side = AFTER (clip layer, visible when handle is left) -->
            <div class="sl-clip-layer" id="sc1">
              <div
                class="sl-clip-inner"
                id="sci1"
                style="background: #000; padding: 0"
              >
                <img
                  src="/white.png"
                  alt="After whitening"
                  style="
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    position: absolute;
                    inset: 0;
                    min-width: var(--slider-full-w, 400px);
                  "
                />
                <span class="sl-photo-lbl sl-lbl-left">After</span>
              </div>
            </div>
            <div class="sl-divider" id="d1"></div>
            <div class="sl-handle-btn" id="h1">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="var(--blue)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="10,7 6,12 10,17" />
                <polyline points="14,7 18,12 14,17" />
              </svg>
            </div>
          </div>
          <p
            class="ba-card-desc"
            style="
              font-size: 0.8rem;
              line-height: 1.6;
              color: var(--ink60);
              margin-top: 14px;
            "
          >
            Up to 8 shades brighter in a single professional session.
          </p>
        </div>
        <!-- SLIDER 2: Orthodontics -->
        <div class="ba-card">
          <div class="ba-header-row">
            <span class="ba-treatment-title">Orthodontic Correction</span>
            <div class="ba-split-labels">
              <span class="ba-split-lbl before">Before</span>
              <span class="ba-split-lbl after">After</span>
            </div>
          </div>
          <div class="ba-drag-row">
            <div class="ba-drag-line"></div>
            <span class="ba-drag-text">
              <svg viewBox="0 0 24 24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              Drag to compare
              <svg viewBox="0 0 24 24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </span>
            <div class="ba-drag-line"></div>
          </div>
          <div class="slider-wrap" id="s2">
            <!-- RIGHT side = BEFORE -->
            <div
              class="sl-base"
              style="background: #000; padding: 0; margin: 0"
            >
              <img
                src="/occ.png"
                alt="Before orthodontics"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: center;
                  position: absolute;
                  inset: 0;
                "
              />
              <span class="sl-photo-lbl sl-lbl-right">Before</span>
            </div>
            <!-- LEFT side = AFTER -->
            <div class="sl-clip-layer" id="sc2">
              <div
                class="sl-clip-inner"
                id="sci2"
                style="background: #000; padding: 0"
              >
                <img
                  src="/odcc.png"
                  alt="After orthodontics"
                  style="
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    position: absolute;
                    inset: 0;
                    min-width: var(--slider-full-w, 400px);
                  "
                />
                <span class="sl-photo-lbl sl-lbl-left">After</span>
              </div>
            </div>
            <div class="sl-divider" id="d2"></div>
            <div class="sl-handle-btn" id="h2">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="var(--blue)"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="10,7 6,12 10,17" />
                <polyline points="14,7 18,12 14,17" />
              </svg>
            </div>
          </div>
          <p
            class="ba-card-desc"
            style="
              font-size: 0.8rem;
              line-height: 1.6;
              color: var(--ink60);
              margin-top: 14px;
            "
          >
            Beautifully aligned teeth through modern braces and clear aligners.
          </p>
        </div>
      </div>
    </section>

    <!-- ══ GALLERY ══ -->
    <section id="gallery" class="gallery">
      <div
        class="reveal"
        style="
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        "
      >
        <div>
          <span class="section-label">Smile Gallery</span>
          <h2
            class="serif"
            style="font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--ink)"
          >
            Transformations<br />that speak.
          </h2>
        </div>
        <div class="gfilters">
          <button class="gf on" onclick="gFilter('all', this)">All</button>
          <button class="gf" onclick="gFilter('whitening', this)">
            Whitening
          </button>
          <button class="gf" onclick="gFilter('implants', this)">
            Implants
          </button>
          <button class="gf" onclick="gFilter('braces', this)">Braces</button>
          <button class="gf" onclick="gFilter('cosmetic', this)">
            Cosmetic
          </button>
        </div>
      </div>
      <div class="gallery-grid reveal" id="gg">
        <div class="gi wide" data-cat="cosmetic">
          <img
            src="/suggest.jpeg"
            alt="Smile makeover"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Suggestion</div>
              <div class="gi-sub">Discuss + Suggestion</div>
            </div>
          </div>
        </div>
        <div class="gi" data-cat="whitening">
          <img
            src="/odcc.png"
            alt="Teeth whitening"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Teeth Whitening</div>
              <div class="gi-sub">8 shades brighter</div>
            </div>
          </div>
        </div>
        <div class="gi" data-cat="braces">
          <img
            src="/alligners.jpeg"
            alt="Orthodontics"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Orthodontics</div>
              <div class="gi-sub">18-month Alligners</div>
            </div>
          </div>
        </div>
        <div class="gi" data-cat="implants">
          <img
            src="/odc.jpg"
            alt="Dental Implant"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Dental Implant</div>
              <div class="gi-sub">Multiple-tooth restore</div>
            </div>
          </div>
        </div>
        <div class="gi" data-cat="cosmetic">
          <img
            src="/veneer.jpg"
            alt="Veneers"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Porcelain Veneers</div>
              <div class="gi-sub">6 upper veneers</div>
            </div>
          </div>
        </div>
        <div class="gi wide" data-cat="implants">
          <img
            src="/gumops.jpeg"
            alt="Dental care"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Multiple Implants</div>
              <div class="gi-sub">3-tooth bridge</div>
            </div>
          </div>
        </div>
        <div class="gi" data-cat="whitening">
          <img
            src="/white.png"
            alt="Whitening treatment"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Whitening</div>
              <div class="gi-sub">Complete refresh</div>
            </div>
          </div>
        </div>
        <div class="gi" data-cat="braces">
          <img
            src="/Clearalligners.jpg"
            alt="Clear aligners"
          />
          <div class="gi-ov">
            <div>
              <div class="gi-lbl">Clear Aligners</div>
              <div class="gi-sub">12-month invisible</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CERTIFICATIONS ══ -->
    <section id="certs" class="certs">
      <div class="certs-layout">
        <div class="certs-left reveal">
          <span class="section-label">Certifications</span>
          <h2
            class="serif"
            style="font-size: clamp(2rem, 3.5vw, 2.6rem); color: var(--ink)"
          >
            Qualified.<br />Accredited.<br />Trusted.
          </h2>
          <p class="body-sm">
            Our credentials and memberships reflect an unwavering commitment to
            the highest standards of dental care in India.
          </p>
          <a href="#booking" class="btn btn-primary">Book a Visit</a>
          <div class="assoc-row">
            <span class="assoc-tag">Indian Dental Association</span>
            <span class="assoc-tag">Dental Council of India</span>
            <span class="assoc-tag">FDI World Federation</span>
            <span class="assoc-tag">ISOI Implantology</span>
            <span class="assoc-tag">Justdial Top-Rated 2024</span>
          </div>
        </div>
        <div class="certs-grid reveal">
          <div class="ct">
            <span class="chip chip-blue" style="margin-bottom: 12px"
              >Verified</span
            ><span class="ct-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" /></svg
            ></span>
            <h4>BDS Degree</h4>
            <p>
              Bachelor of Dental Surgery from a recognised Indian dental
              institution.
            </p>
          </div>
          <div class="ct">
            <span class="chip chip-mint" style="margin-bottom: 12px"
              >Active</span
            ><span class="ct-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M3 22h18M6 18V10M10 18V10M14 18V10M18 18V10M2 10l10-6 10 6"
                /></svg
            ></span>
            <h4>IDA Member</h4>
            <p>
              Registered with the Indian Dental Association, Maharashtra
              Chapter.
            </p>
          </div>
          <div class="ct">
            <span class="chip chip-coral" style="margin-bottom: 12px"
              >Registered</span
            ><span class="ct-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 3c-2.5 0-5 2-5 5 0 2 .8 3.5 1 5 .3 2 0 4 1 5h2c.5-1 .5-3 1-5h0c.5 2 .5 4 1 5h2c1-1 .7-3 1-5 .2-1.5 1-3 1-5 0-3-2.5-5-5-5z"
                /></svg
            ></span>
            <h4>DCI Registered</h4>
            <p>
              Fully registered with the Dental Council of India — practising
              legally and ethically.
            </p>
          </div>
          <div class="ct">
            <span class="chip chip-amber" style="margin-bottom: 12px"
              >Compliant</span
            ><span class="ct-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg
            ></span>
            <h4>Infection Control</h4>
            <p>
              Strict WHO & ADA sterilisation protocols ensuring a safe clinic
              environment.
            </p>
          </div>
          <div class="ct">
            <span class="chip chip-blue" style="margin-bottom: 12px"
              >Trained</span
            ><span class="ct-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 2l4 4-11 11H7v-4L18 2z" />
                <path d="M7 13l-5 5" /></svg
            ></span>
            <h4>Implantology</h4>
            <p>
              Specialised training in dental implants and oral surgery from
              advanced institutes.
            </p>
          </div>
          <div class="ct">
            <span class="chip chip-coral" style="margin-bottom: 12px"
              >Certified</span
            ><span class="ct-icon"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z"
                />
                <path
                  d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z"
                /></svg
            ></span>
            <h4>Cosmetic Dentistry</h4>
            <p>
              Certified in aesthetic procedures — veneers, bonding, and
              professional whitening.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ AWARDS ══ -->
    <section id="awards" class="awards">
      <div class="awards-top reveal">
        <div>
          <span class="section-label" style="color: rgba(255, 255, 255, 0.45)"
            >Recognition</span
          >
          <h2 class="serif" style="font-size: clamp(2rem, 3.5vw, 2.8rem)">
            Recognised for<br />excellence.
          </h2>
        </div>
        <p class="body-sm" style="max-width: 300px; text-align: right">
          Growing fast — recognised by every patient as Thane West's
          friendliest, most professional clinic.
        </p>
      </div>
      <div class="awards-grid reveal">
        <div class="aw">
          <span class="aw-icon">
            <svg viewBox="0 0 24 24">
              <path
                d="M6 9H3V3h18v6h-3M12 15c-3.3 0-6-2.7-6-6V3h12v6c0 3.3-2.7 6-6 6zM12 15v4M8 19h8"
              />
            </svg>
          </span>
          <h4>Top Dental Clinic</h4>
          <p>
            Highest-rated dental clinic in Thane West for two consecutive years.
          </p>
          <span class="aw-year">2023 &amp; 2024</span>
        </div>
        <div class="aw">
          <span class="aw-icon">
            <svg viewBox="0 0 24 24">
              <polygon
                points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
              />
            </svg>
          </span>
          <h4>Justdial Top-Rated</h4>
          <p>224+ verified votes and a 5-star average on Justdial.</p>
          <span class="aw-year">2024</span>
        </div>
        <div class="aw">
          <span class="aw-icon">
            <svg viewBox="0 0 24 24">
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
              />
              <line x1="9" y1="10" x2="15" y2="10" />
              <line x1="12" y1="7" x2="12" y2="13" />
            </svg>
          </span>
          <h4>Google Star Clinic</h4>
          <p>10+ reviews averaging 5.0 stars — most reviewed in Thane West.</p>
          <span class="aw-year">2024</span>
        </div>
        <div class="aw">
          <span class="aw-icon">
            <svg viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </span>
          <h4>Community Trusted</h4>
          <p>
            Recognised by Naupada residents as Thane West's most welcoming and
            professional dental clinic.
          </p>
          <span class="aw-year">2023</span>
        </div>
      </div>
      <div class="media-belt reveal">
        <p class="media-label">Featured & Verified On</p>
        <div class="media-tags">
          <span class="mtag">Google Reviews</span>
          <span class="mtag">Justdial</span>
          <span class="mtag">Google Maps</span>
          <span class="mtag">Practo</span>
          <span class="mtag">Naupada Community</span>
        </div>
      </div>
    </section>

    <!-- ══ TESTIMONIALS ══ -->
    <section id="testi" class="testi">
      <div class="reveal" style="text-align: center">
        <span class="section-label">Patient Stories</span>
        <h2
          class="serif"
          style="font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--ink)"
        >
          Hear it from our patients.
        </h2>
      </div>
      <div class="testi-grid reveal">
        <div class="tc">
          <div class="tc-stars">★★★★★</div>
          <div class="tc-q">"</div>
          <blockquote>
            Excellent and highly professional service from start to finish. The
            dentist was thorough, patient, and genuinely caring — easily the
            best dental experience I've had in Thane.
          </blockquote>
          <div class="tc-author">
            <div class="tc-av">S</div>
            <div>
              <strong>Sneha Patil</strong><span>Naupada, Thane West</span>
            </div>
          </div>
        </div>
        <div class="tc">
          <div class="tc-stars">★★★★★</div>
          <div class="tc-q">"</div>
          <blockquote>
            After the treatment, I am able to eat my food without any pain or
            discomfort. I had been suffering for months and the team here
            resolved it quickly and painlessly. Highly recommend!
          </blockquote>
          <div class="tc-author">
            <div class="tc-av">V</div>
            <div>
              <strong>Vikram Joshi</strong><span>Thane West, Maharashtra</span>
            </div>
          </div>
        </div>
        <div class="tc">
          <div class="tc-stars">★★★★★</div>
          <div class="tc-q">"</div>
          <blockquote>
            Clean clinic, minimal waiting time, and very reassuring overall. The
            staff is warm, the doctor listens attentively, and the results speak
            for themselves. Wouldn't go anywhere else!
          </blockquote>
          <div class="tc-author">
            <div class="tc-av">M</div>
            <div><strong>Meera Kulkarni</strong><span>Thane West</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ BOOKING ══ -->
    <section id="booking" class="booking">
      <div class="reveal">
        <span class="section-label">Appointments</span>
        <h2
          class="serif"
          style="
            font-size: clamp(2rem, 3.5vw, 2.8rem);
            color: var(--ink);
            margin-bottom: 10px;
          "
        >
          Book your visit.
        </h2>
        <p class="body-sm" style="margin-bottom: 32px">
          Fill in the form and we'll confirm your slot shortly.
        </p>
        <div class="bf-row">
          <div class="fg">
            <label>First Name</label><input type="text" placeholder="Rahul" />
          </div>
          <div class="fg">
            <label>Last Name</label><input type="text" placeholder="Sharma" />
          </div>
        </div>
        <div class="bf-row">
          <div class="fg">
            <label>Email</label
            ><input type="email" placeholder="you@email.com" />
          </div>
          <div class="fg">
            <label>Service</label
            ><select>
              <option>General Dental</option>
              <option>Cosmetic Dental</option>
              <option>Teeth Whitening</option>
              <option>Dental Implants</option>
              <option>Orthodontics</option>
              <option>Emergency Care</option>
            </select>
          </div>
        </div>
        <div class="fg" style="margin-bottom: 18px">
          <label>Message</label
          ><textarea
            placeholder="Your dental concerns or preferred appointment time…"
          ></textarea>
        </div>
        <button
          class="btn btn-primary"
          style="
            width: 100%;
            justify-content: center;
            font-size: 0.86rem;
            padding: 15px;
          "
        >
          Submit Request →
        </button>
      </div>
      <div class="reveal">
        <div class="booking-panel">
          <span class="bp-eyebrow">Clinic Hours</span>
          <p class="bp-title">When to visit</p>
          <p class="bp-sub">Walk-ins welcome · Appointments preferred</p>
          <ul class="bp-hours">
            <li><span>Monday – Saturday</span><span>10 AM – 11 PM</span></li>
            <li><span>Sunday</span><span>10 AM – 11 PM</span></li>
          </ul>
          <div class="bp-addr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            5XRC+8G6, Naupada, Thane West, Thane, Maharashtra 400602<br /><br />📍
            <a
              href="https://maps.google.com/?q=Glowup+Dental+Clinic+Naupada+Thane+West"
              target="_blank"
              style="color: rgba(255, 255, 255, 0.55)"
              >View on Google Maps →</a
            >
          </div>
        </div>
      </div>
    </section>

    <!-- ══ MAP ══ -->
    <div id="map-section" class="map-sec">
      <div class="map-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1!2d72.9622!3d19.1974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8e073333333%3A0x111111111111111!2sGlowup+Dental+Clinic!5e0!3m2!1sen!2sin!4v1700000000001"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Glowup Dental Clinic"
        ></iframe>
      </div>
      <div class="map-panel">
        <span class="section-label">Find Us</span>
        <h2
          class="serif"
          style="
            font-size: clamp(1.8rem, 3vw, 2.4rem);
            color: var(--ink);
            margin-bottom: 8px;
          "
        >
          Come see us<br />in Thane West.
        </h2>
        <div class="mi-items">
          <div class="mi-row">
            <div class="mi-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h5>Address</h5>
              <p>5XRC+8G6, Naupada, Thane West, Thane 400602</p>
            </div>
          </div>
          <div class="mi-row">
            <div class="mi-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h5>Clinic Hours</h5>
              <p>Mon–Sat: 10 AM – 9 PM &nbsp;·&nbsp; Sunday: 10 AM – 4 PM</p>
            </div>
          </div>
          <div class="mi-row">
            <div class="mi-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <div>
              <h5>Parking</h5>
              <p>
                Street parking available on Naupada road. Easily reachable from
                Thane station.
              </p>
            </div>
          </div>
        </div>
        <div class="mi-btns">
          <a
            href="https://maps.google.com/?q=Advance+Dentacare+Thane"
            target="_blank"
            class="btn btn-primary"
            >Get Directions →</a
          >
        </div>
      </div>
    </div>

    <!-- ══ FAQ ══ -->
    <section id="faq" class="faq">
      <div class="faq-layout reveal">
        <div class="faq-left">
          <span class="section-label">FAQ</span>
          <h2
            class="serif"
            style="font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--ink)"
          >
            Answers<br />before you ask.
          </h2>
          <p class="body-sm">
            Everything you need to know before your first visit — answered
            honestly.
          </p>
          <div class="faq-cta-box">
            <h4>Still have questions?</h4>
            <p>Our team is always happy to answer anything before you book.</p>
            <a
              href="#booking"
              class="btn btn-primary"
              style="width: 100%; justify-content: center"
              >Book a Consultation</a
            >
          </div>
        </div>
        <div class="faq-items">
          <div class="faq-item open">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>Is the treatment painful? What can I expect?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                We prioritise your comfort above everything. Most procedures are
                under local anaesthesia so you'll feel little to no pain. Our
                team talks you through every step so you're never left
                wondering.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>How long does teeth whitening last?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                Professional whitening results typically last 12–24 months.
                Avoiding staining foods and using touch-up kits extends results
                further. We'll guide you on the best aftercare routine.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>Do you accept insurance or payment plans?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                We accept most major dental insurance plans and offer flexible
                payment options for larger treatments. Call ahead and our team
                will help clarify your coverage.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>How often should I visit the dentist?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                We recommend a routine check-up and professional cleaning every
                6 months. More frequent visits may be advised if you have
                ongoing concerns, gum disease, or wear braces.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>What's the process for dental implants?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                Implants involve 3 stages: consultation & X-rays, titanium post
                placement, then fitting the permanent crown. The full process
                takes 3–6 months — we guide you through every step.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>Is the clinic child-friendly?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                Absolutely — we welcome patients of all ages. Our team uses
                gentle, age-appropriate techniques and makes children feel safe
                and comfortable throughout.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <div class="faq-q" onclick="toggleFaq(this)">
              <h4>What payment methods do you accept?</h4>
              <div class="faq-ico">+</div>
            </div>
            <div class="faq-a">
              <p>
                Cash, debit cards, Google Pay, PhonePe, Paytm, and all major UPI
                methods are accepted. We make payment as convenient as possible
                for every patient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ BLOG ══ -->
    <section id="blog" class="blog">
      <div
        class="reveal"
        style="
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 0;
        "
      >
        <div>
          <span class="section-label">From Our Blog</span>
          <h2
            class="serif"
            style="font-size: clamp(2rem, 3.5vw, 2.8rem); color: var(--ink)"
          >
            Insights for<br />healthier smiles.
          </h2>
        </div>
      </div>
      <div class="blog-grid reveal">
        <div class="bl">
          <div class="bl-thumb">
            <img
              src="suggest.jpeg"
              alt="Dental anxiety"
            />
          </div>
          <div class="bl-body">
            <div class="bl-date">November 2024</div>
            <h4>Understanding Dental Anxiety and How to Overcome It</h4>
            <span class="bl-link">Read more →</span>
          </div>
        </div>
        <div class="bl">
          <div class="bl-thumb">
            <img
              src="alligners.jpeg"
              alt="Implants vs dentures"
            />
          </div>
          <div class="bl-body">
            <div class="bl-date">November 2024</div>
            <h4>Dental Implants vs. Dentures: Which Is Right for You?</h4>
            <span class="bl-link">Read more →</span>
          </div>
        </div>
        <div class="bl">
          <div class="bl-thumb">
            <img
              src="food.jpg"
              alt="Healthy teeth foods"
            />
          </div>
          <div class="bl-body">
            <div class="bl-date">November 2024</div>
            <h4>Foods for Healthy Teeth: What to Eat and What to Avoid</h4>
            <span class="bl-link">Read more →</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══ CTA BANNER ══ -->
    <div class="cta-banner">
      <h2 class="serif">Your best smile<br />starts here.</h2>
      <p>Subscribe for dental tips, exclusive offers, and clinic news.</p>
      <div class="email-row">
        <input type="email" placeholder="Enter your email" />
        <button class="btn btn-primary">Subscribe →</button>
      </div>
    </div>

    <!-- ══ FOOTER ══ -->
    <footer>
      <div class="footer-grid wrap" style="padding-top: 0">
        <div>
          <div
            style="
              display: flex;
              align-items: center;
              gap: 10px;
              margin-bottom: 12px;
            "
          >
            <img
              src="YOUR_LOGO.svg"
              alt="Glowup Dental"
              style="
                height: 42px;
                width: auto;
                object-fit: contain;
                display: block;
              "
            />
            <span class="f-brand" style="margin-bottom: 0">Glowup Dental</span>
          </div>
          <p class="f-about">
            Dedicated to providing high-quality, compassionate dental care for
            patients of all ages in Thane West. A welcoming space for patients
            of all ages, with a focus on gentle, pain-free dentistry.
          </p>
        </div>
        <div>
          <h5>Navigate</h5>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#booking">Appointments</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul>
            <li><a href="#services">General Dental</a></li>
            <li><a href="#services">Cosmetic Dental</a></li>
            <li><a href="#services">Teeth Whitening</a></li>
            <li><a href="#services">Dental Implants</a></li>
            <li><a href="#services">Orthodontics</a></li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <div class="f-contact">
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L9.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
              <a href="tel:" style="color: rgba(255, 255, 255, 0.45)"
                >Contact via Google Maps</a
              ></span
            >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Naupada, Thane West, Thane 400602</span
            >
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon–Sat 10 AM–11 PM · Sun 10 AM–11 PM</span
            >
            <span>⭐ 5.0 · 10 Google Reviews</span>
          </div>
        </div>
      </div>
      <div class="fbot wrap" style="padding-bottom: 0">
        <span>© 2025 Glowup Dental Clinic. All Rights Reserved.</span>
        <div><a href="#">Privacy Policy</a><a href="#">Terms</a></div>
      </div>
    </footer>

    <script>
      /* NAV scroll */
      const nav = document.getElementById("nav");
      window.addEventListener(
        "scroll",
        () => nav.classList.toggle("scrolled", scrollY > 40),
        { passive: true },
      );

      /* Smooth scroll for nav links */
      document.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const id = a.getAttribute("href").slice(1);
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      /* Before/After Sliders */
      function mkSlider(wId, cId, inId, dId, hId) {
        const w = document.getElementById(wId),
          c = document.getElementById(cId),
          inn = document.getElementById(inId),
          d = document.getElementById(dId),
          h = document.getElementById(hId);
        if (!w) return;
        let drag = false;
        const sync = () => {
          const r = w.getBoundingClientRect();
          if (inn) {
            inn.style.width = r.width + "px";
            w.style.setProperty("--slider-full-w", r.width + "px");
          }
        };
        setTimeout(sync, 120);
        window.addEventListener("resize", sync, { passive: true });
        const move = (x) => {
          const r = w.getBoundingClientRect();
          const p = Math.min(95, Math.max(5, ((x - r.left) / r.width) * 100));
          c.style.width = p + "%";
          d.style.left = p + "%";
          h.style.left = p + "%";
          h.style.transform = "translate(-50%,-50%)";
        };
        w.addEventListener("mousedown", (e) => {
          drag = true;
          move(e.clientX);
          e.preventDefault();
        });
        window.addEventListener(
          "mousemove",
          (e) => {
            if (drag) move(e.clientX);
          },
          { passive: true },
        );
        window.addEventListener("mouseup", () => (drag = false));
        w.addEventListener(
          "touchstart",
          (e) => {
            drag = true;
            move(e.touches[0].clientX);
          },
          { passive: true },
        );
        window.addEventListener(
          "touchmove",
          (e) => {
            if (drag) move(e.touches[0].clientX);
          },
          { passive: true },
        );
        window.addEventListener("touchend", () => (drag = false));
      }
      mkSlider("s1", "sc1", "sci1", "d1", "h1");
      mkSlider("s2", "sc2", "sci2", "d2", "h2");

      /* Gallery filter */
      function gFilter(cat, btn) {
        document
          .querySelectorAll(".gf")
          .forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
        document
          .querySelectorAll(".gi")
          .forEach(
            (i) =>
              (i.style.display =
                cat === "all" || i.dataset.cat === cat ? "" : "none"),
          );
      }

      /* FAQ accordion */
      function toggleFaq(el) {
        const item = el.parentElement,
          open = item.classList.contains("open");
        document
          .querySelectorAll(".faq-item")
          .forEach((i) => i.classList.remove("open"));
        if (!open) item.classList.add("open");
      }

      /* Scroll reveal */
      const obs = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("in");
          }),
        { threshold: 0.1 },
      );
      document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));

      /* Active nav link highlight on scroll */
      const sections = document.querySelectorAll("section[id],div[id]");
      const navLinks = document.querySelectorAll(".nav-links a");
      window.addEventListener(
        "scroll",
        () => {
          let cur = "";
          sections.forEach((s) => {
            if (scrollY >= s.offsetTop - 100) cur = s.id;
          });
          navLinks.forEach((a) => {
            a.classList.remove("active");
            if (a.getAttribute("href") === "#" + cur) a.classList.add("active");
          });
        },
        { passive: true },
      );
    </script>
  </body>
</html>

  `);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
