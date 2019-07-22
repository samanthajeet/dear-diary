import React, {Component} from 'react';
import axios from 'axios'
import CreatePost from '../CreatePost/CreatePost';
import PostManager from '../PostManager/PostManager';


class Admin extends Component {
  state = { 
    posts: []
   }

  componentDidMount(){
    this.getPosts()
  }

  createPost = async (body) => {
    // console.log(body);
    let response = await axios.post(`/api/diary`, body);
    this.setState({posts: response.data})
  };

  getPosts = async () => {
    let response = await axios.get(`/api/diary`);
    this.setState({ posts: response.data });
  };

  deletePost = async(id) =>{
    let response = await axios.delete(`/api/diary/${id}`)
    this.setState({posts: response.data})
  }
  render() { 
    return ( 
      <div>
      <h1>admin page</h1>
      <CreatePost createPost={this.createPost} />
      <PostManager posts={this.state.posts} deletePost={this.deletePost} />
    </div>
     );
  }
}
 
 
export default Admin;