import { CATEGORIES, waLink } from "../data/constants";

const css = `
  Aqui está o código CSS atualizado. Eu analisei a imagem que você enviou e extraí as cores exatas, fontes e o layout para replicar o estilo visual da seção "O Diferencial" nos seus cards de serviço.

A principal mudança foi a aplicação do esquema de cores "Dark Blue & Orange" e o ajuste da tipografia para ficar mais robusta e "quadrada", igual à da print.

Substitua o bloco const css pelo seguinte código:
CSS

  /* Definição de Variáveis Baseadas na Print (image_0.png) */
  :root {
    /* Cores extraídas diretamente da imagem */
    --bg-dark: #091a32;       /* Fundo super escuro */
    --bg-card: #0c1f3d;       /* Fundo do card ligeiramente mais claro */
    --bd-color: #17325c;      /* Cor da borda sutil */
    
    --text-main: #ffffff;     /* Texto branco principal */
    --text-muted: #8ca3c2;    /* Texto de descrição fosco */
    
    /* Cores de Destaque */
    --brand-orange: #f57c00;  /* Laranja vibrante dos títulos */
    --brand-cyan: #00e5ff;    /* Ciano neon para tags e ícones */
    --brand-green: #00c853;   /* Verde para ícones de check */
    
    /* Tipografia (Ajuste para uma fonte robusta e uppercase) */
    --font-head: 'Oswald', 'Arial Narrow', sans-serif; /* Fonte robusta e quadrada */
    --font-body: 'Inter', sans-serif;
  }

  /* Estilização da Seção */
  .svsec { 
    background: var(--bg-dark); 
    padding: 80px 0; 
    color: var(--text-main); 
    font-family: var(--font-body);
  }

  .wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo no meio */
  }

  /* Header da Seção Centralizado */
  .svsec-hdr {
    text-align: center; /* Centraliza o texto */
    margin-bottom: 60px;
    width: 100%;
    max-width: 800px;
  }

  .tag {
    display: inline-block;
    color: var(--brand-cyan); /* Cor ciano da print */
    font-family: var(--font-head);
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }

  .h2 {
    font-family: var(--font-head);
    font-size: 48px; /* Tamanho grande igual à print */
    font-weight: 900;
    line-height: 1.1;
    text-transform: uppercase;
    margin: 0;
    color: var(--text-main);
  }

  /* Aplicação do Laranja da Print */
  .ao { 
    color: var(--brand-orange); 
  }

  /* Grid centralizada e espaçada */
  .cat-grid {
    display: grid; 
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    width: 100%;
  }

  /* Estilização do Card (Replicando o estilo da print) */
  .catcard {
    background: var(--bg-card); 
    border: 1px solid var(--bd-color);
    border-radius: 4px; /* Bordas menos arredondadas, mais quadradas */
    overflow: hidden; 
    transition: all 0.3s ease;
    display: flex; 
    flex-direction: column;
  }

  /* Efeito de hover sutil, focando na borda ciano */
  .catcard:hover { 
    border-color: var(--brand-cyan); 
    transform: translateY(-5px); 
    box-shadow: 0 10px 30px rgba(0,229,255,0.1); 
  }

  /* Topo do Card */
  .catcard-top {
    padding: 30px;
    border-bottom: 1px solid var(--bd-color);
  }

  /* Ícone do Card em Ciano */
  .catcard-icon { 
    font-size: 40px; 
    margin-bottom: 15px; 
    color: var(--brand-cyan);
    display: block;
  }

  /* Título do Card: Laranja, Uppercase, Fonte Robusta */
  .catcard-title {
    font-family: var(--font-head); 
    font-size: 24px; 
    font-weight: 900;
    text-transform: uppercase; 
    line-height: 1.2; 
    margin-bottom: 8px;
    color: var(--brand-orange);
  }

  /* Descrição do Card em Texto Fosco */
  .catcard-desc { 
    color: var(--text-muted); 
    font-size: 14px; 
    line-height: 1.6; 
  }

  /* Lista de Sub-serviços (Métodos incluídos) */
  .catcard-subs { 
    padding: 25px 30px; 
    flex: 1; 
  }

  .catcard-subs-lbl {
    font-family: var(--font-head);
    font-size: 12px; 
    font-weight: 700;
    letter-spacing: 1.5px; 
    text-transform: uppercase;
    color: var(--text-muted); 
    margin-bottom: 15px;
  }

  .sub-list { 
    display: flex; 
    flex-direction: column; 
    gap: 12px; 
  }

  .sub-list-item {
    display: flex; 
    align-items: center; /* Alinha ícone e texto */
    gap: 15px;
    padding: 0; /* Remove padding interno p/alinhar com a print */
    border-bottom: none; /* Remove linhas divisórias */
  }

  /* Ícone de check verde igual à print */
  .sli-icon {
    width: 20px; 
    height: 20px; 
    flex-shrink: 0;
    background: transparent; 
    border: none;
    color: var(--brand-green); /* Verde do check */
    display: flex; 
    align-items: center; 
    justify-content: center;
    font-size: 18px; /* Ajuste para ícone de check */
  }

  /* Título e descrição do item alinhados */
  .sli-title {
    font-family: var(--font-body); /* Fonte normal p/itens */
    font-size: 15px; 
    font-weight: 600;
    text-transform: none; /* Normal case */
    color: var(--text-main);
    margin-bottom: 2px;
  }

  .sli-desc { 
    font-size: 13px; 
    color: var(--text-muted); 
  }

  /* Rodapé do Card */
  .catcard-footer { 
    padding: 20px 30px; 
    border-top: 1px solid var(--bd-color); 
    background: rgba(0,0,0,0.15);
    display: flex; 
    gap: 10px; 
  }

  /* Estilização dos Botões p/combinar com o tema */
  .btn {
    display: inline-flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 4px;
    font-family: var(--font-head);
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.2s;
    cursor: pointer;
    font-size: 14px;
  }

  /* Botão Secundário (Ciano) */
  .btn.bor {
    background: transparent;
    border: 1px solid var(--brand-cyan);
    color: var(--brand-cyan);
  }
  .btn.bor:hover {
    background: var(--brand-cyan);
    color: var(--bg-dark);
  }

  /* Botão Primário (Laranja) */
  .btn.bwa {
    background: var(--brand-orange);
    color: #fff;
    border: 1px solid var(--brand-orange);
  }
  .btn.bwa:hover {
    background: #e67300;
    transform: scale(1.02);
  }

  /* Responsividade */
  @media(max-width:980px){ 
    .cat-grid { grid-template-columns: 1fr; max-width: 600px; }
    .h2 { font-size: 36px; }
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

export default function ServicesSection({ onNavigate }) {
  return (
    <>
      <style>{css}</style>
      <section id="servicos" className="sec svsec">
        <div className="wrap">
          <div className="svsec-hdr">
            <div>
              <span className="tag">Nossos Serviços</span>
              <h2 className="h2">SOLUÇÕES COMPLETAS EM<br /><span className="ao">HIDRÁULICA E ESGOTO</span></h2>
            </div>
            <a href={waLink()} target="_blank" rel="noreferrer" className="btn bor">
              📲 Orçamento Grátis
            </a>
          </div>

          <div className="cat-grid">
            {CATEGORIES.map(cat => (
              <div key={cat.slug} className="catcard">
                <div className="catcard-top">
                  <div className="catcard-icon">{cat.icon}</div>
                  <div className="catcard-title">{cat.title}</div>
                  <div className="catcard-desc">{cat.description}</div>
                </div>

                <div className="catcard-subs">
                  <div className="catcard-subs-lbl">Métodos incluídos</div>
                  <div className="sub-list">
                    {cat.services.map(svc => (
                      <div key={svc.title} className="sub-list-item">
                        <div className="sli-icon">{svc.icon}</div>
                        <div>
                          <div className="sli-title">{svc.title}</div>
                          <div className="sli-desc">
                            {svc.description.length > 100
                              ? svc.description.slice(0, 100) + "…"
                              : svc.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="catcard-footer">
                  <button
                    className="btn bor"
                    style={{flex:1,justifyContent:"center",fontSize:15}}
                    onClick={() => onNavigate("service", cat.slug)}
                  >
                    Ver serviço completo →
                  </button>
                  <a
                    href={waLink(`Olá! Preciso de *${cat.title}* em Porto Alegre.`)}
                    target="_blank" rel="noreferrer"
                    className="btn bwa"
                    style={{flex:1,justifyContent:"center",fontSize:15}}
                  >
                    <WhatsAppIcon /> Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
