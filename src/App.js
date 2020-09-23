import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/header";
import BodyComponent from "./components/layout/bodyComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
              <BodyComponent/>
        </Router>
      </Provider>
    );
  }
}

export default App;
