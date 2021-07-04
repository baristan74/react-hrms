import React, { useState, useEffect } from "react";
import { Button, Card, Icon, Grid } from "semantic-ui-react";
import CvCoverLetterService from "../../../services/cvCoverLetterService";
import UpdateCoverLetterModal from "./CvModals/UpdateCoverLetterModal";

export default function CoverLetter() {
  const [cvCoverLetter, setCvCoverLetter] = useState([]);

  useEffect(() => {
    let cvCoverLetterService = new CvCoverLetterService();
    cvCoverLetterService
      .getAllByCandidateId(16) // fake id
      .then((result) => setCvCoverLetter(result.data.data));
  }, []);

  return (
    <div>
      <Card inverted color="red" fluid style={{ marginLeft: "3em", marginTop: "3em" }}>
        <Card.Content>
          <Card.Header
            style={{
              marginBottom: "1em",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Ön Yazı
          </Card.Header>

          {cvCoverLetter.map((cvCoverLetter, index) => (
            <Card fluid key={index}>
              <Card.Description style={{ marginBottom: "3px" }}>
                {cvCoverLetter.coverLetter}
              </Card.Description>

            {cvCoverLetter.coverLetter ? (
            <UpdateCoverLetterModal
                triggerButton={
                  <Button floated="right" color="green" inverted size="mini">
                    <Icon name="pencil" />
                  </Button>
                }
                cvCoverLetter={cvCoverLetter}
              />
              )
              :
              (<UpdateCoverLetterModal
                triggerButton={
                  <Button floated="right" inverted color="blue" inverted size="mini">
                    <Icon name="add" />Ön yazı ekle
                  </Button>
                }
                cvCoverLetter={cvCoverLetter}
              />
              )}
              
            </Card>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
}
