import './App.css'
import {useState,useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Navbar from './Navbar';
import BubbleChart from './BubbleChart';
import Histogram from './Histogram';
import Boxplot from './Boxplot';
import Heatmap from './Heatmap';
import Pics from './Pics';

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<BubbleChart/>}/><Route path="/mySpotify-wrapped-2023-stats" element={<BubbleChart/>}/>
          <Route path="/mySpotify-wrapped-2023-stats/bubble" element={<BubbleChart/>}/>
          <Route path="/mySpotify-wrapped-2023-stats/histogram" element={<Histogram/>}/>
          <Route path="/mySpotify-wrapped-2023-stats/boxplot" element={<Boxplot/>}/>
          <Route path="/mySpotify-wrapped-2023-stats/corrs" element={<Heatmap/>}/>
          <Route path="/mySpotify-wrapped-2023-stats/pics" element={<Pics/>}/>
          </Routes>
        </Router>
    </>
  )
}