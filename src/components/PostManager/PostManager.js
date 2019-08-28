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

const PostManagerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border-radius: 15px;
    border: 1px solid gray;
    text-align: center;
    height: 2rem;

    :focus {
      outline: none;
      border: 1px solid #87a60b;
      color: #87a60b;
    }

    :hover{
      outline: none;
      border: 1px solid #87a60b;
      color: #87a60b;
    }
  }
`;

class PostManager extends Component {
  state = {
    posts: [],
    showModal: false,
    modalID: null,
    searchInput: ""
  };

  componentDidMount() {
    this.getPosts();
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
    console.log(this.state.searchInput);
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
    let { showModal, modalID, searchInput } = this.state;
    let mappedPosts = this.state.posts
      .filter(post =>
        post.post_title.toLowerCase().includes(searchInput.toLowerCase())
      )
      .map(post => {
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
        <PostManagerHeader>
          <h2>your posts</h2>
          <input
            onChange={e => this.handleChange("searchInput", e.target.value)}
            type="text"
            placeholder="search by title"
          />
        </PostManagerHeader>
        {mappedPosts}
        {showModal ? (
          <PostModal showModal={this.showModal} id={modalID}  />
        ) : null}
      </AdminPosts>
    );
  }
}

export default PostManager;
