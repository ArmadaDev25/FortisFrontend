import { Image, Row } from "react-bootstrap"

const CardSm = ({name, image}) => {
    return(
        <div class="cardSmCont d-flex flex-column align-items-center justify-content-between text-info" id={name}>
            <Row className="justify-self-center h-75">
                <Image fluid
                    src={image}
                    className="set-display object-fit-contain"
                />
            </Row>
            <Row className="d-flex flex-column justify-self-end m-0 h-25">
                <p>{name}</p>
            </Row>
        </div>
    )
    //const image = logo +'.png' // adds the .png to the end of the path for the logo
    //console.log(image)
}
export default CardSm