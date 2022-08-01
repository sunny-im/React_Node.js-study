import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './component/ContactForm'
import ContactList from './component/ContactList'

// 1. 왼쪽 - 연락처 등록 / 오른쪽 - 검색 및 리스트
// 2. 연락처 등록 : 이름, 전화번호
// 3. 리스트에 아이템 갯 수 확인
// 4. 이름으로 검색
function App() {
  return (
    <div>
      <h1 className="title">연락처 !!</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm/>
          </Col>
          <Col>
            <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
