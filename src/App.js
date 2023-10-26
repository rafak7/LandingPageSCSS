import React,{useState,useEffect} from 'react'
import "./scss/index.scss"
import Navbar from './components/Navbar'
import Home from './components/Home'
import Free from './components/Free'
import Clients from './components/Clients'
import SuperRare from './components/SuperRare'
import Release from './components/Release'
import Like from './components/Like'
import Singup from './components/Singup'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(()=> {
    const registerAnimations = () => {
      const sr = scrollreveal ({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      })
      sr.reveal(
      `
      nav,.home,.free,.clients,.super-rare,.releases,.like,.sigup,footer
      `,
      {interval: 500})
    }
    registerAnimations()
  },[])
  return <div className="app-container">
    <ScrollToTop />
    <Navbar />
    <Home />
    <Free />
    <Clients />
    <SuperRare />
    <Release />
    <Like />
    <Singup />
    <Footer />
  </div>
}
