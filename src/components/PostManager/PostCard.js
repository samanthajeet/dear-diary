import React from "react";
import styled from "styled-components";

const PostCard = styled.main`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  box-shadow: 1px 2px 2px hsla(226, 100%, 0%, 0.36);
  border-radius: 5px;
  height: 6rem;
  padding-right: 1rem;
  text-align: left;
  color: #87A60B;

  :hover {
    box-shadow: 1px 2px 2px hsla(226, 100%, 0%, 0.5);
    cursor: pointer;
    p {
      color: #87A60B
    }
  }

`;

const PostCardImage = styled.figure`
  height: 100%;
  width: 25%;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 5px 0 0 5px;
  }
`;

const PostCardText = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-between;
  color:#6D676E;

`;

export default function MediaCard(props) {
  let { image, title, deletePost, id, text, date } = props;
  return (
    <PostCard>
      <PostCardImage>
        <img src={image} alt="" />
      </PostCardImage>
      <PostCardText>
        <p>{date}</p>
        <p>{title}</p>
        <button onClick={() => deletePost(id)}>delete</button>
      </PostCardText>
    </PostCard>
  );
}
