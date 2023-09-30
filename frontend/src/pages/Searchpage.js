import { Container } from 'react-bootstrap'
import {useState} from 'react'
import ShowSearch from "../components/SearchShow"
import CollectionsSB from '../components/collections_comps/CollectionComp_SB'
const Searchpage = (props) => {
    
    
    return (
        <Container id='showsearchcontainer' className='d-flex flex-column justify-content-center overflow-y-scroll align-items-center p-0'>
            <h1>Card Database</h1>
            <ShowSearch collections={props.collections} createPokeCard={props.createPokeCard}/>
        </Container>
    )
}
export default Searchpage;