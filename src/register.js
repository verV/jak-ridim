import React from "react";
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class Register extends React.Component {
  render() {
    return (
      <form>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl type="text" placeholder="Enter text" />
        </FormGroup>
      </form>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Register />, rootElement);
