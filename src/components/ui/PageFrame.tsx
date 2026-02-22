import type { ReactNode } from 'react'

interface PageFrameProps {
  children: ReactNode
}

export default function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="relative min-h-screen">
      {/* Side + top borders (full height) */}
      <div className="pointer-events-none fixed inset-2 border-l border-r border-t border-border-bright/40 z-50" />

      {/* Bottom border split around text */}
      <div className="pointer-events-none fixed left-2 right-2 bottom-2 z-50 flex items-end">
        <div className="flex-1 h-px bg-border-bright/40" />
        <span className="text-[10px] text-text-muted/60 tracking-wider px-3 leading-none pb-px">
          leonzu21 — {new Date().getFullYear()}
        </span>
        <div className="flex-1 h-px bg-border-bright/40" />
      </div>

      {/* Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
