import React from "react";


import {PostContainer, PostText, PostImage} from './Post1_style'

const Post1 = props => {
  let { title, date, image, text } = props;
  return (
    <PostContainer>
      <PostText>
      <header>
        <h5>{date}</h5>
        <h1>{title}</h1>
      </header>
      <p>{text}</p>
      </PostText>
      <PostImage>
        <img src={image} alt={title} />
      </PostImage>
    </PostContainer>
  );
};

export default Post1;
