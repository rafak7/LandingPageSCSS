import React from 'react'
import home from "../assets/home.png"

export default function Home() {
  return <div className='home'>
    <div className="container">
      <div className="content">
        <p className="sub-title">Lauching Soon</p>
        <h1 className="title">An NFT like no other</h1>
        <p className="description">Dont miss out on the release of our new NFT. Sing Up below to recieve update when we go live.
        </p>
        <button>Sing Up</button>
      </div>
      <div className="image-container">
        <div className="image">
          <img src={home} alt="home" />
        </div>
        <div className="ellipse-container">
          <div className="ellipse pink"></div>
          <div className="ellipse orage"></div>
        </div>
      </div>
    </div>
  </div>
}
