import Nav from 'react-bootstrap/Nav';

function Navbar () {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div className='bg-light p-0 vw-100 p-3'>
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
      </Nav>
    </div>
  );
}

export default Navbar;