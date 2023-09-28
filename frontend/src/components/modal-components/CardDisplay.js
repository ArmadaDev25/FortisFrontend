import React, { useState } from 'react';
import { Container, Row, Col, OverlayTrigger, Image } from 'react-bootstrap';


const CardDisplay = (props) => {
console.log(props)
return (
    <Container id="card-pack-details" className="d-flex flex-column p-0 justify-content-center align-items-center">
        <Row className="justify-content-center p-0 mb-2">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 100, hide: 100 }}
            overlay={props.overlay}
          >
          <img
            className="p-0"
            id="pkm-card-img"
            src={props.image}
            alt="Pokemon Card"
            style={{ maxHeight: "360px", width: "auto", height: "auto", display: "block", margin: "0 auto" }}
          />
          </OverlayTrigger>
        </Row>
        <Col id="pkm-card-details" className="d-none d-sm-flex flex-column justify-content-center text-center border rounded py-2 w-75">
          <Row fluid className="px-0">
            <p id="pkm-variant" className="pkm-card-detail text-capitalize">Variant: {Object.entries(props.variants)
              .filter(([variant, value]) => value === true)
              .map(([variant]) => variant)
              .join(', ')}
            </p>
          </Row>

          <Row className="d-inline-flex flex-row justify-content-center px-0">
              <p id="card-count" className="pkm-card-detail">Card: {props.localId}</p>
              <p id="card-category" className="pkm-card-detail">Category: {props.category}</p>
          </Row>

          <Row className="">
            <p id="illustrator" className="pkm-card-detail px-0">Illustrator: {props.illustrator}</p>
          </Row>
          <Row className="justify-content-center">
            <Image
              id="series-logo" 
              src={props.setlogo} 
              alt="Pokemon Card" />
          </Row>
        </Col>
    </Container>
  )
}

export default CardDisplay;