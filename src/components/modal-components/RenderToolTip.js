import { Image, Tooltip, Col, Row, Container } from "react-bootstrap";

const RenderToolTip = (props) => {
  return (
    <Tooltip id="button-tooltip" className="d-sm-none" {...props}>
      <Col fluid className="d-flex flex-column p-2">
        <Container id="pkm-card-details" className="border rounded">
          <Row className="px-2">
          <p id="pkm-card-detail" className="text-capitalize">Variant: {Object.entries(props.variants)
            .filter(([variant, value]) => value === true)
            .map(([variant]) => variant)
            .join(', ')}
          </p>
          </Row>
          <Row className="px-0">
            <Col className="px-0">
              <p id="pkm-card-detail" className="px-2">Card: {props.localId}/{props.set.cardCount.official}</p>
            </Col>
            <Col className="px-0">
              <p id="pkm-card-detail" className="px-2">Category: {props.category}</p>
            </Col>
            </Row>

            <Row className="px-2">
              <p id="pkm-card-detail" className="px-0">Illustrator: {props.illustrator}</p>
            </Row>
          <Row>
            <Image
              id="series-logo" 
              src={`${props.set.logo + '.png'}`} 
              alt="Pokemon Card" 
            />
          </Row>
        </Container>
      </Col>
    </Tooltip>
  )
}

export default RenderToolTip;