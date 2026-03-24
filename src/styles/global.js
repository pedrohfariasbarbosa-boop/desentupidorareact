const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:ital,wght@0,400;0,500;0,600;1,400&display=swap');

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  
  :root {
    --dark:       #07111f;
    --dark-2:     #0a1628;
    --dark-3:     #0d1f3c;
    --card-bg:    #0f2040;
    --card-hover: #122548;
    --cyan:       #00d4ff;
    --cyan-dim:   rgba(0,212,255,0.12);
    --orange:     #ff6b00;
    --orange-dim: rgba(255,107,0,0.1);
    --white:      #ffffff;
    --muted:      #7a90b0;
    --muted-2:    #5a6e8a;
    --border:     rgba(0,212,255,0.12);
    --border-2:   rgba(0,212,255,0.25);
    --green:      #25d366;
    --font-cond:  'Barlow Condensed', sans-serif;
    --font-body:  'Barlow', sans-serif;
    --radius:     0px;
    --shadow:     0 8px 32px rgba(0,0,0,0.4);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--dark);
    color: var(--white);
    font-family: var(--font-body);
    font-size: 16px;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; font-family: var(--font-body); }
  img { max-width: 100%; display: block; }

  /* Scrollbar */
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: var(--dark); }
  ::-webkit-scrollbar-thumb { background: var(--dark-3); border-radius: 3px; }

  /* Utility */
  .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
  .section { padding: 80px 0; }
  .section-sm { padding: 60px 0; }
  .section-dark { background: var(--dark-2); }
  .section-card { background: var(--card-bg); }

  .tag {
    font-family: var(--font-cond);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 10px;
    display: block;
  }

  .heading {
    font-family: var(--font-cond);
    font-weight: 900;
    font-size: clamp(36px, 5vw, 58px);
    line-height: 0.95;
    text-transform: uppercase;
    letter-spacing: -1px;
  }
  .heading .accent { color: var(--orange); }
  .heading .accent-c { color: var(--cyan); }

  .heading-md {
    font-family: var(--font-cond);
    font-weight: 800;
    font-size: clamp(28px, 4vw, 42px);
    line-height: 1;
    text-transform: uppercase;
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: var(--font-cond);
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 14px 24px;
    border: none;
    cursor: pointer;
    transition: all 0.18s ease;
    text-decoration: none;
    white-space: nowrap;
  }
  .btn-wa  { background: var(--green); color: white; }
  .btn-wa:hover { background: #1fbb57; transform: translateY(-1px); }
  .btn-call { background: transparent; color: var(--white); border: 1px solid rgba(255,255,255,0.25); }
  .btn-call:hover { border-color: var(--cyan); color: var(--cyan); }
  .btn-orange { background: var(--orange); color: white; }
  .btn-orange:hover { background: #e05d00; transform: translateY(-1px); }
  .btn-outline-cyan { background: transparent; color: var(--cyan); border: 1px solid var(--border-2); }
  .btn-outline-cyan:hover { background: var(--cyan-dim); }

  /* Badge */
  .badge-online {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(0,212,255,0.08);
    border: 1px solid rgba(0,212,255,0.25);
    padding: 7px 14px;
    font-family: var(--font-cond);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--cyan);
    margin-bottom: 20px;
  }
  .badge-dot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #00ff88;
    box-shadow: 0 0 6px #00ff88;
    animation: blink 1.6s infinite;
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.35} }

  /* Card base */
  .card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    transition: border-color 0.2s, transform 0.2s;
  }
  .card:hover { border-color: var(--border-2); }

  /* Stars */
  .stars { color: #ffd700; letter-spacing: 1px; font-size: 14px; }

  /* Divider */
  .divider { border: none; border-top: 1px solid var(--border); margin: 0; }

  /* Floating CTA buttons */
  .float-wa {
    position: fixed;
    bottom: 28px;
    right: 90px;
    background: var(--green);
    color: white;
    padding: 13px 20px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-cond);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.5px;
    z-index: 200;
    box-shadow: 0 4px 24px rgba(37,211,102,0.4);
    text-decoration: none;
    transition: all 0.2s;
  }
  .float-wa:hover { background: #1fbb57; transform: scale(1.02); }

  .float-phone {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 54px; height: 54px;
    border-radius: 50%;
    background: var(--orange);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    z-index: 200;
    box-shadow: 0 4px 24px rgba(255,107,0,0.4);
    text-decoration: none;
    transition: transform 0.2s;
    animation: phonePulse 3s infinite;
  }
  .float-phone:hover { transform: scale(1.12); }
  @keyframes phonePulse {
    0%,100%{ box-shadow: 0 4px 24px rgba(255,107,0,0.4); }
    50%{ box-shadow: 0 4px 36px rgba(255,107,0,0.7); }
  }

  /* Urgency banner */
  .urgency-banner {
    background: var(--orange);
    padding: 10px 0;
    text-align: center;
    font-family: var(--font-cond);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    position: relative;
    z-index: 101;
  }

  /* Animations */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.6s ease both; }
  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.3s; }
  .delay-4 { animation-delay: 0.4s; }

  /* Responsive helpers */
  @media (max-width: 768px) {
    .hide-mobile { display: none !important; }
    .float-wa { display: none; }
    .section { padding: 60px 0; }
  }
  @media (min-width: 769px) {
    .hide-desktop { display: none !important; }
  }
`;

export default globalStyles;
