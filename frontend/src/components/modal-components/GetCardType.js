import CardDisplay from "./CardDisplay"
import { Tooltip, Container, Row, Col, Image } from "react-bootstrap"

const GetCardType = (cardData) => {

  const renderToolTip = (cardData) => {
  return (
    <Tooltip id="button-tooltip" className="d-sm-none" {...cardData}>
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
  )
}

  if (cardData.category === "Pokemon") {
    return (
      <CardDisplay
        overlay={renderToolTip(cardData)}
        image={cardData.image}
        localId={cardData.localId}
        variants={cardData.variants}
        cardcountofficial={cardData.set.cardCount.official}
        illustrator={cardData.illustrator}
        category={cardData.category}
        setlogo={cardData.set.logo}
      />
    )
  } else if (cardData.category === "Trainer") {
    return (
      <CardDisplay
        overlay={renderToolTip(cardData)}
        image={cardData.image}
        localId={cardData.localId}
        variants={cardData.variants}
        cardcountofficial={cardData.set.cardCount.official}
        illustrator={cardData.illustrator}
        category={cardData.category}
        setlogo={cardData.set.logo}
      />
    )
  } else if (cardData.category === "Energy") {
    return <p>Energy</p>
  }
}

export default GetCardType;