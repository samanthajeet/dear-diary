import React, { Component } from "react";
import * as Vibrant from "node-vibrant";
import { PostContainer, PostText, PostImage } from "./Post1_style";

class Post1 extends Component {
  state = {
    palette: []
  };


  componentDidMount(){
    this.createVibrant()
  }

  createVibrant() {
    let img = this.props.image;
    Vibrant.from(img).getPalette((err, palette) => {
      let palette2 = {};
      for (let prop in palette) {
        palette2[prop] = palette[prop].hex;
      }
      this.setState({palette: palette2})
      // console.log(this.state)
    });
  }


  render() {
    // console.log(this.props)
    let {Vibrant, LightVibrant, DarkVibrant} = this.state.palette
    let { date, title, text, image} = this.props
    return (
      <PostContainer>
        <PostText>
          <header>
            <h5>{date}</h5>
            <h1 style={{color: `${Vibrant}`}}>{title}</h1>
            <h1 style={{color: `${DarkVibrant}`}}>{title}</h1>
            {/* <h1 style={{color: `${LightVibrant}`}}>{title}</h1> */}
          </header>
          <p>{text}</p>
        </PostText>
        <PostImage>
          <img src={image} alt={title} />
        </PostImage>
        {/* <p style={{background: `${DarkMuted}`}}>DarkMuted</p>
        <p style={{background: `${DarkVibrant}`}}>DarkVibrant</p>
        <p style={{background: `${Vibrant}`}}>Vibrant</p> 
        <p style={{background: `${LightMuted}`}}>LightMuted</p> 
        <p style={{background: `${LightVibrant}`}}>LightVibrant</p> 
        <p style={{background: `${Muted}`}}>Muted</p>  */}
      </PostContainer>
    );
  }
}

export default Post1;