import React, { Component } from "react";
import * as Vibrant from "node-vibrant";

import { PostContainer, PostText, PostImage } from "../Post1/Post1_style";

class Post2 extends Component {
  state = {
    palette: []
  };

  componentDidMount() {
    this.createVibrant();
  }

  createVibrant() {
    let img = this.props.image;
    Vibrant.from(img).getPalette((err, palette) => {
      let palette2 = {};
      for (let prop in palette) {
        palette2[prop] = palette[prop].hex;
      }
      this.setState({ palette: palette2 });
    });
  }
  render() {
    let { Vibrant, DarkVibrant } = this.state.palette;
    let { title, date, image, text, vibrant } = this.props;
    return (
      <PostContainer>
        <PostImage>
          <img src={image} alt={title} />
        </PostImage>
        <PostText>
          <header>
            <h5>{date}</h5>
            <h1 style={{color: vibrant === "Vibrant" ? Vibrant : DarkVibrant}}>{title}</h1>
            {/* <h1 style={{ color: `${LightVibrant}` }}>{title}</h1> */}
          </header>
          <p>{text}</p>
        </PostText>
      </PostContainer>
    );
  }
}

export default Post2;
