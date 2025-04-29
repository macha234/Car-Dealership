import { useState, useEffect } from "react"
function Jokes() { 
    
const [joke, setJoke] = useState({})

async function fetchJoke() {
    const data = await fetch("https://api.chucknorris.io/jokes/random") 

    const response = await data.json()
console.log(response)
    setJoke(response)
}
   useEffect(() => {
    fetchJoke()
   }, []) 


    return(
        <div className="Jokes">

    <p className="par">{joke.value}</p>

        </div>
    )
} export default Jokes
