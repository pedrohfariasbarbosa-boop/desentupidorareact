export const WHATSAPP = "5551985402617";
export const PHONE = "51985402617";
export const PHONE_DISPLAY = "(51) 98540-2617";
export const INSTAGRAM = "@desentupidora_residencial";
export const COMPANY = "Desentupidora Residencial®";
export const CITY = "Porto Alegre";

export const WA_BASE = `https://wa.me/${WHATSAPP}`;
export const waLink = (msg = "Olá! Preciso de um orçamento para desentupimento em Porto Alegre.") =>
  `${WA_BASE}?text=${encodeURIComponent(msg)}`;
export const PHONE_LINK = `tel:+${PHONE}`;

export const STATS = [
  { num: "24", accent: "H", label: "Disponível" },
  { num: "+3", accent: "K", label: "Atendimentos" },
  { num: "17.5", accent: "K", label: "Seguidores IG" },
];

export const CATEGORIES = [
  {
    slug: "caca-vazamentos",
    icon: "💧",
    title: "Caça Vazamentos",
    shortDesc: "Detecção precisa de vazamentos ocultos sem quebrar pisos ou paredes.",
    description: "Serviço especializado na identificação de vazamentos ocultos em redes hidráulicas, evitando quebras desnecessárias em pisos e paredes. Utiliza tecnologias modernas para localizar com precisão o ponto do problema, reduzindo custos e tempo de reparo.",
    metaTitle: "Caça Vazamentos em Porto Alegre 24h | Desentupidora Residencial",
    metaDesc: "Caça vazamentos em Porto Alegre com detecção eletrônica e câmera termográfica. Sem quebrar piso ou parede. Atendimento 24h. Orçamento grátis.",
    services: [
      {
        icon: "🔊",
        title: "Detecção Eletrônica",
        description: "Método que utiliza equipamentos sensíveis a som e vibração para identificar vazamentos em tubulações pressurizadas. Ideal para encontrar infiltrações invisíveis, mesmo em locais de difícil acesso, com alta precisão e sem necessidade de grandes intervenções.",
        benefits: ["Alta precisão na localização", "Sem obras desnecessárias", "Funciona em locais de difícil acesso", "Resultado rápido"],
      },
      {
        icon: "🌡️",
        title: "Detecção por Câmera Termográfica",
        description: "Tecnologia que capta variações de temperatura nas superfícies, permitindo identificar vazamentos através de diferenças térmicas. É um método não invasivo, rápido e eficiente, especialmente útil em paredes, pisos e sistemas de água quente.",
        benefits: ["Método 100% não invasivo", "Ideal para água quente", "Detecta em paredes e pisos", "Laudo técnico fotográfico"],
      },
    ],
    faqs: [
      { q: "Como funciona a detecção sem quebrar?", a: "Usamos equipamentos eletrônicos sensíveis a som e vibração, e câmeras termográficas que captam variações de temperatura — ambos localizam o vazamento com precisão sem qualquer obra." },
      { q: "Qual método é mais indicado para meu caso?", a: "Para tubulações de água fria, a detecção eletrônica é mais eficaz. Para sistemas de água quente e piso radiante, a câmera termográfica é a melhor opção. Nosso técnico avalia no local." },
      { q: "Minha conta de água subiu muito. Pode ser vazamento?", a: "Com certeza. Aumento repentino na conta é o sinal mais claro de vazamento oculto. Chame-nos para uma avaliação antes que o problema se agrave." },
      { q: "Vocês também fazem o reparo após localizar?", a: "Sim. Após a detecção, realizamos o reparo completo com o mínimo de intervenção possível." },
      { q: "Quanto tempo leva a detecção?", a: "Em média 1 a 2 horas, dependendo do tamanho do imóvel e da complexidade da instalação hidráulica." },
      { q: "Atendem condomínios e empresas?", a: "Sim, atendemos residências, condomínios, comércios e indústrias em Porto Alegre e região." },
    ],
  },
  {
    slug: "desentupimento",
    icon: "🔧",
    title: "Desentupimento",
    shortDesc: "Desobstrução de tubulações e fossas com tecnologia e rapidez.",
    description: "Serviço voltado para a desobstrução de tubulações e sistemas de esgoto, garantindo o fluxo adequado e evitando transtornos como mau cheiro, refluxo e alagamentos.",
    metaTitle: "Desentupimento em Porto Alegre 24h | Desentupidora Residencial",
    metaDesc: "Desentupimento em Porto Alegre com hidrojateamento, mola e sucção de fossas. Atendimento 24h. Chegamos em 30 minutos. Orçamento grátis.",
    services: [
      {
        icon: "🚛",
        title: "Sucção de Fossas",
        description: "Processo de remoção de resíduos líquidos e sólidos acumulados em fossas sépticas utilizando caminhão com sistema de vácuo. Essencial para manutenção preventiva e correta destinação dos resíduos.",
        benefits: ["Caminhão limpa-fossa", "Descarte regulamentado", "Manutenção preventiva", "Comprovante do serviço"],
      },
      {
        icon: "💦",
        title: "Hidrojateamento",
        description: "Técnica que utiliza jatos de água em alta pressão para limpar e desobstruir tubulações. Remove gordura, detritos e incrustações, sendo eficaz tanto para desentupimento quanto para limpeza completa das redes.",
        benefits: ["Alta pressão dissolve qualquer entupimento", "Limpa incrustações e gordura", "Ideal para redes de esgoto", "Sem produtos químicos"],
      },
      {
        icon: "🪣",
        title: "Limpeza de Fossa",
        description: "Serviço de esvaziamento, higienização e manutenção de fossas sépticas. Evita transbordamentos, mau cheiro e contaminação do solo, garantindo o bom funcionamento do sistema.",
        benefits: ["Higienização completa", "Evita transbordamento", "Protege o solo", "Laudo do serviço"],
      },
      {
        icon: "🌀",
        title: "Desentupimento com Mola",
        description: "Método mecânico que utiliza uma mola rotativa (cabo flexível) para romper e remover obstruções dentro das tubulações. Indicado para entupimentos localizados, sendo rápido e eficiente.",
        benefits: ["Rápido e eficiente", "Ideal para entupimentos localizados", "Sem danos à tubulação", "Resolve na primeira visita"],
      },
    ],
    faqs: [
      { q: "Qual método de desentupimento é melhor para pia ou vaso?", a: "Para pias e vasos, o desentupimento com mola resolve a maioria dos casos. Entupimentos mais graves na rede de esgoto exigem hidrojateamento." },
      { q: "Com que frequência devo limpar a fossa séptica?", a: "Para residências, recomendamos limpeza a cada 1 a 2 anos. Para estabelecimentos comerciais, pode ser necessário com mais frequência dependendo do volume de uso." },
      { q: "O hidrojateamento danifica a tubulação?", a: "Não, quando executado por profissional qualificado. Adaptamos a pressão ao tipo de tubulação para garantir eficácia sem causar danos." },
      { q: "Como saber se minha fossa precisa de sucção?", a: "Mau cheiro intenso, vasos sanitários demorando a escoar e solo encharcado próximo à fossa são sinais claros de que está na hora de fazer a limpeza." },
      { q: "Atendem de madrugada e fins de semana?", a: "Sim! Somos 24h, 7 dias por semana, incluindo feriados. Emergências têm atendimento prioritário." },
      { q: "Vocês atendem condomínios e empresas?", a: "Sim, atendemos todos os tipos de imóvel em Porto Alegre e Região Metropolitana, com contrato de manutenção preventiva disponível." },
    ],
  },
];

// Flat list for hero emergency card and footer links (derived from CATEGORIES)
export const SERVICES = [
  { slug: "caca-vazamentos", icon: "💧", title: "Caça Vazamentos", shortDesc: "Detecção precisa de vazamentos sem quebrar pisos ou paredes." },
  { slug: "desentupimento",  icon: "🔧", title: "Desentupimento",  shortDesc: "Desobstrução de tubulações e fossas com tecnologia e rapidez." },
];

export const AREAS = [
  { name: "Porto Alegre", featured: true, desc: "Atendimento 24h em toda Porto Alegre – capital do RS. Chegamos em até 30 minutos." },
  { name: "Zona Norte", featured: true, desc: "Desentupidora na Zona Norte de Porto Alegre 24h. Rápido e sem sujeira." },
  { name: "Zona Sul", featured: true, desc: "Desentupimento na Zona Sul de POA com técnicos especializados." },
  { name: "Moinhos de Vento", featured: false, desc: "Atendimento em Moinhos de Vento e Independência." },
  { name: "Bela Vista", featured: false, desc: "Desentupidora em Bela Vista 24h." },
  { name: "Petrópolis", featured: false, desc: "Atendimento em Petrópolis e Auxiliadora." },
  { name: "Menino Deus", featured: false, desc: "Desentupimento em Menino Deus e Camaquã." },
  { name: "Cristal", featured: false, desc: "Desentupidora no Cristal e Vila Nova." },
  { name: "Sarandi", featured: false, desc: "Atendimento em Sarandi e Rubem Berta." },
  { name: "Restinga", featured: false, desc: "Desentupimento na Restinga." },
  { name: "Lomba do Pinheiro", featured: false, desc: "Atendimento em Lomba do Pinheiro e região." },
  { name: "Ipanema", featured: false, desc: "Desentupidora em Ipanema e Tristeza." },
  { name: "Canoas", featured: true, desc: "Atendemos Canoas 24h com toda agilidade." },
  { name: "Gravataí", featured: true, desc: "Desentupidora em Gravataí – chegamos rápido." },
  { name: "Viamão", featured: false, desc: "Atendimento em Viamão e região." },
  { name: "Alvorada", featured: false, desc: "Desentupidora em Alvorada." },
  { name: "Cachoeirinha", featured: false, desc: "Atendimento em Cachoeirinha." },
  { name: "São Leopoldo", featured: false, desc: "Desentupimento em São Leopoldo." },
  { name: "Novo Hamburgo", featured: false, desc: "Atendimento em Novo Hamburgo e região." },
  { name: "Esteio", featured: false, desc: "Desentupidora em Esteio." },
];

export const REVIEWS = [
  { text: "Chamei às 23h com o vaso entupido. Em menos de 1 hora o técnico estava aqui. Rápido, educado e resolveu de primeira!", name: "Carla M.", loc: "Moinhos de Vento, POA", rating: 5 },
  { text: "Excelente serviço! Tínhamos um vazamento que nem sabíamos onde era. Localizaram sem destruir nada. Recomendo muito!", name: "Roberto S.", loc: "Petrópolis, Porto Alegre", rating: 5 },
  { text: "Preço justo, serviço rápido e o pessoal muito profissional. A caixa de gordura estava horrível e ficou perfeita.", name: "Ana Paula L.", loc: "Bela Vista, Porto Alegre", rating: 5 },
  { text: "Ótimo atendimento pelo WhatsApp! Expliquei o problema, passaram o orçamento na hora e vieram rápido.", name: "Marcelo F.", loc: "Canoas, RS", rating: 5 },
  { text: "Usaram câmera de inspeção para ver onde estava o entupimento do esgoto. Moderno e eficiente. Problema resolvido!", name: "Juliana B.", loc: "Sarandi, Porto Alegre", rating: 5 },
  { text: "Atendimento 24h de verdade! Liguei de madrugada e foram muito atenciosos. Resolveram o problema da pia rapidíssimo.", name: "Thiago R.", loc: "Menino Deus, POA", rating: 5 },
  { text: "Técnico super profissional, explicou tudo que fez e deixou o banheiro limpo depois. Primeira vez que vejo isso!", name: "Sandra O.", loc: "Ipanema, Porto Alegre", rating: 5 },
  { text: "Fiz o orçamento às 7h da manhã e em 1 hora já estavam aqui. Desentupimento de esgoto resolvido sem complicação.", name: "Paulo V.", loc: "Gravataí, RS", rating: 5 },
  { text: "Já usei 3 vezes e sempre fui muito bem atendido. Preço honesto e serviço garantido. Com certeza recomendo!", name: "Fernanda C.", loc: "Viamão, RS", rating: 5 },
];

export const BLOG_POSTS = [
  {
    slug: "como-detectar-vazamento-sem-quebrar",
    title: "Como detectar vazamento sem quebrar o piso ou parede",
    excerpt: "Entenda como a detecção eletrônica e a câmera termográfica localizam vazamentos ocultos com precisão e sem obras.",
    content: `Percebeu que a conta de água subiu sem explicação? Ouviu barulho de água correndo com tudo fechado? Esses podem ser sinais de um vazamento oculto.\n\nA boa notícia é que hoje existem tecnologias que localizam o vazamento com precisão sem precisar quebrar nada.\n\n**Detecção eletrônica**\nEquipamentos sensíveis a som e vibração conseguem identificar o ponto exato do vazamento em tubulações pressurizadas. O técnico percorre o imóvel com o sensor e identifica onde o ruído da água é mais intenso. É rápido, preciso e não exige nenhuma intervenção.\n\n**Câmera termográfica**\nA câmera termográfica capta variações de temperatura nas superfícies. Onde há vazamento, a umidade cria uma diferença térmica visível na imagem. É especialmente eficaz em sistemas de água quente, piso radiante e paredes revestidas.\n\n**Por que não devo quebrar logo?**\nQuebrar sem diagnóstico preciso pode resultar em obras desnecessárias, mais custo e não resolver o problema original. Com a detecção tecnológica, a intervenção é mínima e certeira.\n\n**Sinais comuns de vazamento oculto:**\n- Conta de água alta sem explicação\n- Manchas de umidade em paredes ou pisos\n- Barulho de água com tudo fechado\n- Mofo em locais inesperados\n- Solo encharcado no jardim\n\nEm Porto Alegre, nosso atendimento é 24h com equipamentos de detecção eletrônica e termográfica.`,
    readTime: "4 min",
  },
  {
    slug: "hidrojateamento-o-que-e",
    title: "Hidrojateamento: o que é e quando usar?",
    excerpt: "Saiba como o hidrojateamento de alta pressão resolve entupimentos graves que outros métodos não conseguem.",
    content: `O hidrojateamento é uma das técnicas mais eficazes para desentupir e limpar tubulações de esgoto. Mas você sabe quando ele é realmente necessário?\n\n**O que é hidrojateamento?**\nÉ o uso de jatos de água em alta pressão (entre 1.000 e 3.000 PSI) para remover obstruções, incrustações de gordura, depósitos de calcário e raízes que invadiram a tubulação. O equipamento profissional tem bicos especiais que desobstruem e limpam ao mesmo tempo.\n\n**Quando usar hidrojateamento?**\n- Entupimento grave que a mola não resolve\n- Rede de esgoto com acúmulo de gordura (restaurantes, cozinhas industriais)\n- Tubulação com raízes de árvores\n- Manutenção preventiva de redes de grande diâmetro\n- Limpeza de caixas de gordura e fossa\n\n**Hidrojateamento vs mola**\nA mola é ideal para entupimentos localizados e pontuais — pia, vaso, ralo. O hidrojateamento é indicado quando o problema está na rede mais profunda ou quando há acúmulo extenso ao longo da tubulação.\n\n**É seguro para a tubulação?**\nSim, quando executado por profissional qualificado. A pressão é ajustada ao tipo e diâmetro do tubo para garantir eficácia sem causar danos.\n\nEm Porto Alegre atendemos 24h com hidrojateamento profissional para residências, condomínios e empresas.`,
    readTime: "4 min",
  },
  {
    slug: "quanto-custa-desesentupidora-porto-alegre",
    title: "Quanto custa uma desentupidora em Porto Alegre?",
    excerpt: "Entenda os fatores que influenciam o preço e como evitar cobranças abusivas.",
    content: `Uma das primeiras perguntas de quem precisa do serviço é: quanto vai custar? A resposta depende de vários fatores, mas vamos esclarecer tudo.\n\n**Fatores que influenciam o preço:**\n- Tipo de serviço: caça vazamento, desentupimento com mola ou hidrojateamento têm custos diferentes\n- Gravidade do problema: entupimentos simples resolvem mais rápido\n- Horário: atendimentos de madrugada ou feriados podem ter acréscimo\n- Acesso: tubulações de difícil acesso aumentam o tempo de serviço\n\n**Preços médios em Porto Alegre (referência):**\n- Desentupimento com mola (pia/vaso/ralo): R$ 150 a R$ 300\n- Hidrojateamento: R$ 300 a R$ 600\n- Caça vazamento com detecção eletrônica: R$ 250 a R$ 500\n- Sucção de fossa: R$ 400 a R$ 800\n- Limpeza de fossa: R$ 350 a R$ 700\n\n**Como evitar cobranças abusivas:**\n1. Sempre peça orçamento antes de autorizar\n2. Confirme se o orçamento é gratuito\n3. Desconfie de preços muito baixos\n4. Exija comprovante do serviço\n5. Verifique se a empresa tem avaliações no Google\n\nNa Desentupidora Residencial, o orçamento é sempre gratuito e sem compromisso. Atendemos 24h em Porto Alegre e região.`,
    readTime: "5 min",
  },
];
