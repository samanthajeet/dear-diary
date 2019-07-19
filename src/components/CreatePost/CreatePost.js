import React, { Component } from 'react';

class CreatePost extends Component {
  state = { 

   }
  render() { 
    return ( 
      <div>
        <h1>create post here</h1>
        <input type="text" placeholder="post image url"/>
        <textarea maxlength="1600" ></textarea>
        <button>create diary entry</button>
      </div>
     );
  }
}
 
export default CreatePost;