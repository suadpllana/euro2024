import React from 'react'
import "./QuarterFinals.css"
import euroLogo from "../../src/assets/images/euroLogo.png"
import Nav from './../Nav';
import { Link } from 'react-router-dom';
import groupImage from './../Home/groupData';
import euroTrophy from "../assets/images/euroTrophy.png"
const QuarterFinals = () => {
  return (
    <div class="quarter-finals">
    <Nav>
    <Link class="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
  <Link class="matches" to="/euro2024/matches">Group Stage</Link>
  <Link class="matches" to="/euro2024/round-16">Round of 16</Link>
  <Link class="matches" to="/euro2024/quarter-finals">Quarter Finals</Link>
  <Link class="matches" to="/euro2024/semi-finals">Semi Finals</Link>
  <Link class="matches" to="/euro2024/final">Final</Link>
 </Nav>
    <div class="quarter-finals-container">
        <div>
            <img class="flags" src={groupImage.spain} alt=""/>
        </div>
        <div>
            <p class="vs">2-1</p>
        </div>
        <div>
            <img class="flags" src={groupImage.germany} alt=""/>
        </div>
        <div class="responsive">
            <p class="date ">Man of the match: Olmo⭐</p>
        </div>
        <div>
            <img class="flags" src={groupImage.france} alt=""/>
        </div>
        <div>
            <p class="vs"><span class="first">0-0</span> (3-0 Pen)</p>
        </div>
        <div>
            <img class="flags" src={groupImage.portugal} alt=""/>
        </div>
        <div class="responsive">
            <p class="date ">Man of the match: Dembele⭐</p>
        </div>
        <div>
            <img class="flags" src={groupImage.england} alt=""/>
        </div>
        <div>
            <p class="vs"><span class="second">1-1</span>(5-3 Pen)</p>
        </div>
        <div>
            <img class="flags" src={groupImage.switzerland} alt=""/>
        </div>
        <div class="responsive">
            <p class="date " >Man of the match: Saka⭐</p>
        </div>
        <div>
            <img class="flags" src={groupImage.netherlands} alt=""/>
        </div>
        <div>
            <p class="vs">2-1</p>
        </div>
        <div>
            <img class="flags" src={groupImage.turkey} alt=""/>
        </div>
        <div>
            <p class="date responsive">Man of the match: De vrij⭐</p>
        </div>
    </div>

    <img class="trophy" src={euroTrophy} alt=""/>
    </div>
    
  )
}

export default QuarterFinals
