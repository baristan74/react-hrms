import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Grid, Header, Modal } from "semantic-ui-react";
import CvJobExperienceService from "../../../services/cvJobExperienceService";
import AddJobExperienceModal from "./CvModals/AddJobExperienceModal";
import UpdateJobExperienceModal from "./CvModals/UpdateJobExperienceModal";

export default function JobExperience() {
  const [cvJobExperiences, setCvJobExperiences] = useState([]);
  const [open, setOpen] = React.useState(false);
  
  let cvJobExperienceService = new CvJobExperienceService();

  const deleteCvJobExperience = (cvjobexperience) => {
    cvJobExperienceService.delete(cvjobexperience).then((result) => console.log(result));
    window.location.reload();
  };

  useEffect(() => {
    cvJobExperienceService
      .getAllByCandidateIdOrderByLeaveDateDesc(16) //fake id
      .then((result) => setCvJobExperiences(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid style={{ marginLeft: "3em", marginTop: "3em" }}>
        <Card.Content>
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column>
                <AddJobExperienceModal
                  triggerButton={
                    <Button floated="left" primary inverted>
                      <Icon name="plus" />
                      Yeni iş deneyimi ekle
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
                  İş Deneyimleri
                </Card.Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {cvJobExperiences.map((cvJobExperience, index) => (
            <Card fluid key={index}>
              <Card.Content>
                <UpdateJobExperienceModal
                  triggerButton={
                    <Button floated="right" color="green" icon="pencil" />
                  }
                  cvJobExperience={cvJobExperience}
                />

                <Grid columns="two">
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta style={{ marginBottom: "3px" }}>
                        İş Yeri
                      </Card.Meta>
                      <Card.Header>{cvJobExperience.workplaceName}</Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>Bitiş Tarihi</Card.Meta>
                      {cvJobExperience.leaveDate == null ? (
                        <Card.Description>
                          Çalışmaya devam ediyor{" "}
                        </Card.Description>
                      ) : (
                        <Card.Description>
                          {cvJobExperience.leaveDate}
                        </Card.Description>
                      )}
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta style={{ marginBottom: "3px" }}>
                        Pozisyon
                      </Card.Meta>
                      <Card.Header>{cvJobExperience.position}</Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta style={{ marginBottom: "3px" }}>
                        Başlangıç Tarihi
                      </Card.Meta>
                      <Card.Description>
                        {cvJobExperience.startDate}
                      </Card.Description>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <Modal
                  onClose={() => setOpen(false)}
                  onOpen={() => setOpen(true)}
                  open={open}
                  size="small"
                  trigger={<Button floated="right" color="red" icon="trash" />}
                >
                  <Modal.Content>
                    <p>Silmek istediğinize emin misiniz?</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color="red" inverted onClick={() => setOpen(false)}>
                      <Icon name="remove" /> No
                    </Button>
                    <Button
                      color="green"
                      inverted
                      onClick={() => deleteCvJobExperience(cvJobExperience)}
                    >
                      <Icon name="checkmark" /> Yes
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Card.Content>
            </Card>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
}
