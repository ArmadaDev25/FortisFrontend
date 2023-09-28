import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Searchpage from "./pages/Searchpage";
import Sitetitle from "./components/Sitetitle"
import Collections from "./pages/Collections"
import CollectionsInfo from "./pages/CollectionInfo";
import CreateCol from "./pages/CreateCol";

import './styles.css'

function App() {
    console.log('online') // Console log 
    const [collections, setCollections] = useState(null)
    const [pokeCards, setPokeCards] = useState(null)

    const collectionURL = "https://fortis-backend-c8c49038070a.herokuapp.com/collections/"
    const pokeCardURL = `${collectionURL}:collectionID/cards/`

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

    const deleteCollection = async (id) => {
        await fetch(collectionURL + id, {
            method: "delete"
        })

        getCollections()
    }

    //PokeCard crud
    const getPokeCards = async () => {
        const response = await fetch(pokeCardURL)
        const data = await response.json()
        setPokeCards(data.data)
    }

    const createPokeCard = async (pokeCard) => {
        await fetch(pokeCardURL, {
            method:"post",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pokeCard)
        })

        getPokeCards()
    }

    const updatePokeCard = async (pokeCard, id) => {
        await fetch(pokeCardURL + id, {
            method:"put",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(pokeCard)
        })

        getPokeCards()
    }

    const deletePokeCard = async (id) => {
        await fetch(pokeCardURL + id, {
            method: "delete"
        })

        getPokeCards()
    }

    useEffect(() => {
        getCollections()
    }, [])

    return (
        <div className="d-flex flex-column align-items-center container-fluid bg-primary h-100 p-0">
        <Sitetitle />
        <Navbar />
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/search" element={<Searchpage collections={collections}/>}/>
            <Route path="/search/set/:input" element={<Searchpage collections={collections}/>}/>
            <Route path="/search/set/:input/card/:card" element={<Searchpage collections={collections}/>}/>
            <Route path="/collections" element={<Collections  />}/>
            <Route path="/collections/:id" element={<CollectionsInfo  />}/>
            <Route path="/create" element={<CreateCol/>}/>
        </Routes>
        </div>
    );
}

export default App;
