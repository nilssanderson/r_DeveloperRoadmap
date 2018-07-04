import React, { Component, Fragment } from 'react';

class Tip extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="tip">
          {this.props.children}
        </h3>
      </Fragment>
    );
  }
}

export default Tip;