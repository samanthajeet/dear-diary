import React, { Component } from "react";
import styled from "styled-components";
import createIcon from '../../images/create-icon.png'

const NavigationContainer = styled.main`
  /* border: 1px solid red; */
  height: 100%;
  background: #F4722B;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 15rem;

  li{
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  li:hover {
    color: #F4722B;
    cursor: pointer;
    background: white;
  }
`;

let pages = [
  {
    name: "Create Post",
    val: "createpost",
    icon: createIcon
  },
  {
    name: "Post Manager",
    val: "postmanager"
  }
  ,
  {
    name: "Your Diary",
    val: "yourdiary"
  }
];

class AdminNav extends Component {
  state = {
    showNav: true
  };

  handleOpen() {
    this.setState({
      showNav: !this.state.showNav
    });
  }

  goToPage(val) {
    if(val === 'yourdiary'){
      this.props.history.push(`/`);
    } else {

      this.props.history.push(`/admin/${val}`);
    }
  }
  render() {
    console.log(this.props.history.location.pathname);
    let {pathname} = this.props.history.location
    let { showNav } = this.state;
    return (
      <NavigationContainer>
        {this.props.history.location.pathname.includes("/admin") ? (
          <div>
            {/* <button onClick={() => this.handleOpen()}>show</button> */}
            <Navigation id={showNav ? null : "no-show"} >
              <ul>
                {pages.map(page => (
                  <li key={page.val} onClick={() => this.goToPage(page.val)} style={{background: pathname === '/admin/' + page.val ? 'white' : null, color:pathname === '/admin/' + page.val ? '#F4722B' : null }}>
                  <img src={page.icon} alt=""/>
                    {page.name}
                  </li>
                ))}
              </ul>
            </Navigation>
          </div>
        ) : null}
      </NavigationContainer>
    );
  }
}

export default AdminNav;
