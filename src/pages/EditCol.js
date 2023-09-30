import {useState, useEffect} from "react"
import { Button, Container, Card, Form } from "react-bootstrap"
import energies from "../assets/energy_symbols/Energies"
import { useParams, useNavigate } from "react-router-dom"


const EditCol = (props) => {
    const params = useParams()
    
    // State that holds the current form data
    const id = params.id

    const navigate = useNavigate()

    const currentForm = {
        name: "",
        description: "",
        img:"",
    }

    const [form, setForm] = useState(currentForm)

    // Set the current Form to the collection based off the params
    const getCurrentCollection = () => {
        return props.collections.find((ele) => {
            if (ele._id === params.id){
                return ele
            }
        })
    }



    //Function that handles changes in the form
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        
    }

    // handle submitt for the form
    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(form)
        props.updateCollection(form, params.id)
        //setForm(currentForm)
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
        const curCollection = getCurrentCollection()
        setForm({name: curCollection.name, description: curCollection.description, img: curCollection.img})
    }, [])

    const loaded = () => {
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
                            <option>Select Icon</option>
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

    const loading = () => {
        return(
            <h1>Loading Collection Info</h1>
        )
    }
    
    return props.collections ? loaded() : loading()
}
export default EditCol