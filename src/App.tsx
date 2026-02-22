import PageFrame from './components/ui/PageFrame'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <PageFrame>
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </PageFrame>
  )
}
