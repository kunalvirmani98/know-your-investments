import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Form, Nav, FormControl, Button } from 'react-bootstrap';
import MarketCard from './marketCard.jsx';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Know Your Investments</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Container fluid={true}>
        <Row />
        <Row>
          <Col />
          <Col><MarketCard indexName="Nifty" indexValue="14000" /></Col>
          <Col><MarketCard indexName="Sensex" indexValue="40000" /></Col>
          <Col />
        </Row>
        <Row />
      </Container>
    </div>
  );
}

export default App;
