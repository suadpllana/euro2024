import React from 'react'
import "./Matches.css"
import groupImage from './../Home/groupData';
import {useState} from "react"
import matchData from '../Home/MatchData';
import Nav from "../Nav"
import {Link} from "react-router-dom"
import euroLogo from "../../src/assets/images/euroLogo.png"
const Matches = () => {
    const [matches , setMatches] = useState(matchData)
    
  
    
   function handleChange(matchdayType){

    
    if(matchdayType === ""){
        setMatches(matchData)
    }
    else{
        const filteredMatches = matchData.filter((matchday) => matchdayType === matchday.matchday)
        setMatches(filteredMatches)
    }
   
   }


  return (
   <div className="matchesContainer">
  
   <Nav>
      <Link class="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
    <Link class="matches" to="/euro2024/matches">Group Stage</Link>
    <Link class="matches" to="/euro2024/round-16">Round of 16</Link>
    <Link class="matches" to="/euro2024/quarter-finals">Quarter Finals</Link>
    <Link class="matches" to="/euro2024/semi-finals">Semi Finals</Link>
    <Link class="matches" to="/euro2024/final">Final</Link>
   </Nav>
   <h1 class="matchdayScroller" >Here you can find all Group Stage games details</h1>
    <div class="matchdayScroller">
        <li>
            <a href="#matchday1">Matchday 1</a>
        </li>
        <li>
            <a href="#matchday2">Matchday 2</a>
        </li>
        <li>
            <a href="#matchday3">Matchday 3</a>
        </li>
    </div>  
    <h2>Filter only 1 matchday</h2>
    <select onChange={(e) => handleChange(e.target.value)} name="" id="">
        <option value="">Show all matchdays</option>
        <option value="matchday1">Matchday 1</option>
        <option value="matchday2">Matchday 2</option>
        <option value="matchday3">Matchday 3</option>
    </select>
 
    <div className="match-container-matches" >

    {matches.map((match,index) => (
            <>
            {match.h1 && <h1 id={match.matchday} className="h1-container">{match.h1}</h1>}
            <div className={match.matchday}>
              
                <p>{match.group}</p>
                <h3><img className="flags" src={match.homeFlag} /> {match.game} <img className="flags" src={match.awayFlag}/></h3>
                <p className="MOTM">Man of the match: {match.motm}⭐</p>
            </div>
            </>
             
        ))}
 
        
        
    </div>

    <a id="topLink" href="#top">Go on top</a>

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

export default Matches
