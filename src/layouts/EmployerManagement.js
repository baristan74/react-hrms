import React from "react";
import { Grid } from "semantic-ui-react";
import EmployerJobAdvertMenu from "../pages/EmployerManagement/EmployerJobAdvertMenu";
import { Route } from "react-router";
import EmployerProfil from "../pages/EmployerManagement/EmployerSettings/EmployerProfil";
import EmployerJobAdvertList from "../pages/EmployerManagement/JobAdverts/EmployerJobAdvertList";
import EmployerJobAdvertManagement from "../pages/EmployerManagement/JobAdverts/EmployerJobAdvertManagement";

export default function EmployerManagement() {
  return (
    <div>
      <Grid style={{marginTop:"3em"}}>
        <Grid.Row>
          <Grid.Column width={3}>
            <EmployerJobAdvertMenu/>
          </Grid.Column>
          <Grid.Column width={13}>
          <Route exact path="/employer" component={EmployerProfil} />
          <Route exact path="/employer/jobadvertlist" component={EmployerJobAdvertList} />
          <Route path="/employer/jobadvertmanagement" component={EmployerJobAdvertManagement} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
