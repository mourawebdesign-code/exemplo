/* Conteúdo do Spa Paula Melo.
   Voz: primeira pessoa, a da própria Paula no Instagram (@spapaulamelo):
   direta, calorosa, sem adjetivo vazio. Toda informação factual foi apurada
   no perfil oficial — ver research/empresa.md para a fonte de cada dado e a
   lista do que NÃO foi usado por falta de confirmação. */

const IMG = "/images/spapaulamelo";

export const NAV = [
  { label: "O método", href: "#philosophy" },
  { label: "Massagens", href: "#treatments" },
  { label: "A Paula", href: "#specialist" },
  { label: "Resultados", href: "#results" },
];

export const HERO = {
  /* "Massagem manual com resultado imediato" é a frase da bio dela. A palavra
     gigante fica inteira e legível acima da cabeça; só os ombros a tocam. */
  lead: "Massagem manual com resultado",
  word: "imediato",
  body: "Eu desincho, modelo e alivio com as mãos, pelo Método Renata França. 18 anos de massoterapia, em Copacabana e no Flamengo.",
  primary: "Agendar no WhatsApp",
  secondary: "Ver os resultados",
  secondaryHref: "#results",
};

export const PROMO = [
  "Método Renata França",
  "Resultado imediato",
  "18 anos de massoterapia",
  "Pupila 7 Estrelas",
  "7 protocolos certificados",
  "Copacabana e Flamengo",
  "Clientes de SP e dos EUA",
];

/* 02 — O método. Primeiro a convicção dela, depois o porquê de funcionar. */
export const PHILOSOPHY = {
  eyebrow: "O método",
  headingLead: "Massoterapia não é luxo.",
  headingLine2Pre: "É",
  headingHighlight: "saúde",
  headingLine2Post: ".",
  leadShort: "Movimentos firmes, rápidos e precisos que desincham e modelam o corpo.",
  lead: "O Método Renata França combina movimentos firmes, rápidos e precisos para estimular a circulação, reduzir o inchaço e modelar o corpo. É por isso que o resultado aparece já nas primeiras sessões e você sente a leveza ainda na maca.",
  /* Díptico 16:9 montado com duas fotos reais do perfil: a Paula no spa e o
     bordado da marca nas toalhas. */
  image: { src: `${IMG}/filosofia-diptico.jpg`, w: 2006, h: 1125, alt: "Paula Melo no spa, ao lado das toalhas com a marca bordada: Paula Melo, Massoterapeuta, Método Renata França" },
  features: [
    { icon: "expression", title: "Você sente na hora",
      text: "Leveza, conforto e contorno mais evidente. A diferença aparece na sessão, não só no dia seguinte." },
    { icon: "proportion", title: "Protocolo para o seu objetivo",
      text: "Desinchar, modelar, aliviar uma dor ou só desacelerar: eu escolho a técnica a partir do que você pede." },
    { icon: "ruler", title: "Técnica certificada",
      text: "Pupila habilitada nos 7 protocolos do método há 9 anos, e sempre em curso de aperfeiçoamento." },
    { icon: "care", title: "Constância faz diferença",
      text: "Quem vem toda semana, junto com treino e alimentação, vai mais longe. Eu te digo a frequência ideal." },
  ],
};

/* 03 — Massagens. Cada card diz para que serve e o que você sente. */
export const TREATMENTS = {
  eyebrow: "Massagens",
  heading: ["Para desinchar e modelar.", "Para aliviar e relaxar."],
  bodyShort: "Conte o que incomoda e eu indico o protocolo.",
  body: "Protocolos do Método Renata França e massagens terapêuticas. Conte o que você quer mudar ou aliviar e eu indico o caminho.",
  items: [
    { slug: "miracle-touch", name: "Miracle Touch",
      text: "Modela, reduz medidas e desincha. Para cintura, abdômen e contorno, 100% manual.",
      image: `${IMG}/tratamento-miracle-touch.jpg`, focus: "center 50%" },
    { slug: "drenagem", name: "Drenagem Linfática",
      text: "Para inchaço, retenção e pernas pesadas. Você sai da maca mais leve e desinchada.",
      image: `${IMG}/tratamento-drenagem.jpg`, focus: "center 45%" },
    { slug: "miracle-face", name: "Miracle Face",
      text: "A massagem facial do método: movimentos precisos que desincham e revitalizam o rosto.",
      image: `${IMG}/tratamento-miracle-face.jpg`, focus: "center 40%" },
    { slug: "miofascial", name: "Liberação Miofascial",
      text: "Para dor crônica, corpo travado e pós-treino. Na mesma sessão você já sente o corpo destravado.",
      image: `${IMG}/tratamento-liberacao-miofascial.jpg`, focus: "center 20%" },
    { slug: "pedras-quentes", name: "Pedras Quentes",
      text: "O calor das pedras vulcânicas acalma o sistema nervoso: relaxamento profundo, menos estresse e ansiedade.",
      image: `${IMG}/tratamento-pedras-quentes.jpg`, focus: "center 40%" },
    { slug: "ventosaterapia", name: "Ventosaterapia",
      text: "Da Medicina Tradicional Chinesa: alivia pontos de tensão, relaxa os músculos e equilibra corpo e mente.",
      image: `${IMG}/tratamento-ventosaterapia.jpg`, focus: "center 35%" },
    { slug: "pos-operatorio", name: "Pós-operatório",
      text: "Recuperação mais rápida e segura: ajuda a reduzir inchaço, hematomas e dor. Sempre com a liberação do seu médico.",
      image: `${IMG}/tratamento-pos-operatorio.jpg`, focus: "center 20%" },
    { slug: "spa-da-noiva", name: "Spa da Noiva",
      text: "Noiva e madrinhas relaxam juntas antes do grande dia: relaxamento, beleza e alegria.",
      image: `${IMG}/tratamento-spa-da-noiva.jpg`, focus: "center 30%" },
  ],
  learnMore: "Agendar",
  viewAllHref: "#treatments",
  /* Lista completa das artes "Serviços" (destaque do perfil): os cards acima
     são os mais procurados, aqui entra o resto. */
  protocols: {
    heading: "Todos os protocolos",
    hint: "Toque no que você procura e fale direto comigo.",
    groups: [
      { label: "Método Renata França",
        items: ["Miracle Touch", "Miracle Face", "Drenagem Linfática", "Massagem Relaxante", "Massagem Modeladora", "Ayurvédica", "Babymoon"] },
      { label: "Massagens terapêuticas",
        items: ["Liberação Miofascial", "Reflexologia Podal", "Pedras Quentes", "Massagem Desportiva", "Shiatsu", "Drenagem para Grávidas", "Escalda-pés", "Protocolo para Lipedema", "Pós-operatório"] },
    ],
  },
};

/* 04 — Banner entre Massagens e A Paula: tira a dúvida de quem não sabe
   qual protocolo escolher e leva para a conversa. */
export const RUPTURE = {
  headingPre: "Não sabe por onde",
  headingHighlight: "começar?",
  headingLine2: "Me conta o que incomoda.",
  body: "Inchaço, dor, medida ou só cansaço. Me escreva no WhatsApp e eu indico o protocolo certo antes de você marcar.",
  cta: "Falar com a Paula",
  image: { src: `${IMG}/banner-ventosas.jpg`, alt: "Ventosas de vidro alinhadas nas costas, em tom marrom" },
};

/* 05 — A massoterapeuta. Números só os confirmados no perfil. */
export const SPECIALIST = {
  eyebrow: "Quem vai cuidar de você",
  name: "Paula Melo",
  role: "Massoterapeuta · Pupila 7 Estrelas do Método Renata França",
  quote: "Mãos que tocam o corpo e transformam vidas. Nada substitui o toque.",
  bio: "Faço massoterapia há 18 anos e sou habilitada em todos os protocolos do Método Renata França há 9. Atendo em dois spas, em Copacabana e no Flamengo, e sigo estudando, como no curso de Liberação Miofascial Avançada. Minha regra é uma só: quem deita na minha maca sai com resultado.",
  credentials: ["7 protocolos certificados", "Massagens terapêuticas", "Pós-operatório", "Miofascial avançada"],
  stats: [
    { value: "18", label: "Anos de massoterapia" },
    { value: "9", label: "Anos no Método Renata França" },
    { value: "7", label: "Protocolos certificados" },
  ],
  portrait: { src: `${IMG}/paula-melo-retrato-maos.png`, w: 763, h: 1036, alt: "Paula Melo, massoterapeuta, de blazer claro e com as mãos à frente" },
};

/* 06 — Resultados. Fotos reais publicadas no perfil. Cada arquivo traz
   ANTES em cima e DEPOIS embaixo (layout "stacked"), em metades exatas. */
export const RESULTS = {
  eyebrow: "Resultados",
  headingLine1: "O que muda",
  headingLine2Pre: "em uma",
  headingLine2Highlight: "sessão.",
  body: "Fotos reais de atendimentos meus, publicadas no Instagram. Cada corpo responde de um jeito, e quem vem com constância vai mais longe.",
  beforeLabel: "Antes",
  afterLabel: "Depois",
  demoDisclaimer: "Resultados individuais. Constância nas sessões, alimentação e exercício fazem diferença.",
  cases: [
    { slug: "cintura", treatment: "Cintura mais fina",
      text: "Na mesma sessão: o corpo desinchado e a cintura mais definida, 100% manual.",
      image: `${IMG}/resultado-cintura.jpg`, layout: "stacked", w: 1088, h: 1096, width: 760 },
    { slug: "abdomen", treatment: "Abdômen desinchado",
      text: "Menos inchaço e as linhas do abdômen mais evidentes depois da massagem.",
      image: `${IMG}/resultado-abdomen.jpg`, layout: "stacked", w: 745, h: 1616, width: 820 },
    { slug: "modeladora", treatment: "Contorno do corpo",
      text: "Manobras que ativam a circulação, reduzem o inchaço e definem as curvas.",
      image: `${IMG}/resultado-modeladora.jpg`, layout: "stacked", w: 1350, h: 1668, width: 760 },
    { slug: "definicao", treatment: "Abdômen definido",
      text: "Um abdômen que já era bonito, ainda mais definido depois da sessão.",
      image: `${IMG}/resultado-abdomen2.jpg`, layout: "stacked", w: 798, h: 1318, width: 920 },
  ],
};

export const CTA_MID = {
  text: "Seu resultado começa com uma conversa pelo WhatsApp.",
  button: "Agendar no WhatsApp",
};

/* 08 — Como funciona: leque de 3 fotos + jornada em 4 etapas. */
export const EXPERIENCE = {
  eyebrow: "Como funciona",
  heading: "Da mensagem no WhatsApp ao fim da sessão.",
  body: "Desde o momento em que você chega, tudo é pensado para você desacelerar: o ambiente acolhe, a mente desacelera e o corpo relaxa.",
  photos: [
    { n: "01", file: "momento-boas-vindas.jpg", alt: "Paula Melo com a toalha bordada do spa", position: "50% 25%" },
    { n: "02", file: "paula-melo-no-spa.jpg", alt: "Paula Melo no spa, com toalhas, cremes e pétalas sobre a maca", position: "50% 28%" },
    { n: "03", file: "momento-produtos-renata-franca.jpg", alt: "Paula Melo com os cremes oficiais Renata França para massagem facial e corporal", position: "50% 30%" },
  ],
  items: [
    { n: "01", title: "Você me chama", text: "Conte pelo WhatsApp o que você quer mudar. Eu indico o protocolo e reservo o seu horário." },
    { n: "02", title: "Você chega", text: "Copacabana ou Flamengo, sempre com hora marcada, num ambiente calmo para você desacelerar." },
    { n: "03", title: "Na maca", text: "Bombeamento, ritmo e pressão ajustados ao seu corpo. A diferença aparece ainda na sessão." },
    { n: "04", title: "Depois", text: "Eu te indico a frequência ideal. Quem vem com constância, treino e boa alimentação vai mais longe." },
  ],
};

/* Técnica e cuidado: só fatos confirmados (certificados e regras do próprio
   atendimento). */
export const SAFETY = {
  eyebrow: "Técnica e cuidado",
  heading: "Formação que se vê na parede.",
  intro: "Na parede do spa estão os meus certificados: Miracle Touch, Miracle Face, Drenagem Linfática, Massagem Relaxante, Modeladora, Ayurvédica e Babymoon do Método Renata França, além de cursos em massoterapia.",
  image: { src: `${IMG}/certificados-metodo-renata-franca.jpg`, w: 890, h: 505, alt: "Parede com os certificados de Paula Melo no Método Renata França e em massoterapia" },
  items: [
    { title: "Pupila há 9 anos",
      text: "Sou habilitada em todos os protocolos do Método Renata França, e faço questão de seguir a técnica à risca." },
    { title: "Cremes oficiais",
      text: "Uso os cremes para massagem facial e corporal da linha Renata França." },
    { title: "Pós-operatório com liberação médica",
      text: "Só faço a drenagem pós-cirúrgica a partir da liberação do seu médico." },
    { title: "Sempre estudando",
      text: "Faço cursos de aperfeiçoamento, como o de Liberação Miofascial Avançada, com novas ferramentas instrumentais." },
  ],
};

/* CTA final: mesmo padrão do banner "Não sabe por onde começar?" — foto, véu
   escuro e texto centralizado. */
export const VISIT_CTA = {
  headingPre: "Vamos",
  headingHighlight: "agendar",
  headingLine2: "a sua sessão?",
  body: "Chame no WhatsApp, conte o que você quer mudar e escolha o melhor dia. Estou te aguardando.",
  button: "Chamar no WhatsApp",
  image: { src: `${IMG}/banner-cta-pedras.jpg`, alt: "Mãos massageando as costas com pedras quentes, em tom quente" },
};

/* Depoimentos REAIS, transcritos das avaliações publicadas no perfil
   (prints de avaliações do Google e mensagem de cliente). Sem nomes
   inventados: quando o print não mostra o nome, fica a identificação genérica. */
export const TESTIMONIALS = {
  rating: "5,0",
  ratingLabel: "Avaliações de clientes",
  items: [
    { id: "t1", name: "Clarisse M.", stars: 5, when: "Avaliação no Google",
      quote: "Fiz 4 sessões com a Paula e foi incrível! Os resultados são visíveis desde a primeira sessão. Ela é muito profissional, tem bastante experiência e se adapta às nossas necessidades. O espaço de Copacabana é muito agradável, bonito e limpo." },
    { id: "t2", name: "Ana Carolina S.", stars: 5, when: "Avaliação no Google",
      quote: "A Paula é mão de fada! Cheguei até o trabalho dela para tratar o meu lipedema e, desde a primeira sessão, me senti acolhida, cuidada e segura. Saio sempre mais leve, menos inchada e com a sensação real de que meu corpo respondeu ao tratamento." },
    { id: "t3", name: "Cliente de drenagem", stars: 5, when: "Avaliação no Google",
      quote: "Além da técnica impecável, ela é extremamente atenciosa, cuidadosa e faz com que a sessão seja muito agradável. Sempre saio me sentindo muito mais leve, desinchada e bem. Recomendo de olhos fechados!" },
    { id: "t4", name: "Cliente do spa", stars: 5, when: "Mensagem para a Paula",
      quote: "Paulinha, você me ajudou demais! Estava me sentindo muito retida e a drenagem me ajudou em tudo, inclusive na corrida. Me senti leve e ótima! Você arrasa e tem mãozinhas de fada. Obrigada por tanto cuidado." },
  ],
};

/* 12 — Endereços. Duas unidades confirmadas (arte "Unidades" do perfil). */
export const LOCATION = {
  eyebrow: "Onde eu atendo",
  headingLine1: "Copacabana ou Flamengo,",
  headingLine2Pre: "o mais perto ",
  headingLine2Highlight: "de você.",
  intro: "O atendimento é o mesmo nas duas unidades, sempre com hora marcada.",
  addressLabel: "Endereço",
  units: [
    { key: "copacabana", label: "Copacabana",
      address: "Rua Santa Clara, 70 · Sala 1206\nCopacabana, Rio de Janeiro - RJ",
      query: "Rua Santa Clara, 70, Copacabana, Rio de Janeiro - RJ" },
    { key: "flamengo", label: "Flamengo",
      address: "Rua Dois de Dezembro, 78 · Sala 313\nFlamengo, Rio de Janeiro - RJ",
      query: "Rua Dois de Dezembro, 78, Flamengo, Rio de Janeiro - RJ" },
  ],
  hoursLabel: "Horários",
  hours: ["Com hora marcada", "Agenda aberta pelo WhatsApp"],
  contactLabel: "WhatsApp",
  contact: "(21) 97097-5533",
  cta: "Como chegar",
  geo: ["Copacabana · Flamengo", "Rio de Janeiro, RJ"],
};

export const INSTAGRAM_URL = "https://www.instagram.com/spapaulamelo/";

export const SOCIALS = [
  { key: "instagram", label: "Instagram", href: INSTAGRAM_URL },
  { key: "whatsapp", label: "WhatsApp", href: "https://wa.me/5521970975533" },
] as const;

export const FOOTER = {
  institutional: "Spa Paula Melo · Massoterapia",
  headline: ["Massagem manual", "com resultado imediato."],
  address: "Rua Santa Clara, 70 · Sala 1206\nCopacabana, Rio de Janeiro - RJ",
  clinicLinks: [
    { label: "O método", href: "#philosophy" },
    { label: "A Paula", href: "#specialist" },
    { label: "Resultados", href: "#results" },
    { label: "Endereços", href: "#location" },
  ],
  treatmentLinks: [
    { label: "Miracle Touch", href: "#treatments" },
    { label: "Drenagem Linfática", href: "#treatments" },
    { label: "Liberação Miofascial", href: "#treatments" },
    { label: "Pós-operatório", href: "#treatments" },
  ],
  phone: "(21) 97097-5533",
  copyright: "© 2026 Spa Paula Melo",
  rightsLine: "Todos os direitos reservados",
  legalLinks: [
    { label: "@spapaulamelo", href: INSTAGRAM_URL },
  ],
  conceptNote: "Proposta de site",
};

export const BRAND = {
  name: "Spa Paula Melo",
  short: "Paula Melo",
  subtitle: "MASSOTERAPIA",
  city: "Rio de Janeiro, Brasil",
};

/* WhatsApp oficial publicado nos posts do perfil. */
export const WHATSAPP = {
  number: "5521970975533",
  message: "Olá, Paula! Vim pelo seu site e gostaria de agendar uma sessão.",
  tooltip: "Fale com a Paula",
};

/* Perguntas frequentes — as dúvidas que ela mesma responde nos posts, em
   primeira pessoa. */
export const FAQ = {
  eyebrow: "Dúvidas frequentes",
  heading: "O que mais me perguntam.",
  groups: [
    { key: "massagens", label: "Antes de marcar", items: [
      { q: "Vou ver resultado já na primeira sessão?",
        a: "Esse é o objetivo do método: sair da maca mais leve, desinchada e com o contorno mais evidente. Os resultados ficam visíveis já nas primeiras sessões, e quem vem com constância, junto com treino e alimentação, vai ainda mais longe." },
      { q: "Qual a diferença entre Miracle Touch e Drenagem Linfática?",
        a: "A drenagem foca em reduzir o inchaço e a retenção de líquidos. A Miracle Touch é a modeladora: reduz medidas e contorna o corpo. Se estiver em dúvida, me chame no WhatsApp e eu indico a melhor para o seu objetivo." },
      { q: "Faço massagem no pós-operatório?",
        a: "Faço, a partir da liberação do seu médico. A drenagem ajuda a diminuir hematomas, aliviar dores e reduzir o inchaço, para uma recuperação mais rápida e segura da cirurgia." },
      { q: "A massagem ajuda no lipedema?",
        a: "Tenho um protocolo para lipedema. A massagem ajuda a reduzir o inchaço, melhora a sensação de peso nas pernas e alivia a dor e a pressão nas áreas afetadas." },
      { q: "Serve para quem treina ou corre?",
        a: "Serve. A massagem desportiva e a liberação miofascial soltam a musculatura, melhoram a circulação e aceleram a recuperação pós-treino. Para provas de corrida, o ideal é fazer sessões antes e depois." },
    ] },
    { key: "agendamento", label: "Agendamento", items: [
      { q: "Como faço para agendar?",
        a: "Pelo WhatsApp (21) 97097-5533 ou pelo direct do Instagram @spapaulamelo. Todos os atendimentos são com hora marcada." },
      { q: "Onde ficam as unidades?",
        a: "Em Copacabana, na Rua Santa Clara, 70, sala 1206, e no Flamengo, na Rua Dois de Dezembro, 78, sala 313." },
      { q: "Gestantes podem fazer massagem?",
        a: "Há protocolos específicos para gestantes, como a Babymoon e a drenagem para grávidas. Converse com o seu obstetra antes de agendar." },
      { q: "Vocês têm pacote para noivas?",
        a: "Tenho o Spa da Noiva: um momento de relaxamento e autocuidado para a noiva e as madrinhas antes do casamento. Reserve a data pelo WhatsApp." },
      { q: "Posso presentear alguém com uma sessão?",
        a: "Pode. Em datas como Dia das Mães e Dia dos Namorados, monto combos para presentear. Peça as opções pelo WhatsApp." },
      { q: "Atende quem mora fora do Rio?",
        a: "Atendo. Recebo clientes de São Paulo e até dos Estados Unidos que reservam a sessão antes de vir ao Rio. Me chame pelo WhatsApp e combine o melhor dia." },
    ] },
  ],
};

/** Link wa.me com a mensagem pronta — usado por todos os CTAs de agendamento. */
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.message)}`;

/** Link de agendamento já citando a massagem escolhida no card. */
export const whatsappFor = (treatment: string) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(`Olá, Paula! Vim pelo seu site e gostaria de agendar uma sessão de ${treatment}.`)}`;
