export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  tech: string[]
  images: { src: string; alt: string }[]
  links: { label: string; url: string }[]
  featured?: boolean
}
