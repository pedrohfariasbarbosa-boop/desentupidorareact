import { AREAS, waLink } from "../data/constants";

const css = `
  .areas { background: var(--card-bg); }
  .areas-intro {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 48px; align-items: start;
    margin-bottom: 48px;
  }
  .areas-desc { color: var(--muted); font-size: 16px; line-height: 1.8; margin-top: 16px; }

  .areas-featured {
    display: grid; grid-template-columns: repeat(3,1fr);
    gap: 12px; margin-bottom: 32px;
  }
  .area-card-feat {
    background: var(--dark-2);
    border: 1px solid var(--border-2);
    padding: 16px;
    transition: all 0.2s;
  }
  .area-card-feat:hover { border-color: var(--cyan); background: rgba(0,212,255,0.05); }
  .area-card-feat .name {
    font-family: var(--font-cond);
    font-size: 18px; font-weight: 800;
    text-transform: uppercase; color: var(--cyan);
    margin-bottom: 4px;
  }
  .area-card-feat .badge24 {
    display: inline-block;
    background: rgba(255,107,0,0.15);
    border: 1px solid rgba(255,107,0,0.3);
    color: var(--orange);
    font-size: 10px; font-weight: 700;
    letter-spacing: 1px; text-transform: uppercase;
    padding: 2px 8px; margin-bottom: 8px;
  }
  .area-card-feat .adesc { color: var(--muted); font-size: 12px; line-height: 1.5; }

  .areas-all {
    display: grid; grid-template-columns: repeat(5, 1fr);
    gap: 8px;
  }
  .area-pill {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    padding: 9px 12px;
    font-size: 13px; font-weight: 500;
    color: var(--muted); text-align: center;
    transition: all 0.2s; cursor: default;
  }
  .area-pill:hover { color: var(--white); border-color: var(--border-2); background: rgba(255,255,255,0.07); }

  .areas-cta {
    margin-top: 32px;
    background: var(--dark-2);
    border: 1px solid var(--border);
    padding: 24px 28px;
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;
  }
  .areas-cta p { color: var(--muted); font-size: 14px; }
  .areas-cta strong { display: block; font-size: 18px; font-family: var(--font-cond); font-weight: 800; text-transform: uppercase; margin-bottom: 4px; }

  @media (max-width: 860px) { .areas-intro { grid-template-columns: 1fr; } }
  @media (max-width: 760px) { .areas-featured { grid-template-columns: repeat(2,1fr); } .areas-all { grid-template-columns: repeat(3,1fr); } }
  @media (max-width: 480px) { .areas-all { grid-template-columns: repeat(2,1fr); } }
`;

const featuredAreas = AREAS.filter(a => a.featured);
const otherAreas = AREAS.filter(a => !a.featured);

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

export default function AreasSection() {
  return (
    <>
      <style>{css}</style>
      <section id="areas" className="section areas">
        <div className="container">
          <div className="areas-intro">
            <div>
              <span className="tag">Cobertura Regional</span>
              <h2 className="heading">ÁREAS<br /><span className="accent">ATENDIDAS</span></h2>
              <p className="areas-desc">
                Atendemos <strong>Porto Alegre</strong> e toda a <strong>Região Metropolitana de Porto Alegre</strong>.
                Desentupidora 24h em Porto Alegre — técnicos distribuídos pela cidade para atender em até 30 minutos.
              </p>
            </div>
            <div>
              <p className="areas-desc" style={{marginTop: 0}}>
                Basta informar seu bairro e mandamos um técnico imediatamente. Cobrimos todos os bairros de Porto Alegre, Canoas, Gravataí e municípios vizinhos.
              </p>
              <div style={{marginTop: 20}}>
                <a href={waLink("Olá! Preciso saber se vocês atendem minha região.")} target="_blank" rel="noreferrer" className="btn btn-wa">
                  📍 Verificar minha área
                </a>
              </div>
            </div>
          </div>

          <div className="areas-featured">
            {featuredAreas.map(a => (
              <div key={a.name} className="area-card-feat">
                <div className="badge24">24H</div>
                <div className="name">📍 {a.name}</div>
                <div className="adesc">{a.desc}</div>
              </div>
            ))}
          </div>

          <div className="areas-all">
            {otherAreas.map(a => (
              <div key={a.name} className="area-pill">{a.name}</div>
            ))}
          </div>

          <div className="areas-cta">
            <div>
              <strong>Não encontrou seu bairro?</strong>
              <p>Entre em contato e verifique disponibilidade. Atendemos toda a RMPA.</p>
            </div>
            <a href={waLink("Olá! Quero saber se vocês atendem meu bairro.")} target="_blank" rel="noreferrer" className="btn btn-wa">
              <WhatsAppIcon /> Consultar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
