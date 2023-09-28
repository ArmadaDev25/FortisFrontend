import {useState, useEffect} from "react"

const CreateCol = () => {
    
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
   

    // Generates the form
    return (
        <div>
            <h1>Create Collection</h1>
            <form>
                <div>
                    <label for="enterColName">Collection Name</label>
                    <input name="colname" value={emptyForm.colname} type="text" id="enterColName" placeholder="Enter A Name For This Collection" ></input>
                </div>
                <div>
                    <label for="enterColDes">Collection Description</label>
                    <input name="coldescription" value={emptyForm.coldescription} type="text" id="enterColDes" placeholder="Enter A Description For This Collection" ></input>
                </div>
                <div>
                    <label for="enterColImage">Collection Description</label>
                    <input name="colimage" value={emptyForm.colimage}type="text" id="enterColImage" placeholder="Paste A Link To An Image To Represent This Collection" ></input>
                </div>
            </form>
        </div>
    )
}
export default CreateCol