import React, { useState, useEffect } from "react";
import { Card, Grid, Image, Table, Header } from "semantic-ui-react";
import CvImageService from "../../../services/cvImageService";

export default function ProfilImage({ candidate }) {
  const [cvImage, setCvImage] = useState({});

  useEffect(() => {
    let cvImageService = new CvImageService();
    cvImageService
      .getByCandidateId(16)
      .then((result) => setCvImage(result.data.data));
  }, []);
  console.log(cvImage.url);

  return (
    <div>
      <Card fluid style={{marginLeft:"3em"}} inverted color="blue">
        <Card.Content>
          <Card.Header style={{marginBottom:"1em"}}>Profil Bilgileri</Card.Header>
      <Grid >
        <Grid.Row>
          <Grid.Column width={5}>
              <Image style={{padding:"25px"}}src={cvImage.url} />
            
          </Grid.Column>

          <Grid.Column width={11}>
            <Card fluid inverted color="blue">
              <Card.Content>
                <Table
                 
                  basic="very"
                  size="large"
                  celled
                  collapsing
                  style={{  marinLeft: "3em",height:"20em"}}
                >
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            <b>Adı : </b>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{candidate.firstName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            <b>Soyadı : </b>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{candidate.lastName}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as="h4">
                          <Header.Content>
                            <b>E-Mail : </b>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{candidate.email}</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Header as="h4">
                          <Header.Content >
                            <b>Doğum Tarihi : </b>
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{candidate.birthDate}</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Card.Content>
      </Card>
    </div>
  );
}
