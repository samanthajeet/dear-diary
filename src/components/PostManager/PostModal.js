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
    let { post_title,post_text  } = this.state.postInfo;
    return (
      <PostModalContainer>
        <h1>{post_title}</h1>
        <p>{post_text}</p>
        <button onClick={() => showModal(null)}>close modal</button>
      </PostModalContainer>
    );
  }
}

export default PostModal;
