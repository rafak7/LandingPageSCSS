import React from 'react'
import Card from "./Card";
import icon from "../assets/icon.png";
import terra from "../assets/terra.webp";
import air from "../assets/air.png";
import runner from "../assets/runner.webp"
import gel from "../assets/gel.webp"

export default function Free() {
  return (
  <div className='free'>
    <div className="container">
      <div className="background">
      <div className="ellipse greyb"></div>
          <div className="ellipse silver"></div>
    </div>
    <div className="content">
      <div className="image">
        <img src={icon} alt="icon" />
      </div>
      <h2 className='title'>Drops novos toda semana!!</h2>
      <p className="description">
        Cadastre-se para não perder essas novidades. 
      </p>
    </div>
    </div>
    <div className="cards">
      <div className="card1">
        <Card 
        image={terra}
        series="NOCTA"
        title="Air Terra"
        price={1700} 
        />
      </div>
      <div className="card2">
      <Card 
        image={air}
        series="NIKE"
        title="Air Max TW"
        price={999} 
        />
      </div>

      <div className="card3">
        <Card 
        image={runner}
        series="Yeezy"
        title="Foam Runner" 
        price={1000} 
        />
      </div>

      <div className="card4">
        <Card 
        image={gel}
        series="Asics"
        title="Nimbus 9" 
        price={899} 
        />
      </div>

    </div>
  </div>
  )
}
