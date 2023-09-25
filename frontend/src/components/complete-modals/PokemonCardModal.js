import React from "react";
import { Modal, Row, Col, Container, Image, Tooltip, OverlayTrigger, ModalHeader } from "react-bootstrap";
import { useState, useEffect } from "react";
import GetCardType from "../modal-components/GetCardType";


function PokemonCardModal (props) {
  const [series, setSeries] = useState(null)
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
  const getCard = async () => {
    const tcgdexurl = "https://api.tcgdex.net/v2/en";
    
    try { 
      const card = await fetch(`${tcgdexurl}/sets/swsh4/185`);
      // const response = await fetch(`${tcgdex}/sets/${cardData.set.id}/${cardData.localId}`);
      
      if (!card.ok) {
        throw new Error(`HTTP error! Status: ${card.status}`);
      }
      
      const data = await card.json();
      

      // console.log(data);
      // console.log(data.set.logo);
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
    console.log(cardData);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton></ModalHeader>
        <Modal.Body className="d-flex flex-column flex-sm-row justify-content-around px-2 shadow">

          {/* Gets Card Category then Returns Appropriate Modal  */}
          {GetCardType(cardData)}

        <Container id="card-action-details" className="d-flex flex-column bg-dark-subtle rounded shadow p-0 d-sm-block align-self-start text-center">
          <Container id="pokemon-details" className="d-flex flex-row flex-wrap w-100 p-2">
            <Col className="d-flex flex-row justify-content-between align-items-center">
              <Col xs={10}>
                <p className="m-0 text-white rounded-top text-start pkm-name">{cardData.name}</p>
              </Col>
              <Col xs={2}>
                <p className="my-0 p-0"><span style={{fontSize:"12px"}}>HP</span>{cardData.hp}</p>
              </Col>
            </Col>
            <Container className="text-start border-top mt-1 pt-1" style={{fontSize: "15px"}}>
              <Row xs={12}>
                <Col className="p-0"><p className="m-0 p-0">Stage: {cardData.stage}</p></Col>
                <Col className="p-0"><p className="my-0 p-0">Types: {cardData.types}</p></Col>
                <Image
                  // src={}
                />
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
                <Container id="pokemon-attacks-details" className="d-flex flex-column text-center">
                  <div className="d-flex flex-row">
                    {attack.effect ? <p className="m-0">{attack.effect}</p> : ""}
                  </div>
                  <Container className="d-flex flex-row justify-content-evenly text-wrap m-0">
                    <Col>
                      {attack.cost ? <p className="mb-0">Cost: {attack.cost} </p>: ""}
                      {/* {attack.cost ? <p className="mb-0">Cost: {showCost()} </p>: ""} */}
                      {/* {attack.cost ? <p className="mb-0">Cost:
                        <img id="energy-symbol" src={Colorless} /> 
                      </p>: ""} */}
                    </Col>
                    <Col>
                      {attack.damage ? <p className="mb-0">Dmg: {attack.damage} </p>: ""}
                    </Col>
                  </Container>
                </Container>
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
        </Container>
        </Modal.Body>
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
    console.log(error);
    return renderError();
  } else {
    return loaded();
  }
}

export default PokemonCardModal;