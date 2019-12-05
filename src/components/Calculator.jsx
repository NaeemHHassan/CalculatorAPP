import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonRow from "./ButtonRow";

class Calculator extends Component {
  state = {
    text: ""
  };
  render() {
    const calculate = () => {
      try {
        this.setState({
          text: (eval(this.state.text) || "") + ""
        });
      } catch (e) {
        this.setState({
          text: "error"
        });
      }
    };
    const handleClick = t => {
      let txt = this.state.text + t;
      this.setState({ text: txt });
    };
    const clearText = () => {
      this.setState({ text: "" });
    };
    const m = {
      margin: "7px"
    };
    const lowerAngle = "<";
    return (
      <React.Fragment>
        <ButtonRow value={this.state.text}></ButtonRow>
        <Container>
          <Row>
            <Col sm={12}>
              <Button variant="primary" style={m} size="lg" onClick={clearText}>
                C
              </Button>
              <Button variant="primary" style={m} size="lg">
                {lowerAngle}
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("/")}
              >
                /
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("*")}
              >
                *
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("7")}
              >
                7
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("8")}
              >
                8
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("9")}
              >
                9
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("-")}
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("4")}
              >
                4
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("5")}
              >
                5
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("6")}
              >
                6
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("+")}
              >
                +
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("1")}
              >
                1
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("2")}
              >
                2
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("3")}
              >
                3
              </Button>
              <Button variant="primary" style={m} size="lg" onClick={calculate}>
                =
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick("0")}
              >
                0
              </Button>
              <Button
                variant="primary"
                style={m}
                size="lg"
                onClick={() => handleClick(".")}
              >
                .
              </Button>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Calculator;
