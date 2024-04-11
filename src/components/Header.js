import React from "react";
import { Link } from "react-router-dom"


function Header() {
  return (
    <div>
    <header>
    <Link to="/" className="link">
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Cricbuzz_Logo.png" height={50} width={90}/>
    </Link>
      <div className="had-op">Live Scores</div>
      <div className="had-op">Schedule</div>
      <div className="had-op">Archive</div>
      <div className="had-op">News</div>
      <div className="had-op">Series</div>
      <div className="had-op">Teams</div>
      <div className="had-op">Video</div>
      <div className="had-op">Ranking</div>
      <div className="had-op">More</div>
      <button className="had-op">Cricket</button>
    </header>
    <div>
              <header className="sen-had">
              <div style={{color: "#efe7e7"}}>MATCHES</div>
               <div>AFG vs IRE-Live</div>
               <div>RGR vs BRSAL-Live</div>
               <div>MIW vs UPW-preview</div>
               <div>KRK vs ISU-preview</div>
               <div>NED vs NEP-NED Won</div>
               <div className="All">
                ALL
              <select></select>
              </div>
            </header>
        </div>
    </div>
  );
}

export default Header;