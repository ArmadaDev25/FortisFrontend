import React from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect, onHide, onClick } from "react";

function PokemonCardModal (props) {

  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const getCard = async () => {
    const tcgdex = "https://api.tcgdex.net/v2/en";
    
    try {
      const response = await fetch(`${tcgdex}/sets/swsh/124`);
      // const response = await fetch(`${tcgdex}/sets/${cardData.set.id}/${cardData.localId}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setCardData(data);
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error);
      setLoading(false); // Set loading to false on error
    }
  }

  useEffect(() => {
    
    getCard();
  }, []);

  // Render the loaded data
  const loaded = () => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="d-flex flex-column flex-lg-row flex-sm-column justify-content-evenly align-items-center px-0 shadow">

          <div id="card-pack-details" className="d-flex flex-column mx-2 align-content-center" style={{ maxWidth: "250px" }}>
            <img src={`${cardData.image}/high.png`} alt="Pokemon Card" />
          </div>

          <div id="card-action-details" className="d-flex flex-column bg-dark-subtle rounded shadow d-sm-block m-2 align-self-start text-center"  style={{ maxWidth: "450px" }}>
            <Container id="pokemon-details" className="d-flex flex-row flex-wrap w-100 p-2">
              <Col className="d-flex flex-row justify-content-between align-items-center">
                <h1 className="m-0 text-white rounded-top text-start">{cardData.name}</h1>
                <p className="my-0 p-0"><span style={{fontSize:"12px"}}>HP</span>{cardData.hp}</p>
              </Col>
              <Container className="text-start" style={{fontSize: "15px"}}>
                <Row xs={12}>
                  <Col className="p-0"><p className="m-0 p-0">Stage: {cardData.stage}</p></Col>
                  <Col className="p-0"><p className="my-0 p-0">Types: {cardData.types}</p></Col>
                </Row>
                <Row xs={12}>
                  <Col className="p-0"><p className="m-0 p-0">Evolves From: {cardData.evolveFrom}</p></Col>
                </Row>
              </Container>
            </Container>
            {cardData.abilities ? 

              cardData.abilities.map((ability, index) => (
                <div id="pokemon-abilities" key={index} className="d-flex flex-column align-items-center p-2 w-100">
                  <h4 className="m-0">{ability.name}</h4>
                  <p id="ability-effect" className="m-0">{ability.effect}</p>
                </div>
              ))

            : null}

            {cardData.attacks ? 
              cardData.attacks.map((attack, index) => (
                <div id="pokemon-attacks" key={index} className="d-flex flex-column border-top align-items-center bg-info-emphasis p-2 w-100" style={{fontSize: "15px"}}>
                  <div id="pokemon-attack-name" className="d-flex flex-row">
                    <h4 className="m-0 text-right">{attack.name}</h4>
                  </div>
                  <div id="pokemon-attacks-details" className="d-flex flex-column text-center">
                    <div className="d-flex flex-row">
                      {attack.effect ? <p className="m-0">{attack.effect}</p> : ""}
                    </div>
                    <div className="d-flex flex-row justify-content-around text-wrap m-0">
                      {attack.cost ? <p>Cost: {attack.cost} </p>: ""}
                      {attack.damage ? <p>Dmg: {attack.damage} </p>: ""}
                    </div>
                  </div>
                </div>
              ))
            : null}

            <div id="pokemon-traits" className="d-flex flex-row justify-content-around border-top" style={{fontSize:"15px"}}>
              
              {/* Map all Resistances */}
              {cardData.resistances ? 
                cardData.resistances.map((resistance, index) => (
                  <div id="pokemon-traits" className="d-flex flex-row justify-content-around border-top" style={{fontSize:"15px"}}>
                    {resistance? <p>Resistance: {resistance.type} {resistance.value} </p>: ""}
                  </div>
                ))
              : <p>Resistance:</p>}

              {/* Map all Weaknesses */}
              {cardData.weaknesses ? 
                cardData.weaknesses.map((weakness, index) => (
                  <div id="pokemon-traits" className="d-flex flex-row justify-content-around border-top" style={{fontSize:"15px"}}>
                    {weakness? <p>Weakness: {weakness.type} {weakness.value} </p>: ""}
                  </div>
                ))
              : <p>Weakness:</p>}

              {cardData.retreat ? <p>Retreat: {cardData.retreat} </p>: <p>Retreat:</p>}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  // Render loading state
  const renderLoading = () => {
    return <h1>Loading...</h1>;
  }

  // Render error state
  const renderError = () => {
    return <p>Error: {error.message}</p>;
  }

  // Conditional rendering based on loading and error states
  if (loading) {
    return renderLoading();
  } else if (error) {
    return renderError();
  } else {
    return loaded();
  }
}

export default PokemonCardModal;