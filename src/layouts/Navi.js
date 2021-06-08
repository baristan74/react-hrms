import React from "react";
import { Button, Container, Icon, Menu, Segment,Image } from "semantic-ui-react";
import FindJob from "./FindJob";

export default function Navi() {
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
                <Menu.Item>
                  Find Job
                  <Icon name="search" />
                </Menu.Item>
                <Menu.Item>Companies</Menu.Item>
              </Menu.Menu>

              <Menu.Menu position="right">
                <Menu.Item>
                  <Button inverted>Sign Up</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button inverted>Sign in</Button>
                </Menu.Item>
              </Menu.Menu>
            </Container>
          </Menu>
        </Segment>
      </Segment.Group>
      <FindJob />
    </div>
  );
}
