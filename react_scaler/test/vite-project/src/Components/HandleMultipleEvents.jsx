import { useState } from "react";

function HandleMultipleEvents(){
    const [count,setcount] = useState(0)
    const[factor,setfactor]=useState(0)
    function IncrementCount(){
        setcount(count+factor)
    }
    function DecrementCount(){
        setcount(count-factor)
    }
    function IncrementFactor(){
        setfactor(factor+1)
    }
    function DecrementFactor(){
        setfactor(factor-1)
    }
    return(
        <div>
            <h1>This is My Factor count :{factor}</h1>
            <button onClick={IncrementFactor}>Increment</button>
            <button onClick={DecrementFactor}>Decrement</button>
            <h1>This is my Clicked Count : {count}</h1>
            <button onClick={IncrementCount}>Increment</button>
            <button onClick={DecrementCount}>Decrement</button>
            
        </div>
    )
}
export default HandleMultipleEvents


