import React from 'react'
import JobAdvertDetail from "../pages/JobAdverts/JobAdvertDetail";
import JobAdvertFilter from "../pages/JobAdverts/JobAdvertFilter";
import JobAdvertList from "../pages/JobAdverts/JobAdvertList";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import { Route } from 'react-router';

export default function JobAdvert() {
    return (
        <div>
      <Container>
        <Grid style={{marginTop:"3em"}}>
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
        </div>
    )
}
