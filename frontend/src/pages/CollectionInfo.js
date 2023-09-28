// Shows info and cards on the selected collection
import CollectionDisplayInfo from "../components/collections_comps/CollectionDisplayInfo"

import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const CollectionInfo = () => {
    
    const params = useParams()
    const [collection, setCollection] = useState(null)
    const url = `https://fortis-backend-c8c49038070a.herokuapp.com/collections/${params.id}`
    //console.log(url)
    
    // Gets the collection to display
    const getCollection = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setCollection(data.data)
    }

    useEffect(() => {
        getCollection()

    },[])
    //console.log(collection)
    
    
    return(
        <h1>
            <CollectionDisplayInfo col={collection}/>
            

        </h1>
        
    )


}
export default CollectionInfo