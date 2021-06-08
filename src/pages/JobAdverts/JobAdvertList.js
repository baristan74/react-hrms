import React, { useState,useEffect } from "react";
import { Button, Card, Container, Image } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(()=>{
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getJobAdverts().then(result=>setJobAdverts(result.data.data))
  })


  return (
    <div>
      <Container>
        {jobAdverts.map((jobAdverts) => (
          <Card fluid>
            <Card.Content>
              <Image
                floated="left"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />

              <Card.Header>{jobAdverts.employer.companyName}</Card.Header>
              <Card.Meta>{jobAdverts.jobPosition.position}</Card.Meta>
              <Card.Description>{jobAdverts.city.name}
              </Card.Description>
              <Card.Description>
                Son Başvuru Tarihi : {" "}
                <strong>{jobAdverts.applicationDeadline}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Başvur
                </Button>
                <Button basic color="blue">
                  İncele
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Container>
    </div>
  );
}
