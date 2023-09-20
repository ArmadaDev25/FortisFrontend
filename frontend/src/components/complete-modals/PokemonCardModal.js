import { Modal, Button, Card, Row, Col, Container } from "react-bootstrap";
import PokemonCard from "../../assets/FurretCard.png"
import SetLogo from "../../assets/SetLogo.png"

function PokemonCardModal (props) {

  // useEffect

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="d-flex flex-column flex-lg-row flex-row justify-content-evenly align-items-center px-0">
        <div id="card-pack-details" className="d-flex flex-column mx-2 align-content-center" style={{maxWidth:"250px"}}>
          <img src={PokemonCard}></img>
          <div id="card-indicators" className="d-flex flex-column border rounded text-center px-1 justify-content-center w-100 m-1">
            <div className="row">
              <p className="m-0">Variant Indicators</p>
            </div>
            <div className="column">
              <div className="d-flex flex-row justify-content-around" style={{fontSize:"12px"}}>
                <p className="m-0">Card Count: #/#</p>
                <p className="m-0">Category: Example</p>
              </div>
              <div className="d-flex flex-row justify-content-around" style={{fontSize:"12px"}}>
                <p className="m-0">Illustrator: Example Example</p>
              </div>
            </div>
          </div>
          <div id="card-set">
            <img className="img-fluid" src={SetLogo}></img>
          </div>
        </div>
        <div id="card-action-details" className="d-flex flex-column d-sm-block m-2 align-self-start">
          <div id="pokemon-details" className="d-flex border-bottom flex-row flex-wrap align-items-start border rounded shadow w-100">
            <div id="poke-details-1" className="mx-2">
              <p className="m-0">Name: Furret</p>
              <p className="m-0">Stage: 2</p>
              <p className="m-0">Evolves From: Example</p>
            </div>
            <div id="poke-details-2" className="mx-2">
              <p className="my-0">Types: Example</p>
              <p className="my-0">HP: Example</p>
            </div>
          </div>
          <div id="pokemon-abilities" className="d-flex flex-column bg-info-subtle border rounded justify-content-center rounded p-2">
              <h5 className="text-center mb-1">Feelin' Fine</h5>
              <p className="text-center my-0"> 
               Draw 3 Cards
              </p>
          </div>
          <div id="pokemon-abilities" className="d-flex flex-column bg-info-subtle border rounded justify-content-center rounded p-2">
              <h5 className="text-center mb-1">Tail Smash</h5>
              <p className="text-center my-0"> 
                Flip a coin. If tails, this attack does nothing. 
              </p>
          </div>
          <div id="pokemon-traits" className="d-flex flex-row justify-content-between px-1" style={{fontSize:"15px"}}>
            <p>Weaknesses: Example</p>
            <p>Resistances: Example</p>
            <p>Retreat: Example</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default PokemonCardModal;