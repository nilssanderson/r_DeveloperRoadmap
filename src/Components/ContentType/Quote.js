import React, { Component, Fragment } from 'react';

const styles = {
  display: 'block',
  margin: '1em 0'
};

class Quote extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="quote" style={styles}>
          "{this.props.children}"
        </h3>
      </Fragment>
    );
  }
}

export default Quote;