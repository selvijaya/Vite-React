import { useState } from "react";

function HandleMultipleInputs(){
    const [name,setName] =useState({firstName:'',lastName:''})
    
    function onsubmit(e){
        e.preventDefault()
        console.log(name)
    }
    return(
        <div>
            <h1>{name.firstName} {name.lastName}</h1>
            <form>
                <label>FirstName</label>
                <input onChange={(e)=>setName({...name,firstName:e.target.value })} type="text" value={name.firstName}/>
                <label>LastName</label>
                <input onChange={(e)=>setName({...name,lastName:e.target.value})} type="text" value={name.lastName}/>
                <button onClick={(e)=>onsubmit(e)}>Submit</button>
            </form>
        </div>
    )
}
export default HandleMultipleInputs