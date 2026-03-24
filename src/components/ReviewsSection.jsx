import { REVIEWS, waLink } from "../data/constants";

const css = `
  .reviews { background: var(--dark); }
  .reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px; margin-top: 48px;
  }
  .review-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 24px;
    display: flex; flex-direction: column;
  }
  .rc-stars { color: #ffd700; font-size: 14px; letter-spacing: 2px; margin-bottom: 14px; }
  .rc-text {
    color: var(--muted); font-size: 14px; line-height: 1.7;
    flex: 1; margin-bottom: 20px;
    font-style: italic;
  }
  .rc-footer { display: flex; align-items: center; gap: 12px; }
  .rc-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    background: var(--cyan-dim);
    border: 1px solid var(--border-2);
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-cond);
    font-weight: 800; font-size: 15px; color: var(--cyan);
    flex-shrink: 0;
  }
  .rc-name { font-weight: 600; font-size: 14px; }
  .rc-loc { font-size: 12px; color: var(--muted); margin-top: 2px; }

  .reviews-cta {
    margin-top: 48px;
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 32px;
    display: grid; grid-template-columns: 1fr auto;
    gap: 32px; align-items: center;
  }
  .reviews-cta-text strong {
    font-family: var(--font-cond);
    font-size: 26px; font-weight: 900;
    text-transform: uppercase; display: block; margin-bottom: 8px;
  }
  .reviews-cta-text p { color: var(--muted); font-size: 15px; }
  .reviews-score {
    text-align: center; flex-shrink: 0;
  }
  .score-num {
    font-family: var(--font-cond);
    font-size: 72px; font-weight: 900; line-height: 1;
    color: var(--white);
  }
  .score-num span { color: #ffd700; }
  .score-stars { color: #ffd700; font-size: 20px; letter-spacing: 4px; }
  .score-label { color: var(--muted); font-size: 13px; margin-top: 4px; }

  @media (max-width: 900px) { .reviews-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 580px) { .reviews-grid { grid-template-columns: 1fr; } .reviews-cta { grid-template-columns: 1fr; } }
`;

export default function ReviewsSection() {
  const initials = (name) => name.split(" ").slice(0,2).map(n=>n[0]).join("");

  return (
    <>
      <style>{css}</style>
      <section id="depoimentos" className="section reviews">
        <div className="container">
          <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:20}}>
            <div>
              <span className="tag">Depoimentos Reais</span>
              <h2 className="heading">O QUE DIZEM NOSSOS<br /><span className="accent">CLIENTES</span></h2>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank" rel="noreferrer"
              className="btn btn-outline-cyan"
            >
              ⭐ Ver no Google
            </a>
          </div>

          <div className="reviews-grid">
            {REVIEWS.map(r => (
              <div key={r.name} className="review-card">
                <div className="rc-stars">{"★".repeat(r.rating)}</div>
                <p className="rc-text">"{r.text}"</p>
                <div className="rc-footer">
                  <div className="rc-avatar">{initials(r.name)}</div>
                  <div>
                    <div className="rc-name">{r.name}</div>
                    <div className="rc-loc">📍 {r.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews-cta">
            <div className="reviews-cta-text">
              <strong>🏆 Avaliação Top em Porto Alegre</strong>
              <p>Mais de 5.000 clientes atendidos em Porto Alegre e Região Metropolitana. Sua satisfação é nossa prioridade — por isso mantemos a nota mais alta da cidade.</p>
              <div style={{marginTop:20}}>
                <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa">
                  📲 Solicitar Orçamento
                </a>
              </div>
            </div>
            <div className="reviews-score">
              <div className="score-num">4<span>.9</span></div>
              <div className="score-stars">★★★★★</div>
              <div className="score-label">Média Google</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
