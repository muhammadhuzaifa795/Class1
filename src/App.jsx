import { useEffect, useState } from 'react'
import  'aos/dist/aos.css';
import Aos from "aos";
import Header from './Components/Header'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Cards from './Components/Cards'
import { CarouselDemo } from './Components/Carousel'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    Aos.init({ easing:'ease-in-out'});
  },[])

  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Cards/>
      <CarouselDemo/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
