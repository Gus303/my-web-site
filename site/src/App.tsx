// import Hero from './components/hero/Hero'
// import Works from './components/works/Works'
// import AboutMe from './components/aboutMe/AboutMe'
// import Contact from './components/contact/Contact'

import { lazy, Suspense } from "react"

import LazyLoad from "react-lazy-load"

const Hero = lazy(()=>import("./components/hero/Hero"))
const Works = lazy(()=>import("./components/works/Works"))
const AboutMe = lazy(()=>import("./components/aboutMe/AboutMe"))
const Contact = lazy(()=>import("./components/contact/Contact"))

function App() {
  return (
    <div className='container'>
      <Suspense fallback={"loading..."}>
      <LazyLoad height={"100vh"} offset={-100}>
      <section id='home'>
        <Hero />
      </section>
      </LazyLoad>
      </Suspense>

      <Suspense fallback={""}>
      <LazyLoad height={"100vh"} offset={-100}>
      <section id='services'>
        <Works />
      </section>
      </LazyLoad>
      </Suspense>

      <Suspense fallback={""}>
      <LazyLoad height={"100vh"} offset={-100}>
      <section id='aboutMe'>
        <AboutMe />
      </section>
      </LazyLoad>
      </Suspense>

      <Suspense fallback={""}>
      <LazyLoad height={"100vh"} offset={-100}>
      <section id='contact'>
       <Contact />
      </section>
      </LazyLoad>
      </Suspense>

    </div>
  )
}
export default App
