
import {useState, useEffect} from "react"


export default function CardJokes(){ 
    const [jokes, setjokes] = useState(null) 

    useEffect(() =>{
        fetch ("https://icanhazdadjoke.com",{headers:{
            "Accept":"application/json"}
            
        })
        
        .then(res => res.json())
        .then (data => setjokes(data))
        .catch (error => error) 
    }, []);

    const test = () => {
        fetch ("https://icanhazdadjoke.com",{headers:{
           "Accept":"application/json" 
            }  
       }) 

        .then(res => res.json())
        .then (data => setjokes(data))

    }  

        return ( 

            <div className="card-jokes"> 
                <p>{jokes? jokes.joke : "."}</p> 
                <button onClick={test}>Next</button> 
            </div>
            
        )
}

