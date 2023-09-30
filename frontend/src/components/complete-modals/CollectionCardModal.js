import { Image, Row, Modal, ModalHeader, Container, Col } from "react-bootstrap"
import { useState } from "react";
// import CardModal from "../complete-modals/CardModal"
import CardDisplay from "../modal-components/CardDisplay";
import PkmActionDetails from "../modal-components/PkmActionDetails"
import TrainerActionDetails from "../modal-components/TrainerActionDetails"
import EnergyActionDetails from "../modal-components/EnergyActionDetails"

function CollectionCardModal (props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cardType = () => {

    if (props.category === "Pokemon") {
      return (
        <PkmActionDetails 
          name={props.name}
          hp={props.hp}
          stage={props.stage}
          types={props.typing}
          evolveFrom={props.evolveFrom}
          abilities={props.abilities}
          attacks={props.moves}
          resistances={props.resistances}
          weaknesses={props.weaknesses}
          retreat={props.retreat}
        />
      )
    } else if (props.category === "Trainer") {
      return (
        <TrainerActionDetails
          name={props.name}
          trainerType={props.trainerType}
          effect={props.effect}
        />
      )
    } else if (props.category === "Energy") {
      return (
        <EnergyActionDetails 
          name={props.name}
          energyType={props.energyType}
          effect={props.effect}
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
        show={props.show} onHide={props.onHide}
      >
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body className="d-flex flex-column flex-sm-row justify-content-around px-2 shadow">
          
          <CardDisplay
            image={props.image}
            localId={props.localId}
            variants={props.rarity}
            illustrator={props.illustrator}
            category={props.category}
            setlogo={props.setLogo}
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

export default CollectionCardModal;