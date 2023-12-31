import * as d3 from 'd3';
import { useEffect, useRef, useState } from "react";
import "./App.css";

import {histDict} from './histDict';
const Histogram = () => {
let [dim,setDim]=useState("danceability");
const handleChange = (event) => {
setDim(event.target.value);
};
function showDimension(dim){
d3.select("#canvas").remove();
let canvas=d3.select("body").append("svg")
.attr("id","canvas");let w=+d3.select("#canvas").style("width").slice(0,-2);
let h=+d3.select("#canvas").style("height").slice(0,-2);

let pad=(4/35)*w;

const bucketGen = d3
  .bin()
  .value((d) => d)
  .domain(histDict[dim]["xrange"])
  .thresholds(histDict[dim]["binList"]);
  let buckets=bucketGen(histDict[dim]["values"]);
  console.log(buckets);
  const xScale = d3
  .scaleLinear()
  .domain(histDict[dim]["xrange"])
  .range([pad, w-pad]);
    
  const yScale = d3.scaleLinear()
    .range([h-pad, pad])
    .domain(histDict[dim]["yrange"]);
  console.log(buckets);
let xAxis=d3.axisBottom(xScale);
let yAxis=d3.axisLeft(yScale);
canvas.append('g').style("font", `${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`).call(xAxis).style('color','black').attr('transform','translate(0,'+(h-pad)+')');
canvas.append('g').style("font", `${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`).call(yAxis).style('color','black').attr('transform','translate('+pad+',0)');
  canvas.append("text").attr("x",w/50).attr("y",w<400?25:40*h/500).text("Count").style("font", `${w<h?(w/77+h/77):((w>700?w/93:w/83)+h/83)}px nunito`);

canvas.append("text").attr("x",0.72*w).attr("y",50*h/450).text("Mean: "+histDict[dim]["stats"]["Mean"]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
canvas.append("text").attr("x",0.72*w).attr("y",60*h/450).text("SD: "+histDict[dim]["stats"]["SD"]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
canvas.append("text").attr("x",0.72*w).attr("y",70*h/450).text("Min.: "+histDict[dim]["stats"]["Min."]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
canvas.append("text").attr("x",0.72*w).attr("y",80*h/450).text("25%: "+histDict[dim]["stats"]["25%"]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
canvas.append("text").attr("x",0.72*w).attr("y",90*h/450).text("Median: "+histDict[dim]["stats"]["Median"]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
canvas.append("text").attr("x",0.72*w).attr("y",100*h/450).text("75%: "+histDict[dim]["stats"]["75%"]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
canvas.append("text").attr("x",0.72*w).attr("y",110*h/450).text("Max.: "+histDict[dim]["stats"]["Max."]).style("font",`${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`);
let data=[];
for(let i=0; i<buckets.length;i++){
  data.push([h-pad-yScale(buckets[i].length),i*(xScale(histDict[dim]["binList"][2])-xScale(histDict[dim]["binList"][1]))]);
}

canvas.selectAll("rect").data(data).enter().append("rect").attr("y",(item)=>h-pad-item[0]).attr("x",(item)=>pad+item[1]).attr("width",
xScale(histDict[dim]["binList"][2])-xScale(histDict[dim]["binList"][1]))                    .attr("height",(item)=>item[0]).attr("fill",histDict[dim]["barColor"]).attr("stroke","black");
}
showDimension(dim);

return(
<><div className="bars"><select id="selectButton" value={dim} onChange={handleChange}>
  <option value="danceability">Danceability</option><option value="energy">Energy</option><option value="loudness">Loudness (dB)</option>
<option value="acousticness">Acousticness</option>
<option value="instrumentalness">Instrumentalness</option><option value="valence">Valence</option><option value="liveness">Liveness</option>
  <option value="speechiness">Speechiness</option><option value="tempo">Tempo (bpm)</option>
  <option value="duration_s">Duration (s)</option></select></div>
</>)
}

export default Histogram;