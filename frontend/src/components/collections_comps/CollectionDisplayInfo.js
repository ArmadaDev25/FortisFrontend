// Route to get the data from props props.col.data
import CollectionDisplayCards from "./CollectionDisplayCards"
import {useState, useEffect} from "react"
const CollectionDisplayInfo = ({col}) => {
    console.log(col)
    const [toDisplay, setDisplay] = useState(null)
    
    const setData = () => {
        setDisplay(col)
        //setCards(col.cards)

    }

    useEffect(()=>{
        setData()
    })
    console.log(toDisplay)
    
    const loading = () => {
        return(
            <h1>Loading Collection Info</h1>
        )

    }
    const loaded = () => {
        return(
            <div>
                <h1>{toDisplay.name}</h1>
                <p>{toDisplay.description}</p>
                <CollectionDisplayCards cards={toDisplay.cards}/>
                
                
                

            </div>
            
        )

    }
    return toDisplay ? loaded() : loading()


  



    

   

}
export default CollectionDisplayInfo