import './App.scss';
import { Row, Button, Card, NavDropdown, Nav, Navbar, Container, Col } from 'react-bootstrap';
import { Icon } from '@ricons/utils';
import { AcUnitRound } from '@ricons/material';
import { Link } from 'react-router-dom';
import Section from './components/Section';
import WhyQuantumSky from './components/WhyQuantumSky';
import Footer from './components/Footer';
import Image from './components/Image';
function App() {
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
      <div class="grey-image-container">
    <Image><h1>QuantumSky Solutions</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu neque sed est malesuada cursus. Duis nec ante nisl.</p></Image>
    </div>
        <Col md={4}>
          <Card >
            <Card.Header><h5>Lorem ipsum</h5></Card.Header>
            <Card.Body>
              <Card.Text>
                dolor sit amet
              </Card.Text>
              <Link className='w-100 btn btn-primary' to='/contact'>View more</Link>
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

      {/* <Row> */}
      {/* <Col md={4}> */}
          {/* <Card>
            <Icon><AcUnitRound /></Icon>
            <Card.Header><h5>Lorem ipsum</h5></Card.Header>
            <Card.Body>
              <Card.Text>
                dolor sit amet
              </Card.Text>
            </Card.Body>
          </Card> */}
        {/* </Col> */}
        
      {/* </Row> */}
      <Section
            title="Section Title"
            text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            sectionImage="../../img/rakket.png"
          />
          <Section
            title="Section Title"
            text="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            sectionImage="../../img/rakket.png"
            reverse
          />
          <WhyQuantumSky />
          <Footer />
    </Container>
    </>
  );
}

export default App;
