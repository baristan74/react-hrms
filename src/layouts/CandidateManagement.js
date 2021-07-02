import React from 'react'
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import CandidateSettings from '../pages/Candidate/CandidateSettings';
import CandidateMenu from "../pages/Candidate/CandidateMenu";
import CandidateCv from '../pages/Candidate/CandidateCv';

export default function AdminManagement() {
    return (
        <div>
            <Grid style={{marginTop:"3em"}}>
        <Grid.Row>
          <Grid.Column width={3}>
              <CandidateMenu/>
          </Grid.Column>
          <Grid.Column width={13}>
          <Route exact path="/candidate" component={CandidateCv} />
          <Route exact path="/candidate/settings" component={CandidateSettings} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    )
}
