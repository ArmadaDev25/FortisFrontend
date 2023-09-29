import {useState, useEffect} from "react"
import { Button, Container, Card, Form } from "react-bootstrap"

const CreateCol = (props) => {
    
    // Inital Form State
    const emptyForm = {
        name:"",
        description:"",
        img:""

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
        props.createCollection(form)
        setForm(emptyForm)

    }
 

    // Generates the form
    return (
        <Container>
            <h1>Create Collection</h1>
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
                    <Form.Label for="enterColImage">Collection Description</Form.Label>
                    <Form.Control name="img" value={form.img}type="text" id="enterColImage" placeholder="Paste A Link To An Image To Represent This Collection" onChange={(e) => {handleChange(e)}} />
                </Form.Group>
                <Button type="submit">
                    Create Collection
                </Button>
            </Form>
        </Container>
    )
}
export default CreateCol