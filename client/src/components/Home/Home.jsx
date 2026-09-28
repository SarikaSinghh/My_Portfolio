import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Terminal,
  Code2,
  Server,
  Cloud,
  Database,
  Layers3,
  GitBranch,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Home.css";


const projects = [
  {
    number: "01",
    featured: true,
    title: "Deha Veda",
    category: "FULL-STACK PLATFORM",
    description:
      "A full-stack wellness platform connecting an interactive React frontend with structured FastAPI backend services and authenticated user workflows.",
    stack: ["React", "FastAPI", "REST API", "Authentication"],
    architecture: "React → REST API → FastAPI",
    github: "https://github.com/SarikaSinghh/deha-veda",
    live: null,
    accent: "violet",
  },
  {
    number: "02",
    featured: false,
    title: "SensAI",
    category: "AI-POWERED APPLICATION",
    description:
      "A modern web application integrating intelligent functionality into a structured product workflow with a focus on usability and application architecture.",
    stack: ["React", "JavaScript", "AI", "Web"],
    architecture: "Frontend → Application Logic → AI Services",
    github: "https://github.com/SarikaSinghh/sensai-project",
    live: null,
    accent: "cyan",
  },
  {
    number: "03",
    featured: false,
    title: "StudyMate",
    category: "HACKATHON PROJECT",
    description:
      "A student-focused web platform designed to centralize academic workflows through an interactive and responsive application experience.",
    stack: ["React", "JavaScript", "Web", "UI/UX"],
    architecture: "Frontend → Application Workflow",
    github: "https://github.com/SarikaSinghh/StudyMate-Hackathon",
    live: null,
    accent: "blue",
  },
];


const stackGroups = [
  {
    title: "FRONTEND",
    icon: <Code2 size={18} />,
    technologies: [
      { name: "React", detail: "UI architecture" },
      { name: "JavaScript", detail: "Application logic" },
      { name: "HTML / CSS", detail: "Responsive interfaces" },
    ],
  },
  {
    title: "BACKEND",
    icon: <Server size={18} />,
    technologies: [
      { name: "Node.js", detail: "Server-side runtime" },
      { name: "FastAPI", detail: "Python REST APIs" },
      { name: "Express", detail: "Backend services" },
    ],
  },
  {
    title: "LANGUAGES",
    icon: <Terminal size={18} />,
    technologies: [
      { name: "Java", detail: "DSA & development" },
      { name: "Python", detail: "Backend & applications" },
      { name: "SQL", detail: "Data querying" },
    ],
  },
  {
    title: "CLOUD & TOOLS",
    icon: <Cloud size={18} />,
    technologies: [
      { name: "AWS", detail: "Cloud ecosystem" },
      { name: "Git / GitHub", detail: "Version control" },
      { name: "REST APIs", detail: "System integration" },
    ],
  },
];


const dsaSteps = [
  {
    number: "01",
    title: "UNDERSTAND",
    description: "Identify constraints, inputs, outputs, and edge cases.",
  },
  {
    number: "02",
    title: "DRY RUN",
    description: "Walk through the logic before writing the implementation.",
  },
  {
    number: "03",
    title: "BRUTE FORCE",
    description: "Establish a correct baseline before optimizing.",
  },
  {
    number: "04",
    title: "ANALYZE",
    description: "Evaluate time and space complexity.",
  },
  {
    number: "05",
    title: "OPTIMIZE",
    description: "Improve the approach using the right data structures.",
  },
  {
    number: "06",
    title: "CLEAN CODE",
    description: "Produce readable, maintainable, production-minded code.",
  },
];


const engineeringPrinciples = [
  "Understand the requirement before choosing the implementation.",
  "Separate concerns between UI, API, business logic, and data.",
  "Prefer simple solutions before unnecessary complexity.",
  "Measure before claiming performance improvements.",
  "Write code that another engineer can understand and maintain.",
];


function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <div className="home-page">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}
      <main>
        <section className="hero-section" id="home">
          <div className="hero-grid" />
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-container">
            <div className="hero-content">

              <div className="system-label">
                <span className="status-dot" />
                <span>SYSTEM STATUS: AVAILABLE</span>
              </div>

              <div className="hero-index">
                <span>01</span>
                <span className="index-line" />
                <span>FULL-STACK DEVELOPER</span>
              </div>

              <h1 className="hero-title">
                <span>I BUILD.</span>
                <span>I LEARN.</span>
                <span className="hero-title-accent">I SHIP.</span>
              </h1>

              <p className="hero-description">
                I'm <strong>Sarika Singh</strong>, a Full-Stack Developer
                focused on building practical web applications across the
                frontend, backend, APIs, and cloud ecosystem.
              </p>

              <div className="hero-stack">
                <span>MERN</span>
                <span className="stack-separator">•</span>
                <span>JAVA</span>
                <span className="stack-separator">•</span>
                <span>FASTAPI</span>
                <span className="stack-separator">•</span>
                <span>AWS</span>
              </div>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={() => scrollToSection("work")}
                >
                  <span>VIEW MY WORK</span>
                  <ArrowUpRight size={18} />
                </button>

                <a
                  className="secondary-button"
                  href="https://github.com/SarikaSinghh"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} />
                  <span>GITHUB</span>
                </a>
              </div>

              <div className="hero-location">
                <MapPin size={15} />
                <span>HYDERABAD, INDIA</span>
              </div>
            </div>


            {/* SYSTEM PANEL */}
            <div className="system-panel">
              <div className="panel-header">
                <div className="panel-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="panel-title">sarika-os / terminal</span>

                <Terminal size={15} />
              </div>

              <div className="terminal-content">
                <div className="terminal-line">
                  <span className="terminal-green">sarika@buildlab</span>
                  <span>:</span>
                  <span className="terminal-blue">~</span>
                  <span>$</span>
                  <span className="terminal-command">whoami</span>
                </div>

                <div className="terminal-output">
                  Full-Stack Developer
                </div>

                <div className="terminal-line">
                  <span className="terminal-green">sarika@buildlab</span>
                  <span>:</span>
                  <span className="terminal-blue">~</span>
                  <span>$</span>
                  <span className="terminal-command">stack --current</span>
                </div>

                <div className="terminal-output terminal-stack-output">
                  <span>React</span>
                  <span>Java</span>
                  <span>FastAPI</span>
                  <span>AWS</span>
                </div>

                <div className="terminal-line">
                  <span className="terminal-green">sarika@buildlab</span>
                  <span>:</span>
                  <span className="terminal-blue">~</span>
                  <span>$</span>
                  <span className="terminal-command">
                    status --engineering
                  </span>
                </div>

                <div className="terminal-status">
                  <CheckCircle2 size={15} />
                  <span>READY TO BUILD</span>
                </div>

                <div className="terminal-cursor">
                  <span className="cursor-block" />
                </div>
              </div>

              <div className="panel-footer">
                <span>BUILD LAB</span>
                <span>v1.0.0</span>
              </div>
            </div>
          </div>

          <button
            className="hero-scroll"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about section"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown size={16} />
          </button>
        </section>


        {/* =========================================================
            PROOF STRIP
        ========================================================= */}
        <section className="proof-section">
          <div className="section-container proof-grid">

            <div className="proof-item">
              <span className="proof-value">9.17</span>
              <span className="proof-label">B.TECH IT CGPA</span>
            </div>

            <div className="proof-divider" />

            <div className="proof-item">
              <span className="proof-value">MERN</span>
              <span className="proof-label">FULL-STACK</span>
            </div>

            <div className="proof-divider" />

            <div className="proof-item">
              <span className="proof-value">JAVA</span>
              <span className="proof-label">DSA & DEVELOPMENT</span>
            </div>

            <div className="proof-divider" />

            <div className="proof-item">
              <span className="proof-value">AWS</span>
              <span className="proof-label">CLOUD ECOSYSTEM</span>
            </div>

          </div>
        </section>


        {/* =========================================================
            ABOUT
        ========================================================= */}
        <section className="about-section section-dark" id="about">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-number">01</div>

              <div>
                <span className="eyebrow">ABOUT / ENGINEERING</span>

                <h2>
                  I build systems,
                  <br />
                  <span>not just screens.</span>
                </h2>
              </div>
            </div>


            <div className="about-grid">

              <div className="about-main">
                <p className="about-lead">
                  I'm a Full-Stack Developer focused on building reliable,
                  user-oriented web applications across the frontend and
                  backend.
                </p>

                <p>
                  I work primarily with React, Node.js, FastAPI, Java, and
                  modern cloud technologies, with a strong foundation in
                  data structures and problem-solving.
                </p>

                <p>
                  My approach is straightforward: understand the requirement,
                  break the problem into manageable systems, implement with
                  clean boundaries, and improve the solution based on evidence.
                </p>
              </div>


              <div className="about-terminal">
                <div className="mini-terminal-header">
                  <span>engineering-principles.txt</span>
                  <Code2 size={15} />
                </div>

                <div className="principles-list">
                  {engineeringPrinciples.map((principle, index) => (
                    <div className="principle-item" key={principle}>
                      <span className="principle-number">
                        0{index + 1}
                      </span>

                      <span>{principle}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            FEATURED WORK
        ========================================================= */}
        <section className="work-section section-light" id="work">
          <div className="section-container">

            <div className="section-heading work-heading">
              <div className="section-number">02</div>

              <div>
                <span className="eyebrow">SELECTED WORK</span>

                <h2>
                  Things I've
                  <br />
                  <span>built.</span>
                </h2>
              </div>

              <p className="section-intro">
                A focused selection of applications demonstrating frontend,
                backend, API integration, and product-oriented development.
              </p>
            </div>


            <div className="projects-grid">

              {projects.map((project) => (
                <article
                  className={`project-card ${
                    project.featured ? "project-featured" : ""
                  }`}
                  key={project.title}
                >

                  <div className="project-card-top">
                    <div className="project-number">
                      {project.number}
                    </div>

                    <span className={`project-accent ${project.accent}`} />
                  </div>


                  <div className="project-content">

                    <div className="project-category">
                      {project.category}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>


                    <div className="project-architecture">
                      <span>ARCHITECTURE</span>

                      <code>{project.architecture}</code>
                    </div>


                    <div className="project-stack">
                      {project.stack.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>


                    <div className="project-actions">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <Github size={16} />
                        <span>SOURCE</span>
                        <ArrowUpRight size={15} />
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="project-link project-live"
                        >
                          <ExternalLink size={16} />
                          <span>LIVE</span>
                        </a>
                      )}

                    </div>

                  </div>
                </article>
              ))}

            </div>
          </div>
        </section>


        {/* =========================================================
            ENGINEERING WORKFLOW
        ========================================================= */}
        <section className="workflow-section section-dark" id="approach">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-number">03</div>

              <div>
                <span className="eyebrow">PROBLEM SOLVING</span>

                <h2>
                  How I
                  <br />
                  <span>think.</span>
                </h2>
              </div>
            </div>


            <div className="workflow-intro">
              <p>
                Good engineering isn't just about getting code to run.
                It's about understanding the problem, validating the approach,
                and making deliberate trade-offs.
              </p>
            </div>


            <div className="workflow-grid">
              {dsaSteps.map((step, index) => (
                <React.Fragment key={step.number}>

                  <div className="workflow-step">

                    <span className="workflow-number">
                      {step.number}
                    </span>

                    <div className="workflow-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>

                  </div>

                  {index < dsaSteps.length - 1 && (
                    <div className="workflow-arrow">
                      →
                    </div>
                  )}

                </React.Fragment>
              ))}
            </div>

          </div>
        </section>


        {/* =========================================================
            STACK
        ========================================================= */}
        <section className="stack-section section-light" id="stack">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-number">04</div>

              <div>
                <span className="eyebrow">TECHNICAL STACK</span>

                <h2>
                  Tools I use
                  <br />
                  <span>to build.</span>
                </h2>
              </div>
            </div>


            <div className="stack-grid">

              {stackGroups.map((group) => (
                <div className="stack-group" key={group.title}>

                  <div className="stack-group-header">
                    <span className="stack-icon">
                      {group.icon}
                    </span>

                    <span>{group.title}</span>
                  </div>


                  <div className="stack-items">
                    {group.technologies.map((technology) => (
                      <div
                        className="stack-item"
                        key={technology.name}
                      >
                        <span className="stack-item-name">
                          {technology.name}
                        </span>

                        <span className="stack-item-detail">
                          {technology.detail}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* =========================================================
            BUILD JOURNEY
        ========================================================= */}
        <section className="journey-section section-dark" id="journey">
          <div className="section-container">

            <div className="section-heading">
              <div className="section-number">05</div>

              <div>
                <span className="eyebrow">BUILD JOURNEY</span>

                <h2>
                  From foundations
                  <br />
                  <span>to shipping.</span>
                </h2>
              </div>
            </div>


            <div className="journey-timeline">

              <div className="journey-line" />

              <div className="journey-item">

                <div className="journey-marker">
                  <span>01</span>
                </div>

                <div className="journey-content">
                  <span className="journey-label">FOUNDATION</span>

                  <h3>B.Tech — Information Technology</h3>

                  <p>
                    Built a foundation across programming, computer science,
                    software development, and problem-solving.
                  </p>

                  <span className="journey-meta">
                    CGPA 9.17
                  </span>
                </div>

              </div>


              <div className="journey-item">

                <div className="journey-marker">
                  <span>02</span>
                </div>

                <div className="journey-content">
                  <span className="journey-label">APPLICATION</span>

                  <h3>Full-Stack Projects</h3>

                  <p>
                    Applied frontend, backend, API, authentication, and
                    application architecture concepts to complete projects.
                  </p>

                  <span className="journey-meta">
                    MERN • FastAPI • REST APIs
                  </span>
                </div>

              </div>


              <div className="journey-item">

                <div className="journey-marker">
                  <span>03</span>
                </div>

                <div className="journey-content">
                  <span className="journey-label">ENGINEERING</span>

                  <h3>Problem Solving & DSA</h3>

                  <p>
                    Strengthening algorithmic thinking through structured
                    problem decomposition, complexity analysis, and Java.
                  </p>

                  <span className="journey-meta">
                    JAVA • DSA • COMPLEXITY
                  </span>
                </div>

              </div>


              <div className="journey-item">

                <div className="journey-marker active">
                  <span>04</span>
                </div>

                <div className="journey-content">
                  <span className="journey-label">NEXT BUILD</span>

                  <h3>Software Engineering</h3>

                  <p>
                    Building production-oriented experience through real
                    applications, deployment, collaboration, and continuous
                    technical improvement.
                  </p>

                  <span className="journey-meta">
                    READY TO SHIP
                  </span>
                </div>

              </div>

            </div>
          </div>
        </section>


        {/* =========================================================
            CONTACT
        ========================================================= */}
        <section className="contact-section section-light" id="contact">
          <div className="section-container">

            <div className="contact-card">

              <div className="contact-grid-pattern" />

              <div className="contact-content">

                <span className="eyebrow">
                  06 / CONTACT
                </span>

                <h2>
                  Let's build
                  <br />
                  <span>something useful.</span>
                </h2>

                <p>
                  I'm open to software engineering and full-stack development
                  opportunities where I can contribute to real products and
                  continue growing as an engineer.
                </p>


                <div className="contact-actions">

                  <a
                    href="mailto:sarikasingh0846@gmail.com"
                    className="contact-primary"
                  >
                    <Mail size={18} />
                    <span>GET IN TOUCH</span>
                    <ArrowUpRight size={17} />
                  </a>

                  <a
                    href="https://github.com/SarikaSinghh"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-secondary"
                  >
                    <Github size={18} />
                    <span>GITHUB</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/sarikasingh2"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-secondary"
                  >
                    <Linkedin size={18} />
                    <span>LINKEDIN</span>
                  </a>

                </div>

              </div>


              <div className="contact-status">

                <div className="contact-status-header">
                  <span className="status-dot" />
                  <span>AVAILABILITY</span>
                </div>

                <div className="contact-status-main">
                  <strong>OPEN TO OPPORTUNITIES</strong>

                  <span>
                    Software Engineering
                    <br />
                    Full-Stack Development
                  </span>
                </div>

                <div className="contact-status-footer">
                  <span>HYDERABAD / REMOTE</span>
                  <span>INDIA</span>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>


      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
}

export default Home;