import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Grid } from "semantic-ui-react";
import CvLinkService from "../../../services/cvLinkService";
import AddLinkModal from "./CvModals/AddLinkModal";
import DeleteLinkModal from "./CvModals/DeleteLinkModal";

export default function Link() {
  const [cvLinks, setCvLinks] = useState([]);

  let cvLinkService = new CvLinkService();

  useEffect(() => {
    cvLinkService
      .getAllByCandidateId(16) //fake id
      .then((result) => setCvLinks(result.data.data));
  }, []);

  return (
    <div>
      <Card inverted color="red" fluid style={{ marginLeft: "3em", marginTop: "3em" }}>
        <Card.Content>
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column>
                <AddLinkModal
                  triggerButton={
                    <Button floated="left" primary inverted>
                      <Icon name="plus" />
                      Yeni bağlantı ekle
                    </Button>
                  }
                />
              </Grid.Column>
              <Grid.Column>
                <Card.Header
                  style={{
                    marginTop: "1em",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Bağlantılar
                </Card.Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {cvLinks.map((cvLink, index) => (
            <Card fluid key={index}>
              <Grid columns={3} divided>
                <Grid.Row>
                  <Grid.Column>
                    <Card.Meta style={{ marginBottom: "3px" }}>
                      {cvLink.linkType.name}
                    </Card.Meta>
                  </Grid.Column>
                  <Grid.Column>
                    <Card.Header>{cvLink.link}</Card.Header>
                  </Grid.Column>
                  <Grid.Column>
                    <DeleteLinkModal
                      triggerButton={
                        <Button inverted icon color="red">
                          <Icon name="trash" />
                        </Button>
                      }
                      cvLink={cvLink}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Card>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
}
