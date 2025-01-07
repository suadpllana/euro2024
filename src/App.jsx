import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './Home/Home';
import Nav from './Nav';
import Matches from "./Matches/Matches";
import Round16  from "./Matches/Round16";
import QuarterFinals from './Matches/QuarterFinals';
import SemiFinals from './Matches/SemiFinals';
import Final from './Matches/Final';
import Fantasy from "./Fantasy/Fantasy";
import PlayerStats from './Fantasy/PlayerStats';

function App() {
  return (
    <>
      <Router>
       
        <Routes>
          <Route path="/euro2024" element={<Home />} />
          <Route path="/euro2024/home" element={<Home/>}/>
          <Route path="/euro2024/matches" element={<Matches/>}/>
          <Route path="/euro2024/round-16" element={<Round16/>}/>
          <Route path="/euro2024/quarter-finals" element={<QuarterFinals/>}/>
          <Route path="/euro2024/semi-finals" element={<SemiFinals/>} />
          <Route path="/euro2024/final" element={<Final/>} />
          <Route path="/euro2024/fantasy-football" element={<Fantasy/>} />
          <Route path="/euro2024/players-stats" element={<PlayerStats/>} />
          <Route path="*" element={<Navigate to="/euro2024" />} />
      
        </Routes>
      </Router>
    </>
  );
}

export default App;
