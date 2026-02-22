import SectionLabel from '../ui/SectionLabel'
import TypeReveal from '../ui/TypeReveal'

const skills = [
  'Symfony', 'PHP', 'Vue.js', 'TypeScript',
  'MySQL', 'MongoDB', 'Docker', 'Python',
  'Node.js', 'Flask', 'REST API', 'Linux',
]

const experience = [
  {
    period: '2022 — present',
    role: 'Full Stack Developer',
    company: 'Recommerce Group',
    description: 'Web applications with PHP Symfony, Vue.js, and TypeScript. MySQL/MongoDB, Docker, full product lifecycle.',
  },
  {
    period: '2018 — 2022',
    role: 'Software Engineer',
    company: 'Philro Control',
    description: 'Turnkey industrial solutions. Admin dashboards for retail inventory with Symfony & Vue.js, field device integration over Modbus TCP.',
  },
  {
    period: '2017 — 2018',
    role: 'Software Engineer (Intern)',
    company: 'Philro Control',
    description: 'Automation solutions for industrial customers. PLC and HMI programming with TIA Portal.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-3xl mx-auto">
      <TypeReveal>
        <SectionLabel>{'// about'}</SectionLabel>
      </TypeReveal>

      {/* Bio */}
      <TypeReveal delay={0.1}>
        <div className="flex items-start gap-5 mb-16">
          <img
            src="/avatar.png"
            alt="Iulian Leon"
            className="w-28 h-28 sm:w-36 sm:h-36 border border-border-bright shrink-0 object-cover"
          />
          <p className="text-sm text-text-secondary leading-relaxed max-w-md pt-1">
            Full-stack developer with 7+ years of experience building web applications
            with Symfony and Vue.js. Based in Paris, France.
          </p>
        </div>
      </TypeReveal>

      {/* Experience */}
      <TypeReveal delay={0.15}>
        <h3 className="text-xs text-text-muted tracking-[0.2em] uppercase mb-6">
          Experience
        </h3>
      </TypeReveal>

      <div className="space-y-6 mb-16">
        {experience.map((exp, i) => (
          <TypeReveal key={exp.period} delay={0.2 + i * 0.08}>
            <div className="grid sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 border-l border-border-bright pl-4">
              <p className="text-xs text-text-muted whitespace-nowrap">{exp.period}</p>
              <div>
                <p className="text-sm">
                  {exp.role}
                  <span className="text-text-muted"> — {exp.company}</span>
                </p>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </TypeReveal>
        ))}
      </div>

      {/* Education */}
      <TypeReveal delay={0.4}>
        <h3 className="text-xs text-text-muted tracking-[0.2em] uppercase mb-6">
          Education
        </h3>
      </TypeReveal>

      <TypeReveal delay={0.45}>
        <div className="border-l border-border-bright pl-4 mb-16">
          <p className="text-xs text-text-muted">2014 — 2018</p>
          <p className="text-sm mt-1">
            Bachelor's in Automatic Control
            <span className="text-text-muted"> — Polytechnic University of Bucharest</span>
          </p>
        </div>
      </TypeReveal>

      {/* Skills */}
      <TypeReveal delay={0.5}>
        <h3 className="text-xs text-text-muted tracking-[0.2em] uppercase mb-6">
          Skills
        </h3>
      </TypeReveal>

      <TypeReveal delay={0.55}>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[11px] px-2.5 py-1 rounded-sm bg-surface-overlay text-text-secondary border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </TypeReveal>
    </section>
  )
}
