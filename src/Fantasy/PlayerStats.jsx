import React from 'react'
import "./PlayerStats.css"
import {Link} from "react-router-dom"
import Nav from './../Nav';
import euroLogo from "../../src/assets/images/euroLogo.png"
const PlayerStats = () => {
  return (
   <div className="player-stats-container">
   <Nav>
     <Link className="home" to="/euro2024/home"><img className="euroLogo" src={euroLogo} alt=""/></Link>
    <Link className="matches" to="/euro2024/matches">Matches</Link>
    <Link className="fantasy" to="/euro2024/fantasy-football">Fantasy Football</Link>
    <Link className="predictor" to="/euro2024/players-stats">Player Stats</Link>
     </Nav>
    <h1>Player's Stats</h1>
      <p className="description">Here you can find stats about 
        players for you to decide who starts in your fantasy team! <br/>
        <strong>note this game was created before quarter finals started</strong></p>
      <input id="playerName" type="text"   placeholder="Write the player here"/>
      <button id="button">See Stats</button>
      <div id="container">
        <div id="statsCard" >
          <h1 className="euro2024-stats">Euro 2024 Stats</h1>
          <h2 id="player"></h2>
          <p id="goals"></p>
          <p id="assists"></p>
          <p id="yellow-cards"></p>
          <p id="red-cards"></p>
          <p id="position"></p>
          <p id="points"></p>
          <p id="nationality"></p>
        </div>
      </div>
      
   </div>
  )
}

export default PlayerStats
