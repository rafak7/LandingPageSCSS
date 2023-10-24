import React from 'react'
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

export default function App() {
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
