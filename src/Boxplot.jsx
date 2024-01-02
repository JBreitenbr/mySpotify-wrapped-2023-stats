import * as d3 from 'd3';
import { useEffect,  useState } from "react";
import "./App.css";
import {boxDict} from './boxDict';
import {boxHash} from './boxHash';
import {boxData} from './boxData';
let colorHash={"danceability":1,"energy":2,"loudness":3,"speechiness":4,"acousticness":5,"instrumentalness":6,"liveness":7,"valence":8,"tempo":9,"duration_s":10};
const Boxplot = () => {
  let [dim,setDim]=useState("danceability");
const handleChange = (event) => {
setDim(event.target.value);
};
  
function showDimension(dim){
d3.select("#canvas").remove();
let canvas=d3.select("body").append("svg")
.attr("id","canvas");
let toolTip=d3.select("body").append("div").attr("id","tooltip");
let w=+d3.select("#canvas").style("width").slice(0,-2);
let h=+d3.select("#canvas").style("height").slice(0,-2); 
let pad=(3/35)*w;
let colorObj={};   colorObj[1]=d3.scaleSequential().interpolator(d3.interpolatePurples);   colorObj[2]=d3.scaleSequential().interpolator(d3.interpolateBlues);    colorObj[3]=d3.scaleSequential().interpolator(d3.interpolateGreens);
colorObj[4]=d3.scaleSequential().interpolator(d3.interpolateOranges);
colorObj[5]=d3.scaleSequential().interpolator(d3.interpolateReds);
colorObj[6]=d3.scaleSequential().interpolator(d3.interpolateYlOrBr);
colorObj[7]=d3.scaleSequential().interpolator(d3.interpolateBuGn);
colorObj[8]=d3.scaleSequential().interpolator(d3.interpolateBuPu);
colorObj[9]=d3.scaleSequential().interpolator(d3.interpolateOrRd);
colorObj[10]=d3.scaleSequential().interpolator(d3.interpolatePuRd);
    for(let i=1; i<11;i++){
      colorObj[i].domain([0,100]);
    }

let xScale=d3.scaleLinear().domain([0,5]).range([pad,w-pad]);

let yScale = d3.scaleLinear().domain(boxDict[dim]["yrange"]).range([h-pad,pad]);
console.log(h-pad-yScale(boxDict[dim]["stats"]["75%"]));
console.log(h-pad-yScale(boxDict[dim]["stats"]["25%"]));
canvas.append("line")         
        .style("stroke", "black") 
        .attr("x1", xScale(2.35))     
        .attr("y1", yScale(Math.min(boxDict[dim]["stats"]["upper"],boxDict[dim]["yrange"][1]))).attr("x2", xScale(2.35)).attr("y2", yScale(boxDict[dim]["stats"]["75%"]));
canvas.append("line")         
        .style("stroke", "black") 
        .attr("x1", xScale(2.0))     
        .attr("y1", yScale(Math.min(boxDict[dim]["stats"]["upper"],boxDict[dim]["yrange"][1])))            .attr("x2", xScale(2.7))    
        .attr("y2", yScale(Math.min(boxDict[dim]["stats"]["upper"],boxDict[dim]["yrange"][1]))) ;
    canvas.append("rect").attr("x",xScale(0.5)).attr("y",yScale(boxDict[dim]["stats"]["75%"])).attr("width",xScale(4.2)-xScale(0.5)).attr("height",yScale(boxDict[dim]["stats"]["25%"])-yScale(boxDict[dim]["stats"]["75%"])).attr("fill",colorObj[colorHash[dim]](10)).style("opacity",0.5).attr("stroke","black").attr("stroke-width",1);
    canvas.append("line")         
    .style("stroke", "black") 
    .attr("x1", xScale(0.5))     
    .attr("y1", yScale(boxDict[dim]["stats"]["median"]))            .attr("x2", xScale(4.2))    
    .attr("y2", yScale(boxDict[dim]["stats"]["median"]));
canvas.append("line")         
        .style("stroke", "black") 
        .attr("x1", xScale(2.35))     
        .attr("y1", yScale(Math.max(boxDict[dim]["stats"]["lower"],boxDict[dim]["yrange"][0])))           .attr("x2", xScale(2.35))    
        .attr("y2", yScale(boxDict[dim]["stats"]["25%"]));
canvas.append("line")         
        .style("stroke", "black") 
        .attr("x1", xScale(2.0))     
        .attr("y1",        yScale(Math.max(boxDict[dim]["stats"]["lower"],boxDict[dim]["yrange"][0])))  .attr("x2", xScale(2.7))    
        .attr("y2",yScale(Math.max(boxDict[dim]["stats"]["lower"],boxDict[dim]["yrange"][0])))
let yAxis=d3.axisLeft(yScale);
canvas.append('g').style("font", `${w<h?(w/88+h/88):((w>700?w/110:w/93)+h/93)}px nunito`).call(yAxis).style('color','black').attr('transform','translate('+pad+',0)');
    canvas.selectAll('circle')
          .data(boxData)
          .enter()
          .append('circle')
          .attr('cx',(item)=>xScale(item[20])).attr('cy',(item)=>yScale(item[boxHash[dim]])).attr('r',(item)=>item[4]/3.8*h/450).attr("fill",(item)=>colorObj[colorHash[dim]](item[3])).attr("stroke","black").attr("stroke-width",1).on("mouseover",(event,item)=>{return toolTip.style("visibility","visible").html("Track: "+item[1]+"<br>" + "Artist: "+item[0]+"<br>"+"Release Year: "+item[2]+"<br>"+"Popularity (Spotify): "+item[3]+"<br>"+"Rank (Julia): "+item[6]+"<br>"+dim.slice(0,1).toUpperCase()+dim.slice(1)+": "+item[boxHash[dim]]).style("left",event.pageX-20 +"px").style("top","10vh").style("background-color",colorObj[colorHash[dim]](5)).style("border",`solid 2px ${colorObj[colorHash[dim]](100)}`).style("color",colorObj[colorHash[dim]](100))}).on("mouseleave",()=>{return toolTip.style("visibility","hidden")});
  };
  
showDimension(dim);
return(
<><div><select id="selectButton" value={dim} onChange={handleChange}>
  <option value="danceability">Danceability</option><option value="energy">Energy</option><option value="loudness">Loudness (dB)</option>
<option value="acousticness">Acousticness</option>
<option value="instrumentalness">Instrumentalness</option><option value="valence">Valence</option><option value="liveness">Liveness</option>
  <option value="speechiness">Speechiness</option><option value="tempo">Tempo (bpm)</option>
  <option value="duration_s">Duration (s)</option>
</select></div></>)
}

export default Boxplot;

