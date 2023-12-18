import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";

const Navbar=() => {
  return (
    <div className="navbar" >
      <div className="links">
        <Link to="/"></Link>
        <Link to="/turbo-pancake"></Link>
        <Link to="/bubble">Timeline</Link>
        <Link to="/histogram">Histograms</Link>
        <Link to="/boxplot">Boxplots</Link>
        <Link to="/corrs">Correlations</Link>
        <Link to="/pics">Wordcloud</Link>
      </div>
    </div>
  );
}

export default Navbar;