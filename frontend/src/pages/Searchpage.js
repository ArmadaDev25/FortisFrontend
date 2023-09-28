import { Container } from 'react-bootstrap'
import {useState} from 'react'
import ShowSearch from "../components/SearchShow"

const Searchpage = () => {
    
    
    return (
        <Container fluid className='d-flex flex-column justify-content-center align-items-center w-100'>
            <h1>Card Database</h1>
            <Container fluid className='w-100'>
                <ShowSearch />
            </Container>
        </Container>
    )
}
export default Searchpage;