import styled from "styled-components";

export const CreatePostContainer = styled.main`
  /* border: 1px solid green; */
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 90vh;
  padding: 1rem;
  #create-post-btn {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    button {
      border-radius: .5rem;
      border: none;
      padding: 0.4rem;
      background: white;
      box-shadow: 1px 2px 3px #cfcfcf;
      color: gray;
    }

    button:hover {
      color: black;
      box-shadow: 1px 2px 3px #7d7d7d;
    }
  }

  input:hover{
    box-shadow: 1px 2px 3px #7d7d7d;
  }
  input:focus {
    box-shadow: 1px 2px 3px #7d7d7d;
  }
`;

export const TitleImgInput = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: space-between;
`;
export const TextInput = styled.section`
  /* border: 1px solid orange; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  textarea {
    height: 100%;
    width: 100%;
    outline: none;
    resize: none;
    border-radius: 0.5rem;
    /* border: 1px solid black; */
    border: none;
    padding: 0.5rem;
  }
`;

export const LeftInput = styled.div`
  height: 100%;
  width: 50%;
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    height: 15%;
    width: 90%;
    border-radius: 5px;
    /* border: 1px solid black; */
    border: none;
    background: none;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    box-shadow: 1px 2px 3px #cfcfcf;
  }

  input:focus {
    outline: none;
  }

  #title-input {
    height: 40%;
    font-family: "DM Serif Text", serif;
    font-size: 2.75rem;
    border: none;
    /* border-bottom: 1px solid black; */
    border-radius: 5px;
    /* box-shadow: none; */
  }
`;

export const ImgPreview = styled.div`
  height: 100%;
  width: 50%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
