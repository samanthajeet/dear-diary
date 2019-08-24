import React, { Component } from "react";
import styled from "styled-components";
import createIcon from "../../images/create-icon.png";

const NavigationContainer = styled.main`
  height: 100vh;
  width: 20vw;

`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(45deg, #799f0c, #ffe000);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #799f0c, #ffe000);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  ul {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 1rem;
  }

  li {
    width: 100%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    color: white;
  }

  li:hover {
    color: #f4722b;
    cursor: pointer;
    background: white;
    border-radius: 35px 0px 0px 35px;
  }

  #nav-icon {
    height: 1rem;
    width: 1rem;
    border: none;
    margin-right: 0.5rem;
  }

  #selected-icon {
    border-radius: 40px 0px 0px 40px;
    background: white;
    color: #f4722b;
  }
`;

let pages = [
  {
    name: "Post Manager",
    val: "postmanager"
  },
  {
    name: "Create Post",
    val: "createpost",
    icon: createIcon
  },
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
    if (val === "yourdiary") {
      this.props.history.push(`/`);
    } else {
      this.props.history.push(`/admin/${val}`);
    }
  }
  render() {
    console.log(this.props.history.location.pathname);
    let { pathname } = this.props.history.location;
    let { showNav } = this.state;
    return (
      <NavigationContainer >
        {this.props.history.location.pathname.includes("/admin") ? (
          <div>
            {/* <button onClick={() => this.handleOpen()}>show</button> */}
            <Navigation id={showNav ? null : "no-show"}>
              <ul>
                {pages.map(page => (
                  <li
                    key={page.val}
                    onClick={() => this.goToPage(page.val)}
                    id={
                      pathname === "/admin/" + page.val ? "selected-icon" : null
                    }
                  >
                    <img src={page.icon} alt="" id="nav-icon" />
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
