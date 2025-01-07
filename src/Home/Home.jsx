import React from 'react'
import Groups from './Groups'
import "./Home.css"
import Awards from './Awards'
import Records from "./Records"
import History from './History'
import {Link} from "react-router-dom"
import Nav from "../Nav"
import euroLogo from "../../src/assets/images/euroLogo.png"
const Home = () => {
  return (
    <>
     <Nav>
     <Link className="home" to="/euro2024/home"><img class="euroLogo" src={euroLogo} alt=""/></Link>
    <Link className="matches" to="/euro2024/matches">Matches</Link>
    <Link className="fantasy" to="/euro2024/fantasy-football">Fantasy Football</Link>
       <Link className="predictor" to="/euro2024/players-stats">Player Stats</Link>
     </Nav>
     <div>
   <h1 id="Euro" className="introduction">Welcome to EURO website🔆 </h1>
   <p className="info">
    Here you can find most important and entertaining sections about euro <br/>
    <a href="#awards">Awards</a>
   <a href="#topScorers">Top scorers</a>
   <a href="#RecordsBroken">Records Broken</a>
    <a href="#historicMatches">Historic matches</a> 
    <a href="#ContactUs">Contact us</a>
</p>

   </div>
    
  <Groups/>
  <Awards/>
  <Records/>
  <History/>
    </>
  
    
  )
}

export default Home
