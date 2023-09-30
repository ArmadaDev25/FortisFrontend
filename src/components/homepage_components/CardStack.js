import { Container, Row, Image, Col, ListGroup, ListGroupItem} from 'react-bootstrap';
import cardStack from '../../assets/CardStack.png'; 

function StackedCards() {
  return (
    <Container fluid className='d-flex flex-row flex-xs-column justify-content-center align-items-center my-2 p-0'>
      <img className='img-fluid' style={{width:"10rem"}} src={cardStack}></img>
      <Col xs={6} className='ms-2' style={{width:"fit-content"}}>
          <p className='text-start fs-1 m-0'>Search</p>
          <p className='text-start fs-1 m-0'>Collect</p>
          <p className='text-start fs-1 m-0'>Assemble</p>
      </Col>
    </Container>
  )
}

export default StackedCards;