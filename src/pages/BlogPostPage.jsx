import { BLOG_POSTS, waLink, PHONE_LINK } from "../data/constants";

const css = `
  .blog-page { padding-top: 64px; }
  .blog-hero { background: var(--dark-2); padding: 60px 0; }
  .blog-content-wrap { padding: 60px 0; background: var(--dark); }
  .blog-layout {
    display: grid; grid-template-columns: 1fr 300px;
    gap: 48px; align-items: start;
  }
  .blog-body h1 {
    font-family: var(--font-cond);
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 900; text-transform: uppercase;
    line-height: 1.1; margin-bottom: 16px;
    letter-spacing: -0.5px;
  }
  .blog-body h1 span { color: var(--cyan); }
  .blog-meta-row {
    display: flex; align-items: center; gap: 16px;
    margin-bottom: 32px; flex-wrap: wrap;
  }
  .blog-cat {
    background: var(--cyan-dim); border: 1px solid var(--border);
    color: var(--cyan); font-size: 11px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase; padding: 4px 10px;
  }
  .blog-time { color: var(--muted); font-size: 13px; }
  .blog-article { color: var(--muted); font-size: 16px; line-height: 1.9; }
  .blog-article p { margin-bottom: 20px; }
  .blog-article strong { color: var(--white); font-weight: 600; }
  .blog-article h2 {
    font-family: var(--font-cond); font-size: 24px; font-weight: 800;
    text-transform: uppercase; color: var(--white); margin: 28px 0 12px;
  }
  .blog-article ul { margin: 0 0 20px 20px; }
  .blog-article ul li { margin-bottom: 8px; }
  .blog-article h3 {
    font-family: var(--font-cond); font-size: 18px; font-weight: 700;
    color: var(--cyan); text-transform: uppercase; margin: 20px 0 8px;
  }

  .blog-cta-box {
    background: linear-gradient(135deg, var(--card-bg), var(--dark-3));
    border: 1px solid var(--border);
    padding: 28px; margin-top: 40px;
  }
  .blog-cta-box strong {
    font-family: var(--font-cond); font-size: 22px;
    font-weight: 900; text-transform: uppercase;
    color: var(--orange); display: block; margin-bottom: 8px;
  }
  .blog-cta-box p { color: var(--muted); font-size: 14px; margin-bottom: 16px; }

  .blog-sidebar {}
  .sidebar-cta {
    background: var(--card-bg); border: 1px solid var(--border);
    padding: 24px; margin-bottom: 20px;
  }
  .sc-head {
    font-family: var(--font-cond); font-size: 18px; font-weight: 900;
    text-transform: uppercase; color: var(--orange); margin-bottom: 12px;
  }
  .sc-btns { display: flex; flex-direction: column; gap: 8px; }

  .related-posts { background: var(--card-bg); border: 1px solid var(--border); padding: 24px; }
  .rp-title {
    font-family: var(--font-cond); font-size: 13px; font-weight: 700;
    letter-spacing: 2px; text-transform: uppercase; color: var(--muted); margin-bottom: 14px;
  }
  .rp-item {
    padding: 12px 0; border-bottom: 1px solid var(--border);
    cursor: pointer; transition: color 0.2s;
  }
  .rp-item:last-child { border-bottom: none; }
  .rp-item:hover { color: var(--cyan); }
  .rp-item-title { font-size: 14px; font-weight: 500; line-height: 1.4; }
  .rp-item-read { font-size: 12px; color: var(--muted); margin-top: 4px; }

  @media (max-width: 860px) {
    .blog-layout { grid-template-columns: 1fr; }
  }
`;

function renderContent(text) {
  return text.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.endsWith("**")) {
      return <h3 key={i}>{para.replace(/\*\*/g, "")}</h3>;
    }
    if (para.includes("\n- ")) {
      const [title, ...items] = para.split("\n");
      return (
        <div key={i}>
          {title && <p><strong>{title.replace(/\*\*/g, "")}</strong></p>}
          <ul>{items.map((item, j) => <li key={j}>{item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>)}</ul>
        </div>
      );
    }
    const html = para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    if (para.startsWith("1. ")) {
      return <p key={i} dangerouslySetInnerHTML={{__html: html}} />;
    }
    return <p key={i} dangerouslySetInnerHTML={{__html: html}} />;
  });
}

export default function BlogPostPage({ slug, onNavigate }) {
  const post = BLOG_POSTS.find(p => p.slug === slug) || BLOG_POSTS[0];
  const related = BLOG_POSTS.filter(p => p.slug !== post.slug);

  return (
    <>
      <style>{css}</style>
      <div className="blog-page">
        <div className="blog-hero">
          <div className="container">
            <div style={{display:"flex",alignItems:"center",gap:8,fontSize:13,color:"var(--muted)",marginBottom:16,flexWrap:"wrap"}}>
              <span style={{cursor:"pointer"}} onClick={() => onNavigate("home")}>Início</span>
              <span>›</span>
              <span style={{cursor:"pointer"}} onClick={() => onNavigate("home","blog")}>Blog</span>
              <span>›</span>
              <span style={{color:"var(--cyan)"}}>{post.title}</span>
            </div>
          </div>
        </div>

        <div className="blog-content-wrap">
          <div className="container">
            <div className="blog-layout">
              <div className="blog-body">
                <div className="blog-meta-row">
                  <span className="blog-cat">Dica</span>
                  <span className="blog-time">⏱ {post.readTime} de leitura</span>
                </div>
                <h1>{post.title.split(":")[0]}<br /><span>{post.title.split(":")[1]}</span></h1>
                <div className="blog-article">
                  {renderContent(post.content)}
                </div>
                <div className="blog-cta-box">
                  <strong>🚨 Precisa de ajuda profissional?</strong>
                  <p>Atendemos 24h em Porto Alegre e região. Orçamento grátis e sem compromisso.</p>
                  <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
                    <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa">📲 WhatsApp</a>
                    <a href={PHONE_LINK} className="btn btn-call">📞 Ligar</a>
                  </div>
                </div>
              </div>

              <div className="blog-sidebar">
                <div className="sidebar-cta">
                  <div className="sc-head">🚨 Precisa de Ajuda?</div>
                  <div style={{color:"var(--muted)",fontSize:13,marginBottom:16,lineHeight:1.6}}>
                    Atendemos 24h em Porto Alegre. Técnicos especializados prontos para você.
                  </div>
                  <div className="sc-btns">
                    <a href={waLink()} target="_blank" rel="noreferrer" className="btn btn-wa" style={{justifyContent:"center"}}>📲 WhatsApp</a>
                    <a href={PHONE_LINK} className="btn btn-call" style={{justifyContent:"center"}}>📞 Ligar</a>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="related-posts">
                    <div className="rp-title">Outros Artigos</div>
                    {related.map(r => (
                      <div key={r.slug} className="rp-item" onClick={() => onNavigate("blog", r.slug)}>
                        <div className="rp-item-title">{r.title}</div>
                        <div className="rp-item-read">⏱ {r.readTime}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
