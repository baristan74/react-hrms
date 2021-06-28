import React from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import { Route } from "react-router";
import FindJob from "../pages/JobAdverts/FindJob";
import EmployerManagement from "./EmployerManagement";
import AdminManagement from "./AdminManagement";
import HomePage from "./HomePage";
import { ToastContainer } from "react-toastify";
import CandidateManagement from "./CandidateManagement";
import JobAdverts from "./JobAdverts";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
              <Route exact path="/" component={FindJob} />
              <Route exact path="/" component={HomePage} />
             <Route path="/jobadverts" component={JobAdverts}/>

      <Container>
              <Route  path="/employer" component={EmployerManagement} />
              <Route  path="/admin" component={AdminManagement} />
              <Route  path="/candidate" component={CandidateManagement}/>
        </Container>




    </div>
  );
}
