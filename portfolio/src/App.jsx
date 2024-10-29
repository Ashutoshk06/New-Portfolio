import { useState } from 'react'
import  Navbar  from './components/Navbar'
import { Hero } from './components/Hero'
import Skills from './components/Skills'
import Portfolio from "./components/Portfolio"
import Achievements from './components/Achievements'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import './index.css'; // Your Tailwind CSS file





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/>
      <Portfolio/>
      <Achievements/>
      <Contacts/>
      <Footer/>
    </>
  )
}

export default App
