import React from 'react'
import home from "../assets/home.png"

export default function Home() {
  return <div className='home'>
    <div className="container">
      <div className="content">
        <p className="sub-title">Em breve</p>
        <h1 className="title">Cripst Sneakers</h1>
        <p className="description">
          Não perca a nova era dos sneakers, aqui na Cripst você econtrara todos seus sonhos possiveis.
        </p>
        <button>Cadastre-se</button>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={home} alt="home" />
        </div>
        <div className="ellipse-container">
          <div className="ellipse silver"></div>
          <div className="ellipse greyb"></div>
        </div>
      </div>
    </div>
  </div>
}
