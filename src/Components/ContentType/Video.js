import React, { Component, Fragment } from 'react';

class Video extends Component {
  render() {
    return (
      <Fragment>
        <video id='video' className="video" controls preload='none'
          width="600" poster={this.props.poster}>
          <source id='mp4' src={`${this.props.src}.mp4`} type='video/mp4' />
          <source id='webm' src={`${this.props.src}.webm`} type='video/webm' />
          <source id='ogv' src={`${this.props.src}.ogv`}type='video/ogg' />
          <track kind="subtitles" label="English subtitles" src="subtitles_en.vtt" srclang="en" default></track>
          <track kind="subtitles" label="Deutsche Untertitel" src="subtitles_de.vtt" srclang="de"></track>
          <p>Your user agent does not support the HTML5 Video element.</p>
        </video>
      </Fragment>
    );
  }
}

export default Video;