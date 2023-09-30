import { Image, Row, Modal, ModalHeader, Container, Col } from "react-bootstrap"
import { useState } from "react";


const CollectionDisplayCards = ({ cards , onClick }) =>{
    

    const displayCardArray = cards.map((ele, index) => {
        return(
        <Col
            key={index}
            id="collection-card-wrapper" 
            className="d-flex flex-column m-2 justify-content-center align-items-center text-center"
            xs={3} lg={2}
        >
            <Image
                className="p-0 object-fit-contain rounded"
                id="pkm-card-img"
                src={ele.image}
                alt="Pokemon Card"
                style={{ width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%" }}
            />
            <div className="d-none d-sm-block" style={{fontSize:".9rem"}}>
                {ele.name}
            </div>  

        </Col>
        )
    })
    return (
        <Container className="d-flex flex-row justify-content-center align-items-start border rounded flex-wrap p-2">
            {displayCardArray}
        </Container>
    )


}
export default CollectionDisplayCards
