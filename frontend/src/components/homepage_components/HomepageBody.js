import { Container, Button, Row, Col } from "react-bootstrap";
import CardStack from "./CardStack";
import PokemonCardModal from "../complete-modals/PokemonCardModal";
import { React, useState } from "react";

function HomepageBody() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container id="homepage-body" className="text-center bg-secondary vh-100 d-flex flex-column align-items-center p-0">
      <CardStack />
      <div id="graphic-signup-container">
        <h1>Graphics/Signup Container</h1>
      </div>
      <div id="cards-carousel-container">
        <h1>Cards Carousel</h1>
      </div>
      <div>

      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <PokemonCardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    </Container>
  );
}

export default HomepageBody;
