// Route to get the data from props props.col.data
import CollectionDisplayCards from "./CollectionDisplayCards"
import CollectionCardModal from "../complete-modals/CollectionCardModal"
import {useState, useEffect} from "react"
import { Container } from "react-bootstrap"

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
            <Container className="text-center">
            <Container className="d-flex-flex-column">
                <h1 className="m-0">{toDisplay.name}</h1>
                <p className="m-0 fs-6 text-secondary">{toDisplay.description}</p>
            </Container>
            <CollectionDisplayCards cards={toDisplay.cards}/>
            </Container>
            
        )

    }
    return toDisplay ? loaded() : loading()

}
export default CollectionDisplayInfo