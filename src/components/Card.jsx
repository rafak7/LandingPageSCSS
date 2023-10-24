import React from 'react'

export default function Card({image,series,title,price}) {
  return <div className='card'>
    <div className="card-image">
      <img src={image} alt="super" />
    </div>
    <div className="card-content">
      <div className="card-heading">
        <span className="card-series">{series}</span>
        <span className="card-top">NEW</span>
      </div>
      <div className="card-details">
        <h4 className='card-title'>{title}</h4>
        <div className="card-price">
          <h4>{price} R$</h4>
        </div>
      </div>
      <div className="card-sub-detials">
      </div>
    </div>
  </div>
}
