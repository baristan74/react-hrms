import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import AdminManagementMenu from "../pages/Admin/AdminManagementMenu";
import AdminJobAdvertList from "../pages/Admin/JobAdverts/AdminJobAdvertList";
import AdminSetttings from '../pages/Admin/AdminSetttings';
export default function AdminManagement() {
    return (
        <div>
            <Grid style={{marginTop:"3em"}}>
        <Grid.Row>
          <Grid.Column width={3}>
              <AdminManagementMenu/>
          </Grid.Column>
          <Grid.Column width={13}>
          <Route exact path="/admin" component={AdminSetttings} />
          <Route exact path="/admin/jobadvertmanagement" component={AdminJobAdvertList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
