import React, {Component} from "react";

import styled from 'styled-components'

const PostCardContainer = styled.main`
  /* border: 1px solid green; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  box-shadow: 1px 2px 2px hsla(226, 100%, 0%, 0.5);
  border-radius: 5px;
  height: 6rem;
  padding-right: 1rem;
  text-align: left;
  color: #87a60b;
  transition: all .4s ease-in-out; 

  
  :hover {
    transform: scale(1.04);
    box-shadow: 1px 2px 2px hsla(226, 100%, 0%, 0.36);
    cursor: pointer;
    p {
      color: #87a60b;
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
  color: #6d676e;
`;

const PostCardDeleteBTN = styled.button`
  border-radius: 5px;
  padding: 0 .5rem ;
  border: none;
  background: none;
  :hover{
    color: red;
    cursor: pointer;
  }

`
class PostCard extends Component {
  state = { 
   }
  render() { 
    let { image, title, deletePost, id, text, date, showModal } = this.props;
  
    return ( 
      <PostCardContainer onClick={() => showModal(id)} >
      <PostCardImage>
        <img src={image} alt="" />
      </PostCardImage>
      <PostCardText>
        <p>{date}</p>
        <p>{title}</p>
        <PostCardDeleteBTN onClick={() => deletePost(id)}>delete</PostCardDeleteBTN>
      </PostCardText>
    </PostCardContainer>
     );
  }
}
 
export default PostCard;

