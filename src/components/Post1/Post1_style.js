import styled from "styled-components";

export const PostContainer = styled.main`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  height: 50%;
  margin-top: 0.25rem;
`;

export const PostText = styled.div`
  width: 40%;
  padding: 1rem;
  text-align: left;
  h1 {
    font-size: 4rem;
  }
`;

export const PostImage = styled.div`
  width: 60%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
