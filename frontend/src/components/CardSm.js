const CardSm = ({name, image, height, width}) => {
    return(
        <div class="cardSmCont" id={name}>
            <img src={image} height={height} width={width} />
            
        
        </div>
    )
    //const image = logo +'.png' // adds the .png to the end of the path for the logo
    //console.log(image)
}
export default CardSm