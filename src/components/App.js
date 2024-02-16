import React, { useEffect, useState } from "react";
import PupCard from "./PupCard";

function App() {

  const [pupArray, setPupArray] = useState([])
  const [displayDetails, setDisplayDetails] = useState({})
  const [filterDogs, setFilterDogs] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:3001/pups`)
    .then(r => r.json())
    .then(d => setPupArray(d))
  },[])

  let newArray = pupArray.filter((dog) => {if (filterDogs === true) {
     return dog.isGoodDog === true 
  } else {return dog}
})



function displayInfo(id){
  setDisplayDetails(pupArray.find((pup) => pup.id === id))
  
}

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter" onClick={() => setFilterDogs(prev => !prev)}>{filterDogs ? 'Filter good dogs: ON' : 'Filter good dogs: OFF'}</button>
      </div>
      <div id="dog-bar">
        {newArray.map((pup)=> <span key={pup.id} onClick={() => displayInfo(pup.id)}>{pup.name}</span>)}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
         <PupCard displayDetails={displayDetails} pupArray={pupArray} setPupArray={setPupArray}/>
        </div>
      </div>
    </div>
  );
}

export default App;