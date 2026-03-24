import { useState } from "react";
import { CATEGORIES, waLink, PHONE_LINK, PHONE_DISPLAY } from "../data/constants";

const css = `
/* =========================
   ANIMAÇÕES (IGUAL HOME)
========================= */
.fade-up {
  opacity: 0;
  transform: translateY(24px);
  animation: fadeUp .6s ease forwards;
}
@keyframes fadeUp {
  to { opacity:1; transform:translateY(0); }
}
.delay-1 { animation-delay:.1s; }
.delay-2 { animation-delay:.2s; }
.delay-3 { animation-delay:.3s; }
.delay-4 { animation-delay:.4s; }
.delay-5 { animation-delay:.5s; }

/* =========================
   BASE
========================= */
.sp { padding-top: 80px; }

.wrap {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* =========================
   HERO
========================= */
.sp-hero {
  min-height: 90vh;
  display: flex;
  align-items: center;
  background:
    radial-gradient(ellipse 800px 500px at 80% 30%, rgba(0,212,255,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 600px 400px at 20% 80%, rgba(255,107,0,0.04) 0%, transparent 60%),
    linear-gradient(160deg, #07111f 0%, #0a1628 50%, #060e1a 100%);
  padding: 100px 0 80px;
}

.sp-bc {
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 28px;
}

.sp-hgrid {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 60px;
  align-items: center;
}

.sp-hgrid > div:first-child {
  max-width: 600px;
}

.sp-cbadge {
  display: inline-flex;
  gap: 8px;
  background: rgba(0,212,255,0.08);
  border: 1px solid var(--border);
  padding: 6px 14px;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--cyan);
  margin-bottom: 20px;
}

.sp-bigicon {
  font-size: 56px;
  margin-bottom: 16px;
}

.sp-htitle {
  font-family: var(--font-cond);
  font-weight: 900;
  font-size: clamp(48px, 7vw, 72px);
  line-height: 0.9;
  letter-spacing: -2px;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.sp-htitle span {
  color: var(--orange);
  display: block;
}

.sp-hdesc {
  font-size: 18px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 24px;
  max-width: 540px;
}

.sp-tags {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.sp-tag {
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--border);
  padding: 6px 14px;
  font-size: 13px;
}

.sp-hbtns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

/* =========================
   SIDEBAR (igual home)
========================= */
.sp-sidebar {
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 28px;
}

.sp-sttl {
  font-family: var(--font-cond);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 20px;
  display: flex;
  gap: 8px;
}

.sp-sttl::before {
  content:'';
  width:6px;height:6px;
  border-radius:50%;
  background:var(--orange);
}

.sp-str {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.sp-strrow {
  font-size: 13px;
  color: var(--muted);
}

.sp-sbtns {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.sp-sbtns a {
  width: 100%;
  justify-content: center;
}

/* =========================
   SUBSERVIÇOS
========================= */
.sp-subs {
  padding: 100px 0;
  background: #0a1628;
  text-align: center;
}

.sp-sgrid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 24px;
}

.subc {
  background: var(--card-bg);
  border: 1px solid var(--border);
  padding: 28px;
  text-align: left;
  transition: .25s;
}

.subc:hover {
  transform: translateY(-4px);
  border-color: var(--cyan);
}

.subc::before {
  content:'';
  display:block;
  height:3px;
  width:100%;
  background:linear-gradient(90deg,var(--cyan),var(--orange));
  margin-bottom:16px;
}

.subc-ttl {
  font-family: var(--font-cond);
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 10px;
}

/* =========================
   FAQ
========================= */
.sp-faq {
  padding: 100px 0;
  background: #060e1a;
}

.sp-fgrid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 60px;
}

/* =========================
   RESPONSIVO
========================= */
@media(max-width:960px){
  .sp-hgrid { grid-template-columns:1fr; text-align:center; }
  .sp-hgrid > div:first-child { margin:0 auto; }
  .sp-sgrid { grid-template-columns:1fr; }
  .sp-fgrid { grid-template-columns:1fr; }
}
`;

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faqitem">
      <div className="faqq" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <span>{open ? "−" : "+"}</span>
      </div>
      {open && <div className="faqa">{a}</div>}
    </div>
  );
}

export default function ServicePage({ slug, onNavigate }) {
  const category = CATEGORIES.find(c => c.slug === slug) || CATEGORIES[0];
  const waMsg = `Olá! Preciso do serviço de *${category.title}* em Porto Alegre.`;

  return (
    <>
      <style>{css}</style>

      <div className="sp">

        {/* HERO */}
        <div className="sp-hero">
          <div className="wrap">

            <div className="sp-bc fade-up">
              <span onClick={() => onNavigate("home")}>Início</span> ›
              <span>{category.title}</span>
            </div>

            <div className="sp-hgrid">
              <div className="fade-up">

                <div className="sp-cbadge delay-1 fade-up">
                  Categoria de Serviço
                </div>

                <div className="sp-bigicon delay-2 fade-up">
                  {category.icon}
                </div>

                <h1 className="sp-htitle delay-2 fade-up">
                  {category.title}
                  <span>Porto Alegre 24h</span>
                </h1>

                <p className="sp-hdesc delay-3 fade-up">
                  {category.description}
                </p>

                <div className="sp-hbtns delay-4 fade-up">
                  <a href={waLink(waMsg)} className="btn btn-wa">
                    📲 WhatsApp
                  </a>
                  <a href={PHONE_LINK} className="btn btn-call">
                    📞 {PHONE_DISPLAY}
                  </a>
                </div>

              </div>

              <div className="sp-sidebar fade-up delay-2">
                <div className="sp-sttl">Atendimento Imediato</div>

                <div className="sp-str">
                  <div className="sp-strrow">✓ Chegamos rápido</div>
                  <div className="sp-strrow">✓ Sem sujeira</div>
                  <div className="sp-strrow">✓ Garantia</div>
                </div>

                <div className="sp-sbtns">
                  <a href={waLink()} className="btn btn-wa">WhatsApp</a>
                  <a href={PHONE_LINK} className="btn btn-call">Ligar</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SUBSERVIÇOS */}
        <div className="sp-subs">
          <div className="wrap">
            <div className="sp-sgrid">
              {category.services.map((svc, i) => (
                <div key={svc.title} className={`subc fade-up delay-${i+1}`}>
                  <div className="subc-ttl">{svc.title}</div>
                  <div>{svc.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="sp-faq">
          <div className="wrap">
            <div className="sp-fgrid">
              <div>
                <div className="fade-up delay-2">
                  <h2>Perguntas Frequentes</h2>
                </div>

                {category.faqs.map((f, i) => (
                  <div key={f.q} className={`fade-up delay-${i+1}`}>
                    <FAQItem q={f.q} a={f.a} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}