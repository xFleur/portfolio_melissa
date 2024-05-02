import './app.scss'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Bio from './components/bio/Bio'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Cursor from './components/cursor/Cursor'
import Resume from './components/resume/Resume'
import Experience from './components/experience/Experience'


function App() {
  return (
    <div>
       <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Biography">
      <Bio />
      </section>
      <section id="Experience">
      <Experience />
      </section>
      <section id="Portfolio">
      <Portfolio />
      </section>
      <section id="Resume">
      <Resume />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  )
}

export default App