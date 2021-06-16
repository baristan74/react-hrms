import React, { useState,useEffect } from "react";
import { Button, Card, Container, Image,Label } from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import { NavLink } from "react-router-dom";
export default function JobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(()=>{
    let jobAdvertService = new JobAdvertService()
    jobAdvertService.getAllByIsConfirmedByEmployee().then(result=>setJobAdverts(result.data.data))
  },[])


  return (
    <div>
      <Container>
        {jobAdverts.map((jobAdvert) => (
          <Card fluid key={jobAdvert.id} style={{marginTop:"2em"}}>
            <Card.Content >
              <Image
                floated="left"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />
              
              <Card.Header>{jobAdvert.jobPosition.position}</Card.Header>
              <Card.Meta>{jobAdvert.employer.companyName}</Card.Meta>
              <Card.Description>{jobAdvert.city.name}
              </Card.Description>
              <Label>
              <Card.Description>{jobAdvert.employmentType.name}
              
              </Card.Description>
              </Label>
              <Card.Description>
                Son Başvuru Tarihi : {" "}
                <strong>{jobAdvert.applicationDeadline}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button basic color="green">
                  Başvur
                </Button>
                <Button as={NavLink} to={`/jobadverts/${jobAdvert.id}`} basic color="blue">
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
