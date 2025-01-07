import React from 'react'
import "./SemiFinals.css"
import euroLogo from "../../src/assets/images/euroLogo.png"
import Nav from './../Nav';
import { Link } from 'react-router-dom';
import groupImage from './../Home/groupData';
const SemiFinals = () => {
  return (
   <div className="semi-finals">
    <Nav>
    <Link class="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
  <Link class="matches" to="/euro2024/matches">Group Stage</Link>
  <Link class="matches" to="/euro2024/round-16">Round of 16</Link>
  <Link class="matches" to="/euro2024/quarter-finals">Quarter Finals</Link>
  <Link class="matches" to="/euro2024/semi-finals">Semi Finals</Link>
  <Link class="matches" to="/euro2024/final">Final</Link>
 </Nav>
    <div class="semi-finals-container">
        <h3>
            <img class="flags" src={groupImage.spain} alt=""/> Spain 2-1 France
            <img class="flags" src={groupImage.france} alt=""/></h3>
        <p class="text">Man of the match: Olmo⭐</p>
        <h3>
            <img class="flags" src={groupImage.england} alt=""/> England 2-1 Netherlands
            <img class="flags" src={groupImage.netherlands} alt=""/></h3>
        <p class="text">Man of the match: Watkins⭐</p>
    </div>

    <footer id="ContactUs">
        <p><a href="https://github.com/suadpllana" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/suad
            pllana-20b0ab2a8/ " target="_blank">LinkedIn</a>
            <a href="https://instagram.com/suad_pllanaa" target="_blank">Instagram</a></p>
        
        @Suad Pllana
      </footer>
   </div>
  )
}

export default SemiFinals
