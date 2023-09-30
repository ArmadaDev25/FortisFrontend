import {useState, useEffect} from "react"
import { Button, Container, Card, Form } from "react-bootstrap"
import { useParams } from "react-router-dom"


const EditCol = (props) => {
    const params = useParams()
    
    // State that holds the current form data
    const [form, setForm] = useState(null)
    const collectionToDisplay = params.id
    

    const currentForm = {
        name: "",
        description: "",
        img:""

    }

    // Set the current Form to the collection based off the params
    const setFormToCurrentCollection = () => {

    }



    //Function that handles changes in the form
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        
    }

    // handle submitt for the form
    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateCollection(form)
        setForm(currentForm)
        navigate('/collections')
    }

    const energyArray = () => {
        const eArr = []
        for(let energy in energies){
            const enObj = {}
            enObj.name = energy
            enObj.img = energies[energy]
            eArr.push(enObj)
        }

        return eArr.map((energy, idx) => {
            return (
                <option value={energy.img}>{energy.name}</option>
            )
        })
    }

    useEffect(() => {
        
    })

    


    return (
        <Container>
            <h1>Edit Collection</h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group>
                    <Form.Label for="enterColName">Collection Name</Form.Label>
                    <Form.Control name="name" value={form.name} type="text" id="enterColName" placeholder="Enter A Name For This Collection" onChange={(e) => {handleChange(e)}} />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="enterColDes">Collection Description</Form.Label>
                    <Form.Control name="description" value={form.description} type="textarea" rows={3} id="enterColDes" placeholder="Enter A Description For This Collection" onChange={(e) => {handleChange(e)}} />
                </Form.Group>
                <Form.Group>
                    <Form.Label for="enterColImage">Collection Icon</Form.Label>
                    <Form.Select name="img" id="enterColImage" placeholder="Select Icon" onChange={(e) => handleChange(e)}>
                        <option>Select Collection</option>
                        {energyArray()}
                    </Form.Select>
                </Form.Group>
                <Button type="submit">
                    Update Collection
                </Button>
            </Form>
        </Container>
    )

}
export default EditCol