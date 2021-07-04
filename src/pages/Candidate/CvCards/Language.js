import React, { useEffect, useState } from "react";
import { Button, Card, Icon, Grid } from "semantic-ui-react";
import CvLanguageService from "../../../services/cvLanguageService";
import AddLanguageModal from "./CvModals/AddLanguageModal";
import { Rating } from "semantic-ui-react";
import DeleteLanguageModal from "./CvModals/DeleteLanguageModal";

export default function Language() {

  let cvLanguageService = new CvLanguageService();

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
            <Card inverted color="red" fluid key={index}>
              <Grid columns={3} divided>
                <Grid.Row>
                  <Grid.Column>
                    <Card.Meta style={{ marginBottom: "3px"}}>
                      <b>{cvLanguage.language.name}</b>
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


                    <DeleteLanguageModal
                    triggerButton={
                      <Button inverted icon color="red">
                          <Icon name="trash" />
                        </Button>
                    }
                    cvLanguage={cvLanguage}
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
