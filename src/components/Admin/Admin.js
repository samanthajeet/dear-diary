import React, { Component } from "react";
import axios from "axios";
import AdminNav from "../AdminNav/AdminNav";

class Admin extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  createPost = async body => {
    // console.log(body);
    let response = await axios.post(`/api/diary`, body);
    this.setState({ posts: response.data });
  };

  getPosts = async () => {
    let response = await axios.get(`/api/diary`);
    this.setState({ posts: response.data });
  };

  render() {
    return (
      <div>
        <AdminNav />
      </div>
    );
  }
}

export default Admin;
