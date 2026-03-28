import { waLink, PHONE_LINK, PHONE_DISPLAY, INSTAGRAM, CATEGORIES } from "../data/constants";

const css = `
  .footer { background: #040c18; border-top: 1px solid var(--border); padding: 60px 0 0; }
  .footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 40px;
    padding-bottom: 48px;
    border-bottom: 1px solid var(--border);
  }
  .footer-brand .logo-text {
    font-family: var(--font-cond);
    font-weight: 900; font-size: 24px; color: var(--white);
    margin-bottom: 12px;
  }
  .footer-brand .logo-text span { color: var(--cyan); }
  .footer-brand p { color: var(--muted); font-size: 14px; line-height: 1.7; margin-bottom: 20px; }
  .footer-contact-item {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 10px;
  }
  .footer-contact-item a, .footer-contact-item span {
    color: var(--muted); font-size: 14px;
    text-decoration: none; transition: color 0.2s;
  }
  .footer-contact-item a:hover { color: var(--cyan); }

  .footer-col h4 {
    font-family: var(--font-cond);
    font-size: 13px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase;
    color: var(--white); margin-bottom: 20px;
  }
  .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .footer-col ul li a {
    color: var(--muted); font-size: 14px;
    transition: color 0.2s; cursor: pointer;
  }
  .footer-col ul li a:hover { color: var(--cyan); }

  .footer-bottom {
    padding: 20px 0;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 12px;
  }
  .footer-bottom p { color: var(--muted-2); font-size: 13px; }
  .footer-bottom .badges { display: flex; gap: 16px; }
  .badge-seo {
    background: var(--cyan-dim);
    border: 1px solid var(--border);
    padding: 4px 10px;
    font-size: 11px;
    font-weight: 600;
    color: var(--cyan);
    letter-spacing: 1px;
  }

  @media (max-width: 900px) {
    .footer-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 600px) {
    .footer-grid { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; text-align: center; }
  }
`;

export default function Footer({ onNavigate }) {
  const go = (target) => onNavigate("home", target);

  return (
    <>
      <style>{css}</style>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-text">🔧 DESENTUPI<span>DORA</span></div>
              <p>
                Desentupidora Residencial® — Atendimento 24h em Porto Alegre e Região Metropolitana.
                Mais de 5.000 atendimentos realizados com qualidade e pontualidade.
              </p>
              <div className="footer-contact-item">
                <span>📞</span>
                <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
              </div>
              <div className="footer-contact-item">
                <span>📲</span>
                <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp Agora</a>
              </div>
              <div className="footer-contact-item">
                <span>📸</span>
                <span>{INSTAGRAM}</span>
              </div>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Porto Alegre – RS</span>
              </div>
            </div>

            {CATEGORIES.map(cat => (
              <div key={cat.slug} className="footer-col">
                <h4>{cat.icon} {cat.title}</h4>
                <ul>
                  <li><a onClick={() => onNavigate("service", cat.slug)}>Ver todos os serviços</a></li>
                  {cat.services.map(svc => (
                    <li key={svc.title}>
                      <a onClick={() => onNavigate("service", cat.slug)}>{svc.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-col">
              <h4>Navegação</h4>
              <ul>
                <li><a onClick={() => go("hero")}>Início</a></li>
                <li><a onClick={() => go("areas")}>Áreas Atendidas</a></li>
                <li><a onClick={() => go("depoimentos")}>Depoimentos</a></li>
                <li><a onClick={() => go("blog")}>Blog</a></li>
                <li><a onClick={() => go("contato")}>Contato</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Desentupidora Residencial® — Todos os direitos reservados</p>
            <div className="badges">
              <span className="badge-seo">Google ⭐ 4.9</span>
              <span className="badge-seo">24H Online</span>
              <span className="badge-seo">+5K Atendimentos</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
