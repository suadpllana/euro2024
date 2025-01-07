import React from 'react'
import "./Fantasy.css"
import {Link} from "react-router-dom"
import Nav from './../Nav';
import euroLogo from "../../src/assets/images/euroLogo.png"

import groupImage from './../Home/groupData';
const Fantasy = () => {
  return (
    <>
     <Nav>
     <Link class="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
    <Link class="matches" to="/euro2024/matches">Matches</Link>
    <Link class="fantasy" to="/euro2024/fantasy-football">Fantasy Football</Link>
    <Link class="predictor" to="/euro2024/players-stats">Player Stats</Link>
     </Nav>
     <h1>Welcome to Fantasy Team </h1>
    <h2>Choose your team with the players you think will perform the best</h2>
    <p><strong>(note this game was created before quarter finals started)</strong></p>
    <div class="fantasy-container">
      <div class="info">
        <div>
          <h3 class="attackers">Attackers:</h3>
          <p><strong>Goal:</strong> 4 points</p>
          <p><strong>Appearance:</strong> 1 point</p>
          <p><strong>60 mins on the pitch:</strong> 1 point</p>
          <p><strong>Goal from outside the box:</strong> 1 point</p>
          <p><strong>Player of the match:</strong> 3 points</p>
          <p><strong>Assist:</strong> 3 points</p>  
          <p><strong>Winning a penalty:</strong> 2 points</p>
          
        </div>
        <div>
          <h2>How to score points?</h2>
          <h3 class="midfielders" >Midfielders:</h3>
          <p><strong>Goal:</strong> 5 points</p>
          <p><strong>Clean sheet:</strong> 1 point</p>
          <p><strong>60 mins on the pitch:</strong> 1 point</p>
          <p><strong>Goal from outside the box:</strong> 1 point</p>
          <p><strong>Player of the match:</strong> 3 points</p>
          <p><strong>Assist:</strong> 3 points</p>  
          <p><strong>Winning a penalty:</strong> 2 points</p>
        </div>
        <div>
          <h3 class="attackers">Defenders:</h3>
          <p><strong>Goal: </strong> 6 points</p>
          <p><strong>Clean sheet:</strong> 4 points</p>
          <p><strong>60 mins on the pitch:</strong> 1 point</p>
          <p><strong>Goal from the outside box</strong> 1 point</p>
          <p><strong>Player of the match:</strong> 3 points</p>
          <p><strong>Assist</strong> 3 points</p>
          <p><strong>Winning a penalty:</strong> 2 points</p>
        </div>
      </div>
      <div class="pitch">
        
        <div class="playersSpace">
          <div class="players">
            <p id="resultName1"></p>
            <input id="playerName1" type="text" />
          </div>
          <div class="players">
            <p id="resultName2"></p>
            <input id="playerName2" type="text" />
          </div>
          <div class="players">
            <p id="resultName3"></p>
            <input id="playerName3" type="text" />
          </div>
          
        </div>
        <div class="playersSpace">
          <div class="players">
            <p id="resultName4"></p>
            <input id="playerName4" type="text" />
          </div>
          <div class="players">
            <p id="resultName5"></p>
            <input id="playerName5" type="text" />
          </div>
          <div class="players">
            <p id="resultName6"></p>
            <input id="playerName6" type="text" />
          </div>
        </div>
        <div class="playersSpace4">
          <div class="players">
            <p id="resultName7"></p>
            <input id="playerName7" type="text" />
          </div>
          <div class="players">
            <p id="resultName8"></p>
            <input id="playerName8" type="text" />
          </div>
          <div class="players">
            <p id="resultName9"></p>
            <input id="playerName9" type="text" />
          </div>
          <div class="players">
            <p id="resultName10"></p>
            <input id="playerName10" type="text" />
          </div>
        </div>
        <div class="playersSpace">
          <div></div>
          <div class="players">
            <p id="resultName11"></p>
            <input id="playerName11" type="text" />
          </div>
          <div></div>
        </div>
        <button id="teamSubmit">Submit</button>  
      </div>
      <div class="show-matches">
        <div>
          <h1>Choose only from qualified teams!</h1>
        </div>
        <div>
          <p>

           <img class="flags" src={groupImage.spain} alt=""/> Spain vs Germany
           <img class="flags" src={groupImage.germany} alt=""/><span class="responsive"> 5th July 18:00</span> </p>
          <p> 
            <img class="flags" src={groupImage.france} alt=""/>
            France vs Portugal 
            <img class="flags" src={groupImage.portugal} alt=""/> <span class="responsive"> 5th July 21:00</span></p>
        </div>
        <div>
          <p>
            <img class="flags" src={groupImage.england} alt=""/> England vs Switzerland 
            <img class="flags" src={groupImage.switzerland} alt=""/> <span  class="matchday2 responsive" > 6th July 18:00</span></p>
         
          <p> <img class="flags" src={groupImage.netherlands} alt=""/> Netherlands vs Turkey
            <img class="flags" src={groupImage.turkey} alt=""/> <span class="matchday2 responsive"> 6th July 21:00</span></p>
        </div>
        <div>
         <p class="player-stats">You dont know which player to pick? Analyse player's <a class="stats" href="./stats.html">stats</a></p>
        </div>
        
      </div>
    </div>
    

<footer id="ContactUs">
  <p><a href="https://github.com/suadpllana" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/suad
    pllana-20b0ab2a8/ " target="_blank">LinkedIn</a>
    <a href="https://instagram.com/suad_pllanaa" target="_blank">Instagram</a></p>
  
  @Suad Pllana
</footer>
    </>
  )
}

export default Fantasy
