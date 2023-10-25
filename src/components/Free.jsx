import React from 'react'
import Card from "./Card";
import icon from "../assets/icon.png";
import terra from "../assets/terra.webp";
import air from "../assets/air.png";

export default function Free() {
  return (
  <div className='free'>
    <div className="container">
      <div className="background">
      <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
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
        price={2.99} 
        />
      </div>
      <div className="card2">
      <Card 
        image={air}
        series="NIKE"
        title="Air Max TW"
        price={267} 
        />
        
      </div>
    </div>
  </div>
  )
}
