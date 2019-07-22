import React, { Component } from "react";
import axios from "axios";

class PostManager extends Component {
  render() {
    // console.log(this.props)
    let { deletePost } = this.props;
    let mappedPosts = this.props.posts.map(post => {
      return (
        <div key={post.post_id}>
          <h3>{post.post_title}</h3>
          <button onClick={() => deletePost(post.post_id)}>delete</button>
        </div>
      );
    });
    return <div>{mappedPosts}</div>;
  }
}

export default PostManager;
