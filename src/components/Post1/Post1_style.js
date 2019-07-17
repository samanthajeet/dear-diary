import styled from 'styled-components'

export const PostContainer = styled.main`
  /* border: 1px solid blue; */
  display: flex;
  width: 100%;
  height: 50%;
`

export const PostText = styled.div`
  width: 40%;
`

export const PostImage = styled.div`
  width: 60%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`