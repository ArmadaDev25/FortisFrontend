import React from "react";
import { Modal, closeButton, Row, Col, Container, Image, Overlay, Tooltip, OverlayTrigger, ModalHeader } from "react-bootstrap";
import { useState, useEffect } from "react";

function PokemonCardModal (props) {
  const [series, setSeries] = useState(null)
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  
  
  const getCard = async () => {
    const tcgdexurl = "https://api.tcgdex.net/v2/en";
    
    try { 
      const card = await fetch(`${tcgdexurl}/sets/swsh1/142`);
      // const response = await fetch(`${tcgdex}/sets/${cardData.set.id}/${cardData.localId}`);
      
      if (!card.ok) {
        throw new Error(`HTTP error! Status: ${card.status}`);
      }
      
      const data = await card.json();
      

      console.log(data);
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

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" className="d-sm-none" {...props}>
      <Col fluid className="d-flex flex-column p-2">
        <Container id="pkm-card-details" className="border rounded">
          <Row className="px-2">
          <p id="pkm-card-detail" className="text-capitalize">Variant: {Object.entries(cardData.variants)
            .filter(([variant, value]) => value === true)
            .map(([variant]) => variant)
            .join(', ')}
          </p>
          </Row>
          <Row className="px-0">
            <Col className="px-0">
              <p id="pkm-card-detail" className="px-2">Card: {cardData.localId}/{cardData.set.cardCount.official}</p>
            </Col>
            <Col className="px-0">
              <p id="pkm-card-detail" className="px-2">Category: {cardData.category}</p>
            </Col>
            </Row>

            <Row className="px-2">
              <p id="pkm-card-detail" className="px-0">Illustrator: {cardData.illustrator}</p>
            </Row>
          <Row>
            <Image
              id="series-logo" 
              src={`${cardData.set.logo + '.png'}`} 
              alt="Pokemon Card" 
            />
          </Row>
        </Container>
      </Col>
    </Tooltip>
  );

  // Render the loaded data
  const loaded = () => {
    

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader closeButton>
        </ModalHeader>
        <Modal.Body className="d-flex flex-column flex-sm-col flex-lg-row justify-content-evenly px-2 shadow">

        <div id="card-pack-details" className="d-flex flex-column flex-lg-row mx-2 justify-content-center align-items-center">
          <Row className="d-flex flex-row justify-content-center">
            <Col className="d-flex flex-column p-0 mb-2 justify-content-center align-items-center ">
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 100, hide: 100 }}
                overlay={renderTooltip}
              >
              <img
                id="pkm-card-img"
                src={`${cardData.image}/high.png`}
                alt="Pokemon Card"
                style={{ maxHeight: "360px", width:"250px", height: "auto" }} // Image scaling styles
              />
              </OverlayTrigger>
            </Col>
            <Col fluid md={9} className="d-none d-sm-flex flex-column text-center p-0">
              <Container id="pkm-card-details" className="border rounded" style={{maxWidth:"300px"}}>

                <Row className="px-0">
                  <p id="pkm-card-detail" className="text-capitalize px-2">Variant: {Object.entries(cardData.variants)
                    .filter(([variant, value]) => value === true)
                    .map(([variant]) => variant)
                    .join(', ')}
                  </p>
                </Row>

                <Row className="d-flex flex-row justify-content-around px-0">
                  <Col className="px-0">
                    <p id="pkm-card-detail" className="px-2">Card: {cardData.localId}/{cardData.set.cardCount.official}</p>
                  </Col>
                  <Col className="px-0">
                    <p id="pkm-card-detail" className="px-2">Category: {cardData.category}</p>
                  </Col>
                </Row>

                <Row className="px-2">
                  <p id="pkm-card-detail" className="px-0">Illustrator: {cardData.illustrator}</p>
                </Row>
                <Row>
                  <Image
                    id="series-logo" 
                    src={`${cardData.set.logo + '.png'}`} 
                    alt="Pokemon Card" />
                </Row>
              </Container>
            </Col>
          </Row>
        </div>

        <Container id="card-action-details" className="d-flex flex-column bg-dark-subtle rounded shadow p-0 d-sm-block align-self-start text-center" >
          <Container id="pokemon-details" className="d-flex flex-row flex-wrap w-100 p-2">
            <Col className="d-flex flex-row justify-content-between align-items-center">
              <Col xs={10}>
                <p className="m-0 text-white rounded-top text-start fs-2">{cardData.name}</p>
              </Col>
              <Col xs={2}>
                <p className="my-0 p-0"><span style={{fontSize:"12px"}}>HP</span>{cardData.hp}</p>
              </Col>
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
                  <div className="d-flex flex-row justify-content-evenly text-wrap m-0">
                    <Col>
                      {attack.cost ? <p className="mb-0">Cost: {attack.cost} </p>: ""}
                    </Col>
                    <Col>
                      {attack.damage ? <p className="mb-0">Dmg: {attack.damage} </p>: ""}
                    </Col>
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