import React,{useState} from "react";
import './App.css';

function App() {


  const [min ,setMin] =useState("");
  const [max ,setMax] =useState("");
  const [randomnum ,setRandomnum] =useState("0");
  const giveRandomnumber=()=>{
    setRandomnum(Math.floor(Math.random()*(min-max +1)+max))
  }



  return (
    <div className="App">
      <div className="container">
        <div className="randomNum">
          <p>Random Num : {randomnum}</p> 
        </div>



      
      <div className="numContainer">
        <div>
          <p>min: {min}</p>
          <input onChange={e=>setMin(+e.target.value)}value={min} type="number"/>
        </div>
        <div>
          <p>max: {max}</p>
          <input onChange={e=>setMax(+e.target.value)}  value={max} type="number"/>
        </div>
        

         </div>

      <button className="duyme" onClick={giveRandomnumber}>Get Rundom Numbers</button>
     
       
    </div>
      </div>




  );
}

export default App;
