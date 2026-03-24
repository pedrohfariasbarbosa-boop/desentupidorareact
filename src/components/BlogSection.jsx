import { BLOG_POSTS } from "../data/constants";

const css = `
  .blog { background: var(--dark-2); }
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px; margin-top: 48px;
  }
  .blog-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    padding: 0; overflow: hidden;
    cursor: pointer; transition: all 0.2s;
    display: flex; flex-direction: column;
  }
  .blog-card:hover { border-color: var(--border-2); transform: translateY(-3px); }
  .blog-img {
    height: 8px;
    background: linear-gradient(90deg, var(--cyan), var(--orange));
    flex-shrink: 0;
  }
  .blog-body { padding: 24px; flex: 1; display: flex; flex-direction: column; }
  .blog-meta {
    display: flex; align-items: center; gap: 12px;
    margin-bottom: 12px;
  }
  .blog-tag {
    background: var(--cyan-dim);
    border: 1px solid var(--border);
    color: var(--cyan);
    font-size: 10px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase;
    padding: 3px 8px;
  }
  .blog-read { color: var(--muted); font-size: 12px; }
  .blog-title {
    font-family: var(--font-cond);
    font-size: 20px; font-weight: 800;
    text-transform: uppercase;
    line-height: 1.2; margin-bottom: 10px;
    transition: color 0.2s;
  }
  .blog-card:hover .blog-title { color: var(--cyan); }
  .blog-excerpt { color: var(--muted); font-size: 14px; line-height: 1.6; flex: 1; }
  .blog-cta {
    display: inline-flex; align-items: center; gap: 4px;
    margin-top: 16px; color: var(--cyan);
    font-size: 12px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 1px;
    font-family: var(--font-cond);
  }

  @media (max-width: 760px) { .blog-grid { grid-template-columns: 1fr; } }
`;

export default function BlogSection({ onNavigate }) {
  return (
    <>
      <style>{css}</style>
      <section id="blog" className="section blog">
        <div className="container">
          <div style={{display:"flex", alignItems:"flex-end", justifyContent:"space-between", flexWrap:"wrap", gap:20}}>
            <div>
              <span className="tag">Blog & Dicas</span>
              <h2 className="heading">CONTEÚDO ÚTIL<br /><span className="accent">PARA VOCÊ</span></h2>
            </div>
          </div>

          <div className="blog-grid">
            {BLOG_POSTS.map(post => (
              <div key={post.slug} className="blog-card" onClick={() => onNavigate("blog", post.slug)}>
                <div className="blog-img" />
                <div className="blog-body">
                  <div className="blog-meta">
                    <span className="blog-tag">Dica</span>
                    <span className="blog-read">⏱ {post.readTime} de leitura</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-cta">Ler artigo →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
