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
          <Route path="/srcdoc" element={<BubbleChart/>}/>
          <Route path="/bubble" element={<BubbleChart/>}/>
          <Route path="/histogram" element={<Histogram/>}/>
          <Route path="/boxplot" element={<Boxplot/>}/>
          <Route path="/corrs" element={<Heatmap/>}/>
          <Route path="/pics" element={<Pics/>}/>
          </Routes>
        </Router>
    </>
  )
}