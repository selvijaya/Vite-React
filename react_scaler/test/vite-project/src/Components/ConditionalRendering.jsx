function ConditionalRendering({Name,Price}){
    return(
        // <h1>{Name} and {Price} </h1>
        <li>{Price>100? <h2>{Name} and {Price}</h2>:" " }</li>
    )
}
export default ConditionalRendering