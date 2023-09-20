// Element that will display all the different card series and cards within that series
// Will also display results of searching for a specific card/cards

// Imports
import CardSm from "./CardSm";
const ShowSearch = () => {
    const url = `https://api.tcgdex.net/v2/en/sets`
    // fetchs the set data
    const getSets = async () =>{
        const response = await fetch(url)
        const data = await response.json()
        // Console Log to make sure the data from the API is coming through
        console.log(`This is the Data`)
        console.log(data)
        console.log(data[0].name)
        
        
    }
    getSets()
    return(
        
        <p>results</p>

    )
    

}
export default ShowSearch