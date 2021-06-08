import React from "react";
import { Container, Grid } from "semantic-ui-react";
import SideBar from "./Sidebar";
import JobAdvertList from "../pages/JobAdverts/JobAdvertList";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <SideBar />
            </Grid.Column>
            <Grid.Column width={13}>
              <JobAdvertList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
