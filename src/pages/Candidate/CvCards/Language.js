import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Grid } from "semantic-ui-react";
import CvLanguageService from "../../../services/cvLanguageService";
import AddLanguageModal from "./CvModals/AddLanguageModal";
import { Header, Modal, Rating } from "semantic-ui-react";

export default function Language() {
  const [open, setOpen] = React.useState(false);

  let cvLanguageService = new CvLanguageService();

  const deleteCvLanguage = (language) => {
    cvLanguageService.delete(language).then((result) => console.log(result));
    window.location.reload();
  };

  const [cvLanguages, setCvLanguages] = useState([]);

  useEffect(() => {
    cvLanguageService
      .getAllByCandidateId(16) //fake id
      .then((result) => setCvLanguages(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid style={{ marginLeft: "3em", marginTop: "3em" }}>
        <Card.Content>
          <Grid divided="vertically">
            <Grid.Row columns={3}>
              <Grid.Column>
                <AddLanguageModal
                  triggerButton={
                    <Button floated="left" primary inverted>
                      <Icon name="plus" />
                      Yeni dil ekle
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
                  Diller
                </Card.Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          {cvLanguages.map((cvLanguage, index) => (
            <Card fluid key={index}>
              <Grid columns={3} divided>
                <Grid.Row>
                  <Grid.Column>
                    <Card.Meta style={{ marginBottom: "3px" }}>
                      {cvLanguage.language.name}
                    </Card.Meta>
                  </Grid.Column>
                  <Grid.Column>
                    <Card.Header>
                      <Rating
                        defaultRating={cvLanguage.level}
                        maxRating={5}
                        disabled
                      />
                    </Card.Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                      open={open}
                      size="tiny"
                      trigger={
                        <Button icon color="red">
                          <Icon name="trash" />
                        </Button>
                      }
                    >
                      <Modal.Content>
                        <p>Silmek istediğinize emin misiniz?</p>
                      </Modal.Content>
                      <Modal.Actions>
                        <Button
                          color="red"
                          inverted
                          onClick={() => setOpen(false)}
                        >
                          <Icon name="remove" /> No
                        </Button>
                        <Button
                          color="green"
                          inverted
                          onClick={() => deleteCvLanguage(cvLanguage)}
                        >
                          <Icon name="checkmark" /> Yes
                        </Button>
                      </Modal.Actions>
                    </Modal>
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
