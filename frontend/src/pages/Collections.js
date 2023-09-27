import { useState, useEffect } from "react"

const Collections = () => {
    const [collections, setCollections] = useState(null)

    const collectionURL = "http://localhost:4000/collections/"

    //Collection crud
    const getCollections = async () => {
        const response = await fetch(collectionURL)
        const data = await response.json()
        setCollections(data.data)
    }

    const createCollection = async (collection) => {
        await fetch(collectionURL, {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(collection)
        })

        getCollections()
    }

    const updateCollection = async (collection, id) => {
        await fetch(collectionURL + id, {
            method:"put",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(collection)
        })

        getCollections()
    }

    const deleteCollection = async () => {
        await fetch(collectionURL + id, {
            method: "delete"
        })

        getCollections()
    }

    useEffect(() => {
        getCollections()
    }, [])

    return (
        <h1>Card Collections</h1>
    )
}
export default Collections
