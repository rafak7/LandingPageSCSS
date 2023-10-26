import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from './Card';

export default function Release() {
  return <div className='release'>
    <div className="release orange">
      <div className="content">
        <h2 className="title">Initial Relsease 4/11</h2>
        <p className="description">
        Está é nossa coleção de novidades na Loja, se estiver procurando algum modelo
          especifico pode ir em <a href="#">Marcas</a> para obter seu resultado .
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic, cumque aut, explicabo
        </p>
        <p className="description">50% of proceeds go to charity</p>
        <a href="#" className='Link'>
          Check them out <BsArrowRight />
        </a>
      </div>
      <div className="image">
        <img src={release1} alt="release" />
        <div className="ellipse pink"></div>
      </div>
    </div>

    <div className="release green">
    <div className="card-container">
        <Card 
            image={release2}
            series="Yeezy"
            title="Foam Runner" 
            price={2.99}
        />
        <div className="ellipse orage"></div>
        </div>
      
      <div className="content">
        <h2 className="title">Initial Relsease 4/11</h2>
        <p className="description">
        Está é nossa coleção de novidades na Loja, se estiver procurando algum modelo
          especifico pode ir em <a href="#">Marcas</a> para obter seu resultado .
        </p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, hic, cumque aut, explicabo

        </p>

        <p className="description">50% of proceeds go to charity</p>
        <a href="#" className='Link'>
          Check them out <BsArrowRight />
        </a>
      </div>
      </div>
    </div>
}
