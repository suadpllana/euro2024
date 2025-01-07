import React from 'react'

import RecordsBroken from './RecordsBroken';
import groupImage from './groupData';
const Records = () => {
  return (
    <>
     <div class="recordsBroken">
    <h1 id="RecordsBroken">Records Broken⏺️</h1>  
    
    <h2>Fastest EURO goal by Nedim Bajrami (Albania) - 23 seconds
        <img class="flags" src={groupImage.albania} alt=""/>
    </h2>
    <p>
        The match took place in Dortmund , Albania vs Italy , Azzuri had a throw in
    which Italy's player Di Marco threw it dangerously in his on box and Nedim Bajrami 
    took the chance and scored <strong>the fastest goal ever in EURO</strong>
    </p>
    <img class="recordBrokenImages" src={RecordsBroken.bajrami} alt=""/>
    
      <h2>Youngest ever player: Lamine Yamal (Spain) — 16 years 338 days
        <img class="flags" src={groupImage.spain} alt=""/>
      </h2>
     <p >
    
    Spanish hot prospect Lamine Yamal made history by becoming the <strong>youngest ever player</strong> to feature in an EURO game, the game was Spain vs
    Croatia where the Spaniards won 3-0
    </p>
    <img class="recordBrokenImages" src={RecordsBroken.yamal} alt=""/>
    
    <h2>Oldest ever scorer: Luka Modrić (Croatia) — 38 years 289 days
    <img class="flags" src={groupImage.croatia} alt=""/>
    </h2>
    <p>In one of the most exciting game of the tournament , Croatia vs Italy ,Luka Modrić 
    made history becoming the <strong>oldest scorer ever in EURO</strong>, although it didnt
    end well for the Real Madrid legend because The Azzurris equalised and Croatia
    was eliminated.
    </p>
    <img class="recordBrokenImages" src={RecordsBroken.modric} alt=""/>
    
    <h2>Oldest ever player: Pepe (Portugal) — 41 years 117 days
    <img class="flags" src={groupImage.portugal} alt=""/>
    </h2>
    <p>Nearly 25 years older than the youngest player ever (Lamine Yamal) , Pepe
    history by becoming the <strong>oldest player ever</strong>, in the game vs czechia where 
    Portugal won 2-1.
    </p>
    <img class="recordBrokenImages" src={RecordsBroken.pepe} alt=""/>
    
    <h2>Most Euro participant ever Cristiano Ronaldo (Portugal) - 6
    <img class="flags" src={groupImage.portugal} alt=""/>
    </h2>
    <p >Cristiano Ronaldo played in : EURO 2004, EURO 2008 , EURO 2012, EURO 2016 , 
    EURO 2020 and  EURO 2024 <strong>breaking the record for most EURO appeareances</strong>
    </p>
    <img class="recordBrokenImages" src={RecordsBroken.ronaldo} alt=""/>
    
    <h2>Fastest knockout stage goal – 57 seconds (Merih Demiral, Turkey vs Austria)
    <img class="flags" src={groupImage.turkey} alt=""/>
    </h2>
    <p >Merih Demiral then set the record for the <strong>fastest-ever knockout stage goal.</strong>
     Turkey took just 57 seconds to open the scoring against Austria in the Round of 16
      
    </p>
    <img class="recordBrokenImages" src={RecordsBroken.demiral}alt=""/>
    
    <h2>Most wins in EURO - Spain  (7)
    <img class="flags" src={groupImage.spain} alt=""/>
    </h2>
    <p >Spain makes history by  <strong>winning 7 matches in EURO</strong>
     
      
    </p>
    <img class="recordBrokenImages" src={groupImage.spainWinner} alt=""/>
    </div>
    <hr />
    </>
   
  )
}

export default Records
