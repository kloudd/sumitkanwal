import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sumit Singh Kanwal
              </h1>
              <h2 className="text-xl md:text-2xl mb-6">
                Backend Lead & Software Engineer
              </h2>
              <p className="text-lg mb-8">
                Driving growth through technical leadership and scalable
                solutions
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="bg-white text-blue-700 px-6 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact Me
                </Link>
                <Link
                  href="#experience"
                  className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-medium hover:bg-white/10 transition-colors"
                >
                  View Experience
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/sumit.jpeg?height=400&width=400"
                  alt="Sumit Singh Kanwal"
                  height={400}
                  width={400}
                  className="object-cover object-center md:object-[center_30%]"
                  priority
                  style={{
                    position: "absolute",
                    height: "200%",
                    width: "100%",
                    left: 0,
                    top: "-10px",
                    right: 0,
                    bottom: 0,
                    color: "transparent",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-gray-100 py-4 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
            <a
              href="mailto:sumit.kanwal@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Mail size={16} />
              <span>sumit.kanwal@gmail.com</span>
            </a>
            <a
              href="tel:+919663389360"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Phone size={16} />
              <span>+91-9663389360</span>
            </a>
            <a
              href="https://linkedin.com/in/sumitkanwal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Linkedin size={16} />
              <span>linkedin-sumitkanwal</span>
            </a>
            <a
              href="https://github.com/kloudd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Github size={16} />
              <span>kloudd</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Bengaluru, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              Backend lead with 10 years of experience, driving growth at Cisco.
              Previously contributed to tech-hiring, e-commerce, ed-tech, gen-AI
              and healthcare platforms with proven success in tech leadership
              and automating scalable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Experience
          </h2>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Cisco */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    Cisco Systems
                  </h3>
                  <p className="text-gray-600">
                    Software Engineer III, IV and V
                  </p>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Aug 2020 – Present
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Led teams to develop <strong>network monitoring</strong> and{" "}
                  <strong>data analytics</strong>
                  solutions for <strong>Airtel, Jio 5G</strong> and{" "}
                  <strong>RioTinto</strong> - driving future business
                  expansions.
                </li>
                <li>
                  Developed an <strong>AI-powered pull request reviewer</strong>{" "}
                  for internal
                  <strong>GitHub</strong>, now used by 4 teams across ~45
                  repositories to enhance code quality and accelerate review
                  cycles.
                </li>
                <li>
                  Created a browser-based <strong>MCP</strong> with agents to
                  automate testing and <strong>SRE</strong> workflows, running
                  locally to maintain user sessions and improve developer
                  productivity.
                </li>
                <li>
                  Built a <strong>AI configuration generator</strong> for{" "}
                  <strong>ETL pipelines</strong>, empowering 3 product managers
                  to independently roll out customized use cases for 4
                  enterprise customers.
                </li>
                <li>
                  Led teams to develop multiple <strong>gen-AI</strong> driven
                  SAAS projects and POCs around assistants, agents and policy
                  management.
                </li>
                <li>
                  Implemented <strong>DevOps/ETL</strong> pipelines, reducing
                  build/release times and streamlining business application
                  pipelines to gather insights of network elements using{" "}
                  <strong>Splunk</strong>.
                </li>
                <li>
                  Designed <strong>disaster recovery</strong> plans for multiple
                  customers in order to ensure business continuity during
                  service outages.
                </li>
                <li>
                  Led teams to design and implement{" "}
                  <strong>network inventory, configuration</strong>, and{" "}
                  <strong>syslog analysis</strong> solutions for{" "}
                  <strong>Meta, Microsoft</strong>, and <strong>Google</strong>
                  —enabling identification of vulnerabilities, migration
                  opportunities, and automated remediation guides.
                </li>
                <li>
                  Planned infrastructure, conducted <strong>multi-cloud</strong>{" "}
                  deployments, and implemented operational strategies resulting
                  in measurable reduction in MTTR(Mean time to resolve) for
                  various <strong>5G mobility</strong> clients of Cisco.
                </li>
              </ul>
            </div>

            {/* DoSelect */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">DoSelect</h3>
                  <p className="text-gray-600">Senior Software Engineer</p>
                  <p className="text-sm text-blue-600 mt-1">
                    Part of the team through the company's journey from{" "}
                    <strong>Series A</strong> to <strong>acquisition</strong>.
                  </p>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Dec 2018 – Aug 2020
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Led the product development team of 4 engineers.</li>
                <li>
                  Successfully migrated all <strong>Python2</strong> EndOfLife
                  microservices to
                  <strong>Python3</strong> to ensure business continuity.
                </li>
                <li>
                  Managed the release process and ensure stable systems by
                  promoting effective communication, collaboration, and
                  continuous improvement within <strong>DevOps</strong> and{" "}
                  <strong>SRE</strong> teams.
                </li>
                <li>
                  Implemented security enhancements, managed{" "}
                  <strong>AWS budgeting</strong> and cost planning, and
                  optimized resource allocation for efficient operations.
                </li>
                <li>
                  Contributed to the engineering org during the company's
                  transition from <strong>Series A funding</strong> to{" "}
                  <strong>acquisition</strong>.
                </li>
              </ul>
            </div>

            {/* Ekutur */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">Ekutur</h3>
                  <p className="text-gray-600">
                    Early-stage Team Member / Contributor
                  </p>
                  <span className="inline-block mt-2 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                    Karnataka Startup 300 cohort
                  </span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Nov 2018 – Dec 2018
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Part of <strong>Ekutur</strong>, an early-stage startup
                  selected into the <strong>Karnataka Startup 300</strong>{" "}
                  cohort — a state-level program recognizing high-potential
                  ventures in Karnataka.
                </li>
                <li>
                  Contributed to product and engineering decisions in a
                  fast-moving startup environment, shaping early go-to-market
                  and technical direction.
                </li>
              </ul>
            </div>

            {/* ZenEducation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    ZenEducation Private Ltd.
                  </h3>
                  <p className="text-gray-600">Senior Software Engineer</p>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Nov 2017 – Nov 2018
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Led a development team of 2 engineers in creating{" "}
                  <strong>ERP solutions</strong> for schools and an online
                  analytics platform, involving decision-making based on student
                  results.
                </li>
              </ul>
            </div>

            {/* Reckare */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    Reckare Pvt Ltd
                  </h3>
                  <p className="text-gray-600">Cofounder and Director</p>
                  <span className="inline-block mt-2 bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-1 rounded">
                    Karnataka Startup 300 cohort
                  </span>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  Sept 2016 – Nov 2017
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Co-founded Reckare, defined company guidelines, and formulated
                  product strategy to digitize healthcare through{" "}
                  <strong>shareable medical records</strong> via{" "}
                  <strong>Aadhaar</strong> fingerprint.
                </li>
                <li>
                  Connected 2 clinics and 5+ individual doctors to use Reckare
                  <strong>ERP solution</strong>.
                </li>
                <li>
                  Selected into the <strong>Karnataka Startup 300</strong>{" "}
                  cohort — a state-level recognition of early-stage startups
                  with strong product potential.
                </li>
              </ul>
            </div>

            {/* Cisco NCE */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    Cisco Systems
                  </h3>
                  <p className="text-gray-600">Network Consulting Engineer</p>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  June 2015 – Sept 2016
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Provided software recommendations as part of the{" "}
                  <strong>network optimization</strong> team to enhance client
                  network performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Personal Projects
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Webvortex.site
              </h3>
              <p className="text-gray-700 mb-4">
                Developed <strong>AI-powered</strong> platform that redefines
                how software is created—using an{" "}
                <strong>agentic, developer-grade</strong> approach to turn
                natural language prompts into fully functional web applications
                in minutes.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tML0qWLuII8"
                  title="Webvortex Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <a
                href="https://webvortex.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                https://webvortex.site/
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                AI Call Pro
              </h3>
              <p className="text-gray-700 mb-4">
                Built an <strong>AI-powered calling agent</strong> capable of
                handling various real-world scenarios such as{" "}
                <strong>
                  tech screening calls, loan application follow-ups, property
                  agent inquiries, and credit card offers
                </strong>
                —automating conversations, scheduling, and information gathering
                for businesses.
              </p>
              <a
                href="https://preview--ai-agent-connect-now.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                https://preview--ai-agent-connect-now.lovable.app/
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Podcast AI
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Podcast AI</strong> is a real-time,{" "}
                <strong>AI-generated podcast</strong> platform where you can
                select the podcaster, guest, and specify a topic of your choice.
                The system dynamically generates engaging podcast episodes,
                simulating authentic conversations between chosen personalities
                on any subject—enabling on-demand, personalized audio content
                for listeners.
              </p>
              <a
                href="https://podcast-ai-five.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                https://podcast-ai-five.vercel.app/
              </a>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Motorg</h3>
              <p className="text-gray-700 mb-4">
                <strong>Motorg</strong> is an <strong>LLM guardrail</strong>{" "}
                platform that enables you to define, enforce, and evaluate
                policies for generative AI systems. With Motorg, you can write
                custom guardrail policies—such as content moderation, safety
                checks, or compliance rules—and receive a confidence score from
                the LLM for each policy evaluation. This empowers teams to
                monitor, audit, and control LLM outputs, ensuring responsible
                and reliable AI deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Languages & Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Java",
                  "Postgres",
                  "TimescaleDB",
                  "Prometheus",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    <strong>{skill}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Linux",
                  "AWS",
                  "Azure",
                  "Kubernetes",
                  "Docker",
                  "Helm",
                  "Kafka",
                  "RabbitMQ",
                  "Celery",
                  "SSO",
                  "Microservices",
                  "Spark",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    <strong>{skill}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Frameworks & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Django", "REST", "YAML", "Grafana"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    <strong>{skill}</strong>
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">
                Automation
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Terraform", "Jenkins", "ArgoCD", "CircleCI", "Airflow"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      <strong>{skill}</strong>
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Gen-AI</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "RAG",
                  "Fine-Tuning",
                  "AI-Ops",
                  "Prompt engineering",
                  "langchain",
                  "langgraph",
                  "Streamlit",
                  "MCP",
                  "Evaluation",
                  "LLM agents",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    <strong>{skill}</strong>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-700">
                    Vellore Institute of Technology, Vellore
                  </h3>
                  <p className="text-gray-600">
                    Bachelor of Technology - Information Technology
                  </p>
                </div>
                <div className="text-gray-500 text-sm mt-1">
                  May 2011 – May 2015
                </div>
              </div>
              <p className="mt-2 text-gray-700">GPA: 8.2/10</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Publications & Certifications
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Publication
              </h3>
              <p className="text-gray-700">
                SQL injection and its counter measures, Elsevier Proceedings and
                its Digital Library, Paper ID - 1160, 2014
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Certifications
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Cisco Certified Network Associate, 2015</li>
                <li>Cisco Certified Devnet Associate, 2020</li>
                <li>Machine Learning - ECornell, 2021</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1" size={20} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:sumit.kanwal@gmail.com"
                      className="hover:underline"
                    >
                      sumit.kanwal@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1" size={20} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+919663389360" className="hover:underline">
                      +91-9663389360
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Linkedin className="mt-1" size={20} />
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a
                      href="https://linkedin.com/in/sumitkanwal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin-sumitkanwal
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Github className="mt-1" size={20} />
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a
                      href="https://github.com/kloudd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      kloudd
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white text-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Send a Message
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            &copy; {new Date().getFullYear()} Sumit Singh Kanwal. All rights
            reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
