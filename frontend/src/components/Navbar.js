import Nav from 'react-bootstrap/Nav';

function Navbar () {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className='container-xxl bg-light p-0 vw-100 p-3'>
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            Link 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            Link 2
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            Link 3
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;