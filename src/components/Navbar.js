import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

function Navbar () {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Container fluid id="nav-container" className='border-bottom p-2'>
      <Container>
        <Nav variant="pills" activeKey="1" /*onSelect={handleSelect}*/>
          <Nav.Item>
            <Nav.Link href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/collections">
              Collection
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/search'>
              Card Search
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='/create'>
              Create Collection
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Container>
  );
}

export default Navbar;