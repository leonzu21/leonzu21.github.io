import SectionLabel from '../ui/SectionLabel'
import TypeReveal from '../ui/TypeReveal'
import ProjectCard from '../projects/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-3xl mx-auto">
      <TypeReveal>
        <SectionLabel>{'// projects'}</SectionLabel>
      </TypeReveal>

      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
