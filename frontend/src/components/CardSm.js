const CardSm = ({name, logo}) => {
    const image = logo +'.png' // adds the .png to the end of the path for the logo
    //console.log(image)
    
    return(
        
        <div class="cardSmCont" id={name}>
            <h1>{name}</h1>
            
        
        </div>
    )
}
export default CardSm