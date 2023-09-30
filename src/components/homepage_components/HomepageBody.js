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
    <Container fluid id="homepage-body" className="text-center vh-100 d-flex flex-column align-items-center">
      <Container className="bg-light border vh-100">
        <CardStack />
        <CardCarousel/>
      </Container>

    </Container> 
    
  );
}

export default HomepageBody;
