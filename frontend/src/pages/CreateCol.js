import {useState, useEffect} from "react"

const CreateCol = () => {
    
    // Create Collections Function
   

    // Generates the form
    return (
        <div>
            <h1>Create Collection</h1>
            <form>
                <div>
                    <label for="enterColName">Collection Name</label>
                    <input type="text" id="enterColName" placeholder="Enter A Name For This Collection" ></input>
                </div>
                <div>
                    <label for="enterColDes">Collection Description</label>
                    <input type="text" id="enterColDes" placeholder="Enter A Description For This Collection" ></input>
                </div>
                <div>
                    <label for="enterColImage">Collection Description</label>
                    <input type="text" id="enterColImage" placeholder="Paste A Link To An Image To Represent This Collection" ></input>
                </div>
            </form>
        </div>
    )
}
export default CreateCol