import { useState, useEffect } from "react";
import { waLink, PHONE_LINK, PHONE_DISPLAY, CATEGORIES } from "../data/constants";

const css = `
  .navbar {
    position: fixed; top: 0; left: 0; right: 0; z-index: 200;
    background: rgba(7,17,31,0.96);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--bd);
    transition: background 0.3s;
  }
  .navbar.scrolled { background: rgba(7,17,31,0.99); }
  .nav-inner {
    max-width: 1200px; margin: 0 auto; padding: 0 24px;
    display: flex; align-items: center; justify-content: space-between; height: 64px;
  }
  .nav-logo { display: flex; align-items: center; gap: 6px; cursor: pointer; }
  .nav-logo-text {
    font-family: var(--fc); font-weight: 900; font-size: 21px;
    letter-spacing: 0.5px; color: var(--wh);
  }
  .nav-logo-text span { color: var(--cy); }

  .nav-links { display: flex; align-items: center; gap: 4px; }
  .nav-links a {
    color: var(--mu); font-family: var(--fc);
    font-size: 12px; font-weight: 600;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 8px 10px; transition: color 0.2s; cursor: pointer;
  }
  .nav-links a:hover { color: var(--cy); }

  /* Dropdown */
  .nav-dropdown { position: relative; }
  .nav-dropdown > a { display: flex; align-items: center; gap: 4px; }
  .nav-dropdown > a::after { content: '▾'; font-size: 10px; color: var(--mu); }
  .nav-dd-menu {
    display: none; position: absolute; top: 100%; left: 0;
    background: rgba(7,17,31,.99); border: 1px solid var(--bd);
    min-width: 220px; padding: 8px 0; z-index: 300;
  }
  .nav-dropdown:hover .nav-dd-menu { display: block; }
  .nav-dd-item {
    display: flex; align-items: center; gap: 10px;
    padding: 10px 16px; color: var(--mu) !important;
    font-size: 13px !important; font-weight: 600; letter-spacing: 0.5px;
    text-transform: uppercase; cursor: pointer; transition: all .2s;
    border-bottom: 1px solid var(--bd);
  }
  .nav-dd-item:last-child { border-bottom: none; }
  .nav-dd-item:hover { background: var(--cy10); color: var(--cy) !important; padding-left: 20px; }
  .nav-dd-icon { font-size: 16px; flex-shrink: 0; }

  .nav-cta-phone {
    display: flex; align-items: center; gap: 6px;
    background: transparent; border: 1px solid rgba(255,255,255,.2);
    color: var(--wh); padding: 8px 12px;
    font-family: var(--fc); font-size: 12px; font-weight: 700;
    text-decoration: none; transition: all .2s; letter-spacing: .5px;
  }
  .nav-cta-phone:hover { border-color: var(--cy); color: var(--cy); }
  .nav-cta-orcamento {
    background: var(--or); color: #fff; padding: 9px 16px;
    font-family: var(--fc); font-size: 12px; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase; border: none;
    cursor: pointer; transition: background .2s; text-decoration: none;
  }
  .nav-cta-orcamento:hover { background: #e05d00; }

  .hamburger { display: none; background: none; border: none; flex-direction: column; gap: 5px; padding: 6px; }
  .hamburger span { width: 24px; height: 2px; background: var(--wh); display: block; transition: .3s; transform-origin: center; }
  .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px,5px); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px,-5px); }

  .mobile-nav {
    display: none; flex-direction: column;
    background: rgba(7,17,31,.98); border-top: 1px solid var(--bd);
    padding: 16px 24px 24px; gap: 0;
  }
  .mobile-nav.open { display: flex; }
  .mobile-nav a {
    color: var(--mu); font-family: var(--fc);
    font-size: 15px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
    padding: 14px 0; border-bottom: 1px solid var(--bd);
    cursor: pointer; transition: color .2s;
  }
  .mobile-nav a:hover { color: var(--cy); }
  .mob-cat { color: var(--cy) !important; font-size: 13px !important; padding: 10px 0 10px 12px !important; }
  .mob-btns { display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap; }
  .mob-btns a { flex: 1; min-width: 130px; justify-content: center; font-size: 14px; padding: 12px; }

  @media (max-width: 900px) {
    .nav-links { display: none; }
    .nav-cta-phone { display: none; }
    .hamburger { display: flex; }
  }
`;

const navItems = [
  { label: "Início", target: "hero" },
  { label: "Áreas", target: "areas" },
  { label: "Depoimentos", target: "depoimentos" },
  { label: "Contato", target: "contato" },
];

export default function Navbar({ onNavigate, currentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (target) => {
    setOpen(false);
    if (currentPage !== "home") {
      onNavigate("home", target);
    } else {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goService = (slug) => {
    setOpen(false);
    onNavigate("service", slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style>{css}</style>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => onNavigate("home")}>
            <span style={{fontSize:18}}>🔧</span>
            <span className="nav-logo-text">DESENT<span>UPIDORA</span></span>
          </div>

          <div className="nav-links">
            <a onClick={() => go("hero")}>Início</a>

            {/* Services dropdown */}
            <div className="nav-dropdown">
              <a onClick={() => go("servicos")}>Serviços</a>
              <div className="nav-dd-menu">
                {CATEGORIES.map(cat => (
                  <div key={cat.slug} className="nav-dd-item" onClick={() => goService(cat.slug)}>
                    <span className="nav-dd-icon">{cat.icon}</span>
                    <span>{cat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {navItems.slice(1).map(n => (
              <a key={n.label} onClick={() => go(n.target)}>{n.label}</a>
            ))}
            <a href={PHONE_LINK} className="nav-cta-phone">📞 {PHONE_DISPLAY}</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="nav-cta-orcamento">
              Orçamento
            </a>
          </div>

          <button
            className={`hamburger${open ? " open" : ""}`}
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>

        <div className={`mobile-nav${open ? " open" : ""}`}>
          <a onClick={() => go("hero")}>Início</a>
          <a onClick={() => go("servicos")}>Serviços</a>
          {CATEGORIES.map(cat => (
            <a key={cat.slug} className="mob-cat" onClick={() => goService(cat.slug)}>
              {cat.icon} {cat.title}
            </a>
          ))}
          {navItems.slice(1).map(n => (
            <a key={n.label} onClick={() => go(n.target)}>{n.label}</a>
          ))}
          <div className="mob-btns">
            <a href={PHONE_LINK} className="btn bca">📞 Ligar Agora</a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn bwa">📲 WhatsApp</a>
          </div>
        </div>
      </nav>
    </>
  );
}

