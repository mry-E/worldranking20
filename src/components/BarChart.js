import React ,{useState,useEffect} from "react";
import * as d3 from "d3";
import "../tooltip.css";

function VerticalAxis({scale,countries}){
    const x = 30;
    const [y1,y2] = scale.range();

    return(
        <g>
            <line x1={x} y1={y1} x2={x} y2={y2-15} stroke="black"/>
            <g>
                {countries.map((item,i) => {
                    return(
                        <g>
                            <line x1={x-5} y1={12.5+i*10} x2={x} y2={12.5+i*10} stroke="black"/>
                            <text 
                            x={x-15}
                            y={12.5+i*10}
                            textAnchor="middle"
                            dominantBaseline="central"
                            fontSize="8"
                            >
                             {item}
                            </text>
                        </g>
                    )
                })}
            </g>
        </g>
    )
}

function HorizontalAxis({scale,type,unit}){
    const y = 210;
    const [x1,x2] = scale.range();
    return(
      <g>
        <line x1={x1} y1={y} x2={x2} y2={y} stroke="black"/>
        <g>
          {scale.ticks().map((x) => {
          return (
          <g transform={`translate(${scale(x)},${y})`}>
            <line x1='0' y1='0' x2='0' y2='5' stroke="black"></line>
            <text 
            x = "0"
            y = "13"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize="8"
          >
            {x}
            </text>
          </g>
          );
        })}
        <text x={x2+20} y={y} textAnchor="middle" dominantBaseline="central" fontSize="8">
            ({unit[type]})
        </text>
        </g>
      </g>
    );
}

function Tooltip ({show,clientX,clientY,country,value}){
    console.log(clientY)
    return (
        <div>
          {show && (
          <div
            id="tooltip"
            style={{ top: `${clientY-150}px`, left: `${clientX+20}px` }}
          >
            {country}
            <br/>
            {value}
          </div>
        )}
        </div>
    );
}

function BarChart({data,type}){
    const unit = {
        "Aging":"%",
        "CO2":"百万トン",
        "GDP":"百万US$",
        "Income":"US$",
        "Lifespan":"歳",
        "Population":"千人",
        "Tax":"%"
    };

    const countries = [];
    for(let i = 0;i < data.length;i++){
        countries[i] = data[i].ISO;
    }
    
    const margin = {top: 20, right: 20, bottom: 30, left: 40}
    const width = 800 - margin.left - margin.right;
    const height = 280 - margin.top - margin.bottom;
    const [clientX,setX] = useState(0);
    const [clientY,setY] = useState(0);
    const [show,setShow] = useState(false);
    const [countryDetail,setCountry] = useState();
    const [value,setValue] = useState(0);

    const xScale = d3.scaleLinear()
          .domain([d3.min(data,function(d) {return d.value;}),d3.max(data,function(d) {return d.value;})])
          .range([30, width-50])
          .nice();
        
    const yScale = d3.scaleBand()
          .padding(0.1)
          .domain(countries)
          .range([0, height]);
    
    const handleMouseOver = (e,item) => {
        setShow(true);
        setX(e.clientX);
        setY(e.clientY);
        setCountry(item.country);
        setValue(item.value);
    }

    const handleMouseMove = (e) => {
        setX(e.clientX);
        setY(e.clientY);
    }

    const handleMouseOut = (e) => {
        setShow(false);
    }
    return(
        <div>
            <svg viewBox={`0 0 ${width} ${height}`}>
            <VerticalAxis scale={yScale}  countries={countries}/>
            <HorizontalAxis scale={xScale} type={type} unit={unit}/>
                <g>
                    {data.map((item,i) => {
                        return(
                            <g>
                                <rect 
                                x="30" 
                                y={10+i*10} 
                                width={xScale(item.value)-50} 
                                height={5} 
                                fill="red"
                                onMouseOver={(e) => handleMouseOver(e,item)}
                                onMouseMove={(e) => handleMouseMove(e)}
                                onMouseOut={(e) => handleMouseOut(e)}
                                />
                            </g>
                        )
                    })}
                </g>
            </svg>
            <Tooltip show={show} clientX={clientX} clientY={clientY} country={countryDetail} value={value.toFixed(3)} />
        </div>
    );
}

export default BarChart;