interface SectionLabelProps {
  children: string
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs tracking-[0.2em] text-text-muted uppercase mb-8">
      {children}
    </p>
  )
}
