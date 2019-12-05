import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class ButtonRow extends Component {
  state = { value: "" };
  render() {
    const handleKeyEvent = event => {
      let c = this.state.value + event.keyCode;
      console.log(c);
      this.setState({ value: c });
    };
    return (
      <Form>
        <Form.Control
          type="email"
          placeholder="Enter"
          value={this.props.value}
          onKeyPress={handleKeyEvent}
        />
      </Form>
    );
  }
}

export default ButtonRow;
