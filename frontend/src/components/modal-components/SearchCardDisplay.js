import React, { useState } from 'react';
import { Container, Row, Col, OverlayTrigger, Image } from 'react-bootstrap';


const SearchCardDisplay = (props) => {
// console.log(props)
return (
    <Container id="card-pack-details" className="d-flex flex-column p-0 justify-content-center align-items-center">
        <Row className="justify-content-center p-0 mb-2">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 100, hide: 100 }}
            // overlay={props.overlay}
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
    </Container>
  )
}

export default SearchCardDisplay;