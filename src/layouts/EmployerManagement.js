import React from "react";
import { Grid } from "semantic-ui-react";
import EmployerJobAdvertList from "../pages/EmployerManagement/EmployerJobAdvertList";
import EmployerJobAdvertMenu from "../pages/EmployerManagement/EmployerJobAdvertMenu";
import { Route } from "react-router";
import EmployerJobAdvertManagement from "../pages/EmployerManagement/EmployerJobAdvertManagement";

export default function EmployerManagement() {
  return (
    <div>
      <Grid style={{marginTop:"3em"}}>
        <Grid.Row>
          <Grid.Column width={3}>
            <EmployerJobAdvertMenu/>
          </Grid.Column>
          <Grid.Column width={13}>
          <Route exact path="/employer" component={EmployerJobAdvertList} />
          <Route exact path="/employer/jobadvertlist" component={EmployerJobAdvertList} />
          <Route path="/employer/jobadvertmanagement" component={EmployerJobAdvertManagement} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
