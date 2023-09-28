import { Container } from 'react-bootstrap'
import {useState} from 'react'
import ShowSearch from "../components/SearchShow"

const Searchpage = () => {
    // Form elements
    // Holds a blank form
    const blankSearch = {
        name: "",
        type: "",
        series:""
    }

    // State that will hold the formData
    const [form, setForm] = useState(blankSearch)
    // Destructuring the form 
    
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