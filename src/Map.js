import React, {useState} from 'react'

const Map = ()=>{
    const[points, setPoints] = useState([])
    fetch('http://localhost:8080/map-points')
    .then(response => response.json())
    .then(json=> setPoints(json))
    const listItems = points.map((point) =>{
            return <circle key={point.id} cx={(3840.0/2.0) - point.x/5.0} cy={(2160.0/2.0) - point.y/5.0} r="1" fill='blue'/>
        }
    );
    // .then(data => console.log(data));    
    return (
        <div>
            <svg version="1.1" baseProfile="full" 
                width="3840" height="2160">
                <rect width="100%" height="100%" fill="darkgrey"></rect>         
                {listItems}
            </svg>
        </div>
        )
}

export default Map