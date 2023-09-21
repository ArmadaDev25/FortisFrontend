const CardSm = ({name, logo}) => {
    const image = logo +'.png' // adds the .png to the end of the path for the logo
    console.log(image)
    return(
        
        <div class="cardSmCont">
            <h1>{name}</h1>
            <img src={image}></img>
        
        </div>
    )
}
export default CardSm