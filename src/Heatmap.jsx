import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import "./App.css";
import {nested} from './nested.js'
const Heatmap = () => {
  const svgRef = useRef();
  useEffect(() => {
d3.select("#canvas").remove();
let canvas=d3.select(svgRef.current).append("svg").attr("id","canvas_c");
let w=+d3.select("#canvas_c").style("width").slice(0,-2);
let h=+d3.select("#canvas_c").style("height").slice(0,-2); 
let pad=(1/6)*w;
let myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
let dims = ["danceability","energy","loudness","speechiness","acousticness","instrumentalness","liveness","valence","tempo","duration_ms"];
/*let myVars2 = ["danceability","energy","loudness","speechiness","acousticness","instrumentalness","liveness","valence","tempo","duration_ms"];*/
let xScale = d3.scaleBand()
  .range([pad,w-pad])
  .domain(dims)
  .padding(0.01);
    
let yScale = d3.scaleBand()
  .range([pad,h-pad])
  .domain(dims)
  .padding(0.01);
let xAxis=d3.axisBottom(xScale);
let yAxis=d3.axisLeft(yScale);
canvas.append('g').style("font","7px times").call(xAxis).attr('id','x-axis').attr('transform','translate(0,'+(h-pad)+')').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)");
canvas.append('g').style("font","6.5px times").call(yAxis).attr('id','y-axis').attr('transform','translate('+pad+',0)').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-35)");
//let myColor=d3.scaleSequential().interpolator(d3.interpolateBlues);
let myColor=d3.scaleLinear().range(["#ddc7bb","#223844"]).domain([0,0.6]);
//myColor(1)="#d7d7d7";
canvas.selectAll("rect")
      .data(nested)
      .enter()
      .append("rect")
      .attr("x", (d) =>xScale(d[0]) )
      .attr("y", (d)=>yScale(d[1]) )
      .attr("width", xScale.bandwidth() )
      .attr("height", yScale.bandwidth() )
      .style("fill", (d)=>myColor(d[2]));
let xdir=xScale(dims[1])-xScale(dims[0]);
let ydir=yScale(dims[1])-yScale(dims[0]);
console.log(xdir);
console.log(ydir);
for(let i=0;i<10;i++){
  for(let j=0;j<10;j++){
    if(i!=j && nested[i+10*j][2]<0){
canvas.append("text").
attr("x",xScale(dims[0])+i*xdir).attr("y",yScale(dims[0])+0.5*yScale.bandwidth()+j*ydir+2).style("font","7px arial").text(nested[i+10*j][2]).style("fill","black");   } if(i!=j && nested[i+10*j][2]>=0){
canvas.append("text").
attr("x",xScale(dims[0])+i*xdir).attr("y",yScale(dims[0])+0.5*yScale.bandwidth()+j*ydir+2).style("font","7px arial").text(nested[i+10*j][2]).style("fill","white");
    }}}

    
},[]);
  return (<div><svg id="canvas_c" ref={svgRef} /></div>);
  }

  export default Heatmap;

