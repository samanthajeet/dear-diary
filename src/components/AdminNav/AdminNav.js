import React, { Component } from "react";
import styled from "styled-components";

const NavigationContainer = styled.main`
  border: 1px solid red;
  height: 100%;
`

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 15rem;

  li:hover {
    color: red;
    cursor: pointer;
  }
`;

let pages = [
  {
    name: "Create Post",
    val: "createpost"
  },
  {
    name: "Post Manager",
    val: "postmanager"
  }
];

class AdminNav extends Component {
  state = {
    showNav: false
  };

  handleOpen() {
    this.setState({
      showNav: !this.state.showNav
    });
  }

  goToPage(val) {
    this.props.history.push(`/admin/${val}`);
  }
  render() {
    // console.log(this.props);
    let { showNav } = this.state;
    return (
      <NavigationContainer>
        {this.props.history.location.pathname.includes("/admin") ? (
          <div>
            <button onClick={() => this.handleOpen()}>show</button>
            <Navigation id={showNav ? null : "no-show"} >
              <ul>
                {pages.map(page => (
                  <li key={page.val} onClick={() => this.goToPage(page.val)}>
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
