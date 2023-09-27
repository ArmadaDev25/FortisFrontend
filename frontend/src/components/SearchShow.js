// Element that will display all the different card series and cards within that series
// Will also display results of searching for a specific card/cards

// Imports
import CardSm from "./CardSm";
import {useState, useEffect} from 'react' // State import
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button'
const ShowSearch = () => {
    const params = useParams()
    //console.log(params.input)
    const setsurl = `https://api.tcgdex.net/v2/en/sets/`
    
    // Refresh page Function   
    //console.log(url)   
    // useState variables
    const [cardEl, setCardEl] = useState(null)// contains the information pulled from the Pokemon API 
    const [displayState, setDisplay] = useState(null) // Contains information on what is being displayed false means the sets are displayed, true means the cars in the set are displayed
    // fetchs the set data
    const someData = {
        stuff: 1
    }
    
    const getSets = async () =>{
        const response = await fetch(setsurl)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        //console.log(`This is the Data`)
        //console.log(data)
        //console.log(data[0].name)
        setCardEl(data)  
    }
    const getCards = async () => {
        console.log(params.input)
        const cardurl = await `https://api.tcgdex.net/v2/en/sets/${params.input}` 
        const response = await fetch(cardurl)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        //console.log(`This is the Data`)
        //console.log(data)
        //console.log(data[0].name)
        setCardEl(data.cards)
    }
    const changeDisplayState = () => {
        setDisplay({displayState : true})
        console.log('test')
    }
    // Setting State
    useEffect(() => {
        params.input ? getCards() : getSets()  
    }, [displayState])
    //console.log('CardEl Value')
    //console.log(cardEl)
    // Logic that loads when data is avalible
    const Loaded = () => {
        //console.log(useState)
        //console.log(displayState)
        //console.log(params.input)
        //changeDisplayState()
        // Display Sets Function
        console.log(cardEl)
        const displaySets = () => {
            const displaySetArray = cardEl.map((ele, index) => {
                if(ele.logo || ele.image){
                    return(
                        <button onClick={changeDisplayState}>
                            <Link to={`/search/set/${ele.id}`}> 
                                <CardSm
                                    image={ele.logo ? `${ele.logo}.png` : `${ele.image}/low.png`}
                                    height={ele.logo ? '100px' : '300px'}
                                    width={ele.logo ? `200px` : `200px`}
                                    name={ele.name}
                                    key={index}
                                    
                                />
                            </Link>
                        </button>
                        
                    )
                }
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
        return displayState ? displaySets() : displaySets()
    }
    const Loading = () => {
        return(
            <h1>Fetching Data</h1>
        )
    }
    return cardEl ? Loaded() : Loading()
}
export default ShowSearch