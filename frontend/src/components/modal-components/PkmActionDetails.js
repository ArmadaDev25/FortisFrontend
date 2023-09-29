import { Container, Col, Row, Image } from "react-bootstrap"

const PkmActionDetails = (props) => {
  console.log(props)
  return (
    <Container id="card-action-details" className="d-flex flex-column bg-dark-subtle rounded shadow p-0 d-sm-block align-self-start text-center">
    <Container id="pokemon-details" className="d-flex flex-row flex-wrap w-100 p-2">
      <Col className="d-flex flex-row justify-content-between align-items-center">
        <Col xs={10}>
          <p className="m-0 text-white rounded-top text-start pkm-name">{props.name}</p>
        </Col>
        <Col xs={2}>
          <p className="my-0 p-0"><span style={{fontSize:"12px"}}>HP</span>{props.hp}</p>
        </Col>
      </Col>
      <Container className="text-start border-top mt-1 pt-1" style={{fontSize: "15px"}}>
        <Row xs={12}>
          <Col className="p-0"><p className="m-0 p-0">Stage: {props.stage}</p></Col>
          <Col className="p-0"><p className="my-0 p-0">Types: <img src={props.types} height="20px" width="20px" /></p></Col>
        </Row>
        <Row xs={12}>
          <Col className="p-0"><p className="m-0 p-0">Evolves From: {props.evolveFrom}</p></Col>
        </Row>
      </Container>
    </Container>
    {props.abilities ? 

      props.abilities.map((ability, index) => (
        <div id="pokemon-abilities" key={index} className="d-flex flex-column align-items-center p-2 w-100">
          <h4 className="m-0">{ability.name}</h4>
          <p id="ability-effect" className="m-0">{ability.effect}</p>
        </div>
      ))

    : null}

    {props.attacks ? 
      props.attacks.map((attack, index) => (
        <div id="pokemon-attacks" key={index} className="d-flex flex-column border-top align-items-center bg-info-emphasis p-2 w-100" style={{fontSize: "15px"}}>
          <div id="pokemon-attack-name" className="d-flex flex-row">
            <h4 className="m-0 text-right">{attack.name}</h4>
          </div>
          <Container id="pokemon-attacks-details" className="d-flex flex-column text-center">
            <div className="d-flex flex-row">
              {attack.effect ? <p className="m-0">{attack.effect}</p> : ""}
            </div>
            <Container className="d-flex flex-row justify-content-evenly text-wrap m-0">
              <Col>
                {attack.cost ? <p className="mb-0">Cost: {attack.cost.map((c) => <img src={c} height="20px" width="20px" />)}  </p>: ""}
              </Col>
              <Col>
                {attack.damage ? <p className="mb-0">Dmg: {attack.damage} </p>: ""}
              </Col>
            </Container>
          </Container>
        </div>
      ))
    : null}

    <div id="pokemon-traits" className="d-flex flex-row justify-content-around border-top" style={{fontSize:"15px"}}>
      {/* Map all Weaknesses */}
      {props.weaknesses ? 
        props.weaknesses.map((weakness, index) => (
          <div id="pokemon-traits" className="d-flex flex-row justify-content-around border-top" style={{fontSize:"15px"}}>
            {weakness? <p>Weakness: <img src={weakness.wType} height="20px" width="20px" /> {weakness.value} </p>: ""}
          </div>
        ))
      : <p>Weakness:</p>}
      
      {/* Map all Resistances */}
      {props.resistances ? 
        props.resistances.map((resistance, index) => (
          <div id="pokemon-traits" className="d-flex flex-row justify-content-around border-top" style={{fontSize:"15px"}}>
            {resistance? <p>Resistance: <img src={resistance.rType} height="20px" width="20px" /> {resistance.value} </p>: ""}
          </div>
        ))
      : <p>Resistance:</p>}


      {props.retreat ? <p>Retreat: {props.retreat} </p>: <p>Retreat:</p>}
    </div>
  </Container>
  )
}

export default PkmActionDetails;