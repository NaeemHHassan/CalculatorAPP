import React from "react";
import "./App.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Jumbotron fluid>
        <Container>
          <h1>Welcome to React!</h1>
          <h3>This is simple Calculator build in React+Node</h3>

          <Calculator></Calculator>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default App;
