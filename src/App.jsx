import { useState } from 'react'
import {
  ArrowRight,
  Banknote,
  Check,
  Code2,
  Globe2,
  LockKeyhole,
  Menu,
  X,
  PlugZap,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  ChevronLeft,
  ChevronRight,
  PenTool,
  BarChart3,
  Layers3,
  Users,
} from 'lucide-react'

const contactEmail = 'contacto@artak.com.mx'
const contactPhone = '+52 55 4821 9034'

const navItems = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const services = [
  {
    icon: Smartphone,
    title: 'Desarrollo de aplicaciones móviles',
    text: 'Apps móviles para iOS y Android pensadas para operación real, experiencia clara y crecimiento continuo.',
    color: 'red',
  },
  {
    icon: Globe2,
    title: 'Desarrollo web',
    text: 'Plataformas web modernas para digitalizar procesos, centralizar información y operar con mayor control.',
    color: 'purple',
  },
  {
    icon: PlugZap,
    title: 'Integración de sistemas',
    text: 'Conectamos herramientas, datos y procesos para que las áreas trabajen con menos fricción y más visibilidad.',
    color: 'blue',
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento de sistemas',
    text: 'Soporte evolutivo, correcciones y mejoras continuas para mantener productos digitales estables y vigentes.',
    color: 'green',
  },
  {
    icon: Code2,
    title: 'APIs',
    text: 'Diseño y desarrollo de APIs robustas para conectar aplicaciones, servicios internos y plataformas externas.',
    color: 'red',
  },
  {
    icon: Layers3,
    title: 'Bases de datos',
    text: 'Modelado, consulta y administración de información para que los datos sean confiables, útiles y accionables.',
    color: 'purple',
  },
  {
    icon: Banknote,
    title: 'Soluciones fintech',
    text: 'Productos financieros digitales con enfoque en seguridad, trazabilidad, rendimiento y experiencia de usuario.',
    color: 'blue',
  },
  {
    icon: Zap,
    title: 'Automatización de procesos',
    text: 'Flujos digitales para reducir tareas manuales, acelerar operaciones y liberar tiempo del equipo.',
    color: 'green',
  },
]

const technologies = [
  { name: 'Java', text: 'Backends robustos para procesos críticos.' },
  { name: 'Symfony', text: 'Arquitectura web estructurada y mantenible.' },
  { name: 'GitHub', text: 'Control de versiones y colaboración técnica.' },
  { name: 'AWS', text: 'Infraestructura cloud preparada para escalar.' },
  { name: 'SQL', text: 'Datos ordenados, consultables y confiables.' },
]

const projects = [
  {
    name: 'dish',
    logo: 'dish',
    text: 'Plataforma web para optimizar procesos, seguimiento operativo y escalabilidad del negocio.',
    theme: 'project-red',
    type: 'dashboard',
  },
  {
    name: 'Somos Uno',
    logo: '∞ SOMOS\nUNO',
    text: 'Aplicación móvil orientada a conectar usuarios, beneficios y operación digital en una experiencia clara.',
    theme: 'project-blue',
    type: 'mobile',
  },
  {
    name: 'Nomibox',
    logo: 'Nomibox',
    text: 'Solución para gestión de nómina, colaboradores y procesos administrativos de capital humano.',
    theme: 'project-white',
    type: 'analytics',
  },
  {
    name: 'Variv Capital',
    logo: 'VARIV\nCAPITAL',
    text: 'Plataforma financiera para visualizar información, dar seguimiento y fortalecer decisiones de inversión.',
    theme: 'project-gray',
    type: 'finance',
  },
]

const process = [
  {
    icon: Search,
    title: '1. Descubrimiento',
    text: 'Entendemos tu negocio, usuarios, procesos y objetivos.',
    color: 'red',
  },
  {
    icon: PenTool,
    title: '2. Propuesta',
    text: 'Definimos una ruta clara: alcance, flujos, prioridades y experiencia de usuario.',
    color: 'purple',
  },
  {
    icon: Code2,
    title: '3. Desarrollo',
    text: 'Construimos soluciones ágiles, seguras y escalables.',
    color: 'blue',
  },
  {
    icon: Check,
    title: '4. Evolución',
    text: 'Lanzamos, medimos y mejoramos para que el producto siga generando valor.',
    color: 'green',
  },
]

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Artak Solutions">
      <span className="logo-word">artak</span><span className="logo-solution">Solutions</span>
    </a>
  )
}

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="site-header">
      <div className="container nav">
        <Logo />

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <a className="nav-cta" href={`mailto:${contactEmail}`}>
          Hablemos <ArrowRight size={18} />
        </a>

        <button
          className="mobile-menu"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className={`mobile-panel ${isOpen ? 'is-open' : ''}`}>
        <nav className="container mobile-nav" aria-label="Navegación móvil">
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}</a>
          ))}
          <a className="btn btn-primary" href={`mailto:${contactEmail}`} onClick={closeMenu}>
            Solicitar diagnóstico <ArrowRight size={18} />
          </a>
        </nav>
      </div>
    </header>
  )
}

function PhoneMockup() {
  return (
    <div className="phone-scene" aria-label="Mockup de aplicación financiera">
      <div className="glow glow-red" />
      <div className="glow glow-blue" />
      <div className="dots" />

      <div className="phone phone-back">
        <div className="phone-notch" />
        <div className="mini-status">
          <span>9:40</span>
          <span>▰ ▰</span>
        </div>
        <div className="growth-card">
          <span>Crecimiento</span>
          <strong>+12.3%</strong>
          <div className="chart-line" />
        </div>
        <div className="mini-list">
          <span>Ingresos</span><b>$2,450.00</b>
          <span>Inversión</span><b>$150.00</b>
          <span>Gastos</span><b>$320.00</b>
          <span>Rend.</span><b>$75.00</b>
        </div>
      </div>

      <div className="phone phone-front">
        <div className="phone-notch" />
        <div className="mini-status">
          <span>9:40</span>
          <span>▰ ▰</span>
        </div>
        <div className="hello-row">
          <span>Hola, Mariana</span>
          <div><Sparkles size={15} /></div>
        </div>
        <div className="balance">
          <span>Saldo total</span>
          <strong>$24,850.00 <em>MXN</em></strong>
          <small>+ 9.5% vs el mes pasado</small>
        </div>
        <div className="quick-actions">
          <button>↗<span>Enviar</span></button>
          <button>↓<span>Recibir</span></button>
          <button>◱<span>Pagar</span></button>
          <button>•••<span>Más</span></button>
        </div>
        <div className="account-list">
          <p>Tus cuentas</p>
          <div className="account-item">
            <i className="bullet purple" />
            <span>Cuenta principal<br /><small>•••• 1234</small></span>
            <b>$14,500.00</b>
          </div>
          <div className="account-item">
            <i className="bullet orange" />
            <span>Inversiones<br /><small>$10,350.00</small></span>
            <b className="green">+12.9%</b>
          </div>
        </div>
        <div className="movement">
          <p>Movimientos recientes</p>
          <div className="movement-row"><span>Pago recibido</span><b>+$2,450.00</b></div>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Desarrollo mobile · web · fintech · automatización</p>
          <h1>
            El sitio que convierte tecnología en <span>confianza comercial</span>
          </h1>
          <p className="hero-text">
            Artak Solutions desarrolla aplicaciones móviles y web para empresas que necesitan digitalizar procesos, conectar sistemas y lanzar productos tecnológicos con estructura, seguridad y visión de crecimiento.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${contactEmail}`}>
              Solicitar diagnóstico <ArrowRight size={18} />
            </a>
            <a className="btn btn-secondary" href="#trabajos">
              Ver capacidades
            </a>
          </div>
          <div className="trust-points">
            <span><ShieldCheck size={18} /> Productos confiables</span>
            <span><Zap size={18} /> Menos procesos manuales</span>
            <span><LockKeyhole size={18} /> Seguridad desde el diseño</span>
          </div>
        </div>
        <PhoneMockup />
      </div>
    </section>
  )
}

function ClientStrip() {
  return (
    <section className="client-strip" id="nosotros">
      <div className="container">
        <p className="section-kicker centered">Experiencia aplicada en proyectos para empresas reales</p>
        <div className="client-logos">
          <span className="dish-logo">dish</span>
          <span className="somos-logo">∞ <small>SOMOS<br />UNO</small></span>
          <span className="nomibox-logo">Nomibox</span>
          <span className="variv-logo">VARIV <small>CAPITAL</small></span>
          <span className="more-logo">y más...</span>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="section services" id="servicios">
      <div className="container services-grid">
        <div className="section-copy">
          <p className="section-kicker">Servicios</p>
          <h2>Todo lo necesario para convertir procesos en productos digitales</h2>
          <p>
            Una empresa que no muestra claramente lo que construye pierde confianza antes de iniciar la conversación. Esta landing presenta a Artak como un socio tecnológico capaz de desarrollar, mantener, integrar y escalar soluciones reales.
          </p>
          <a className="text-link" href="#contacto">Quiero una propuesta <ArrowRight size={16} /></a>
        </div>

        <div className="service-cards" id="soluciones">
          {services.map(({ icon: Icon, title, text, color }) => (
            <article className="service-card" key={title}>
              <div className={`icon-badge ${color}`}><Icon size={25} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a className={`mini-link ${color}`} href={`mailto:${contactEmail}`}>Solicitar info <ArrowRight size={14} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechStack() {
  return (
    <section className="section tech-section" id="tecnologias">
      <div className="container tech-card">
        <div>
          <p className="section-kicker">Stack tecnológico</p>
          <h2>Tecnologías para construir con orden, estabilidad y escala</h2>
          <p>
            La propuesta comunica una base técnica reconocible para clientes empresariales: desarrollo backend, web, control de versiones, infraestructura cloud y administración de datos.
          </p>
        </div>
        <div className="tech-grid">
          {technologies.map((tech) => (
            <article className="tech-pill" key={tech.name}>
              <strong>{tech.name}</strong>
              <span>{tech.text}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DashboardVisual() {
  return (
    <div className="dashboard-mock">
      <div className="dash-sidebar">
        <span /><span /><span /><span />
      </div>
      <div className="dash-main">
        <div className="dash-top" />
        <div className="dash-cards"><i /><i /><i /></div>
        <div className="dash-chart"><b /><b /><b /></div>
      </div>
    </div>
  )
}

function MobileVisual() {
  return (
    <div className="two-phones">
      <div className="case-phone case-phone-a"><span /><span /><span /><i /></div>
      <div className="case-phone case-phone-b"><span /><span /><span /><i /></div>
    </div>
  )
}

function AnalyticsVisual() {
  return (
    <div className="analytics-mock">
      <div className="analytics-window big"><span /><div><i /><i /><i /></div></div>
      <div className="analytics-window small"><span /><div><i /><i /></div></div>
    </div>
  )
}

function FinanceVisual() {
  return (
    <div className="finance-mock">
      <div className="finance-panel"><BarChart3 size={34} /><span>Growth</span><b>+24%</b></div>
      <div className="finance-list"><i /><i /><i /></div>
    </div>
  )
}

function ProjectVisual({ theme, type }) {
  const visuals = {
    dashboard: <DashboardVisual />,
    mobile: <MobileVisual />,
    analytics: <AnalyticsVisual />,
    finance: <FinanceVisual />,
  }

  return (
    <div className={`project-visual ${theme}`}>
      <div className="project-glass" />
      {visuals[type]}
    </div>
  )
}

function Work() {
  return (
    <section className="section work" id="trabajos">
      <div className="container work-showcase">
        <div className="work-intro">
          <p className="section-kicker">Nuestros trabajos</p>
          <h2>Productos que generan impacto visible</h2>
        </div>

        <div className="work-cases">
          <div className="slider-buttons" aria-hidden="true">
            <button><ChevronLeft /></button>
            <button><ChevronRight /></button>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <ProjectVisual theme={project.theme} type={project.type} />
                <div className="project-content">
                  <h3>{project.logo.split('\n').map((line) => <span key={line}>{line}</span>)}</h3>
                  <p>{project.text}</p>
                  <a href={`mailto:${contactEmail}`}>Ver caso de éxito <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section process-section" id="proceso">
      <div className="container">
        <p className="section-kicker">Nuestro proceso</p>
        <h2>Un proceso claro,<br />resultados reales</h2>
        <div className="process-line">
          {process.map(({ icon: Icon, title, text, color }) => (
            <article className="process-step" key={title}>
              <div className={`process-icon ${color}`}><Icon size={29} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section" id="contacto">
      <div className="container">
        <div className="cta-card">
          <div>
            <p className="section-kicker">Contacto</p>
            <h2>Una landing así puede abrir conversaciones antes de la primera llamada.</h2>
            <p>Presenta servicios, experiencia, stack tecnológico y casos de referencia en un solo lugar. Menos explicación improvisada, más confianza desde el primer clic.</p>
          </div>
          <div className="cta-contact">
            <a className="btn btn-dark" href={`mailto:${contactEmail}`}>Escribir a Artak <ArrowRight size={18} /></a>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href="tel:+525548219034">{contactPhone}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="blog">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Desarrollamos aplicaciones móviles, plataformas web, integraciones y soluciones fintech para empresas que necesitan operar mejor con tecnología.</p>
          <div className="socials">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a>
            <a href="https://github.com/" aria-label="Github">gh</a>
            <a href="https://www.instagram.com/" aria-label="Instagram">ig</a>
          </div>
        </div>
        <div>
          <h4>Enlaces</h4>
          {navItems.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </div>
        <div>
          <h4>Empresa</h4>
          <a href="#nosotros">Sobre nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#trabajos">Casos de referencia</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          <a href="tel:+525548219034">{contactPhone}</a>
          <span>Ciudad de México, México</span>
        </div>
      </div>
      <p className="copyright">© 2026 Artak Solutions. Todos los derechos reservados.</p>
    </footer>
  )
}

function FloatingStats() {
  return (
    <aside className="floating-stats" aria-label="Resumen de capacidades">
      <span><Layers3 size={17} /> Web + Mobile + APIs</span>
      <span><Users size={17} /> Experiencia empresarial</span>
      <span><ShieldCheck size={17} /> Tecnología que genera confianza</span>
    </aside>
  )
}

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <ClientStrip />
      <Services />
      <TechStack />
      <Work />
      <Process />
      <CTA />
      <Footer />
      <FloatingStats />
    </main>
  )
}
