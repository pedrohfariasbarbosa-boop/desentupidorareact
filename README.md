# Desentupidora Residencial® — Site Oficial

Site desenvolvido em React + Vite para a Desentupidora Residencial® de Salvador, BA.

## 🚀 Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── App.jsx                    ← Roteamento SPA
├── main.jsx                   ← Entry point React
├── styles/
│   └── global.js              ← CSS global + design system (variáveis)
├── data/
│   └── constants.js           ← Dados: serviços, áreas, reviews, blog
├── components/
│   ├── Navbar.jsx             ← Navegação fixa + hambúrguer mobile
│   ├── Footer.jsx             ← Rodapé completo
│   ├── FloatingCTA.jsx        ← Botões flutuantes WhatsApp + Telefone
│   ├── Hero.jsx               ← Seção principal com card de emergência
│   ├── ServicesSection.jsx    ← Grid de 8 serviços
│   ├── WhyUs.jsx              ← Diferenciais + caixa de garantias
│   ├── AreasSection.jsx       ← Bairros e cidades atendidas
│   ├── ReviewsSection.jsx     ← 9 depoimentos + nota 4.9
│   ├── BlogSection.jsx        ← Preview dos artigos
│   └── ContactSection.jsx     ← Formulário → redireciona WhatsApp
└── pages/
    ├── HomePage.jsx           ← Monta todas as seções
    ├── ServicePage.jsx        ← Página por serviço (8 páginas SEO)
    └── BlogPostPage.jsx       ← Artigos do blog (3 posts)
```

## 🔧 Personalização

Edite `src/data/constants.js` para alterar:
- Número de WhatsApp e telefone
- Serviços oferecidos
- Áreas atendidas
- Depoimentos de clientes
- Posts do blog

## 📈 SEO

- Meta tags otimizadas em `index.html`
- Schema.org LocalBusiness configurado
- Páginas individuais por serviço (URLs amigáveis)
- Conteúdo com palavras-chave: "desentupidora em Salvador", "desentupidora 24h"
- Blog com artigos relevantes para ranqueamento orgânico

## 🚀 Deploy

Recomendado: **Vercel** ou **Netlify** (gratuito)

```bash
npm run build
# Fazer upload da pasta /dist
```

## 📞 Contato do Negócio

- WhatsApp: (51) 98540-2617
- Instagram: @desentupidora_residencial
- Salvador – BA
