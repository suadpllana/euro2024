import React from 'react'
import "./Final.css"
import {Link } from "react-router-dom"
import groupImage from './../Home/groupData';
import euroTrophy from "../../src/assets/images/euroWinners.png"
import euroLogo from "../../src/assets/images/euroLogo.png"
import Nav from './../Nav';
import {useState} from "react"
const Final = () => {
    const [text , setText]  = useState("");




  return (
    <>
     <Nav>
    <Link class="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
  <Link class="matches" to="/euro2024/matches">Group Stage</Link>
  <Link class="matches" to="/euro2024/round-16">Round of 16</Link>
  <Link class="matches" to="/euro2024/quarter-finals">Quarter Finals</Link>
  <Link class="matches" to="/euro2024/semi-finals">Semi Finals</Link>
  <Link class="matches" to="/euro2024/final">Final</Link>
 </Nav>
     <div class="final-container">
    <div class="finalists">
        <h2>
            <img class="flags" src={groupImage.spain} alt=""/> Spain 2-1 England    
            <img class="flags" src={groupImage.england} alt=""/></h2>
            <p class="text">Man of the match : Williams🌟</p>
            <p id="revealText"></p>
            {text ? <h2>{text}</h2> :     <button onClick={() => setText("Spain are European Champions 🎉")} >Reveal</button>}
    
    </div>
    <div class="trophy">
        <img class="trophyImage" src={euroTrophy} alt=""/>
    </div>
    <footer id="ContactUs">
    <p><a href="https://github.com/suadpllana" target="_blank">Github</a>
        <a href="https://www.linkedin.com/in/suad
        pllana-20b0ab2a8/ " target="_blank">LinkedIn</a>
        <a href="https://instagram.com/suad_pllanaa" target="_blank">Instagram</a></p>
    
    @Suad Pllana
</footer>
</div>


    </>
   
  )
}

export default Final
