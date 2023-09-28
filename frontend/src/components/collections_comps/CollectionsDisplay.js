import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

const CollectionsDisplay = () => {
    const [collections, setCollections] = useState(null)

    //Backend Call
    const colURL = "https://fortis-backend-c8c49038070a.herokuapp.com/collections/"

    // Function that GETS a list of the collections
    const getCollections = async () => {
        const response = await fetch(colURL)
        const data = await response.json()
        setCollections(data.data)
    }

    useEffect(() => {
        getCollections()
    },[])

    const Loaded = () =>{
        console.log(collections)
       
        const displayCollections = collections.map((ele, index) => {
            return(
                
                <h2>{ele.name}</h2>
            )

        })
        return (
            <div>
                {displayCollections}
            </div>
        )

    }
    const Loading = () => {
        return(
            <h3>Fetching Collections</h3>
        )

    }
    // Returns Loading if collections is null, Return Loaded once collections is populated with data
    return collections ? Loaded() : Loading()
}
export default CollectionsDisplay