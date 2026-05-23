import {
  Mail,
  Linkedin,
  Github,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Network,
  Lock,
  PhoneCall,
  Mic,
  Gauge,
  Award,
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  Cloud,
  Cpu,
  Building2,
  Rocket,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Quote,
  FileText,
  Trophy,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE_PATH}${path}`;

const stats = [
  { value: "10+", label: "Years engineering" },
  { value: "6", label: "Companies & ventures" },
  { value: "2", label: "Startups co-founded" },
  { value: "2026", label: "Cisco Live · Amsterdam" },
];

const experience = [
  {
    company: "Cisco Systems",
    role: "Software Engineer III → IV → V",
    period: "Aug 2020 – Present",
    location: "Bengaluru",
    accent: "bg-indigo-500",
    highlights: [
      "Led teams building network monitoring & data analytics for Airtel, Jio 5G, and RioTinto — driving future business expansions.",
      "Developed an AI-powered pull request reviewer for internal GitHub, now used by 4 teams across ~45 repositories.",
      "Created a browser-based MCP with agents to automate testing and SRE workflows, running locally to preserve user sessions and improve developer productivity.",
      "Built an AI configuration generator for ETL pipelines, empowering 3 product managers to independently roll out customized use cases for 4 enterprise customers.",
      "Led design & implementation of network inventory, configuration, and syslog analysis for Meta, Microsoft, and Google — enabling vulnerability detection, migration planning, and automated remediation.",
      "Multi-cloud deployments and operational strategies producing measurable MTTR reduction for 5G mobility clients.",
    ],
    tags: ["Distributed Systems", "Gen-AI", "MCP", "Multi-cloud", "5G", "Splunk"],
  },
  {
    company: "DoSelect",
    role: "Senior Software Engineer",
    period: "Dec 2018 – Aug 2020",
    location: "Bengaluru",
    accent: "bg-emerald-500",
    badge: "Series A → Acquisition",
    highlights: [
      "Led product development team of 4 engineers.",
      "Migrated Python2 EOL microservices to Python3, ensuring business continuity.",
      "Owned release management; promoted effective collaboration across DevOps & SRE.",
      "Implemented security enhancements; managed AWS budgeting and resource optimization.",
      "Contributed through the company's journey from Series A funding to acquisition.",
    ],
    tags: ["Python", "AWS", "DevOps", "Microservices"],
  },
  {
    company: "Ekutur",
    role: "Early-stage Team Member",
    period: "Nov 2018 – Dec 2018",
    location: "Bengaluru",
    accent: "bg-amber-500",
    badge: "Karnataka Startup 300",
    highlights: [
      "Selected into the Karnataka Startup 300 cohort — a state-level program recognizing high-potential ventures.",
      "Contributed to product and engineering decisions in a fast-moving startup environment, shaping early go-to-market and technical direction.",
    ],
    tags: ["Startup", "Product", "Karnataka 300"],
  },
  {
    company: "ZenEducation Pvt Ltd",
    role: "Senior Software Engineer",
    period: "Nov 2017 – Nov 2018",
    location: "Bengaluru",
    accent: "bg-sky-500",
    highlights: [
      "Led a development team of 2 engineers building ERP solutions for schools and an online analytics platform for decision-making based on student results.",
    ],
    tags: ["ERP", "Analytics", "Ed-tech"],
  },
  {
    company: "Reckare Pvt Ltd",
    role: "Cofounder & Director",
    period: "Sept 2016 – Nov 2017",
    location: "Bengaluru",
    accent: "bg-rose-500",
    badge: "Karnataka Startup 300",
    highlights: [
      "Co-founded Reckare to digitize healthcare via shareable medical records linked to Aadhaar fingerprint.",
      "Connected 2 clinics and 5+ individual doctors onto the Reckare ERP solution.",
      "Selected into the Karnataka Startup 300 cohort — state-level recognition of early-stage startups.",
    ],
    tags: ["Healthcare", "ERP", "Founder", "Karnataka 300"],
  },
  {
    company: "Cisco Systems",
    role: "Network Consulting Engineer",
    period: "June 2015 – Sept 2016",
    location: "Bengaluru",
    accent: "bg-slate-500",
    highlights: [
      "Provided software recommendations as part of the network optimization team to enhance client network performance.",
    ],
    tags: ["Networking", "Optimization"],
  },
];

const projects = [
  {
    title: "Webvortex",
    url: "https://webvortex.site/",
    description:
      "Agentic, developer-grade platform that turns natural-language prompts into fully functional web applications in minutes.",
    icon: Sparkles,
    gradient: "from-violet-500 to-fuchsia-500",
    tags: ["Agentic AI", "Codegen"],
  },
  {
    title: "Spectre Analysis",
    url: "https://spectreanalysis.site/",
    description:
      "AI code governance — tracks every line of code (human or AI) across the SDLC. ROI on AI spend, automated policy enforcement, audit-ready reports.",
    icon: ShieldCheck,
    gradient: "from-indigo-500 to-cyan-500",
    tags: ["AI Governance", "DevSecOps"],
  },
  {
    title: "10kGraph",
    url: "https://10kgraph.com/",
    description:
      "Interactive graph & data-visualization platform — build, explore, and reason over richly-linked datasets at scale.",
    icon: Network,
    gradient: "from-emerald-500 to-teal-500",
    tags: ["Graphs", "Data Viz"],
  },
  {
    title: "OrbitalVault",
    url: "https://orbitalvault.site/",
    description:
      "Secure cloud vault — manage sensitive credentials, secrets, and high-trust data with modern access controls and audit trails.",
    icon: Lock,
    gradient: "from-slate-400 to-zinc-500",
    tags: ["Security", "Secrets"],
  },
  {
    title: "AI Call Pro",
    url: "https://preview--ai-agent-connect-now.lovable.app/",
    description:
      "AI calling agent handling tech-screens, loan follow-ups, property inquiries, and credit-card offers — automated conversations and scheduling.",
    icon: PhoneCall,
    gradient: "from-orange-500 to-amber-500",
    tags: ["Voice AI", "Agents"],
  },
  {
    title: "Podcast AI",
    url: "https://podcast-ai-five.vercel.app/",
    description:
      "Real-time, AI-generated podcast — pick the podcaster, the guest, the topic; episodes are dynamically generated on demand.",
    icon: Mic,
    gradient: "from-rose-500 to-pink-500",
    tags: ["Generative Audio", "LLM"],
  },
  {
    title: "Motorg",
    url: null,
    description:
      "LLM guardrail platform — define, enforce, and evaluate generative-AI policies with confidence scoring per evaluation.",
    icon: Gauge,
    gradient: "from-blue-500 to-indigo-500",
    tags: ["Guardrails", "Policy"],
  },
];

const skillGroups = [
  {
    title: "Languages & Data",
    icon: Code2,
    items: ["Python", "Java", "Postgres", "TimescaleDB", "Prometheus"],
  },
  {
    title: "Platforms & Infra",
    icon: Cloud,
    items: [
      "Linux",
      "AWS",
      "Azure",
      "Kubernetes",
      "Docker",
      "Helm",
      "Kafka",
      "RabbitMQ",
      "Celery",
      "Spark",
    ],
  },
  {
    title: "Frameworks & Tools",
    icon: Layers,
    items: ["Django", "REST", "YAML", "Grafana", "SSO", "Microservices"],
  },
  {
    title: "Automation & CI/CD",
    icon: Briefcase,
    items: ["Terraform", "Jenkins", "ArgoCD", "CircleCI", "Airflow"],
  },
  {
    title: "Gen-AI",
    icon: Cpu,
    items: [
      "RAG",
      "Fine-Tuning",
      "AI-Ops",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "MCP",
      "A2A",
      "LLM Agents",
      "Evaluation",
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-indigo-500" />
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
        {children}
      </span>
      <span className="h-px w-10 bg-gradient-to-r from-indigo-500 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-200 selection:text-indigo-900">
      {/* ════════════════════════ HERO + ABOUT + STATS (one unified zone) ════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50">
        {/* Subtle grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:40px_40px] opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        />
        {/* Soft color orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-indigo-400/30 via-violet-400/25 to-fuchsia-400/15 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-gradient-to-tr from-cyan-300/15 to-sky-300/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4 pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_300px] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to engineering collaborations
              </div>

              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Sumit Singh{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Kanwal.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Backend Lead at{" "}
                <span className="font-semibold text-slate-900">Cisco</span>.
                Ten years building systems with{" "}
                <span className="font-semibold text-slate-900">teeth</span> —
                large-scale telco & hyperscaler analytics, AI-native developer
                tooling, and platforms that go from POC to production. Two
                startups, three live AI side-projects, one Cisco Live talk.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-700 hover:shadow-xl"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Experience
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
                >
                  Projects
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                <a
                  href="mailto:sumit.kanwal@gmail.com"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Mail className="h-4 w-4" />
                  sumit.kanwal@gmail.com
                </a>
                <span className="h-3 w-px bg-slate-300" />
                <a
                  href="tel:+919663389360"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Phone className="h-4 w-4" />
                  +91-9663389360
                </a>
                <span className="h-3 w-px bg-slate-300" />
                <a
                  href="https://linkedin.com/in/sumitkanwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin
                </a>
                <span className="h-3 w-px bg-slate-300" />
                <a
                  href="https://github.com/kloudd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Github className="h-4 w-4" />
                  github
                </a>
                <span className="h-3 w-px bg-slate-300" />
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bengaluru
                </span>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-3 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 opacity-30 blur-2xl"
                />
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500"
                />
                <div className="relative h-56 w-56 overflow-hidden rounded-full bg-white p-1 shadow-2xl md:h-72 md:w-72">
                  <Image
                    src={asset("/sumit.jpeg")}
                    alt="Sumit Singh Kanwal"
                    width={400}
                    height={400}
                    priority
                    className="h-full w-full rounded-full object-cover object-[center_25%]"
                  />
                </div>
                <div className="absolute -bottom-2 right-2 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md">
                  <Rocket className="h-3.5 w-3.5 text-indigo-600" />
                  Cisco Live · 2026
                </div>
              </div>
            </div>
          </div>

          {/* Stats ribbon — same hero canvas, no theme break */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur md:mt-16">
            <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="px-4 py-5 text-center md:py-6">
                  <div className="font-display text-2xl font-bold text-slate-900 md:text-3xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-slate-500 md:text-xs">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ EXPERIENCE ════════════════════════ */}
      <section id="experience" className="relative bg-slate-50 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <SectionLabel>Experience</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              A decade across telco, ed-tech, healthcare & AI.
            </h2>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="relative pl-8 md:pl-12">
              {/* Vertical rail */}
              <div
                aria-hidden
                className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-300 via-slate-300 to-transparent md:left-5"
              />

              <div className="space-y-6 md:space-y-8">
                {experience.map((job) => (
                  <div
                    key={`${job.company}-${job.period}`}
                    className="relative"
                  >
                    {/* Rail dot */}
                    <div
                      aria-hidden
                      className={`absolute -left-[1.65rem] top-6 h-3 w-3 rounded-full ring-4 ring-slate-50 md:-left-[1.9rem] ${job.accent}`}
                    />

                    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md md:p-6">
                      <header className="flex flex-wrap items-start justify-between gap-3">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-display text-lg font-bold text-slate-900 md:text-xl">
                            {job.company}
                          </h3>
                          <p className="mt-0.5 text-sm font-medium text-slate-600">
                            {job.role}
                          </p>
                          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
                            <span className="inline-flex items-center gap-1">
                              <Calendar className="h-3.5 w-3.5" />
                              {job.period}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5" />
                              {job.location}
                            </span>
                          </div>
                        </div>
                        {job.badge && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold text-amber-800 ring-1 ring-amber-200">
                            <Award className="h-3 w-3" />
                            {job.badge}
                          </span>
                        )}
                      </header>

                      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-slate-700">
                        {job.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ PROJECTS ════════════════════════ */}
      <section
        id="projects"
        className="relative overflow-hidden bg-slate-950 py-14 text-white md:py-20"
      >
        {/* Soft fade-in from light bg above */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50/10 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.05] [background-size:40px_40px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-600/15 via-violet-600/15 to-fuchsia-600/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
                Projects
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-violet-400 to-transparent" />
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Shipped, not slideware.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-slate-300">
              Independent products built end-to-end — live URLs you can open in
              a new tab and click around.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.url ?? "#"}
                  target={p.url ? "_blank" : undefined}
                  rel={p.url ? "noopener noreferrer" : undefined}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] ${
                    p.url ? "" : "cursor-default"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${p.gradient} opacity-25 blur-3xl transition group-hover:opacity-40`}
                  />
                  <div className="relative">
                    <div className="mb-4 flex items-start justify-between">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg`}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      {p.url && (
                        <ExternalLink className="h-4 w-4 text-slate-500 transition group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </div>
                    <h3 className="font-display text-lg font-bold">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Featured demo */}
          <div className="mx-auto mt-10 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur">
              <div className="overflow-hidden rounded-xl bg-black">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-3 text-xs text-slate-400">
                    webvortex.site — demo
                  </span>
                </div>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.youtube.com/embed/tML0qWLuII8"
                    title="Webvortex Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ SNAPSHOT — Skills + Recognition + Education ════════════════════════ */}
      <section id="snapshot" className="bg-slate-50 py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <SectionLabel>Snapshot</SectionLabel>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Stack, signals & schooling.
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.6fr_1fr]">
            {/* Skills column */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skillGroups.map((g) => {
                const Icon = g.icon;
                return (
                  <div
                    key={g.title}
                    className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-sm font-bold text-slate-900">
                        {g.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
              {/* Gen-AI spans full width on sm+ */}
              <div className="hidden" />
            </div>

            {/* Recognition + Education column */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-indigo-200 bg-gradient-to-br from-white to-indigo-50/60 p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-sm">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Speaking
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-semibold text-slate-900">
                    Cisco Live 2026
                  </span>{" "}
                  · Amsterdam · Technical Speaker.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white shadow-sm">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Certifications
                  </h3>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-violet-500" />
                    Cisco Certified Network Associate · 2015
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-violet-500" />
                    Cisco Certified DevNet Associate · 2020
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-violet-500" />
                    Machine Learning · eCornell · 2021
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-fuchsia-600 text-white shadow-sm">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Published research
                  </h3>
                </div>
                <p className="mt-3 text-sm text-slate-700">
                  <span className="font-medium text-slate-900">
                    SQL injection and its counter measures
                  </span>{" "}
                  — Elsevier Proceedings, Paper ID 1160, 2014.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900">
                    Education
                  </h3>
                </div>
                <div className="mt-3 text-sm text-slate-700">
                  <p className="font-medium text-slate-900">
                    Vellore Institute of Technology
                  </p>
                  <p className="mt-0.5 text-slate-600">
                    B.Tech, Information Technology · 2011–2015 · GPA 8.2/10
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACT — compact CTA strip ════════════════════════ */}
      <section
        id="contact"
        className="relative overflow-hidden bg-slate-50 pb-16 pt-2"
      >
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-2xl md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.07]"
            />
            <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                  Let&apos;s build something.
                </h2>
                <p className="mt-3 max-w-lg text-base text-white/90">
                  Engineering collaborations, founding-team conversations, or
                  just to swap notes on AI tooling and distributed systems.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <a
                  href="mailto:sumit.kanwal@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur transition hover:bg-white/20"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a
                  href="tel:+919663389360"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur transition hover:bg-white/20"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">Call</span>
                </a>
                <a
                  href="https://linkedin.com/in/sumitkanwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur transition hover:bg-white/20"
                >
                  <Linkedin className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/kloudd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur transition hover:bg-white/20"
                >
                  <Github className="h-4 w-4 shrink-0" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="border-t border-slate-200 bg-slate-50 py-8 text-slate-500">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Sumit Singh Kanwal · All rights
            reserved.
          </p>
          <p>Built with Next.js + Tailwind · Deployed via GitHub Pages.</p>
        </div>
      </footer>
    </main>
  );
}
