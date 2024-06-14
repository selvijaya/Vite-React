function RenderingArrayElements(){
    const Animals = ["Cat","Dog","Tiger","Lion"]
    return(
        <ol>
        {Animals.map((animal)=>(
            <li>{animal}</li>
        ))}
        </ol>
    )
}
export default RenderingArrayElements



