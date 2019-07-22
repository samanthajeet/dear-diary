import React, { Component } from "react";

import {
  CreatePostContainer,
  TextInput,
  TitleImgInput,
  ImgPreview,
  LeftInput
} from "./CreatePostStyle";

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

  addPost() {
    let { post_image, post_text, post_title } = this.state;
    let body = {
      post_image,
      post_text,
      post_title
    };
    this.props.createPost(body);
    this.setState({
      post_image: "",
      post_text: "",
      post_title: ""
    })
  }

  render() {
    let { post_image, post_title } = this.state;
    return (
      <CreatePostContainer>
        <h1>create post here</h1>
        <TextInput>
          <TitleImgInput>
            <LeftInput>
              <input
                id="title-input"
                type="text"
                placeholder="post title"
                value={post_title}
                onChange={e => this.handleChange("post_title", e.target.value)}
              />
              <input
                type="text"
                placeholder="post image url"
                onChange={e => this.handleChange("post_image", e.target.value)}
              />
            </LeftInput>
            <ImgPreview>
              <img src={post_image} alt={post_title} />
            </ImgPreview>
          </TitleImgInput>
          <textarea
            maxLength="1600"
            onChange={e => this.handleChange("post_text", e.target.value)}
          />
        </TextInput>
        <div id="create-post-btn">
          <button onClick={() => this.addPost()}>create diary entry</button>
        </div>
      </CreatePostContainer>
    );
  }
}

export default CreatePost;
