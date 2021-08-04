import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { select } from "d3-selection";
import * as topojson from "topojson";

function DrawWorldMap({features,data}){
  
    const[capitalData,setCapital] = useState([]);
    useEffect(() => {
      (async () => {
        const request = await fetch("/data/worldCapital.json");
        const data = await request.json();
        setCapital(data);
      })();
    },[])

    const useCapital = [];
    data.map((item) => {
      capitalData.map((item2) => {
        if(item2.country_code === item.ISO){
          return useCapital.push(item2)
        }
      })
    })

    const margin ={
        top:0,
        bottom: 0,
        left :0,
        right:0
    };
    const width = 630- margin.left - margin.right;
    const height = 330 - margin.top - margin.bottom;
    const centerPos = [0,0];
    const scale = 100;

    const projection = d3.geoMercator()
                         .center(centerPos)
                         .translate([width/2,height/2+30])
                         .scale(scale);
    
    const path = d3.geoPath().projection(projection);
    
    const  radius = (country) => {
      let r = 0;
      const max = 30;
      const min = 5;
      data.map((item) => {
        if(item.ISO === country){
          r = (max-min)*(item.value-data[data.length-1].value)/(data[0].value-data[data.length-1].value) + min;
        }
      })
      return r;
    }

    return (
        <div select="#map-container">
            <svg  viewBox={`${-margin.left} ${-margin.top} ${width} ${height}`} >
            <g >
          {
            features.map(item => (
              <path
                d={path(item)}
                fill="white"  
                stroke="black"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            ))
          }
          <g>
            {useCapital.map((item) => {
              let ajust = 0;
              if(item.lat > 40 ){
                ajust = -10;
              }else if(item.lat < -40){
                ajust = 10;
              }
              return(
                <g transform={`translate(${width/2},${height/2+30})`}>
                <circle 
                cx={(item.lon*width/2)/180} 
                cy={(-item.lat*height/2)/90+ajust} 
                r={radius(item.country_code)} 
                fill="red" 
                opacity="0.5" 
                onMouseOver={(e) => {console.log(item.lat)}}
                />   
              </g>   
              )         
            })}
          </g>          
        </g>
            </svg>
        </div>
    );
}

function WorldMap ({data}) {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
      (async () => {
        const req = await fetch(`/data/worldmap.json`);
        const data = await req.json();
        const { features } = topojson.feature(data, data.objects.worldmap);
         setFeatures(features);
      })();
    }, []);
    if (features == null) {
      return <p>loading</p>;
    }
    return <DrawWorldMap features={features} data={data}/>;
  };

  export default WorldMap;
  