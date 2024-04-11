import React from "react";
import Header from "./Header";
import Content from "./content";
import { Routes,Route } from "react-router-dom"
import { Matches } from "./pages/matches/matches";


function App(){
    return(
    <div className="layout">
    <Header/>
    <Routes>
        <Route path="/" element={<Content/>} />
        <Route path="/matches" element={<Matches/>} />
    </Routes>    
    </div>
    )
}

export default App