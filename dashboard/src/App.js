import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Main from './server/main'
function App() {
  
  return (
    <Container>
    <Main/>
      <Row>
      {/* spending and habits */}
        <Col>
          <Row xs={1} md={1}>
          <Col >spending</Col>
          <Col >Habits</Col>
          </Row>
        </Col>
        {/* middle section */}
        <Col>      
        <Row xs={1} md={1}>
        <Col >Cash flow bar</Col>
        <Col >upcoming bills</Col>
        <Col >savings</Col>
      </Row>
      </Col>

        {/* more charts */}
        <Col >      
        <Row xs={1} md={1}>
        <Col >Cash flow line chart</Col>
        <Col >predicted spending</Col>
      </Row></Col>
      </Row>
    </Container>
  );
}

export default App;
