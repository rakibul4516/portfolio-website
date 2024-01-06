import Banner from '@/Components/banner/page'
import Contact from '@/Components/contact/page'
import Education from '@/Components/education/page'
import Projects from '@/Components/projects/page'
import Skills from '@/Components/skills/page'

export default function Home() {
  return (
    <main>
      <Banner/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </main>
  )
}
