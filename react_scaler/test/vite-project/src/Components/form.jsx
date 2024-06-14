import { useState } from "react"

function Form(){
    const [text,SetText] = useState('')
    // function Changehandler(e){
    //     SetText(e.target.value)
    //     console.log(e)
    // }
    return(
        <form>
            <input onChange={(e)=>SetText(e.target.value)} type="text" value={text}/>
            <h1>{text}</h1>
        </form>
    )
}
export default Form