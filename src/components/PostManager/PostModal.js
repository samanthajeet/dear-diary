import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const PostModalContainer = styled.main`
  position: fixed;
  background: hsla(226, 100%, 0%, 0.7);
  float: center;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  color: white;
  padding: 5rem 10rem;
`;

const PostModalContents = styled.section`
  display: flex;
  justify-content: space-between;
  height: 70%;

  .text {
    width: 48%;
  }
  img {
    width: 48%;
    height: 100%;
    object-fit: cover;
  }
`;

const PostModalButton = styled.button`
  border-radius: .5rem;
  background: none;
  border: 1px solid white;
  color: white;
  width: 20%;

  :hover{
    background: white;
    color: black;
    cursor: pointer;
  }
`

class PostModal extends Component {
  state = {
    postInfo: {}
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = async () => {
    let response = await axios.get(`/api/diary/${this.props.id}`);
    console.log(response.data[0]);
    this.setState({ postInfo: response.data[0] });
  };
  render() {
    let { showModal } = this.props;
    let { post_title, post_text, post_image } = this.state.postInfo;
    return (
      <PostModalContainer>
        <h1>{post_title}</h1>
        <PostModalContents>
          <img src={post_image} alt="" />
          <section className="text">
            <p>{post_text}</p>
          </section>
        </PostModalContents>
        <PostModalButton onClick={() => showModal(null)}>close modal</PostModalButton>
        <PostModalButton>edit post</PostModalButton>
      </PostModalContainer>
    );
  }
}

export default PostModal;
