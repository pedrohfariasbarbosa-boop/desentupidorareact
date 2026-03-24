import { waLink, PHONE_LINK } from "../data/constants";

const css = `
  .whyus { background: var(--dark-3); }
  .whyus-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px; align-items: center;
    margin-top: 48px;
  }
  .whyus-features { display: flex; flex-direction: column; gap: 0; }
  .feature-item {
    display: flex; align-items: flex-start; gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
  }
  .feature-item:last-child { border-bottom: none; }
  .feature-icon {
    width: 48px; height: 48px; flex-shrink: 0;
    background: var(--cyan-dim);
    border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 22px;
  }
  .feature-title {
    font-family: var(--font-cond);
    font-size: 18px; font-weight: 800;
    text-transform: uppercase; margin-bottom: 4px;
  }
  .feature-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }

  .whyus-right {}
  .guarantee-box {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 32px;
    margin-bottom: 24px;
  }
  .guarantee-title {
    font-family: var(--font-cond);
    font-size: 28px; font-weight: 900;
    text-transform: uppercase;
    color: var(--cyan); margin-bottom: 16px;
    line-height: 1;
  }
  .guarantee-list { display: flex; flex-direction: column; gap: 10px; }
  .guarantee-item {
    display: flex; align-items: center; gap: 10px;
    font-size: 15px; font-weight: 500;
  }
  .guarantee-item .check { color: #00ff88; font-size: 16px; flex-shrink: 0; }

  .urgency-box {
    background: linear-gradient(135deg, rgba(255,107,0,0.15), rgba(255,107,0,0.05));
    border: 1px solid rgba(255,107,0,0.3);
    padding: 24px;
    text-align: center;
  }
  .urgency-box p { font-size: 14px; color: var(--muted); margin-bottom: 16px; }
  .urgency-box strong {
    display: block; font-family: var(--font-cond);
    font-size: 22px; font-weight: 900;
    text-transform: uppercase; color: var(--orange);
    margin-bottom: 8px;
  }
  .urgency-btns { display: flex; gap: 10px; }

  @media (max-width: 860px) {
    .whyus-grid { grid-template-columns: 1fr; gap: 40px; }
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

const features = [
  { icon: "⚡", title: "Chegamos em 30 minutos", desc: "Equipe disponível 24h prontas para atender emergências em Porto Alegre e região." },
  { icon: "🔒", title: "Sem quebra-quebra", desc: "Técnicas modernas que eliminam entupimentos sem danificar pisos, azulejos ou paredes." },
  { icon: "🛡️", title: "Garantia no serviço", desc: "Todos os serviços realizados com garantia. Se o problema voltar, retornamos sem custo." },
  { icon: "💳", title: "Pagamento facilitado", desc: "Aceitamos PIX, cartão de crédito e débito. Sem complicação para você." },
  { icon: "🎓", title: "Técnicos certificados", desc: "Equipe treinada e especializada em todos os tipos de desentupimento." },
];

export default function WhyUs() {
  return (
    <>
      <style>{css}</style>
      <section className="section whyus">
        <div className="container">
          <div>
            <span className="tag">Por Que Nos Escolher</span>
            <h2 className="heading">O DIFERENCIAL DA<br /><span className="accent">DESENTUPIDORA 24H</span></h2>
          </div>

          <div className="whyus-grid">
            <div className="whyus-features">
              {features.map(f => (
                <div key={f.title} className="feature-item">
                  <div className="feature-icon">{f.icon}</div>
                  <div>
                    <div className="feature-title">{f.title}</div>
                    <div className="feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="whyus-right">
              <div className="guarantee-box">
                <div className="guarantee-title">✅ Sua Garantia<br />de Qualidade</div>
                <div className="guarantee-list">
                  {[
                    "Orçamento 100% gratuito",
                    "Atendimento em até 30 minutos",
                    "Sem custo por vinda (orçamento)",
                    "Nota fiscal e comprovante do serviço",
                    "Garantia de retorno gratuito",
                    "Mais de 3.000 atendimentos realizados",
                  ].map(item => (
                    <div key={item} className="guarantee-item">
                      <span className="check">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="urgency-box">
                <strong>🚨 Emergência Agora?</strong>
                <p>Não espere o problema piorar. Nossa equipe está disponível agora mesmo.</p>
                <div className="urgency-btns">
                  <a href={waLink("URGENTE! Preciso de desentupimento imediato.")} target="_blank" rel="noreferrer" className="btn btn-wa" style={{flex:1}}><WhatsAppIcon /> WhatsApp</a>
                  <a href={PHONE_LINK} className="btn btn-call" style={{flex:1}}>📞 Ligar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
