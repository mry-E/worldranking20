import Header from "./components/Header";
import Footer from "./components/Footer";
import WorldMap from "./components/WorldMap";
import React ,{useState,useEffect } from "react";
import BarChart from "./components/BarChart";

function App(){
    const [data,setData] = useState([]);
    const [type,setType] = useState("GDP");
    const [year,setYear] = useState("2019");
    useEffect(() => {
        (async () => {
          const request = await fetch(`data/${type}/${year}.json`);
          const data = await request.json();
          setData(data);
        })();
      },[type,year]);

      const handleTypeChange = (e) => {
          setType(e.target.value);
      }
      
      const handleYearChange = (e) => {
          setYear(e.target.value);
      }
    return(
        <div>
            <Header />  
            <div class="select is-primary is-medium">
                <select name="type" value={type} onChange={handleTypeChange}>
                    <option value="GDP">GDP</option>
                    <option value="Population">人口</option>
                    <option value="Aging">高齢化率</option>
                    <option value="CO2">二酸化炭素排出量</option>
                    <option value="Income">平均年収</option>
                    <option value="Lifespan">平均寿命</option>
                    <option value="Tax">消費税</option>
                </select>
            </div>
            <div class="select is-primary is-medium">
                <select name="year" value={year} onChange={handleYearChange}>
                    <option>2000</option>
                    <option>2005</option>
                    <option>2010</option>
                    <option>2015</option>
                    <option>2019</option>
                </select>
            </div>
                <div className="card" style={{ width:"100%" ,height: "50%"}}>
                    <div className="card-content">
                        <div className="content">
                            <WorldMap data={data}/>
                        </div>
                    </div>
                </div>
            <div className="card" style={{ width:"100%" ,height: "50%"}}>
                <div className="card-content">
                    <div className="content">
                        <BarChart data={data} type={type}/>
                    </div>
                </div>
            </div>
            <Footer />  
        </div>
    );
}

export default App;