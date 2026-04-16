// Copy email
function copyEmail() {
  navigator.clipboard.writeText('automa610@gmail.com').then(() => {
    const btn = document.querySelector('.cta-copy');
    const orig = btn.innerHTML;
    btn.innerHTML = '✓ Copiat!';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerHTML = orig; btn.classList.remove('copied'); }, 2000);
  });
}

// i18n
const t = {
  ca: {
    nav_services: "Serveis", nav_about: "Sobre mi", nav_cta: "Contactar",
    hero_tag: "Consultoria informàtica",
    hero_title: 'Digitalitza el teu negoci amb solucions <span>a mida</span>',
    hero_desc: "Desenvolupament web, aplicacions mòbils i bots d'intel·ligència artificial per a empreses que volen créixer i automatitzar els seus processos.",
    hero_btn1: "Demanar pressupost →", hero_btn2: "Serveis",
    m_years: "Anys exp.", m_custom: "A mida", float_bot: "Bot actiu",
    services_tag: "Serveis",
    services_title: "Tot el que necessites per digitalitzar-te",
    services_sub: "Solucions reals, sense plantilles. Cada projecte es dissenya i programa des de zero.",
    s1_title: "Pàgines web",
    s1_desc: "Webs ràpides, responsives i optimitzades per a SEO. Landing pages, e-commerce i portals corporatius amb les tecnologies més actuals.",
    s2_title: "Apps d'escriptori i mòbil",
    s2_desc: "Aplicacions natives i multiplataforma per a iOS, Android i escriptori. Des d'eines internes fins a productes SaaS.",
    s3_title: "Bots de vídeo i trucada",
    s3_desc: "Agents d'IA que atenen trucades i videotrucades 24/7. Reserves, suport i vendes amb veu natural i intel·ligència artificial.",
    s3_tag_voice: "Veu natural",
    about_tag: "Sobre mi",
    about_p1: "Programador full stack amb 3 anys d'experiència en el sector. Especialitzat en desenvolupament frontend amb Angular i React, backends robustos amb Java Spring Boot, i integracions avançades amb intel·ligència artificial.",
    about_p2: "Treballo amb empreses que busquen solucions digitals reals — sense fum, sense plantilles. Cada projecte es construeix des de zero, adaptat a les necessitats del client.",
    h_years: "Anys d'experiència", h_dev: "Desenvolupador", h_ai: "Integrada",
    cta_tag: "Contacte",
    cta_title: "Tens un projecte en ment? Parlem.",
    cta_call: "📞 Trucar",
  },
  es: {
    nav_services: "Servicios", nav_about: "Sobre mí", nav_cta: "Contactar",
    hero_tag: "Consultoría informática",
    hero_title: 'Digitaliza tu negocio con soluciones <span>a medida</span>',
    hero_desc: "Desarrollo web, aplicaciones móviles y bots de inteligencia artificial para empresas que quieren crecer y automatizar sus procesos.",
    hero_btn1: "Pedir presupuesto →", hero_btn2: "Servicios",
    m_years: "Años exp.", m_custom: "A medida", float_bot: "Bot activo",
    services_tag: "Servicios",
    services_title: "Todo lo que necesitas para digitalizarte",
    services_sub: "Soluciones reales, sin plantillas. Cada proyecto se diseña y programa desde cero.",
    s1_title: "Páginas web",
    s1_desc: "Webs rápidas, responsivas y optimizadas para SEO. Landing pages, e-commerce y portales corporativos con las tecnologías más actuales.",
    s2_title: "Apps de escritorio y móvil",
    s2_desc: "Aplicaciones nativas y multiplataforma para iOS, Android y escritorio. Desde herramientas internas hasta productos SaaS.",
    s3_title: "Bots de vídeo y llamada",
    s3_desc: "Agentes de IA que atienden llamadas y videollamadas 24/7. Reservas, soporte y ventas con voz natural e inteligencia artificial.",
    s3_tag_voice: "Voz natural",
    about_tag: "Sobre mí",
    about_p1: "Programador full stack con 3 años de experiencia en el sector. Especializado en desarrollo frontend con Angular y React, backends robustos con Java Spring Boot, e integraciones avanzadas con inteligencia artificial.",
    about_p2: "Trabajo con empresas que buscan soluciones digitales reales — sin humo, sin plantillas. Cada proyecto se construye desde cero, adaptado a las necesidades del cliente.",
    h_years: "Años de experiencia", h_dev: "Desarrollador", h_ai: "Integrada",
    cta_tag: "Contacto",
    cta_title: "¿Tienes un proyecto en mente? Hablemos.",
    cta_call: "📞 Llamar",
  }
};

let lang = 'ca';
function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[l][key]) el.innerHTML = t[l][key];
  });
}
document.querySelectorAll('.lang-btn').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

// Scroll reveal
const obs = new IntersectionObserver(e => { e.forEach(el => { if (el.isIntersecting) el.target.classList.add('visible') }) }, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Nav hide on scroll
let ly = 0; const nav = document.querySelector('nav');
window.addEventListener('scroll', () => { const y = scrollY; nav.style.transform = y > ly && y > 80 ? 'translateY(-100%)' : ''; ly = y });
