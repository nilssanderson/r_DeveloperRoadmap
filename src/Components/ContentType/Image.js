import React, { Component, Fragment } from 'react';

const styles = {
  display: 'block',
  margin: '1em 0'
};

class Image extends Component {
  render() {
    return (
      <Fragment>
        <img
          className="image"
          style={styles}
          src={this.props.src}
          alt={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Image;