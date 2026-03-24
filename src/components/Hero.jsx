import { waLink, PHONE_LINK, CATEGORIES, STATS } from "../data/constants";

const css = `
  .hero {
    min-height: 100vh;
    background:
      radial-gradient(ellipse 800px 500px at 80% 30%, rgba(0,212,255,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 600px 400px at 20% 80%, rgba(255,107,0,0.04) 0%, transparent 60%),
      linear-gradient(160deg, #07111f 0%, #0a1628 50%, #060e1a 100%);
    display: flex; align-items: center;
    padding: 100px 0 60px;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image:
      linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 60px; align-items: center;
  }
  .hero-trust {
    display: flex; align-items: center; gap: 16px;
    margin-bottom: 28px; flex-wrap: wrap;
  }
  .trust-pill {
    display: flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    padding: 5px 12px;
    font-size: 12px; font-weight: 500; color: var(--muted);
    letter-spacing: 0.5px;
  }
  .trust-pill span { color: var(--cyan); }

  .hero h1 {
    font-family: var(--font-cond);
    font-weight: 900;
    font-size: clamp(52px, 8vw, 84px);
    line-height: 0.9;
    text-transform: uppercase;
    letter-spacing: -2px;
    margin-bottom: 20px;
  }
  .hero h1 em { color: var(--cyan); font-style: normal; display: block; }
  .hero h1 strong { color: var(--orange); font-weight: 900; display: block; }

  .hero-sub {
    font-size: 18px; color: var(--muted);
    line-height: 1.6; margin-bottom: 12px;
    max-width: 540px;
  }
  .hero-promises {
    display: flex; gap: 20px; flex-wrap: wrap;
    margin-bottom: 32px;
  }
  .promise {
    display: flex; align-items: center; gap: 6px;
    font-size: 14px; font-weight: 600; color: var(--white);
    letter-spacing: 0.3px;
  }
  .promise .icon { font-size: 16px; }
  .hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 48px; }

  .hero-stats {
    display: grid; grid-template-columns: repeat(4,1fr);
    gap: 0; border-top: 1px solid var(--border);
    padding-top: 32px;
  }
  .stat-item {
    padding: 0 24px 0 0;
    border-right: 1px solid var(--border);
  }
  .stat-item:first-child { padding-left: 0; }
  .stat-item:last-child { border-right: none; }
  .stat-num {
    font-family: var(--font-cond);
    font-size: 36px; font-weight: 900;
    line-height: 1; color: var(--white);
  }
  .stat-num .ac { color: var(--cyan); }
  .stat-num .ao { color: var(--orange); }
  .stat-label {
    font-size: 11px; font-weight: 500;
    text-transform: uppercase; letter-spacing: 1.5px;
    color: var(--muted); margin-top: 4px;
  }

  /* Emergency card */
  .emergency-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 28px;
  }
  .ec-title {
    font-family: var(--font-cond);
    font-size: 12px; font-weight: 700;
    letter-spacing: 2.5px; text-transform: uppercase;
    color: var(--orange); margin-bottom: 20px;
    display: flex; align-items: center; gap: 8px;
  }
  .ec-title::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }

  .ec-item {
    display: flex; align-items: center; gap: 12px;
    padding: 11px 0;
    border-bottom: 1px solid var(--border);
    cursor: pointer; transition: all 0.2s;
    text-decoration: none; color: var(--white);
  }
  .ec-item:last-of-type { border-bottom: none; margin-bottom: 16px; }
  .ec-item:hover { color: var(--cyan); padding-left: 4px; }
  .ec-icon {
    width: 34px; height: 34px;
    background: var(--cyan-dim);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; flex-shrink: 0;
  }
  .ec-name { font-size: 14px; font-weight: 500; }
  .ec-arrow { margin-left: auto; color: var(--muted); font-size: 12px; }

  .btn-solicitar {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; background: var(--orange); color: white; border: none;
    padding: 16px;
    font-family: var(--font-cond); font-weight: 700;
    font-size: 18px; letter-spacing: 1px; text-transform: uppercase;
    cursor: pointer; transition: background 0.2s; text-decoration: none;
  }
  .btn-solicitar:hover { background: #e05d00; }

  .ec-divider { margin: 16px 0; }

  @media (max-width: 960px) {
    .hero-grid { grid-template-columns: 1fr; }
    .hero-stats { grid-template-columns: repeat(2,1fr); gap: 20px; }
    .stat-item { border-right: none; padding: 0; }
    .hero { padding-top: 120px; }
  }
  @media (max-width: 480px) {
    .hero h1 { font-size: 52px; letter-spacing: -1px; }
  }
`;

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 448 512" 
    width="18" 
    height="18" 
    fill="currentColor" 
    style={{ marginRight: '8px' }}
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
);

export default function Hero({ onNavigate }) {
  return (
    <>
      <style>{css}</style>
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="fade-up">
              <div className="badge-online">
                <span className="badge-dot" />
                Atendimento 24H Online — Porto Alegre e Região
              </div>

              <div className="hero-trust delay-1 fade-up">
                <div className="trust-pill"><span>⏱️</span> Chegamos rápido</div>
                <div className="trust-pill"><span>🔒</span> Sem quebra-quebra</div>
              </div>

              <h1 className="fade-up delay-2">
                DESENTUPIDORA
                <em>RESIDENCIAL</em>
                <strong>24 HORAS</strong>
              </h1>

              <p className="hero-sub fade-up delay-3">
                Desentupidora em Porto Alegre 24h — atendimento rápido e sem sujeira para residências e comércios. Problemas com entupimento, vazamentos ou pragas? <strong>Resolvemos agora mesmo.</strong>
              </p>

              <div className="hero-promises fade-up delay-3">
                <div className="promise"><span className="icon">✅</span> Atendimento imediato</div>
                <div className="promise"><span className="icon">✅</span> Mais de 500 atendimentos</div>
                <div className="promise"><span className="icon">✅</span> Pagamento facilitado</div>
              </div>

              <div className="hero-btns fade-up delay-4">
                <a href={waLink("Olá! Preciso de desentupimento urgente em Porto Alegre.")} target="_blank" rel="noreferrer" className="btn btn-wa" style={{fontSize: 17, padding: "15px 28px"}}>
                  <WhatsAppIcon /> Chamar no WhatsApp Agora
                </a>
                <a href={PHONE_LINK} className="btn btn-call" style={{fontSize: 17, padding: "15px 28px"}}>
                  📞 Ligar Agora
                </a>
              </div>

              <div className="hero-stats fade-up delay-4">
                {STATS.map(s => (
                  <div key={s.label} className="stat-item">
                    <div className="stat-num">
                      {s.num}<span className={s.label === "Seguidores IG" ? "ao" : "ac"}>{s.accent}</span>
                    </div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="emergency-card fade-up delay-2">
              <div className="ec-title">Atendimento de Emergência</div>
              {CATEGORIES.map(cat => (
                <div key={cat.slug}>
                  <a className="ec-item" style={{background:"rgba(0,212,255,.05)",borderBottom:"1px solid var(--border)"}} onClick={() => onNavigate("service", cat.slug)}>
                    <div className="ec-icon" style={{background:"rgba(0,212,255,.18)"}}>{cat.icon}</div>
                    <span className="ec-name" style={{fontWeight:700,color:"var(--cyan)"}}>{cat.title}</span>
                    <span className="ec-arrow">›</span>
                  </a>
                  {cat.services.map(svc => (
                    <a key={svc.title} className="ec-item" style={{paddingLeft:16}} onClick={() => onNavigate("service", cat.slug)}>
                      <div className="ec-icon">{svc.icon}</div>
                      <span className="ec-name" style={{fontSize:13}}>{svc.title}</span>
                      <span className="ec-arrow">›</span>
                    </a>
                  ))}
                </div>
              ))}
              <a
                href={waLink("Olá! Preciso de um orçamento urgente.")}
                target="_blank" rel="noreferrer"
                className="btn-solicitar"
              >
                <WhatsAppIcon /> Solicitar Orçamento Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
