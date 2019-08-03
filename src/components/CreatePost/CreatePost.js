import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import clsx from "clsx";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import { lightGreen } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import * as Vibrant from "node-vibrant";

import {
  CreatePostContainer,
  TextInput,
  TitleImgInput,
  ImgPreview,
  LeftInput
} from "./CreatePostStyle";

const variantIcon = {
  success: CheckCircleIcon
};

{
  /* ------------------------------------------ Material UI Snackbar Stuff----------------------------------------------- */
}
const useStyles1 = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  success: {
    backgroundColor: lightGreen[500]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

function MySnackbarContentWrapper(props) {
  const classes = useStyles1();

  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};

{
  /* ------------------------------------------ Start of Create Post Compnonent----------------------------------------------- */
}

class CreatePost extends Component {
  state = {
    post_image: "",
    post_text: "",
    post_title: "",
    open: false,
    palette: {}
  };


  componentDidUpdate(prevProps, prevState) {
    // Typical usage (don't forget to compare props):
    if (prevState.post_image !== this.state.post_image) {
      this.createVibrant();
    }
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });
  }

  createPost = async body => {
    let response = await axios.post(`/api/diary`, body);
    this.setState({ posts: response.data });
  };

  addPost() {
    let { post_image, post_text, post_title } = this.state;
    let body = {
      post_image,
      post_text,
      post_title
    };
    this.createPost(body);
    this.setState({
      post_image: "",
      post_text: "",
      post_title: "",
      open: true
    });
  }

  createVibrant() {
    console.log('hit')
    let img = this.state.post_image;
    Vibrant.from(img).getPalette((err, palette) => {
      let palette2 = {};
      for (let prop in palette) {
        palette2[prop] = palette[prop].hex;
      }
      this.setState({palette: palette2})
      console.log(this.state)
    });
  }




  // ------------------------------------------ Toggles Snackbar----------------------------------------------

  handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    this.setState({
      open: false
    });
  };

  render() {
    let { post_image, post_title, post_text } = this.state;

    return (
      <CreatePostContainer>
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
                value={post_image}
              />
            </LeftInput>
            <ImgPreview>
              <img src={post_image} alt={ post_image ? post_title : ''} />
            </ImgPreview>
          </TitleImgInput>
          <Paper style={{ width: "100%", height: "70%" }}>
            <textarea
              maxLength="1800"
              onChange={e => this.handleChange("post_text", e.target.value)}
              value={post_text}
            />
          </Paper>
        </TextInput>
        <p style={{ color: post_text.length > 1700 ? "#e6673c" : null }} >{post_text.length} / 1800 </p>
        <div id="create-post-btn">
          <button onClick={() => this.addPost()}>create diary entry</button>
          {/* <button onClick={() => this.setState({open: true})}>click me</button> */}
        </div>

        {/* ------------------------------------------ Material UI Snackbar----------------------------------------------- */}
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <MySnackbarContentWrapper
            onClose={this.handleClose}
            variant="success"
            message="Post has been successfully created!"
          />
        </Snackbar>
      </CreatePostContainer>
    );
  }
}

export default CreatePost;
