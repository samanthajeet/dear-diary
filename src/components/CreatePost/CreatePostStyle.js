import styled from 'styled-components';

export const CreatePostContainer = styled.main`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  #create-post-btn{
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    button {
      border-radius: 1rem;
      border: none;
      padding: .4rem;
      background: white;
      box-shadow: 1px 1px 15px 5px #cfcfcf;
      color: gray;
    }

    button:hover {
      color: black;
    }
  }

`

export const TitleImgInput = styled.div`
  display: flex;
  width: 100%;
  height: 25%;
  justify-content: space-between;

`
export const TextInput = styled.section`
width: 90%;
height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  textarea{
    height: 70%;
    width: 100%;
    outline: none;
    resize: none;
    border-radius: .5rem;
    border: 1px solid black;
    padding: .5rem;
  }
`

export const LeftInput = styled.div`
height: 100%;
width: 50%;
/* border: 1px solid red; */
display: flex;
flex-direction: column;
justify-content: space-between;

input{
    height: 30%;
    width: 90%;
    border-radius: 1rem;
    border: 1px solid black;
    background: none;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
  }

  input:focus {
    outline: none;
  }

#title-input{
  height: 50%;
  font-family: 'DM Serif Text', serif;
  font-size: 2.5rem;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 0;
}

`


export const ImgPreview = styled.div`
height: 100%;
width: 50%;
img {
  object-fit: cover;
  width: 100%;
  height: 100%
}

`

