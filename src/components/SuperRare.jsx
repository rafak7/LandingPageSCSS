import React from "react";
import Card from "./Card";
import tn from "../assets/tnb.png"
import airye from "../assets/airye.webp"
import adi from "../assets/adi.png"
import bad from "../assets/bad.webp" 


export default function SuperRare() {
  const data = [
    {
      image: tn,
      series: "Air max plus",
      title: "SE blue",
      price: 1200,
    },
    {
      image: airye,
      series: "Air Yeezy",
      title: "White",
      price: 10000,
    },
    {
      image: adi,
      series: "Adidas",
      title: "Cloud",
      price: 899,
    },
    {
      image: bad,
      series: "Bad Bunny",
      title: "Blue",
      price: 1299,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Novidades</h2>
        <p className="description">
          Está é nossa coleção de novidades na Loja, se estiver procurando algum modelo
          especifico pode ir em <a href="#">Marcas</a> para obter seu resultado .
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}