import { useState } from "react";
import { waLink, PHONE_LINK, PHONE_DISPLAY, INSTAGRAM, CATEGORIES } from "../data/constants";

const css = `
  .contact { background: var(--card-bg); }
  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 48px; margin-top: 48px; align-items: start;
  }
  .contact-info { display: flex; flex-direction: column; gap: 0; }
  .contact-card {
    background: var(--dark-2);
    border: 1px solid var(--border);
    padding: 24px; margin-bottom: 16px;
  }
  .cc-title {
    font-family: var(--font-cond); font-size: 12px;
    font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    color: var(--cyan); margin-bottom: 14px;
  }
  .cc-item {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 0; border-bottom: 1px solid var(--border);
  }
  .cc-item:last-child { border-bottom: none; }
  .cc-icon { font-size: 18px; flex-shrink: 0; width: 24px; text-align: center; }
  .cc-text { font-size: 14px; }
  .cc-text a { color: var(--cyan); text-decoration: none; transition: opacity 0.2s; }
  .cc-text a:hover { opacity: 0.8; }
  .cc-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }

  .quick-btns { display: flex; flex-direction: column; gap: 10px; }

  /* Form */
  .contact-form {
    background: var(--dark-2);
    border: 1px solid var(--border);
    padding: 32px;
  }
  .form-title {
    font-family: var(--font-cond); font-size: 22px;
    font-weight: 900; text-transform: uppercase;
    margin-bottom: 4px;
  }
  .form-subtitle { color: var(--muted); font-size: 14px; margin-bottom: 24px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .form-group { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
  .form-label {
    font-size: 11px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase;
    color: var(--muted);
  }
  .form-input {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    padding: 12px 14px;
    color: var(--white);
    font-size: 15px;
    font-family: var(--font-body);
    outline: none;
    transition: border-color 0.2s;
    width: 100%;
  }
  .form-input:focus { border-color: var(--cyan); background: rgba(0,212,255,0.04); }
  .form-input::placeholder { color: var(--muted-2); }
  textarea.form-input { resize: vertical; min-height: 90px; }
  select.form-input { background: var(--dark-2); cursor: pointer; }
  select.form-input option { background: var(--dark-2); }

  .btn-send {
    width: 100%; background: var(--orange); color: white; border: none;
    padding: 16px;
    font-family: var(--font-cond); font-weight: 700;
    font-size: 18px; letter-spacing: 1px; text-transform: uppercase;
    cursor: pointer; transition: background 0.2s;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    margin-top: 4px;
  }
  .btn-send:hover { background: #e05d00; }
  .btn-send.sent { background: #00a844; }

  .form-note { color: var(--muted); font-size: 12px; text-align: center; margin-top: 10px; }

  @media (max-width: 860px) { .contact-grid { grid-template-columns: 1fr; } }
  @media (max-width: 480px) { .form-row { grid-template-columns: 1fr; } }
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

export default function ContactSection() {
  const [form, setForm] = useState({ nome: "", telefone: "", servico: "", bairro: "", msg: "" });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Sou *${form.nome}* de *${form.bairro || "Porto Alegre"}*.\n\nPreciso de: *${form.servico}*\n${form.msg ? `\n${form.msg}\n` : ""}\nMeu telefone: *${form.telefone}*`;
    window.open(`https://wa.me/5551985402617?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <style>{css}</style>
      <section id="contato" className="section contact">
        <div className="container">
          <span className="tag">Fale Conosco</span>
          <h2 className="heading">SOLICITE SEU<br /><span className="accent">ORÇAMENTO GRÁTIS</span></h2>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <div className="cc-title">Contato Direto</div>
                <div className="cc-item">
                  <div className="cc-icon">📲</div>
                  <div>
                    <div className="cc-label">WhatsApp</div>
                    <div className="cc-text"><a href={waLink()} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a></div>
                  </div>
                </div>
                <div className="cc-item">
                  <div className="cc-icon">📞</div>
                  <div>
                    <div className="cc-label">Telefone</div>
                    <div className="cc-text"><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
                  </div>
                </div>
                <div className="cc-item">
                  <div className="cc-icon">🕐</div>
                  <div>
                    <div className="cc-label">Horário</div>
                    <div className="cc-text">24 horas — 7 dias por semana</div>
                  </div>
                </div>
                <div className="cc-item">
                  <div className="cc-icon">📍</div>
                  <div>
                    <div className="cc-label">Cobertura</div>
                    <div className="cc-text">Porto Alegre e Região Metropolitana</div>
                  </div>
                </div>
                <div className="cc-item">
                  <div className="cc-icon">📸</div>
                  <div>
                    <div className="cc-label">Instagram</div>
                    <div className="cc-text">{INSTAGRAM}</div>
                  </div>
                </div>
              </div>

              <div className="quick-btns">
                <a href={waLink("URGENTE! Preciso de desentupimento agora.")} target="_blank" rel="noreferrer" className="btn btn-wa" style={{justifyContent:"center", padding:"16px"}}>
                  <WhatsAppIcon /> Chamar no WhatsApp AGORA
                </a>
                <a href={PHONE_LINK} className="btn btn-call" style={{justifyContent:"center", padding:"16px"}}>
                  📞 Ligar para {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-title">📋 Formulário Rápido</div>
              <div className="form-subtitle">Preencha abaixo e enviamos direto no WhatsApp</div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Seu Nome *</label>
                  <input className="form-input" placeholder="Como te chamamos?" value={form.nome} onChange={e => set("nome", e.target.value)} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Telefone *</label>
                  <input className="form-input" placeholder="(XX) XXXXX-XXXX" value={form.telefone} onChange={e => set("telefone", e.target.value)} required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Serviço *</label>
                  <select className="form-input" value={form.servico} onChange={e => set("servico", e.target.value)} required>
                    <option value="">Selecione...</option>
                    {CATEGORIES.map(cat => (
                      <optgroup key={cat.slug} label={cat.title}>
                        {cat.services.map(svc => (
                          <option key={svc.title} value={svc.title}>{svc.title}</option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Outro serviço">Outro serviço</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Bairro / Cidade</label>
                  <input className="form-input" placeholder="Ex: Menino Deus, Porto Alegre" value={form.bairro} onChange={e => set("bairro", e.target.value)} />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Descreva o Problema (opcional)</label>
                <textarea className="form-input" placeholder="Ex: Pia da cozinha entupida, água não está passando..." value={form.msg} onChange={e => set("msg", e.target.value)} />
              </div>

              <button type="submit" className={`btn-send${sent ? " sent" : ""}`}>
                {sent ? "✓ Redirecionando para WhatsApp..." : "📲 Enviar Orçamento pelo WhatsApp"}
              </button>
              <p className="form-note">🔒 Suas informações são enviadas diretamente para nosso WhatsApp. Sem spam.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
