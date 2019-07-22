import React, { Component } from "react";
import PostCard from "./PostCard";
import styled from 'styled-components'

const AdminPosts = styled.main`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

const PostManager = props => {
  return (
    <AdminPosts>
      {props.posts.map(post => {
        return (
          <PostCard
            key={post.post_id}
            image={post.post_image}
            title={post.post_title}
            deletePost={props.deletePost}
            text={post.post_text}
            id={post.post_id}
          />
        );
      })}
    </AdminPosts>
  );
};

export default PostManager;
