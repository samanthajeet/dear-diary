import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'
import Post1 from "../Post1/Post1";
import Post2 from "../Post2/Post2";

const MapedPostContainer = styled.div`
  
`

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    let response = await axios.get(`/api/diary/getPosts`);
    console.log(response.data);
    this.setState({ posts: response.data });
  };
  render() {
    let { posts } = this.state;
    let mappedPosts = posts.map((post, index) => {
      if (index % 2 === 0) {
        return (
          <Post1
            key={post.post_id}
            text={post.post_text}
            title={post.post_title}
            image={post.post_image}
            date={post.post_date}
          />
        );
      } else {
        return (
          <Post2
            key={post.post_id}
            text={post.post_text}
            title={post.post_title}
            image={post.post_image}
            date={post.post_date}
          />
        );
      }
    });
    return <div>
      <MapedPostContainer>
        {mappedPosts}
      </MapedPostContainer>
    </div>;
  }
}

export default Posts;
