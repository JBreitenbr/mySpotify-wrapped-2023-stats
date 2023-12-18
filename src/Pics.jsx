import './App.css';
import * as d3 from 'd3';
import artists from './artists.png';
import genres from './genres.png';

const Pics=() =>{
  d3.select("#canvas").remove();
  return (
    <div>
     <img className="wordcloud" src={artists}/>
     <img className="wordcloud" src={genres}/>
    </div>
  )
}

export default Pics;