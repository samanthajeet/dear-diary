import React, { Component } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import styled from "styled-components";
import PostModal from "./PostModal";

const AdminPosts = styled.main`
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding: 2rem 4rem;
  text-align: left;

  h2 {
    font-size: 4rem;
    margin: none;
    text-transform: uppercase;
  }
`;

class PostManager extends Component {
  state = {
    posts: [],
    showModal: false,
    modalID: null
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    let response = await axios.get(`/api/diary`);
    this.setState({ posts: response.data });
  };

  deletePost = async id => {
    let response = await axios.delete(`/api/diary/${id}`);
    this.setState({ posts: response.data });
  };

  showModal = id => {
    this.setState({ showModal: !this.state.showModal, modalID: id });
  };

  render() {
    let { showModal, modalID } = this.state;
    let mappedPosts = this.state.posts.map(post => {
      return (
        <PostCard
          key={post.post_id}
          date={post.post_date}
          image={post.post_image}
          title={post.post_title}
          deletePost={this.deletePost}
          text={post.post_text}
          showModal={this.showModal}
          id={post.post_id}
        />
      );
    });
    return (
      <AdminPosts>
        <h2>your posts</h2>
        {mappedPosts}
        {showModal ? <PostModal showModal={this.showModal} id={modalID} /> : null}
      </AdminPosts>
    );
  }
}

export default PostManager;
