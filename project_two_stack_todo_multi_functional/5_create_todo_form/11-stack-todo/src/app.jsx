import React from "react";
import { Container, Row, Col } from 'reactstrap';

import Todos from './components/todos';

function App() {
  return (
    <Container className="my-3">
      <Row>
        <Col>
          {/* <h1>Stack Todo</h1> */}
          <Todos />
        </Col>
      </Row>
    </Container>
  );
}

export default App;