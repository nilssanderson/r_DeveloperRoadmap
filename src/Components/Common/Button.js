import React, { Component, Fragment } from "react";

class Button extends Component {
  // const item = Object.keys(data.items).map(key => {
  //   if (key !== match.params.id) return;

  //   return data.items[key];
  // });

  handleClick = (e) => {
    e && e.preventDefault();
    this.props.handleClick(e);
  }

  render() {
    return (
      <button
        className={this.props.class}
        onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
};

export default Button;
