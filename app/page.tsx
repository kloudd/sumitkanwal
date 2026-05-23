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
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${BASE_PATH}${path}`;

const stats = [
  { value: "10+", label: "Years engineering" },
  { value: "6", label: "Companies & ventures" },
  { value: "2", label: "Startups co-founded" },
  { value: "1", label: "Cisco Live talk · 2026" },
];

const experience = [
  {
    company: "Cisco Systems",
    role: "Software Engineer III → IV → V",
    period: "Aug 2020 – Present",
    location: "Bengaluru",
    accent: "from-indigo-500 to-violet-500",
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
    accent: "from-emerald-500 to-teal-500",
    badge: "Series A → Acquisition",
    highlights: [
      "Led product development team of 4 engineers.",
      "Migrated Python2 EOL microservices to Python3, ensuring business continuity.",
      "Owned release management; promoted effective collaboration across DevOps & SRE.",
      "Implemented security enhancements; managed AWS budgeting and resource optimization.",
      "Contributed to the engineering org through the company's journey from Series A funding to acquisition.",
    ],
    tags: ["Python", "AWS", "DevOps", "Microservices"],
  },
  {
    company: "Ekutur",
    role: "Early-stage Team Member",
    period: "Nov 2018 – Dec 2018",
    location: "Bengaluru",
    accent: "from-amber-500 to-orange-500",
    badge: "Karnataka Startup 300",
    highlights: [
      "Part of Ekutur, an early-stage startup selected into the Karnataka Startup 300 cohort — a state-level program recognizing high-potential ventures.",
      "Contributed to product and engineering decisions in a fast-moving startup environment, shaping early go-to-market and technical direction.",
    ],
    tags: ["Startup", "Product", "Karnataka 300"],
  },
  {
    company: "ZenEducation Pvt Ltd",
    role: "Senior Software Engineer",
    period: "Nov 2017 – Nov 2018",
    location: "Bengaluru",
    accent: "from-sky-500 to-blue-500",
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
    accent: "from-rose-500 to-pink-500",
    badge: "Karnataka Startup 300",
    highlights: [
      "Co-founded Reckare to digitize healthcare via shareable medical records linked to Aadhaar fingerprint.",
      "Connected 2 clinics and 5+ individual doctors onto the Reckare ERP solution.",
      "Selected into the Karnataka Startup 300 cohort — state-level recognition of early-stage startups with strong product potential.",
    ],
    tags: ["Healthcare", "ERP", "Founder", "Karnataka 300"],
  },
  {
    company: "Cisco Systems",
    role: "Network Consulting Engineer",
    period: "June 2015 – Sept 2016",
    location: "Bengaluru",
    accent: "from-slate-500 to-slate-700",
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
      "AI-powered platform that redefines how software is created — an agentic, developer-grade approach to turn natural language prompts into fully functional web applications in minutes.",
    icon: Sparkles,
    gradient: "from-violet-600 via-fuchsia-600 to-pink-500",
    tags: ["Agentic AI", "Codegen", "Full-stack"],
    video: "https://www.youtube.com/embed/tML0qWLuII8",
  },
  {
    title: "Spectre Analysis",
    url: "https://spectreanalysis.site/",
    description:
      "AI code governance platform that tracks every line of code — human or AI written — across the SDLC. Real ROI on AI tool spend, automated security policy enforcement, and audit-ready compliance reports in one dashboard.",
    icon: ShieldCheck,
    gradient: "from-indigo-600 via-blue-600 to-cyan-500",
    tags: ["AI Governance", "Compliance", "DevSecOps", "ROI"],
  },
  {
    title: "10kGraph",
    url: "https://10kgraph.com/",
    description:
      "Interactive graph and data-visualization platform — build, explore, and reason over richly-linked datasets at scale.",
    icon: Network,
    gradient: "from-emerald-600 via-teal-600 to-cyan-500",
    tags: ["Graphs", "Data Viz", "Analytics"],
  },
  {
    title: "OrbitalVault",
    url: "https://orbitalvault.site/",
    description:
      "Secure cloud vault — manage sensitive credentials, secrets, and high-trust data with modern access controls and audit trails.",
    icon: Lock,
    gradient: "from-slate-700 via-slate-900 to-zinc-700",
    tags: ["Security", "Secrets", "Cloud"],
  },
  {
    title: "AI Call Pro",
    url: "https://preview--ai-agent-connect-now.lovable.app/",
    description:
      "AI-powered calling agent handling real-world scenarios — tech-screening calls, loan follow-ups, property inquiries, and credit-card offers. Automated conversations, scheduling, and information gathering.",
    icon: PhoneCall,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    tags: ["Voice AI", "Agents", "Automation"],
  },
  {
    title: "Podcast AI",
    url: "https://podcast-ai-five.vercel.app/",
    description:
      "Real-time, AI-generated podcast platform — pick the podcaster, the guest, and a topic; the system dynamically generates engaging episodes simulating authentic conversations on demand.",
    icon: Mic,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    tags: ["Generative Audio", "LLM", "Real-time"],
  },
  {
    title: "Motorg",
    url: null,
    description:
      "LLM guardrail platform to define, enforce, and evaluate policies for generative AI — content moderation, safety checks, and compliance rules with confidence scoring per evaluation.",
    icon: Gauge,
    gradient: "from-blue-600 via-indigo-600 to-violet-600",
    tags: ["Guardrails", "Safety", "Policy Engine"],
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

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-200 selection:text-indigo-900">
      {/* ════════════════════════ HERO ════════════════════════ */}
      <section className="relative overflow-hidden bg-white">
        {/* Subtle grid pattern */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
        />
        {/* Soft color orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-gradient-to-br from-indigo-400/30 via-violet-400/30 to-fuchsia-400/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-300/20 via-sky-300/20 to-blue-300/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1fr_320px] lg:gap-16">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to engineering collaborations
              </div>

              <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Sumit Singh
                <br />
                <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Kanwal.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Backend Lead at{" "}
                <span className="font-semibold text-slate-900">Cisco</span>.{" "}
                <span className="font-semibold text-slate-900">10 years</span>{" "}
                shipping distributed systems and AI-native platforms for telco,
                hyperscaler, and enterprise customers. Founder-mindset.
                Speaker. Builder.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
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

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                <a
                  href="mailto:sumit.kanwal@gmail.com"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Mail className="h-4 w-4" />
                  sumit.kanwal@gmail.com
                </a>
                <a
                  href="tel:+919663389360"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Phone className="h-4 w-4" />
                  +91-9663389360
                </a>
                <a
                  href="https://linkedin.com/in/sumitkanwal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Linkedin className="h-4 w-4" />
                  linkedin
                </a>
                <a
                  href="https://github.com/kloudd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-indigo-600"
                >
                  <Github className="h-4 w-4" />
                  github
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bengaluru, India
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
                <div className="relative h-64 w-64 overflow-hidden rounded-full bg-white p-1 shadow-2xl md:h-80 md:w-80">
                  <Image
                    src={asset("/sumit.jpeg")}
                    alt="Sumit Singh Kanwal"
                    width={400}
                    height={400}
                    priority
                    className="h-full w-full rounded-full object-cover object-[center_25%]"
                  />
                </div>
                <div className="absolute -bottom-2 right-4 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-md md:right-8">
                  <Rocket className="h-3.5 w-3.5 text-indigo-600" />
                  Cisco Live · Amsterdam 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ STATS STRIP ════════════════════════ */}
      <section className="border-y border-slate-200 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 divide-x divide-slate-200 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-8 text-center md:py-10">
                <div className="font-display text-3xl font-bold text-slate-900 md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-slate-500 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════ ABOUT ════════════════════════ */}
      <section id="about" className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-indigo-600" />
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                About
              </span>
            </div>
            <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
              <Quote
                aria-hidden
                className="absolute -top-4 left-8 h-10 w-10 rounded-full bg-indigo-600 p-2 text-white shadow-lg"
              />
              <p className="text-xl leading-relaxed text-slate-700 md:text-2xl">
                I am a backend engineer who likes building systems with{" "}
                <span className="font-semibold text-slate-900">teeth</span> —
                large-scale telco/hyperscaler analytics, AI-native developer
                tooling, and the kind of platforms that go from POC to
                production. I have led teams at{" "}
                <span className="font-semibold text-slate-900">Cisco</span>,
                co-founded two startups, and continue to ship side-projects
                across agentic AI, voice agents, code governance, and graph
                tooling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ EXPERIENCE ════════════════════════ */}
      <section
        id="experience"
        className="relative bg-gradient-to-b from-slate-50 to-white py-20 md:py-28"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-indigo-600" />
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Experience
              </span>
              <span className="h-px w-12 bg-indigo-600" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              A decade across telco, ed-tech,
              <br />
              healthcare, and AI.
            </h2>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="relative">
              {/* timeline line */}
              <div
                aria-hidden
                className="absolute left-4 top-2 bottom-2 hidden w-px bg-gradient-to-b from-indigo-300 via-slate-200 to-transparent md:block md:left-1/2 md:-translate-x-px"
              />
              <div className="space-y-8 md:space-y-12">
                {experience.map((job, idx) => (
                  <div
                    key={`${job.company}-${job.period}`}
                    className="relative md:grid md:grid-cols-2 md:gap-10"
                  >
                    {/* timeline dot */}
                    <div
                      aria-hidden
                      className="absolute left-4 top-6 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full bg-white ring-4 ring-indigo-500 md:left-1/2 md:block"
                    />
                    <div
                      className={`${
                        idx % 2 === 0 ? "md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"
                      } group`}
                    >
                      <article className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg md:p-7">
                        <div
                          className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${job.accent}`}
                        />
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-display text-lg font-bold text-slate-900 md:text-xl">
                              {job.company}
                            </h3>
                            <p className="mt-0.5 text-sm font-medium text-slate-600">
                              {job.role}
                            </p>
                          </div>
                          <Building2 className="h-5 w-5 shrink-0 text-slate-400" />
                        </div>
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {job.period}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                          {job.badge && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                              <Award className="h-3 w-3" />
                              {job.badge}
                            </span>
                          )}
                        </div>
                        <ul
                          className={`mt-4 space-y-2 text-sm leading-relaxed text-slate-700 ${
                            idx % 2 === 0 ? "md:text-right" : ""
                          }`}
                        >
                          {job.highlights.map((h, i) => (
                            <li
                              key={i}
                              className={`flex gap-2 ${
                                idx % 2 === 0 ? "md:flex-row-reverse" : ""
                              }`}
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
                              <span className="text-left">{h}</span>
                            </li>
                          ))}
                        </ul>
                        <div
                          className={`mt-4 flex flex-wrap gap-1.5 ${
                            idx % 2 === 0 ? "md:justify-end" : ""
                          }`}
                        >
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
        className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.04] [background-size:48px_48px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-fuchsia-600/10 blur-3xl"
        />

        <div className="container relative mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-violet-400" />
              <span className="text-sm font-semibold uppercase tracking-wider text-violet-300">
                Projects
              </span>
              <span className="h-px w-12 bg-violet-400" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Shipped, not slideware.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base text-slate-300 md:text-lg">
              Independent products and tools — live URLs you can open in a new
              tab and click around.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.title}
                  href={p.url ?? "#"}
                  target={p.url ? "_blank" : undefined}
                  rel={p.url ? "noopener noreferrer" : undefined}
                  className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] ${
                    p.url ? "" : "cursor-default"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.gradient} opacity-30 blur-3xl transition group-hover:opacity-50`}
                  />
                  <div className="relative">
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${p.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-display text-xl font-bold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.url && (
                      <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition group-hover:text-white">
                        Visit live
                        <ExternalLink className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>

          {/* Featured demo */}
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5 backdrop-blur">
              <div className="overflow-hidden rounded-xl bg-black">
                <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/10">
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

      {/* ════════════════════════ SKILLS ════════════════════════ */}
      <section id="skills" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-indigo-600" />
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Skills
              </span>
              <span className="h-px w-12 bg-indigo-600" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              The stack I reach for.
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900">
                      {g.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════ RECOGNITION ════════════════════════ */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-indigo-600" />
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Recognition
              </span>
              <span className="h-px w-12 bg-indigo-600" />
            </div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Speaking, papers, and certs.
            </h2>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-sm">
              <Rocket className="h-7 w-7 text-indigo-600" />
              <h3 className="mt-4 font-display text-lg font-bold">
                Cisco Live — Amsterdam 2026
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Technical speaker.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Award className="h-7 w-7 text-violet-600" />
              <h3 className="mt-4 font-display text-lg font-bold">
                Certifications
              </h3>
              <ul className="mt-2 space-y-1 text-sm text-slate-600">
                <li>Cisco Certified Network Associate · 2015</li>
                <li>Cisco Certified DevNet Associate · 2020</li>
                <li>Machine Learning · eCornell · 2021</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Quote className="h-7 w-7 text-fuchsia-600" />
              <h3 className="mt-4 font-display text-lg font-bold">
                Published research
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium text-slate-900">
                  SQL injection and its counter measures
                </span>{" "}
                — Elsevier Proceedings, Paper ID 1160, 2014.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ EDUCATION ════════════════════════ */}
      <section id="education" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-12 bg-indigo-600" />
              <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Education
              </span>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-md">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-xl font-bold text-slate-900">
                        Vellore Institute of Technology
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">
                        B.Tech, Information Technology
                      </p>
                    </div>
                    <span className="text-sm text-slate-500">
                      May 2011 – May 2015
                    </span>
                  </div>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-800">
                    GPA · 8.2 / 10
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ CONTACT ════════════════════════ */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 py-20 text-white md:py-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-grid-slate opacity-[0.06]"
        />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
              Reach out for engineering collaborations, founding-team
              conversations, or just to swap notes on AI tooling and
              distributed systems.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
              <a
                href="mailto:sumit.kanwal@gmail.com"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
              >
                <Mail className="h-5 w-5" />
                <span className="text-sm">
                  <span className="block text-xs text-white/70">Email</span>
                  <span className="block font-medium">
                    sumit.kanwal@gmail.com
                  </span>
                </span>
              </a>
              <a
                href="tel:+919663389360"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm">
                  <span className="block text-xs text-white/70">Phone</span>
                  <span className="block font-medium">+91-9663389360</span>
                </span>
              </a>
              <a
                href="https://linkedin.com/in/sumitkanwal"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
              >
                <Linkedin className="h-5 w-5" />
                <span className="text-sm">
                  <span className="block text-xs text-white/70">LinkedIn</span>
                  <span className="block font-medium">/in/sumitkanwal</span>
                </span>
              </a>
              <a
                href="https://github.com/kloudd"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur transition hover:bg-white/20"
              >
                <Github className="h-5 w-5" />
                <span className="text-sm">
                  <span className="block text-xs text-white/70">GitHub</span>
                  <span className="block font-medium">@kloudd</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════ FOOTER ════════════════════════ */}
      <footer className="bg-slate-950 py-10 text-slate-400">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Sumit Singh Kanwal. All rights
            reserved.
          </p>
          <p className="text-xs">
            Built with Next.js + Tailwind. Deployed via GitHub Pages.
          </p>
        </div>
      </footer>
    </main>
  );
}
