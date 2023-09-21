const CardSm = ({name, symbol}) => {
    const image = symbol +'.png'
    console.log(image)
    return(
        
        <div class="cardSmCont">
            <h1>{name}</h1>
            <img src={image}></img>
        
        </div>
    )
}
export default CardSm