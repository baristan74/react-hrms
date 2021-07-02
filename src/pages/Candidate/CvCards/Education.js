import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Grid, Modal} from "semantic-ui-react";
import CvEducationService from "../../../services/cvEducationService";
import AddEducationModal from "./CvModals/AddEducationModal";
import UpdateEducationModal from "./CvModals/UpdateEducationModal";

export default function Education() {
  const [open, setOpen] = React.useState(false);
  const [cvEducations, setCvEducations] = useState([]);

  let cvEducationService = new CvEducationService();

  const deleteCvEducation = (cveducation) => {
    cvEducationService.delete(cveducation).then((result) => console.log(result));
    window.location.reload();
  };

  useEffect(() => {
    cvEducationService
      .getAllByCandidateIdOrderByFinishDateDesc(16) //fake id
      .then((result) => setCvEducations(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid style={{ marginLeft: "3em",marginTop:"3em" }}>
        <Card.Content>
          
        <Grid divided='vertically'>
    <Grid.Row columns={3}>
      <Grid.Column>
      <AddEducationModal
          triggerButton={
            <Button floated="left" primary inverted >
            <Icon name="plus" />
            Yeni eğitim ekle
          </Button>
          }
          />
      </Grid.Column>
      <Grid.Column>
      <Card.Header style={{marginTop:"1em",fontSize:"20px",fontWeight:"bold"}}>
            {" "}
            Eğitim Bilgileri
          </Card.Header>
      </Grid.Column>
    </Grid.Row>
    </Grid>
        
         
          
          
          

          {cvEducations.map((cvEducation, index) => (
            <Card fluid key={index} >
              <Card.Content>

              <UpdateEducationModal
                triggerButton={
                  <Button 
              floated="right" 
              color="green" 
              icon="pencil"/>
                }
                cvEducation ={cvEducation}
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
                      onClick={() => deleteCvEducation(cvEducation)}
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
