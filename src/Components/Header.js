import React, { Component } from "react";
import Button from "./Common/Button";

class Header extends Component {
  handleClick = (e) => {
    this.props.toggleNav();
  }

  render() {
    return (
      <header>
        <Button class="testing" handleClick={this.handleClick}>Nav</Button>
      </header>
    );
  }
};

export default Header;
