import React from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Button,
} from "semantic-ui-react";

export default function footer() {
  return (
    <div>
      <Segment
        inverted
        vertical
        style={{margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={6}>
              <Header inverted as="h4" content="HRMS Project" />
              <p>kodlama.io Yazılım geliştirici yetiştirme kampı ile geliştirmiş olduğum projem.</p>
            </Grid.Column>

            <Grid.Column width={6}>
              <Header inverted as="h4" content="Follow Us" />
              <br />
              <Button circular color="facebook" icon="facebook" />

              <Button circular color="twitter" icon="twitter" />

              <Button circular color="linkedin" icon="linkedin" />

              <Button circular color="google plus" icon="google plus" />
            </Grid.Column>

            <Grid.Column width={3}>
              <Image size="small" src={"../assets/hrms2.png"} />
            </Grid.Column>
          </Grid>

          <Divider inverted section />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
