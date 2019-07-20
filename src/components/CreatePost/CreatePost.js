import React, { Component } from "react";
import axios from "axios";

import { CreatePostContainer, TextInput,TitleImgInput } from "./CreatePostStyle";

class CreatePost extends Component {
  state = {
    post_image: "",
    post_text: "",
    post_title: ""
  };

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  createPost = async () => {
    let { post_image, post_text, post_title } = this.state;
    let body = {
      post_image,
      post_text,
      post_title
    };
    console.log(body);
    let response = await axios.post(`/api/diary`, body);
    // console.log(response)
  };

  render() {
    let { post_image, post_title } = this.state;
    return (
      <CreatePostContainer>
        <h1>create post here</h1>
        <TextInput>
          <TitleImgInput>
            <input
              type="text"
              placeholder="post title"
              onChange={e => this.handleChange("post_title", e.target.value)}
            />
            <input
              type="text"
              placeholder="post image url"
              onChange={e => this.handleChange("post_image", e.target.value)}
            />
          </TitleImgInput>
          <textarea
            maxLength="1600"
            onChange={e => this.handleChange("post_text", e.target.value)}
          />
        </TextInput>
        <button onClick={() => this.createPost()}>create diary entry</button>
        <img src={post_image} alt={post_title} />
      </CreatePostContainer>
    );
  }
}

export default CreatePost;
