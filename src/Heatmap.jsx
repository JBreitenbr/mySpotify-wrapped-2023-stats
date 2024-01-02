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
let dims = ["danceability","energy","loudness","speechiness","acousticness","instrumentalness","liveness","valence","tempo","duration_ms"];

let xScale = d3.scaleBand()
  .range([1.5*pad,w-0.5*pad])
  .domain(dims)
  .padding(0.01);
    
let yScale = d3.scaleBand()
  .range([0.8*pad,h-1.2*pad])
  .domain(dims)
  .padding(0.01);
let xAxis=d3.axisBottom(xScale);
let yAxis=d3.axisLeft(yScale);
canvas.append('g').style("font", `${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`).call(xAxis).style("color","darkred").attr('id','x-axis').attr('transform','translate(0,'+(h-1.2*pad)+')').selectAll("text")  
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", ".15em")
    .attr("transform", "rotate(-45)");
canvas.append('g').style("font", `${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`) .call(yAxis).attr('id','y-axis').attr('transform','translate('+1.5*pad+',0)').style("color","darkred");
       
let myColor=d3.scaleLinear().range(["lightyellow","darkred"]).domain([0,0.8]);
canvas.selectAll("rect")
      .data(nested)
      .enter()
      .append("rect")
      .attr("x", (d) =>xScale(d[0]) )
      .attr("y", (d)=>yScale(d[1]) )
      .attr("width", xScale.bandwidth() )
      .attr("height", yScale.bandwidth() )
      .style("fill", (d)=>myColor(Math.abs(d[2]))).attr("stroke","darkred").attr("stroke-width",0.5);
let xdir=xScale(dims[1])-xScale(dims[0]);
let ydir=yScale(dims[1])-yScale(dims[0]);
console.log(xdir);
console.log(ydir);
for(let i=0;i<10;i++){
  for(let j=0;j<10;j++){
    if(i!=j && Math.abs(nested[i+10*j][2])<0.3){
canvas.append("text").
attr("x",xScale(dims[0])+i*xdir).attr("y",yScale(dims[0])+0.5*yScale.bandwidth()+j*ydir+2).style("font", `${w<h?(w/100+h/100):((w>700?w/110:w/93)+h/93)}px arial`)
  .text(nested[i+10*j][2]).style("fill","darkred");   } if(i!=j && Math.abs(nested[i+10*j][2])>=0.3){
canvas.append("text").
attr("x",xScale(dims[0])+i*xdir).attr("y",yScale(dims[0])+0.5*yScale.bandwidth()+j*ydir+2).style("font", `${w<h?(w/100+h/100):((w>700?w/110:w/93)+h/93)}px arial`).text(nested[i+10*j][2]).style("fill","lightyellow");
    }}}

    
},[]);
  return (<div><svg id="canvas_c" ref={svgRef} /></div>);
  }

  export default Heatmap;

