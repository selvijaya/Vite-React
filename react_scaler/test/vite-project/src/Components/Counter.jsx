import {useState} from "react";

const Counter =()=>{
    const [count,setcount] = useState(0)
    function IncrementCount(){
        setcount(count+1)
    }
    function DecrementCount(){
        setcount(count-1)
    }
    return(
        <div>
            <h1>This is Clicked Count:{count}</h1>
            <button onClick={IncrementCount}>Increment</button>
            <button onClick={DecrementCount}>Decrement</button>
        </div>
    )
}
export default Counter