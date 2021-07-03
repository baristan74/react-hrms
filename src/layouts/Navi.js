import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Icon, Menu, Segment, Image } from "semantic-ui-react";
import CandidateJobAdvertFavorite from "./CandidateJobAdvertFavorite";
import { useSelector } from "react-redux";

import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  const { favoriteItems } = useSelector((state) => state.favorite);
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
                <Image as={NavLink} to="/" size="tiny" src={"../assets/hrms-logo.png"} />
              </Menu.Item>
              <Menu.Menu position="left">
                <Menu.Item as={NavLink} to="/jobadverts">
                  İş İlanları
                  <Icon name="search" />
                </Menu.Item>
                <Menu.Item as={NavLink} to="/employer">Şirket Yönetimi</Menu.Item>
                <Menu.Item as={NavLink} to="/admin">Admin Yönetimi</Menu.Item>
                <Menu.Item as={NavLink} to="/candidate">İş Arayan Paneli</Menu.Item>
              </Menu.Menu>

              <Menu.Menu position="right">
                <Menu.Item>
                {favoriteItems.length > 0 && <CandidateJobAdvertFavorite />}
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
