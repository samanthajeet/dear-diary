import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import * as Vibrant from "node-vibrant";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';


import Post1 from "../Post1/Post1";
import Post2 from "../Post2/Post2";


const MapedPostContainer = styled.div`
  margin-top: 1rem;
  /* height: 100%; */
  /* border: 2px solid red; */
`;
const DearDiary = styled.header`
  display: flex;
  justify-content: space-between;
  background: white;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
`;

const MenuBtn = styled.menu`
  /* border: 1px solid purple; */
  width: 2rem;

`;



class Posts extends Component {
  state = {
    posts: [],
    anchorEl: null,
    open: false
  };

  componentDidMount() {
    this.getPosts();
  }

  // createVibrant = async img => {
  //   let response = await Vibrant.from(img).getPalette((err, palette) => {
  //     let palette2 = {};
  //     for (let prop in palette) {
  //       palette2[prop] = palette[prop].hex;
  //     }
  //     return palette2;
  //   });
  //   console.log(response.Vibrant.hex);
  //   return response.Vibrant.hex;
  // };

  getPosts = async () => {
    let response = await axios.get(`/api/diary`);
    this.setState({ posts: response.data });
  };

  goToAdmin(){
    this.props.history.push(`/admin/postmanager`)
    this.handleClose()
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget, open: true });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, open: false });
  };

  render() {
    let { posts, anchorEl, open } = this.state;
    let mappedPosts = posts.map((post, index) => {
      if (index % 2 === 0) {
        // let vibrant = this.createVibrant(post.post_image);
        return (
          <Post1
            key={post.post_id}
            text={post.post_text}
            title={post.post_title}
            image={post.post_image}
            date={post.post_date}
            // vibrant={vibrant}
          />
        );
      } else {
        return (
          <Post2
            key={post.post_id}
            text={post.post_text}
            title={post.post_title}
            image={post.post_image}
            date={post.post_date}
            // vibrant={this.createVibrant(post.post_image)}
          />
        );
      }
    });
    return (
      <div>
        <DearDiary >
        <MenuBtn>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={this.handleClose}
            PaperProps={{
              style: {
                maxHeight: "4rem",
                width: "6rem",
                // height: "3rem",
                // border: "1px solid green"
              }
            }}
          >

              <MenuItem
                // selected={option === "Pyxis"}
                onClick={() => this.goToAdmin()}
              >
                Admin
              </MenuItem>
            )}
          </Menu>
        </MenuBtn>
          <h1>dear diary</h1>
          <div></div>
        </DearDiary>
        <MapedPostContainer>{mappedPosts}</MapedPostContainer>
      </div>
    );
  }
}

export default Posts;
