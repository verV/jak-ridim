import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Register(props) {
  return (
    <div class="registration">
      <h1>Registrace</h1>
      <form>
        <div class="my-form">
          <label for="email">
            <b>Email</b>
          </label>
          <input type="text" placeholder="EMAIL" name="email" required />

          <label for="uname">
            <b>Název</b>
          </label>
          <input type="text" placeholder="Název" name="uname" required />
          <label for="ico">
            <b>IČO</b>
          </label>
          <input type="text" placeholder="IČO" name="ico" required />
          <label for="person">
            <b>Kontaktní osoba</b>
          </label>
          <input
            type="text"
            placeholder="Kontaktní osoba"
            name="person"
            required
          />
          <label for="tel">
            <b>Telefon</b>
          </label>
          <input type="text" placeholder="Heslo" name="psw" required />
          <label for="adresa">
            <b>Adresa</b>
          </label>
          <input type="text" placeholder="Adresa" name="adresa" required />

          <label for="psw">
            <b>Heslo</b>
          </label>
          <input type="text" placeholder="Heslo" name="psw" required />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Jak řídím!</h1>
      <Register />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
