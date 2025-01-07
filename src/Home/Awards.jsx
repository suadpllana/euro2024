import React from 'react'
import "./Home.css"
import groupImage from './groupData'
import topScorers from "./TopScorers"
const Awards = () => {
  return (
    <>
    <h1 id="awards" class="specialH1">Awards🏆</h1>
    <div class="awards">
    <div class="spainWinner">
        <h3>Euro 2024 winner : Spain  <img class="awardsFlags" src={groupImage.spain} alt=""/> </h3>
       
        <p class="winnersText">After an impressive tournament ,Spain
            win EURO 2024 , they also broke the
            record by winning all games (7).
        </p>
        <img class="finalists" src={groupImage.spainWinner} alt=""/>
    </div>
    <div class="englandSecond">  
        <h3>Euro 2024 runner up: England
            <img class="awardsFlags" src={groupImage.england} alt=""/>
        </h3>
        <p class="winnersText">England again disappointed their
            fans by losing back to back EURO finals.They are trophyless since 1966.
        </p>
        <img class="finalists" src={groupImage.englandLosing} alt=""/>
    </div>
    </div>
    
    <div class="playerOfTheEuro">
    <div class="rodri"> 
    <h3>Player of the tournament: Rodri</h3>
    <img class="POTMeuro rodri" src={groupImage.rodriMOTM} alt=""/>
    </div>
    <div class="yamal">
    <h3>Young player of the tournament: Yamal</h3>
    <img class="POTMeuro" src={groupImage.yamalMOTM} alt=""/>
    </div>
    </div>
    
    
    
    <div class="topScorerss">
    <h1 id="topScorers" >Top Scorers⚽</h1>
    </div>
    
    <div class="Top3">
    <div>
        <img class="top3Scorers" src={topScorers.mikautadze} alt=""/>
        <p><span class="numberSpan">#1</span> Mikautadze</p>
        <h3>3 goals ⚽</h3>
    </div>
    <div>
        <img class="top3Scorers" src={topScorers.musiala} alt=""/>
        <p><span class="numberSpan">#2</span> Musiala</p>
        <h3> 3 goals ⚽</h3>
    </div>
    <div>
        <img class="top3Scorers gakpo" src={topScorers.gakpo}  alt=""/>
        <p><span class="numberSpan">#3</span> Gakpo</p>
        <h3>3 goals ⚽</h3>
    </div>
    <div>
        <img class="top3Scorers olmo" src={topScorers.olmo} alt=""/>
        <p><span class="numberSpan">#4</span> Olmo</p>
        <h3>3 goals ⚽</h3>
    </div>
    <div>
        <img class="top3Scorers" src={topScorers.kane} alt=""/>
        <p><span class="numberSpan">#5</span> Kane</p>
        <h3>3 goals ⚽</h3>
    </div>
    <div>
        <img class="top3Scorers" src={topScorers.schranz} alt=""/>
        <p><span class="numberSpan">#6</span> Schranz</p>
        <h3>3 goals ⚽</h3>
    </div>
    </div>
    <div class="topScorers">
    <div></div>
    <div class="topScorer">
        <img class="player" src={topScorers.bellingham} alt=""/>
        <img class="playerCountry" src={groupImage.england} alt=""/>
      <p>
        
        #7  <strong>Bellingham</strong>  
         2 goals⚽
       </p>
    </div>
    <div class="topScorer">
        <img class="player" src={topScorers.ruiz} alt=""/>
        <img class="playerCountry" src={groupImage.spain} alt=""/>
        <p>
            
           #8  <strong>Ruiz</strong>  2 goals⚽
          </p>
    </div>
    <div class="topScorer">
        <img class="player" src={topScorers.fullkrug} alt=""/>
        <img class="playerCountry" src={groupImage.germany} alt=""/>
        <p>
            
           #9 <strong>Fullkrug</strong>   2 goals⚽
          </p>
    </div>
    <div></div>
    
    <div></div>
    <div class="topScorer">
        <img class="player" src={topScorers.demiral} alt=""/>
        <img class="playerCountry" src={groupImage.turkey} alt=""/>
      <p>
        
        #10  <strong>Demiral</strong>  2 goals⚽
      </p>
    </div>
    <div class="topScorer">
        <img class="player" src={topScorers.havertz} alt=""/>
        <img class="playerCountry"src={groupImage.germany}alt=""/>
        <p>
             #11 <strong>Havertz</strong>  2 goals⚽
          </p>
    </div>
    <div class="topScorer">
        <img class="player" src={topScorers.embolo} alt=""/>
        <img class="playerCountry" src={groupImage.switzerland} alt=""/>
        <p>
            
            #12 <strong>Embolo</strong>  2 goals⚽
          </p>
    </div>
    <div></div>
    <div></div>
    <div class="topScorer">
        <img class="player" src={topScorers.rMarin} alt=""/>
        <img class="playerCountry" src={groupImage.romania} alt=""/>
      <p>
        
        #13  <strong>R.Marin</strong>   2 goals⚽
      </p>
    </div>
    <div class="topScorer">
        <img class="player" src={topScorers.malen} alt=""/>
        <img class="playerCountry" src={groupImage.netherlands} alt=""/>
        <p>
            
            #14 <strong>Malen</strong>  2 goals⚽
          </p>
    </div>
    <div class="topScorer">
        <img class="player" src={topScorers.williams} alt=""/>
        <img class="playerCountry"src={groupImage.spain} alt=""/>
        <p>
            
            #15 <strong>Williams</strong>  2 goals⚽
          </p>
    </div>
    <div></div>
    <div></div>
    
    
    
    </div>
    </>
  )
}

export default Awards
