import React from "react";
import { Modal, Button, Col, Container, Image, Tooltip, OverlayTrigger, ModalHeader, Card, Row} from "react-bootstrap";
import { useState, useEffect } from "react";
// import GetCardType from "../modal-components/GetCardType";
import RenderToolTip from "./modal-components/RenderToolTip";
import CardDisplay from "./modal-components/CardDisplay";
import PkmActionDetails from "./modal-components/PkmActionDetails"
import TrainerActionDetails from "./modal-components/TrainerActionDetails"
import EnergyActionDetails from "./modal-components/EnergyActionDetails"


function CardLg (props) {
    // console.log('cardmodal props:', props);
    // console.log('cardmodal props.cardData.name:', props.cardData.name);
    const [modalShow, setModalShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const [show, setShow] = useState(false);

    //console.log(props.url)

    const cardData = props.cardData
    console.log(cardData)

    const cardType = () => {

        if (cardData.category === "Pokemon") {
        return (
            <PkmActionDetails 
            name={cardData.name}
            hp={cardData.hp}
            stage={cardData.stage}
            types={cardData.typing}
            evolveFrom={cardData.evolveFrom}
            abilities={cardData.abilities}
            attacks={cardData.moves}
            resistances={cardData.resistances}
            weaknesses={cardData.weaknesses}
            retreat={cardData.retreat}
            />
        )
        } else if (cardData.category === "Trainer") {
        return (
            <TrainerActionDetails
            name={cardData.name}
            trainerType={cardData.trainerType}
            effect={cardData.effect}
            />
        )
        } else if (cardData.category === "Energy") {
        return (
            <EnergyActionDetails 
            name={cardData.name}
            energyType={cardData.energyType}
            effect={cardData.effect}
            />
        )
        }
    }


    // Render the loaded data
    const loaded = () => {
        return (
            <Card
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <ModalHeader closeButton></ModalHeader> */}
                <Card.Body className="d-flex flex-column flex-sm-row justify-content-around px-2 shadow">
                
                    <CardDisplay
                        image={cardData.image}
                        localId={cardData.localId}
                        variants={cardData.rarity}
                        illustrator={cardData.illustrator}
                        category={cardData.category}
                        setlogo={cardData.setLogo}
                    />
                    {/* <Container id="card-pack-details" className="d-flex flex-column p-0 justify-content-center align-items-center">
                        <Row className="justify-content-center p-0 mb-2">
                        <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 100, hide: 100 }}
                            overlay={props.overlay}
                        >
                        <img
                            className="p-0"
                            id="pkm-card-img"
                            src={cardData.image}
                            alt="Pokemon Card"
                            style={{ maxHeight: "360px", width: "auto", height: "auto", display: "block", margin: "0 auto" }}
                        />
                        </OverlayTrigger>
                        </Row>
                        <Col id="pkm-card-details" className="d-none d-sm-flex flex-column justify-content-center text-center border rounded py-2 w-75">
                        <Row fluid className="px-0">
                            <p id="pkm-variant" className="pkm-card-detail text-capitalize">Variant: {Object.entries(cardData.rarity)
                            .filter(([variant, value]) => value === true)
                            .map(([variant]) => variant)
                            .join(', ')}
                            </p>
                        </Row>

                        <Row className="d-inline-flex flex-row justify-content-center px-0">
                            <p id="card-count" className="pkm-card-detail">Card: {cardData.localId}</p>
                            <p id="card-category" className="pkm-card-detail">Category: {cardData.category}</p>
                        </Row>

                        <Row className="">
                            <p id="illustrator" className="pkm-card-detail px-0">Illustrator: {cardData.illustrator}</p>
                        </Row>
                        <Row className="justify-content-center">
                            <Image
                            id="series-logo" 
                            src={cardData.setlogo} 
                            alt="Pokemon Card" />
                        </Row>
                        </Col>
                    </Container> */}
                    {/* <div>{cardData.name}</div>
                    <img src={cardData.image} /> */}

                {/* Gets Card Category then Returns Appropriate Component  */}
                    {cardType()}

                </Card.Body>
            </Card>
        )
    }

    // Render loading state
    const renderLoading = () => {
        console.log('render loading: line 81');
        return <h1>Loading...</h1>;
    }

    // Render error state
    const renderError = () => {
        console.log("render error: line 87");
        return <p>Error: {error.message}</p>;
    }

    // Conditional rendering based on loading and error states
    if (loading) {
        return renderLoading();
    } else if (error) {
        console.log(error, "cardmodal.js");
        return renderError();
    } else {
        return loaded();
    }
}

export default CardLg; 