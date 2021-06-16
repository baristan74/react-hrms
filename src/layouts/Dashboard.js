import React from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import JobAdvertList from "../pages/JobAdverts/JobAdvertList";
import { Route } from "react-router";
import JobAdvertDetail from "../pages/JobAdverts/JobAdvertDetail";
import JobAdvertFilter from "../pages/JobAdverts/JobAdvertFilter";
import FindJob from "../pages/JobAdverts/FindJob";
import EmployerManagement from "./EmployerManagement";
import AdminManagement from "./AdminManagement";
import HomePage from "./HomePage";

export default function Dashboard() {
  return (
    <div>
      
              <Route exact path="/" component={FindJob} />
              <Route exact path="/" component={HomePage} />
              

      <Grid>
        <Grid.Row columns={16} centered>
          <Route  path="/jobadverts" component={FindJob} />
          <Route exact path="/jobadverts/:jobAdvertId" component={FindJob} />
        </Grid.Row>
      </Grid>
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Route exact path="/jobadverts" component={JobAdvertFilter} />
              <Route exact path="/jobadverts/:id" component={JobAdvertFilter} />
            </Grid.Column>
            <GridColumn width={12}>
              <Route exact path="/jobadverts" component={JobAdvertList} />
              <Route
                exact
                path="/jobadverts/:id"
                component={JobAdvertDetail}
              />
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Container>

      <Container>
              <Route  path="/employer" component={EmployerManagement} />
              <Route  path="/admin" component={AdminManagement} />
        </Container>


    </div>
  );
}
