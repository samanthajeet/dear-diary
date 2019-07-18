import React, { Component } from "react";
import axios from "axios";
import styled from 'styled-components'
import * as Vibrant from "node-vibrant";
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

  createVibrant = async (img) => {
    let response = await Vibrant.from(img).getPalette((err, palette) => {
      let palette2 = {};
      for (let prop in palette) {
        palette2[prop] = palette[prop].hex;
      }
      return palette2
    })
    console.log(response.Vibrant.hex)
    return response.Vibrant.hex
  }

  getPosts = async () => {
    let response = await axios.get(`/api/diary/getPosts`);
    this.setState({ posts: response.data });
  };
  render() {
    let { posts } = this.state;
    let mappedPosts = posts.map((post, index) => {
      if (index % 2 === 0) {
        let vibrant = this.createVibrant(post.post_image)
        return (
          <Post1
            key={post.post_id}
            text={post.post_text}
            title={post.post_title}
            image={post.post_image}
            date={post.post_date}
            vibrant={vibrant}
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
            vibrant={this.createVibrant(post.post_image)}
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
