import React from 'react'

import Nav from './../Nav';
import {Link} from "react-router-dom"
import euroLogo from "../../src/assets/images/euroLogo.png"
import "./Round16.css"
import groupImage from './../Home/groupData';
const Round16 = () => {
  return (
    <div class="round-16">
    <Nav>
      <Link class="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
    <Link class="matches" to="/euro2024/matches">Group Stage</Link>
    <Link class="matches" to="/euro2024/round-16">Round of 16</Link>
    <Link class="matches" to="/euro2024/quarter-finals">Quarter Finals</Link>
    <Link class="matches" to="/euro2024/semi-finals">Semi Finals</Link>
    <Link class="matches" to="/euro2024/final">Final</Link>
   </Nav>


   <div class="round-16-container">
        <div>
        <h3>
            <img class="flags" src={groupImage.germany} alt="" /> Germany 2 - 0 Denmark
            <img class="flags" src={groupImage.denmark} alt="" />
        </h3>
        <p>Man of the match: Rudiger🌟</p>
        </div>
        <div>
            <h3>
                <img class="flags" src={groupImage.switzerland} alt="" /> Switzerland 2 - 0 Italy
                <img class="flags" src={groupImage.italy} alt="" /></h3>
            <p>Man of the match: Vargas🌟</p>
        </div>
        <div class="date phone"> 
            <p>Saturday 29 June 2024</p>
            <p>Matchday 1 of the round of 16</p>
        </div>
        <div>
            <h3>
                <img class="flags" src={groupImage.england} alt="" /> England 2 - 1 Slovakia 
                <img class="flags" src={groupImage.slovakia} alt="" /> (ET)</h3>
            <p>Man of the match: Bellingham🌟</p>
            </div>
            <div>
                <h3>
                    <img class="flags spain" src={groupImage.spain} alt="" /> Spain 4 - 1 Georgia
                    <img class="flags" src={groupImage.georgia} alt="" /></h3>
                <p>Man of the match: Rodri🌟</p>
            </div>
            <div class="date phone"> 
                <p>Sunday 30 June 2024</p>
                <p>Matchday 2 of the round of 16</p>
            </div>
            <div>
                <h3>
                    <img class="flags" src={groupImage.france} alt="" /> France 1 - 0 Belgium
                    <img class="flags" src={groupImage.belgium} alt="" />
                </h3>
                <p>Man of the match: Kounde🌟</p>
                </div>
                <div>
                    <h3>
                        <img class="flags" src={groupImage.portugal} alt="" /> Portugal 0 - 0 Slovenia 
                        <img class="flags" src={groupImage.slovenia} alt="" /> (3-0 PEN)</h3>
                    <p>Man of the match: Costa🌟</p>
                </div>
                <div class="date phone"> 
                    <p>Monday 1 July 2024</p>
                    <p>Matchday 3 of the round of 16</p>
                </div>
                <div>
                    <h3>
                        <img class="flags" src={groupImage.romania} alt="" /> Romania 0-3 Netherlands
                        <img class="flags" src={groupImage.netherlands} alt="" />
                    </h3>
                    <p>Man of the match: Gakpo🌟</p>
                    </div>
                    <div>
                        <h3> 
                            <img class="flags" src={groupImage.austria} alt="" /> Austria 1-2 Turkey
                            <img class="flags" src={groupImage.turkey} alt="" /></h3>
                        <p>Man of the match: Demiral🌟</p>
                    </div>
                    <div class="date phone"> 
                        <p>Tuesday 2 July 2024</p>
                        <p>Matchday 4 of the round of 16</p>
                    </div>
    </div>
 
    </div>
    
  )
}

export default Round16
