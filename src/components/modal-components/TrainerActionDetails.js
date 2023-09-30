import { Container, Col, Row, Image } from "react-bootstrap"

const TrainerActionDetails = (props) => {
  return (
    <Container id="trainer-action-details" className="d-flex flex-column bg-dark-subtle rounded shadow p-0 d-sm-block align-self-start text-center">
    <Container id="trainer-details" className="d-flex flex-row flex-wrap w-100 p-2">
      <Col className="d-flex flex-row justify-content-between align-items-center">
          <p className="m-0 text-white rounded-top text-start pkm-name">{props.name}</p>
      </Col>
      <Container className="text-start border-top mt-1 pt-1" style={{fontSize: "15px"}}>
        <Row xs={12}>
          <p className="m-0 p-0">Trainer Type: {props.trainerType}</p>
        </Row>
      </Container>
    </Container>
    {props.effect ? 
        <div id="trainer-abilities" className="d-flex flex-column align-items-center rounded-bottom p-2 w-100 abilities">
          <h3 id="effect-title" className="effect-title">Effect</h3>
          <p id="trainer-effect" className="m-0 effect">{props.effect}</p>
        </div>
    : null}
  </Container>
  )
}

export default TrainerActionDetails;