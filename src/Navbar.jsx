import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";

const Navbar=() => {
  return (
    <div className="navbar" >
      <div className="links">
        <Link to="/"></Link>
        <Link to="/mySpotify-wrapped-2023-stats"></Link>
        <Link to="/mySpotify-wrapped-2023-stats/bubble">Timeline</Link>
        <Link to="/mySpotify-wrapped-2023-stats/histogram">Histograms</Link>
        <Link to="/mySpotify-wrapped-2023-stats/boxplot">Boxplots</Link>
        <Link to="/mySpotify-wrapped-2023-stats/corrs">Correlations</Link>
        <Link to="/mySpotify-wrapped-2023-stats/pics">Wordcloud</Link>
      </div>
    </div>
  );
}

export default Navbar;