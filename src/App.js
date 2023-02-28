import React, { Component } from "react";
import "./App.css"
import "./components/Fruits.js";
import Frutas from "./components/Fruits";
import Cart from "./components/Cart"


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Hortifruti</h1>
          <p className="vnw">VnW</p>
        </header>
        <main>
        <Frutas/>
        <Cart/>
        </main>
      </div>
    )
  }
}

export default App
