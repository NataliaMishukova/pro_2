
import { Container, Row, Col } from 'react-bootstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';

function TestGrid() {
  return (
    <Container fluid style={{ backgroundColor: '#e9ecef', minHeight: '100vh' }}>
      <Row className="justify-content-center">
        <Col xs={12} sm={12} md={12} lg={12}>
          <div style={{
            backgroundColor: 'white',
            border: '2px solid #007bff',
            borderRadius: '8px',
            padding: '20px',
            textAlign: 'center',
            margin: '10px'
          }}>
            <h3>Тест сетки Bootstrap</h3>
            <p>Этот блок должен занимать всю ширину экрана</p>
            <div style={{ backgroundColor: '#28a745', color: 'white', padding: '10px' }}>
              Успех! Сетка работает корректно
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TestGrid;