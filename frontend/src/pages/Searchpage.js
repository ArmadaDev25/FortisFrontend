import { Container } from 'react-bootstrap'
import {useState} from 'react'
import ShowSearch from "../components/SearchShow"
import CollectionsSB from '../components/collections_comps/CollectionComp_SB'
const Searchpage = () => {
    
    
    return (
        <Container fluid className='d-flex flex-column justify-content-center align-items-center w-100'>
            
            <CollectionsSB />
            <h1>Card Database</h1>
            <Container fluid className='w-100'>
                <ShowSearch />
            </Container>
        </Container>
    )
}
export default Searchpage;