import { Link } from 'react-router-dom';
import '../App.scss';
import { Row, Button, Card, NavDropdown, Nav, Navbar, Container, Col } from 'react-bootstrap';

function Contact() {
  return (
  <>
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link to="/" as={Link}>Home</Nav.Link>
            <Nav.Link to="/contact"  as={Link}>Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <div  id="call-to-actions">
      <Row className='justify-content-center'>
        <Col md={4}>
          <Card>
            <Card.Header><h5>Dit is de contactpagina</h5></Card.Header>
            <Card.Body>
              <Card.Text>
                dolor sit amet
              </Card.Text>
              <Link className='w-100 btn btn-primary' to='/'>View more</Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header><h5>Lorem ipsum</h5></Card.Header>
            <Card.Body>
              <Card.Text>
                dolor sit amet
              </Card.Text>
              <Button disabled className='w-100'>View more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
    </>
  );
}

export default Contact;