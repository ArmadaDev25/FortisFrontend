import { Container } from 'react-bootstrap'
import {useState} from 'react'
import ShowSearch from "../components/SearchShow"
import CollectionsSB from '../components/collections_comps/CollectionComp_SB'
const Searchpage = () => {
    
    
    return (
        <div>
        
            <CollectionsSB />
            
            <h1>Card Database</h1>
            <ShowSearch />
        </div>
    )
}
export default Searchpage;