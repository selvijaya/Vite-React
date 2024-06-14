//props and reuseability

function Reuse(prop){
    return(
        <h1>My Name is {prop.Name} and my phone number is {prop.phone}</h1>
    )
}

//destucturing reuse
// function Reuse({Name,phone}){
//     return <h1>My Name is {Name} and my phone number is {phone}</h1>
// }
export default Reuse