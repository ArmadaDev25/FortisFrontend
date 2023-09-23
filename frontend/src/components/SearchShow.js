// Element that will display all the different card series and cards within that series
// Will also display results of searching for a specific card/cards

// Imports
import CardSm from "./CardSm";
import {useState, useEffect} from 'react' // State import
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"

const ShowSearch = () => {
    const params = useParams()
    console.log(params.input)
    const setsurl = `https://api.tcgdex.net/v2/en/sets/`
    const cardurl = `https://api.tcgdex.net/v2/en/sets/` + params.input
    // Refresh page Function   
    //console.log(url)   
    // useState variables
    const [cardEl, setCardEl] = useState(null)// contains the information pulled from the Pokemon API 
    const [displayState, setDisplay] = useState(false) // Contains information on what is being displayed false means the sets are displayed, true means the cars in the set are displayed
    // fetchs the set data
    const getSets = async () =>{
        const response = await fetch(setsurl)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        console.log(`This is the Data`)
        console.log(data)
        //console.log(data[0].name)
        setCardEl(data)  
    }
    const getCards = async () => {
        const response = await fetch(cardurl)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        console.log(`This is the Data`)
        console.log(data)
        //console.log(data[0].name)
        setCardEl(data.cards)
    }
    // Setting State
    useEffect(() => {
        getSets()
        //params.input ? getCards() : getSets()  
    }, [])
    console.log('CardEl Value')
    console.log(cardEl)
    // Logic that loads when data is avalible
    const Loaded = () => {
        console.log(useState)
        console.log(displayState)
        // Display Sets Function 
        const displaySets = () => {
            const displaySetArray = cardEl.map((ele, index) => {
                return(
                    <button onClick={getCards}>
                        <Link to={`/search/set/${ele.id}`}>
                            <CardSm
                                {...ele}
                                key={index}
                            />
                        </Link>
                    </button>
                    
                )
            })
            return(
                <div>
                    {displaySetArray}
                </div>
            )
        }
        // Display Cards Function
        const displayCards = () => {
            const displayCardArray = cardEl.map((ele, index) =>{
                return (
                    <Link to={`/search/set/${ele.id}` }>
                        <CardSm
                            {...ele}
                            key={index}
                        />
                        
                    </Link>
                )
            })
            return(
                <div>
                    {displayCardArray}
                </div>
            )
        } 
        return displayState ? displaySets() : displayCards()
    }
    const Loading = () => {
        return(
            <h1>Fetching Data</h1>
        )
    }
    return cardEl ? Loaded() : Loading()
}
export default ShowSearch