function Properties(){
    let fruitName = "Orange"
    function Fruit(){
        return 'The fruit is Tasty'
    }
    return (
        <h1>This {fruitName} Rate is {90+10} and {Fruit()}</h1>
    )
}
export default Properties