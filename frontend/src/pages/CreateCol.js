import {useState, useEffect} from "react"

const CreateCol = (props) => {
    
    // Inital Form State
    const emptyForm = {
        colname:"",
        coldescription:"",
        colimage:""

    }

    // State that holds the form data
    const [form, setForm] = useState(emptyForm)

    //Function that handles changes in the form
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        
    }
    // DEBUG: Added to see the data as its being updated
    useEffect(()=>{
        console.log(form)
    })

    // handle submitt for this form
    const handleSubmit = (e) => {
        e.preventDefault()
        props.CreateCollection(form)
        setForm(emptyForm)

    }
 

    // Generates the form
    return (
        <div>
            <h1>Create Collection</h1>
            <form>
                <div>
                    <label for="enterColName">Collection Name</label>
                    <input name="colname" value={form.colname} type="text" id="enterColName" placeholder="Enter A Name For This Collection" onChange={(e) => {handleChange(e)}}></input>
                </div>
                <div>
                    <label for="enterColDes">Collection Description</label>
                    <input name="coldescription" value={form.coldescription} type="text" id="enterColDes" placeholder="Enter A Description For This Collection" onChange={(e) => {handleChange(e)}}></input>
                </div>
                <div>
                    <label for="enterColImage">Collection Description</label>
                    <input name="colimage" value={form.colimage}type="text" id="enterColImage" placeholder="Paste A Link To An Image To Represent This Collection" onChange={(e) => {handleChange(e)}}></input>
                </div>
            </form>
        </div>
    )
}
export default CreateCol