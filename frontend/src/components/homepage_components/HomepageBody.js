import { Container, Row, Col } from "react-bootstrap";
import CardStack from "./CardStack";

function HomepageBody() {
  return (
    <Container id="homepage-body" className="text-center bg-secondary vh-100 d-flex flex-column align-items-center p-0">
      <CardStack />
      <div id="graphic-signup-container">
        <h1>Graphics/Signup Container</h1>
      </div>
      <div id="cards-carousel-container">
        <h1>Cards Carousel</h1>
      </div>
    </Container>
  );
}

export default HomepageBody;
