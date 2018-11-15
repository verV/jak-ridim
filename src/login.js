import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styleLogin.css";

function Login() {
  return (
    <form>
      <h2>Login</h2>
      <div className="form-inputs">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Password:
          <input type="text" name="name" />
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}

//export default Login;

const rootElement = document.getElementById("root");
ReactDOM.render(<Login />, rootElement);
