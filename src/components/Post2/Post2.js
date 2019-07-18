import React from "react";
import * as Vibrant from "node-vibrant";

import { PostContainer, PostText, PostImage } from "../Post1/Post1_style";

const Post2 = props => {



  let { title, date, image, text, vibrant } = props;
  return (
    <PostContainer>
      <PostImage>
        <img src={image} alt={title} />
      </PostImage>
      <PostText>
        <header>
          <h5>{date}</h5>
          <h1 style={{ color: `${vibrant}` }} >{title}</h1>
        </header>
        <p>{text}</p>
      </PostText>
    </PostContainer>
  );
};

export default Post2;

