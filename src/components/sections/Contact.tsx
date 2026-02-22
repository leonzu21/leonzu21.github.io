import SectionLabel from '../ui/SectionLabel'
import TypeReveal from '../ui/TypeReveal'

const links = [
  {
    label: 'github',
    href: 'https://github.com/leonzu21',
    display: 'github.com/leonzu21',
  },
  {
    label: 'upwork',
    href: 'https://www.upwork.com/freelancers/iulianleon',
    display: 'upwork.com/freelancers/iulianleon',
  },
  {
    label: 'email',
    href: 'mailto:iulian.leon21@gmail.com',
    display: 'iulian.leon21@gmail.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto">
      <TypeReveal>
        <SectionLabel>{'> contact'}</SectionLabel>
      </TypeReveal>

      <div className="mb-24">
        {links.map((link, i) => (
          <TypeReveal key={link.label} delay={0.1 + i * 0.08}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-baseline gap-4 px-3 py-2.5 -mx-3 text-sm hover:bg-surface-overlay/60 transition-colors min-w-0"
            >
              <span className="text-green/70">{'>'}</span>
              <span className="text-text-muted w-20 shrink-0">{link.label}</span>
              <span className="text-text-secondary truncate">{link.display}</span>
            </a>
          </TypeReveal>
        ))}
      </div>

      {/* Terminal footer */}
      <TypeReveal delay={0.4}>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-xs text-text-muted">
            <span className="text-green/70">$</span> echo "Built with React + Tailwind + Motion"
          </p>
          <p className="text-[10px] text-text-muted mt-2">
            &copy; {new Date().getFullYear()} Iulian L.
          </p>
        </div>
      </TypeReveal>
    </section>
  )
}
