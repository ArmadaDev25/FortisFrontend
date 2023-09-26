import { Container, Button, Image, Row, Col } from "react-bootstrap";
import CardStack from "./CardStack";
import PokemonCardModal from "../complete-modals/CardModal";
import { React, useState } from "react";
import Furret from "../../assets/FurretCard.png"

function HomepageBody() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container fluid id="homepage-body" className="text-center bg-secondary vh-100 d-flex flex-column align-items-center p-0">
      <CardStack />
      <div id="graphic-signup-container">
        <h1>Graphics/Signup Container</h1>
      </div>
      <div id="cards-carousel-container">
        <h1>Cards Carousel</h1>
      </div>
      <div>

      <Image 
        action
        src={Furret}
        style={{maxHeight:"250px"}}
        onClick={() => setModalShow(true)}
      />


      <PokemonCardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </Container>
  );
}

export default HomepageBody;
