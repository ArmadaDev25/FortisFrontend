import React from "react";
import { Modal, Button, Col, Container, Image, Tooltip, OverlayTrigger, ModalHeader, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
// import GetCardType from "../modal-components/GetCardType";
import CardDisplay from "../modal-components/CardDisplay";
import RenderToolTip from "../modal-components/RenderToolTip";
import PkmActionDetails from "../modal-components/PkmActionDetails"
import TrainerActionDetails from "../modal-components/TrainerActionDetails"
import EnergyActionDetails from "../modal-components/EnergyActionDetails"


function CardModal (props) {
  // console.log('cardmodal props:', props);
  // console.log('cardmodal props.cardData.name:', props.cardData.name);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [show, setShow] = useState(false);

  const cardType = () => {

    if (props.cardData.category === "Pokemon") {
      return (
        <PkmActionDetails 
          name={props.cardData.name}
          hp={props.cardData.hp}
          stage={props.cardData.stage}
          types={props.cardData.types}
          evolveFrom={props.cardData.evolveFrom}
          abilities={props.cardData.abilities}
          attacks={props.cardData.attacks}
          resistances={props.cardData.resistances}
          weaknesses={props.cardData.weaknesses}
          retreat={props.cardData.retreat}
        />
      )
    } else if (props.cardData.category === "Trainer") {
      return (
        <TrainerActionDetails
          name={props.cardData.name}
          trainerType={props.cardData.trainerType}
          effect={props.cardData.effect}
        />
      )
    } else if (props.cardData.category === "Energy") {
      return (
        <EnergyActionDetails 
          name={props.cardData.name}
          energyType={props.cardData.energyType}
          effect={props.cardData.effect}
        />
      )
    }
  }


  // Render the loaded data
  const loaded = () => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body className="d-flex flex-column flex-sm-row justify-content-around px-2 shadow" show={modalShow} >
          
          <CardDisplay
            cardSetId={props.cardData.setId}
            image={props.cardData.image}
            localId={props.cardData.localId}
            variants={props.cardData.variants}
            cardcountofficial={props.cardData.set.cardCount.official}
            illustrator={props.cardData.illustrator}
            category={props.cardData.category}
            setlogo={props.cardData.set.logo}
          />

          {/* Gets Card Category then Returns Appropriate Component  */}
          {cardType()}

        </Modal.Body>
      </Modal>
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

export default CardModal; 