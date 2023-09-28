// Shows info and cards on the selected collection
import CollectionDisplayInfo from "../components/collections_comps/CollectionDisplayInfo"
import CollectionDisplayCards from "../components/collections_comps/CollectionDisplayCards"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const CollectionInfo = () => {
    
    const params = useParams()
    const [collection, setCollection] = useState(null)

    const url = `https://fortis-backend-c8c49038070a.herokuapp.com/collections/${params.id}`
    console.log(url)
    return(
        <h1>

        </h1>
        
    )


}
export default CollectionInfo