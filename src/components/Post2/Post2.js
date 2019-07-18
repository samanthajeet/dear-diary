import React from "react";
import * as Vibrant from "node-vibrant";

import { PostContainer, PostText, PostImage } from "../Post1/Post1_style";

const Post2 = props => {
  let vibrant = Vibrant.from(props.image).getPalette((err, palette) => {
    let palette2 = {};
    for (let prop in palette) {
      palette2[prop] = palette[prop].hex;
    }
    let { Vibrant } = palette2;
    console.log(Vibrant)
    return Vibrant;
  });
  console.log(vibrant)

  let { title, date, image, text } = props;
  return (
    <PostContainer>
      <PostImage>
        <img src={image} alt={title} />
      </PostImage>
      <PostText>
        <header>
          <h5>{date}</h5>
          <h1 style={{ color: `${vibrant}` }}>{title}</h1>
        </header>
        <p>{text}</p>
      </PostText>
    </PostContainer>
  );
};

export default Post2;
