import { Image, Row, Modal, ModalHeader, Container, Col } from "react-bootstrap"
import { useState } from "react";
import CardDisplay from "../modal-components/CardDisplay";
import PkmActionDetails from "../modal-components/PkmActionDetails"
import TrainerActionDetails from "../modal-components/TrainerActionDetails"
import EnergyActionDetails from "../modal-components/EnergyActionDetails"
import CollectionCardModal from "../complete-modals/CollectionCardModal";


const CollectionDisplayCards = ({ cards }) =>{
    const [showModal, setShowModal] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = async (index) => {
        setSelectedCard(cards[index]);
        setShowModal(true);
    };

    
    const displayCardArray = cards.map((ele, index) => {
        return(
        <Col
            key={index}
            id="collection-card-wrapper" 
            className="d-flex flex-column m-2 justify-content-center align-items-center text-center"
            xs={3} lg={2}
            onClick={() => handleCardClick(index)}
            
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
            <CollectionCardModal 
                show={showModal}
                card={selectedCard}
                onHide={() => setShowModal(false)}
            />
        </Container>
    )


}
export default CollectionDisplayCards
