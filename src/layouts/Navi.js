import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Icon, Menu, Segment, Image } from "semantic-ui-react";


import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useHistory()

function handleSignOut() {
  setIsAuthenticated(false)
  history.push("/")
}

function handleSignIn() {
  setIsAuthenticated(true)
}

  return (
    <div>
      <Segment.Group>
        <Segment inverted>
          <Menu inverted fixed="top" size="large">
            <Container>
              <Menu.Item>
                <Image size="tiny" src={"../assets/hrms-logo.png"} />
              </Menu.Item>
              <Menu.Menu position="left">
                <Menu.Item as={NavLink} to="/jobadverts">
                  İş İlanları
                  <Icon name="search" />
                </Menu.Item>
                <Menu.Item>Companies</Menu.Item>
              </Menu.Menu>

              <Menu.Menu position="right">
                <Menu.Item>
                  {isAuthenticated ? <SignedIn signOut={handleSignOut}/>  : <SignedOut signIn={handleSignIn}/>}
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Segment.Group>
    </div>
  );
}
