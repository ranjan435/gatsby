import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {faFacebook,faInstagram} from '@fortawesome/free-brands-svg-icons'
export default function Home() {
  return (
    <div className="mainDiv">
      {/* <div className="card"> */}
        <div className="socialFixedIcons card">
          <h2>Follow me</h2>
          <ul>
            <li><FontAwesomeIcon icon={faFacebook}/></li>
            <li><FontAwesomeIcon icon={faInstagram} /></li>

            {/* <FontAwesomeIcon icon={faCoffee} /> */}
          </ul>
        </div>
      {/* </div> */}

      
      
      <div className="frontPhotoCaption">
        <img src={`../../cover_photo.jpg`} alt={`bikram_baral`} width={`100%`} className="front-photo"></img>
        <div className="typewriter">
          <h1>Where there is soul, there is music!!</h1>
        </div>
      </div>

      <div>
        <div className="curveShape" >
          <svg viewbox="0 0 100 100" preserveAspectRatio="none" width={`100%`} height={`inherit`} style={{borderRadius:`2%`}}>
            <path d="M0,0 
                    L 1800,0
                    C 700,800 500,50 0,800 z" fill="#0285b6" />
          </svg>
        </div>
        <div className="musicalJourney">
          <h1>Musical Journey</h1>
        </div>
        <div className="achievementsLadder">
          <img src={`../../bikram_baral.jpg`} alt={`bikram_baral`} width={`100%`} className="avatar"></img>
          <img src={`../../cert.jpeg`} alt={`bikram_baral`} width={`100%`} className="avatar first"></img>
          <img src={`../../mic.jpeg`} alt={`bikram_baral`} width={`100%`} className="avatar second"></img>
          <img src={`../../golden_mic.jpg`} alt={`bikram_baral`} width={`100%`} className="avatar "></img>
          <img src={`../../bikram_idol.jpg`} alt={`bikram_baral`} width={`100%`} className="avatar"></img>
          <img src={`../../prizes.jpg`} alt={`bikram_baral`} width={`100%`} className="avatar"></img>

        </div>
      </div>
        {/* <div style={{position:"absolute",top:"100"}}> 
            hjkhj
        </div> */}
      {/* </div> */}
      

      {/* <svg width="466" height="603" viewbox="0 0 100 100" preserveAspectRatio="none">
        <path d="M0,0 
                L100,0
                C 25,50 50,75 0,100z" fill="#8aa7ca" />
      </svg> */}
      
      
      <div className="albums" >
        
        <div className="albumPosterDiv">
          <img src={`../../baral_back2.jpg`} alt={`bikram_baral`}  ></img>
          <div className="albumHeader">
            <h2 style={{fontSize:`50px`}}>New Music Albums</h2>
          </div>
          
          <div className="albumDiv">
              <ul >
                <li className="photoCard"><img src={`../../album_1.jpg`} alt={`bikram_baral`} width={`100%`} className=""></img>
                </li>
                <li className="photoCard"><img src={`../../album_2.jpg`} alt={`bikram_baral`} width={`100%`} className=""></img>
                </li>
                <li className="photoCard"><img src={`../../album_3.jpg`} alt={`bikram_baral`} width={`100%`} className=""></img>
                </li>
                <li className="photoCard"><img src={`../../album_4.jpg`} alt={`bikram_baral`} width={`100%`} className=""></img>
                </li>
              </ul>
          </div>
        </div>
        </div>
          
      </div>
      
   
    
  )
}
