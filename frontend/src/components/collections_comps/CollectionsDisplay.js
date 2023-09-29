import {useState, useEffect} from "react"
import { Button } from "react-bootstrap"
import {Link} from "react-router-dom"

const CollectionsDisplay = (props) => {
    const [collections, setCollections] = useState(null)

    //Backend Call
    const colURL = "https://fortis-backend-c8c49038070a.herokuapp.com/collections/"

    // Function that GETS a list of the collections
    // const getCollections = async () => {
    //     const response = await fetch(colURL)
    //     const data = await response.json()
    //     setCollections(data.data)
    // }

    // useEffect(() => {
    //     getCollections()
    // },[])

    const handleDeletion = (e) => {
        e.preventDefault()
        props.deleteCollection(e.target.value)
    }

    const Loaded = () =>{
        console.log(collections)
       
        const displayCollections = props.collections.map((ele, index) => {
            return(
                <>
                    <Link to={`/collections/${ele._id}`}>
                        <h2>{ele.name}</h2>
                        <p>{ele.cards.length} cards in collection</p>
                    </Link>
                    <Button variant="danger" value={ele._id} onClick={(e)=>handleDeletion(e)}>
                        Delete Collection
                    </Button>
                </>
                
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
    return props.collections ? Loaded() : Loading()
}
export default CollectionsDisplay