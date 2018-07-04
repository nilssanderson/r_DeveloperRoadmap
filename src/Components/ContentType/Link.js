import React, { Component, Fragment } from 'react';

const styles = {
  display: 'block'
};

class Link extends Component {
  render() {
    return (
      <Fragment>
        <a href={this.props.href} className="tip" style={styles} target="_blank">
          {this.props.linkText}
          {this.props.children}
        </a>
      </Fragment>
    );
  }
}

export default Link;