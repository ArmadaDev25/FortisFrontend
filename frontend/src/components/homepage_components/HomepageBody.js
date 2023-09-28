import { Container, Button, Image, Row, Col } from "react-bootstrap";
import CardStack from "./CardStack";
import CardModal from "../complete-modals/CardModal";
import { React, useState } from "react";
import Furret from "../../assets/FurretCard.png"
import CardCarousel from "./CardCarousel";
import CarouselImage from "../carousel_components/CarouselImage";



function HomepageBody() {
  const [modalShow, setModalShow] = useState(false);


  return (
    <Container fluid id="homepage-body" className="text-center bg-secondary vh-100 d-flex flex-column align-items-center p-0">
      <CardStack />
      <CarouselImage
        setId={"swsh3"}
        localId='5'
        image={'https://assets.tcgdex.net/en/swsh/swsh3/5/high.png'}
      />
      <div id="graphic-signup-container">
        <h1>Graphics/Signup Container</h1>
      </div>
      <CardCarousel/>
    </Container> 
    
  );
}

export default HomepageBody;
