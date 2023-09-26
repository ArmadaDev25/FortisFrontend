import React from "react";
import { Modal, Row, Col, Container, Image, Tooltip, OverlayTrigger, ModalHeader, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import GetCardType from "../modal-components/GetCardType";
import CardDisplay from "../modal-components/CardDisplay";
import RenderToolTip from "../modal-components/RenderToolTip";


function CardModal (props) {
  const [series, setSeries] = useState(null)
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  
  const getCard = async () => {
    const tcgdexurl = "https://api.tcgdex.net/v2/en";
    
    try { 
      const card = await fetch(`${tcgdexurl}/sets/swsh4/90`);
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
          <CardDisplay
            overlay={RenderToolTip(cardData)}
            image={cardData.image}
            localId={cardData.localId}
            variants={cardData.variants}
            cardcountofficial={cardData.set.cardCount.official}
            illustrator={cardData.illustrator}
            category={cardData.category}
            setlogo={cardData.set.logo}
            />

          {/* Gets Card Category then Returns Appropriate Component  */}
          {GetCardType(cardData)}

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

export default CardModal;