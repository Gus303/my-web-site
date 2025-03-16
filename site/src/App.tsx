import Hero from './components/hero/Hero'
import Works from './components/works/Works'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className='container'>
      <section id='#home'>
        <Hero />
      </section>

      <section id='#services'>
        <Works />
      </section>

      <section id='#portfolio'>
        <Portfolio />
      </section>

      <section id='#contact'>
       <Contact />
      </section>
    </div>
  )
}
export default App
