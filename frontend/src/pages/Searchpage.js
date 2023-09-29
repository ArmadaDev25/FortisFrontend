import { Container } from 'react-bootstrap'
import {useState} from 'react'
import ShowSearch from "../components/SearchShow"
import CollectionsSB from '../components/collections_comps/CollectionComp_SB'
const Searchpage = () => {
    
    
    return (
        <Container id='showsearchcontainer' className='d-flex flex-column justify-content-center align-items-center p-0'>
            <CollectionsSB />
            <h1>Card Database</h1>
            <ShowSearch />
        </Container>
    )
}
export default Searchpage;