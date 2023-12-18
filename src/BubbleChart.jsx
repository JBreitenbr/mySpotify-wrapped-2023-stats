import * as d3 from 'd3';
import { useEffect, useRef } from "react";
import "./App.css";
import {bubbleData} from './bubbleData';
const BubbleChart = () => {
  const svgRef = useRef();
  const tooltipRef = useRef();
  useEffect(() => {
d3.select("#canvas").remove();
let canvas=d3.select(svgRef.current).append("svg").attr("id","canvas_b");
let toolTip=d3.select(tooltipRef.current).append("div").attr("id","tooltip");
let w=+d3.select("#canvas_b").style("width").slice(0,-2);
let h=+d3.select("#canvas_b").style("height").slice(0,-2); 
let pad=(3/35)*w;
let colorObj={};
    colorObj[1]=d3.scaleSequential().interpolator(d3.interpolatePurples);
    colorObj[2]=d3.scaleSequential().interpolator(d3.interpolateBlues);
    colorObj[3]=d3.scaleSequential().interpolator(d3.interpolateGreens);
    colorObj[4]=d3.scaleSequential().interpolator(d3.interpolateOranges);
    colorObj[5]=d3.scaleSequential().interpolator(d3.interpolateReds);
    colorObj[6]=d3.scaleSequential().interpolator(d3.interpolateYlOrBr);
    for(let i=1; i<7;i++){
      colorObj[i].domain([0,100]);
    }
let years=[1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1982, 1983, 1984, 1985, 1988, 1993, 1994,2001, 2005, 2023];
let xScale=d3.scaleBand().domain([0,1,2,3,4,5,6,7,8,9,10,11,12,13]).range([pad,w-pad]).padding(0);

let yScale = d3.scaleBand().domain(years).range([pad,h-pad]).padding(0);
/*
let yAxis=d3.axisLeft(yScale).tickFormat(d3.format('d'));*/
    
let d=yScale(1965)-yScale(1964);
let c=yScale(2001);
for(let i=0; i<=26;i++){
canvas.append("text").text(years[i]).attr("x",7).attr("y",yScale(years[i])+0.73*d).style("font","12px arial").style("font-weight",500);
}
    canvas.append("line")         
        .style("stroke", "black") 
        .attr("x1", 7)     
        .attr("y1", c)     
        .attr("x2", 300)    
        .attr("y2", c);
    canvas.selectAll('circle')
          .data(bubbleData)
          .enter()
          .append('circle')
          .attr('cx',(item)=>xScale(item[5])).attr('cy',(item)=>yScale(item[2])+0.5*d).attr('r',(item)=>item[4]/4).attr("fill",(item)=>colorObj[item[6]](item[3])).attr("stroke","black").attr("stroke-width",1).on("mouseover",(event,item)=>{return toolTip.style("visibility","visible").html("Track: "+item[1]+"<br>" + "Artist: "+item[0]+"<br>"+"Release Year: "+item[2]+"<br>"+"Popularity (Spotify): "+item[3]+"<br>"+"Rank (Julia): "+item[7]).style("left","96px").style("top","378px")}).on("mouseleave",()=>{return toolTip.style("visibility","hidden")});
  },[]);
  return (<><div id="tooltip" ref={tooltipRef}></div><svg id="canvas_b" ref={svgRef} /></>);
}

export default BubbleChart;