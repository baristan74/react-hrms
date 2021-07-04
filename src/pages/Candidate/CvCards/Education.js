import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Grid, Divider } from "semantic-ui-react";
import CvEducationService from "../../../services/cvEducationService";
import AddEducationModal from "./CvModals/AddEducationModal";
import DeleteEducationModal from "./CvModals/DeleteEducationModal";
import UpdateEducationModal from "./CvModals/UpdateEducationModal";

export default function Education() {
  const [cvEducations, setCvEducations] = useState([]);

  let cvEducationService = new CvEducationService();

  useEffect(() => {
    cvEducationService
      .getAllByCandidateIdOrderByFinishDateDesc(16) //fake id
      .then((result) => setCvEducations(result.data.data));
  }, []);

  return (
    <div>
      <Card inverted color="red" fluid style={{ marginLeft: "3em", marginTop: "3em" }}>
        <Card.Content>
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column>
                <AddEducationModal
                  triggerButton={
                    <Button floated="left" primary inverted>
                      <Icon name="plus" />
                      Yeni eğitim ekle
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
                  Eğitim Bilgileri
                </Card.Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {cvEducations.map((cvEducation, index) => (
            <Card fluid key={index}>
              <Card.Content>
                <UpdateEducationModal
                  triggerButton={
                    <Button inverted floated="right" color="green" icon="pencil" />
                  }
                  cvEducation={cvEducation}
                />

                <Grid columns="two">
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta style={{ marginBottom: "3px" }}>
                        Okul
                      </Card.Meta>
                      <Card.Header>{cvEducation.schoolName}</Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta style={{ marginBottom: "3px" }}>
                        Bölüm
                      </Card.Meta>
                      <Card.Header>{cvEducation.departmentName}</Card.Header>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta style={{ marginBottom: "3px" }}>
                        Başlangıç Tarihi
                      </Card.Meta>
                      <Card.Description>
                        {cvEducation.startDate}
                      </Card.Description>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>Bitiş Tarihi</Card.Meta>
                      {cvEducation.finishDate == null ? (
                        <Card.Description>
                          Eğitime devam ediyor{" "}
                        </Card.Description>
                      ) : (
                        <Card.Description>
                          {cvEducation.finishDate}
                        </Card.Description>
                      )}
                    </Grid.Column>
                  </Grid.Row>
                </Grid>

                <DeleteEducationModal
                  triggerButton={
                    <Button inverted floated="right" color="red" icon="trash" />
                  }
                  cvEducation={cvEducation}
                />
              </Card.Content>
            </Card>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
}
