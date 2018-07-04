import React, { Component, Fragment } from 'react';

class Text extends Component {
  render() {
    return (
      <Fragment>
        <p className="text">
          {this.props.children}
        </p>
      </Fragment>
    );
  }
}

export default Text;