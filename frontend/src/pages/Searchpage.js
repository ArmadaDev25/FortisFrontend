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
        <div>
        
            
            
            <h1>Card Database</h1>
            <ShowSearch />
        </div>
    )
}
export default Searchpage;