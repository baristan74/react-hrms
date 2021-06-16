import React from "react";
import {
  Form,
  Select,
  Icon,
  Segment,
  Header,
  Grid,
  Button,
  GridColumn,
  Image,
  Container,
} from "semantic-ui-react";
export default function FindJob() {
  return (
    <div>
      <Segment.Group>
        <Segment inverted />
        <Segment inverted placeholder>
          <Container>
          <Form>
            <Grid columns={4} stackable textAlign="center">
              <Grid.Row verticalAlign="middle">
                <Grid.Column>
                  <Header inverted icon>
                    <Icon name="home" />
                    City
                  </Header>

                  <Form.Field control={Select} placeholder="City" search />
                </Grid.Column>

                <Grid.Column>
                  <Header inverted icon>
                    <Icon name="tasks" />
                    Job Position
                  </Header>
                  <Form.Field
                    control={Select}
                    placeholder="Job Position"
                    search
                  />
                </Grid.Column>
                <GridColumn>
                  <Image size="medium" src={"../assets/hrms3.png"} />
                </GridColumn>
              </Grid.Row>
              <Grid.Row columns={4}>
                <GridColumn/>
                <GridColumn>
                  <Button inverted>
                    <Icon name="search" />
                    Find Job
                  </Button></GridColumn>
                <GridColumn/><GridColumn/>
                
              </Grid.Row>
            </Grid>
          </Form>
          </Container>
        </Segment>
      </Segment.Group>
    </div>
  );
}
