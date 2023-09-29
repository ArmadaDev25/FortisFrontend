// Element that will display all the different card series and cards within that series
// Will also display results of searching for a specific card/cards

// Imports
import { Container, Card } from "react-bootstrap";
import CardSm from "./CardSm";
import {useState, useEffect} from 'react' // State import
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom"
import { Button, Card, Container, Row, Col, OverlayTrigger, Image } from "react-bootstrap";
import parseAPI from "../middleware/parseAPI";
import CardModal from "./complete-modals/CardModal";
import CardLg from "./CardLg";
import CardDisplay from "./modal-components/CardDisplay";
import PkmActionDetails from "./modal-components/PkmActionDetails"
import TrainerActionDetails from "./modal-components/TrainerActionDetails"
import EnergyActionDetails from "./modal-components/EnergyActionDetails"
const ShowSearch = (props) => {
    const params = useParams()
    console.log(params)
    const setsurl = `https://api.tcgdex.net/v2/en/sets/`

    
    const disStates = {
        sets: 0,
        cards: 1,
        card: 2
    }
    
    // Refresh page Function   
    //console.log(url)   
    // useState variables
    const [cardEl, setCardEl] = useState(null)// contains the information pulled from the Pokemon API 
    const [displayState, setDisplay] = useState(0) // Contains information on what is being displayed false means the sets are displayed, true means the cars in the set are displayed
    // fetchs the set data
    const someData = {
        stuff: 1
    }    
    const getSets = async () =>{
        console.log("Inside 0")
        const response = await fetch(setsurl)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        //console.log(`This is the Data`)
        //console.log(data)
        //console.log(data[0].name)
        setCardEl(data)  
    }
    const getCards = async () => {
        console.log("Inside 1")
        //console.log(params.input)
        //const cardurl = await `https://api.tcgdex.net/v2/en/sets/${params.input}` 
        const response = await fetch(`https://api.tcgdex.net/v2/en/sets/${params.input}`)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        //console.log(`This is the Data`)
        //console.log(data)
        //console.log(data[0].name)
        setCardEl(data.cards)
    }
    const getCard = async () => {
        console.log("Inside 2")
        //console.log(params.input)
        const response = await fetch(`https://api.tcgdex.net/v2/en/sets/${params.input}/${params.card}` )
        const parsedData = await response.json().then((data) => {return parseAPI(data)})
        // Console Log to make sure the data from the API is coming through
        //console.log(`This is the Data`)
        //console.log(data)
        //console.log(data[0].name)
        //const parsedData = parseAPI(data)
        setCardEl(parsedData)
    }

    const changeDisplayStateCards = () => {
        setDisplay((c) => c+1)
        console.log(displayState)
    }
    
    const changeDisplayStateCard = () => {
        console.log("Inside Change!")
        setDisplay(disStates.card)
        console.log(displayState)
    }

    const cardType = (cardData) => {

        if (cardData.category === "Pokemon") {
          return (
            <PkmActionDetails 
              name={cardData.name}
              hp={cardData.hp}
              stage={cardData.stage}
              types={cardData.typing}
              evolveFrom={cardData.evolveFrom}
              abilities={cardData.abilities}
              attacks={cardData.moves}
              resistances={cardData.resistances}
              weaknesses={cardData.weaknesses}
              retreat={cardData.retreat}
            />
          )
        } else if (cardData.category === "Trainer") {
          return (
            <TrainerActionDetails
              name={cardData.name}
              trainerType={cardData.trainerType}
              effect={cardData.effect}
            />
          )
        } else if (cardData.category === "Energy") {
          return (
            <EnergyActionDetails 
              name={cardData.name}
              energyType={cardData.energyType}
              effect={cardData.effect}
            />
          )
        }
    }

    // Setting State
    useEffect(() => {
        console.log("Inside useEffect")
        //params.input ? getCards() : getSets()  
        if (params.input){
            if(params.card){
                getCard()
            }else{
                getCards()
            }
        }else{
            getSets()
        }
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
        //console.log(cardEl)
        const displaySets = () => {
            const displaySetArray = cardEl.map((ele, index) => {
                if(ele.logo || ele.image){
                    if(!displayState){ //Display sets
                        return( 
                            <Card
                            key={index}
                            className="set-card d-flex flex-column justify-content-center col-4 col-md-2 shadow border "
                            onClick={() => changeDisplayState()}
                            >
                            <Link to={`/search/set/${ele.id}`}>
                                <div className="d-flex flex-column">
                                <div className="text-center">
                                    <Card.Img
                                    variant="top"
                                    src={`${ele.logo}.png`}
                                    className="set-logo"
                                    style={{width:"auto", maxWidth: '100%', maxHeight: '100px' }}
                                    />
                                </div>
                                <div className="text-center">
                                    <Card.Title className="fs-6">{ele.name}</Card.Title>
                                </div>
                                </div>
                            </Link>
                            </Card>
                                                    )
                    } else { //Display Cards
                        return(
                            <button>
                                <CardSm
                                    image={`${ele.image}/low.png`}
                                    name={ele.name}
                                    key={index}
                                />
                            </button>
                        )
                    }
                }
            })
            return(
                <Container fluid id="set-array-container" className='d-flex flex-row flex-wrap justify-content-center w-100'>
                    {displaySetArray}
                </Container>
            )
            if (displayState <= 1){
                const displaySetArray = cardEl.map((ele, index) => {
                    if(ele.logo || ele.image){
                        if(displayState === 0){ //Display sets
                            console.log(displayState)
                            return( 
                                <Button onClick={changeDisplayStateCards} className="btn bg-light bg-gradient btn-outline-secondary m-2 shadow ">
                                    <Link to={`/search/set/${ele.id}`}> 
                                        <CardSm
                                            image={`${ele.logo}.png`}
                                            name={ele.name}
                                            key={index}
                                        />
                                    </Link>
                                </Button>
                            )
                        } else if(displayState === 1) { //Display Cards
                            console.log(displayState)
                            return(
                                // <Button onClick={() => changeDisplayStateCards()} className="btn bg-light bg-gradient btn-outline-secondary m-2 shadow ">
                                //     <Link to={`/search/set/${params.input}/${ele.localId}`}> 
                                //         <CardSm
                                //             image={`${ele.image}/low.png`}
                                //             name={""}
                                //             key={index}
                                //         />
                                //     </Link>
                                // </Button>
                                <Button onClick={changeDisplayStateCards} className="btn bg-light bg-gradient btn-outline-secondary m-2 shadow ">
                                    <Link to={`/search/set/${params.input}/card/${ele.localId}`}> 
                                        <CardSm
                                            image={`${ele.image}/low.png`}
                                            name={""}
                                            key={index}
                                        />
                                    </Link>
                                </Button>
                            )
                        }
                    }
                })

                return(
                    <div>
                        {displaySetArray}
                    </div>
                )
            } else {
                console.log(displayState)
                console.log(cardEl)
                return(
                    // <CardModal 
                    //    cardData={cardEl} 
                    //    show={true}
                    // />

                    // <Button>
                    //     <div>{cardEl.name}</div>
                    //     <img src={cardEl.image} />
                    // </Button>

                    <Button>
                        <CardLg
                            props={props}
                            cardData={cardEl}
                            key={0}
                        />
                    </Button>
                    //
                )
            }
            
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
                <Container id="card-array-container"  className='d-flex flex-row flex-wrap justify-content-center w-100'>
                    {displayCardArray}
                </Container>
            )
        } 
        return displaySets()
    }
    const Loading = () => {
        return(
            <h1>Fetching Data</h1>
        )
    }
    return cardEl ? Loaded() : Loading()
}
export default ShowSearch