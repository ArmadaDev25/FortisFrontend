// Route to get the data from props props.col.data
import CollectionDisplayCards from "./CollectionDisplayCards"
import CollectionCardModal from "../complete-modals/CollectionCardModal"
import {useState, useEffect} from "react"
import { Container,Image } from "react-bootstrap"

const CollectionDisplayInfo = ({col}) => {
    const [toDisplay, setDisplay] = useState(null)

    const setData = () => {
        setDisplay(col)
        //setCards(col.cards)

    }

    useEffect(()=>{
        setData()
    })
    console.log('toDisplay line at CDI: ', toDisplay)
    
    const loading = () => {
        return(
            <h1>Loading Collection Info</h1>
        )

    }
    const loaded = () => {
        return(
            <Container className="text-center p-1">
                <Container fluid className="d-flex align-items-center flex-column">
                    <Container fluid className="d-flex justify-content-center align-items-center h-100 flex-row">
                        <Image
                            src={toDisplay.img}
                            className=""
                            style={{width:"25px", height:"auto"}} 
                        />
                        {/* <h1 className="mx-2 my-0">{toDisplay.name}</h1> */}
                        <h1 className="mx-2 my-0">{toDisplay.name}</h1>
                        <Image
                            src={toDisplay.img}
                            className=""
                            style={{width:"25px", height:"auto"}} 
                        />
                    </Container>
                        <p className="m-0 fs-6 text-secondary">{toDisplay.description}</p>
                </Container>
                <CollectionDisplayCards cards={toDisplay.cards}/>
            </Container>
            
        )

    }
    return toDisplay ? loaded() : loading()

}
export default CollectionDisplayInfo