import React, { useEffect, useState } from "react";


function PupCard({displayDetails, pupArray, setPupArray}) {
const {id, name, isGoodDog, image} = displayDetails
const [dogDeets, setDogDeets] = useState({
    id: '',
    name: '' ,
    isGoodDog: false,
    image: ''
})
    useEffect(() => {
           setDogDeets({
            id: id,
            name: name,
            isGoodDog: isGoodDog,
            image: image
           })
    },[displayDetails])

    function goodBad(status, id){
        setDogDeets({...dogDeets, isGoodDog: !status})
        fetch(`http://localhost:3001/pups/${id}`, {
        method: 'PATCH',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({isGoodDog: !status})
        })

            }
    
    return (
<div>
    <img src={dogDeets.image}></img>
    <h2>{dogDeets.name}</h2>
    {dogDeets.name ? 
    <button onClick={e => goodBad(dogDeets.isGoodDog, dogDeets.id)}>
    {dogDeets.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button> :
     null}
</div>
    )
}

export default PupCard