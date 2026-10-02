import React from "react";
import { FaBrain, FaCode, FaServer } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const capabilityLanes = [
  {
    number: "01",
    title: "Frontend engineering",
    description: "Responsive, user-centered interfaces built to feel clear and effortless.",
    direction: "stack-rail-forward",
    tools: [
      { label: "HTML5", Icon: SiHtml5 },
      { label: "CSS3", Icon: SiCss3 },
      { label: "JavaScript", Icon: SiJavascript },
      { label: "React", Icon: SiReact },
      { label: "TypeScript", Icon: SiTypescript },
      { label: "Next.js", Icon: SiNextdotjs },
      { label: "Tailwind CSS", Icon: SiTailwindcss },
      { label: "Bootstrap", Icon: SiBootstrap },
    ],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Server-side logic and API connections that power complete product experiences.",
    direction: "stack-rail-reverse",
    tools: [
      { label: "Node.js", Icon: SiNodedotjs },
      { label: "REST APIs", Icon: FaServer },
      { label: "Git", Icon: SiGit },
      { label: "GitHub", Icon: SiGithub },
    ],
  },
  {
    number: "03",
    title: "AI integrations",
    description: "AI services connected to practical workflows and the needs of different industries.",
    direction: "stack-rail-forward stack-rail-slower",
    tools: [
      { label: "AI APIs", Icon: FaBrain },
      { label: "LLM integrations", Icon: FaCode },
      { label: "Product workflows", Icon: SiReact },
    ],
  },
];

function StackRail({ tools, direction, title }) {
  const renderTools = (copy = false) => tools.map(({ label, Icon }) => (
    <span
      className="stack-chip"
      role="listitem"
      aria-hidden={copy || undefined}
      key={`${copy ? "copy" : "tool"}-${label}`}
    >
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </span>
  ));

  return (
    <div className="stack-rail" role="list" aria-label={`${title} technologies`}>
      <div className={`stack-rail-track ${direction}`}>
        {renderTools()}
        {renderTools(true)}
      </div>
    </div>
  );
}

function StackMotion() {
  return (
    <section className="stack" id="stack">
      <div className="stack-inner">
        <header className="stack-heading" data-reveal>
          <p className="stack-kicker">Built across the stack</p>
          <h2 className="stack-title">From first pixel to <span>intelligent workflow.</span></h2>
          <p className="stack-description">
            I work across the full product surface: shaping the interface, building the systems behind it, and integrating AI where it makes the experience more useful.
          </p>
        </header>

        <div className="stack-lanes">
          {capabilityLanes.map((lane) => (
            <article className="stack-lane" data-reveal key={lane.number}>
              <span className="stack-lane-number">{lane.number}</span>
              <div className="stack-lane-copy">
                <h3>{lane.title}</h3>
                <p>{lane.description}</p>
              </div>
              <StackRail tools={lane.tools} direction={lane.direction} title={lane.title} />
            </article>
          ))}
        </div>

        <p className="stack-footnote">Different industries. Different challenges. Software built around the work.</p>
      </div>
    </section>
  );
}

export default StackMotion;