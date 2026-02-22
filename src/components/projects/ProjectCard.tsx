import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import type { Project } from '../../types/project'
import TypeReveal from '../ui/TypeReveal'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <TypeReveal delay={0.1}>
      <div className="relative bg-surface-raised border border-border overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-border gap-2 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-text-muted/25" />
              <span className="w-2 h-2 rounded-full bg-text-muted/25" />
              <span className="w-2 h-2 rounded-full bg-text-muted/25" />
            </div>
            <span className="text-xs text-text-muted">~/{project.id}</span>
          </div>
          <div className="flex items-center gap-3 min-w-0">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-text-muted hover:text-accent transition-colors inline-flex items-center gap-1 truncate"
              >
                {link.label}
                <ExternalLink size={10} className="shrink-0" />
              </a>
            ))}
          </div>
        </div>

        {/* Filename tabs */}
        {project.images.length > 1 && (
          <div className="flex border-b border-border overflow-x-auto">
            {project.images.map((img, i) => {
              const filename = img.src.split('/').pop() || img.alt
              return (
                <button
                  key={img.src}
                  onClick={() => setActiveTab(i)}
                  className={`px-3 py-1.5 text-[11px] whitespace-nowrap transition-colors ${
                    i === activeTab
                      ? 'text-text-primary bg-surface-overlay border-b border-green/50'
                      : 'text-text-muted hover:text-text-secondary hover:bg-surface-overlay/50'
                  }`}
                >
                  {i === activeTab ? `[${filename}]` : filename}
                </button>
              )
            })}
          </div>
        )}

        {/* Screenshot */}
        <div>
          <img
            src={project.images[activeTab].src}
            alt={project.images[activeTab].alt}
            loading="lazy"
            className="w-full object-cover"
          />
        </div>

        {/* Terminal output */}
        <div className="px-4 py-4 text-xs leading-relaxed border-t border-border">
          <p className="text-text-secondary">{project.description}</p>
          <p className="text-text-muted mt-2">
            {project.tech.map((t) => t.toLowerCase()).join(' · ')}
          </p>
        </div>
      </div>
    </TypeReveal>
  )
}
