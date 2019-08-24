import React, { Component } from "react";
import axios from 'axios'
import PostCard from "./PostCard";
import styled from "styled-components";

const AdminPosts = styled.main`
  width: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding: 5rem;
`;

class PostManager extends Component {
  state = {
    posts: []
  };

  componentDidMount(){
    this.getPosts()
  }

  getPosts = async () => {
    let response = await axios.get(`/api/diary`);
    this.setState({ posts: response.data });
  };

  deletePost = async(id) =>{
    let response = await axios.delete(`/api/diary/${id}`)
    this.setState({posts: response.data})
  }


  render() {
    let mappedPosts = this.state.posts.map( post => {
      return (
        <PostCard  key={post.post_id}
        date={post.post_date}
        image={post.post_image}
        title={post.post_title}
        deletePost={this.deletePost}
        text={post.post_text}
        id={post.post_id}/>
      )
    })
    return (
      <AdminPosts>
        {mappedPosts}
      </AdminPosts>
    );
  }
}

export default PostManager;
