import React from 'react'
import "./appleNews.css"

function AppleNews({ title, img, discr, url }) {
  return (
    <div className="mainBlock">
      <div className="blockImg">
        <img className="newsImg" src={img} alt=""></img>
      </div>
      <h2>{title}</h2>
      <p>{discr}</p>
      <a className="readFull" href={url}>Read in full...</a>
    </div>
  )
}

export default AppleNews