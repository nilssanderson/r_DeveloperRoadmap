import React, { Component, Fragment } from "react";

import Tip from './ContentType/Tip';
import Image from './ContentType/Image';
import Link from './ContentType/Link';
import Quote from './ContentType/Quote';
import Text from './ContentType/Text';
import Video from './ContentType/Video';

class ContentManager extends Component {

  renderItem(item) {
    //console.log(item);
    switch (item.type) {
      case "text":
        return <Text key={item.id} style={this.props.style}>{item.content}</Text>;

      case "quote":
        return <Quote key={item.id} style={this.props.style}>{item.content}</Quote>;

      case "tip":
        return <Tip key={item.id} style={this.props.style}>{item.content}</Tip>;

      case "link":
        return <Link key={item.id} style={this.props.style} linkText={item.linkText} href={item.href}>{item.content}</Link>;

      case "image":
        return <Image key={item.id} spinnerSize={'large'} src={item.src} />;

      case "video":
        return (
          <Video key={item.id} spinnerSize={'large'} src={item.src}
            rate={1.0}
            volume={1.0}
            muted={true}
            resizeMode={'cover'}
            repeat={false}
            useNativeControls={true}
            poster={item.poster}
          />
        );

      case "youtube":
        return (
          <iframe title={item.alt} width="560" height="315" src={item.src} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        );

      case "audio":
        // return (
        //   <AudioDisplay
        //     key={item.id}
        //     source={ASSETS['audio_' + item.value]}
        //     title={item.title} />
        // )
        return "audio";

      default:
        break;
    }
  }

  render() {
    const { content, items } = this.props;

    if (!items[content].sections) {
      return 'No sections';
    }

    if (!items[content].poster) {
      return (
        <Fragment>
          <h1>{items[content].name}</h1>
          {Object.keys(items[content].sections).map(key => this.renderItem(items[content].sections[key]))}
        </Fragment>
      )
    }

    return (
      <Fragment>
        <img src={items[content].poster} alt={items[content].name} />
        <h1>{items[content].name}</h1>
        {Object.keys(items[content].sections).map(key => this.renderItem(items[content].sections[key]))}
      </Fragment>
    );
  }
}

export default ContentManager;
