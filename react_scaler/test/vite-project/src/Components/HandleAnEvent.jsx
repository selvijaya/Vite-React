function HandleAnEvent(){
    function SayHello(){
        console.log('Hello')
    }
    return(
        <button onClick={SayHello}>Say Hello To Me</button>
    )
}
export default HandleAnEvent