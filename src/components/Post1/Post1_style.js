import styled from "styled-components";

export const PostContainer = styled.main`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 40rem;
  /* height: 50%; */
  /* margin-top: 0.25rem; */
  @media (max-width: 800px) {
  display: flex;
  flex-direction: column;
  height: 100%;
  }

`;

export const PostText = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }
  width: 40%;
  height: 100%;
  padding: 1rem;
  padding-bottom: 0;
  text-align: left;
  animation: fade-in 3s ;
  h1 {
    font-size: 3.25rem;
    line-height: 4rem;
    margin-bottom: .5rem;
  }

  @keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }

  
}
`;

export const PostImage = styled.div`
  /* border: 1px solid pink; */
  width: 60%;
  /* height: 100%; */
  max-height: 100%;
  animation: fade-in 3s ;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @keyframes fade-in {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
`;
