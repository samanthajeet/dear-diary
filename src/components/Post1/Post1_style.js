import styled from "styled-components";

export const PostContainer = styled.main`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  height: 50%;
  /* margin-top: 0.25rem; */
`;

export const PostText = styled.div`
  width: 40%;
  padding: 1rem;
  padding-bottom: 0;
  text-align: left;
  h1 {
    font-size: 3.5rem;
    line-height: 4rem;
    margin-bottom: .5rem;
  }
`;

export const PostImage = styled.div`
  width: 60%;
  height: 40rem;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
