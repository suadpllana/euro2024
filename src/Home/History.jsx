import React from 'react'
import "./Home.css"

import historyData from './HistoryData';
const History = () => {
  return (
    <>
      <h1 id="historicMatches" class="h1">History matches in EURO 📕</h1>

<div class="euroHistory">
<div class="history">
    <div class="euroHistoryContent">
        <h2>Euro 1976:</h2>
        <h3>Czechoslovakia 2-2 West Germany (Czechoslovakia won 5-3 on penalties)</h3>
        <p>It is famous for Antonín Panenka's
          decisive penalty in the shootout
         , where he gently chipped the ball into the net, a technique now known as the "Panenka."</p>
    </div> 
    <div> 
       <img class="euroHistoryImage"  src={historyData.panenka} alt=""/>
    </div> 

   

</div>
<div  class="history">
<div class="euroHistoryContent">
    <h2>Euro 1984</h2>
    <h3>France 3-2 Portugal (Semi-final)</h3>
    <p>A thrilling match that saw France come 
     from behind to win in extra time. Michel Platini
      scored the decisive goal in the 119th minute,
       sending France to the final, which they eventually won.</p>
</div> 
<div> 
   <img class="euroHistoryImage"  src={historyData.platini}  alt=""/>
</div>

</div>
</div>  
<div class="euroHistory">
<div class="history">
    <div class="euroHistoryContent">
        <h2>Euro 1988:</h2>
        <h3>Netherlands 2-0 Soviet Union (Final)</h3>
        <p>Marco van Basten scored one of the greatest goals in football history,
          a stunning volley from a tight angle, helping the Netherlands
           secure their first major tournament victory.</p>
    </div> 
    <div> 
       <img class="euroHistoryImage"  src={historyData.vanBasten}  alt=""/>
    </div> 

   

</div>
<div class="history">
<div class="euroHistoryContent">
    <h2>Euro 1996</h2>
    <h3>England 4-1 Netherlands (Group Stage)</h3>
    <p>A dominant performance by England with standout performances
      from Alan Shearer and Teddy Sheringham
     . The match is remembered for England's attacking prowess.</p>
</div> 
<div> 
   <img class="euroHistoryImage"  src={historyData.sheringham}  alt=""/>
</div>

</div>
</div>  

<div class="euroHistory">
<div class="history">
    <div class="euroHistoryContent">
        <h2>Euro 2000</h2>
        <h3>France 2-1 Italy (Final)</h3>
        <p>The match saw Italy leading 1-0 until Sylvain Wiltord equalized in stoppage time.
          David Trezeguet then scored the golden goal in extra time, giving France the championship.</p>
    </div> 
    <div> 
       <img class="euroHistoryImage"  src={historyData.trezeguet}  alt=""/>
    </div> 
</div>

<div class="history">
<div class="euroHistoryContent">
        <h2>Euro 2004</h2>
        <h3>Portugal 0 - 1 Greece</h3>
        <p>A historic match , Greece did the impossible by
            defeating Portugal in the final and winning their 
            first ever major trophy
        </p>
    </div> 
    <div> 
       <img class="euroHistoryImage"  src={historyData.greece}  alt=""/>
    </div> 

</div> 
</div>



<div class="euroHistory">
<div class="history">
    <div class="euroHistoryContent">
        <h2>Euro 2008:</h2>
        <h3>Turkey 3-2 Czech Republic (Group Stage)</h3>
        <p>Turkey made a stunning comeback from 2-0 down to win 3-2 in the last 15 minutes, 
         securing their place in the quarter-finals.</p>
    </div> 
    <div> 
       <img class="euroHistoryImage"  src={historyData.turkey} alt=""/>
    </div> 

  

</div>
<div class="history">
<div class="euroHistoryContent">
    <h2>Euro 2012</h2>
    <h3>Spain 4-0 Italy (Final)</h3>
    <p>Spain delivered a masterclass in football, winning the final convincingly
      and securing their third major tournament victory in a row.</p>
</div> 
<div> 
   <img class="euroHistoryImage"  src={historyData.spain} alt=""/>
</div>

</div>
</div>  


<div class="euroHistory">
<div class="history">
    <div class="euroHistoryContent">
        <h2>Euro 2016:</h2>
        <h3>Portugal 1-0 France (Final)</h3>
        <p>Portugal won their first major tournament with a dramatic extra-time goal by Eder,
          despite losing Cristiano Ronaldo to injury early in the match.</p>
    </div> 
    <div> 
       <img class="euroHistoryImage"  src={historyData.eder} alt=""/>
    </div> 

  

</div>
<div class="history">
<div class="euroHistoryContent">
    <h2>Euro 2020</h2>
    <h3>Italy 1-1 England (Italy won  on penalties)</h3>
    <p>Italy won their first Euro since 1968. The match ended 1-1, and Italy triumphed in a tense penalty shootout.</p>
</div> 
<div> 
   <img class="euroHistoryImage"  src={historyData.sakamissing} alt="" />
</div>

</div>
</div>  
<a href="#Euro">Go on Top</a>
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

export default History
