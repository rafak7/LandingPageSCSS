import React from 'react'

import yzy from "../assets/yzy.png";
import nike from "../assets/nike.png";
import asics from "../assets/asics.png";
import adidas from "../assets/adidas.png";
import jump from "../assets/jump.png";

export default function Clients() {
  const data = [yzy, nike, asics, adidas, jump]

  return <div className='clients'>
    <div className="container">
      <div className="clients-container">
        {
          data.map((client,index)=> 
          <div className="client" key={index}>
            <img src={client} alt="client" />
          </div>
          )
        }
      </div>
    </div>
  </div>
}
