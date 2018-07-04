import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isNavToggleOn: false };
  }

  handleToggle = () => {
    this.setState({
      isNavToggleOn: !this.state.isNavToggleOn
    });
  }

  render() {
    return (
      <Router>
        <div className={`App ${this.state.isNavToggleOn ? 'nav-expanded' : ''}`}>
          <Header toggleNav={this.handleToggle} />
          <div className={`container`}>
            <Sidebar />
            <Fragment>
              <Route path="/:id" component={Main} />
            </Fragment>
          </div>
        </div>
      </Router>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
