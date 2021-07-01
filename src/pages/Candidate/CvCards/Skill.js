import React, { useState,useEffect } from "react";
import { Button, Card, Icon,Label } from "semantic-ui-react";
import CvSkillService from "../../../services/cvSkillService";
import UpdateSkillModal from "./CvModals/UpdateSkillModal";

export default function Skill() {
  const [cvSkills, setCvSkills] = useState([]);

  useEffect(() => {
    let cvSkillService = new CvSkillService();
    cvSkillService
      .getAllByCandidateId(16) // fake id
      .then((result) => setCvSkills(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid style={{ marginLeft: "3em",marginTop:"3em" }}>
        <Card.Content>
                
                  
                
                <Card.Header style={{ marginBottom: "1em",fontSize:"20px",fontWeight:"bold"}} >
                  {" "}
                  Beceriler 
                </Card.Header>

                <UpdateSkillModal
                triggerButton={
                    <Button floated="right" 
                    color="green"
                    inverted
                    size="mini"
                    >
                      <Icon name="pencil" />
                    </Button>
                  }
                />

          {cvSkills.map((cvSkill,index) => (
            <Label  color ="green" key={index}>{cvSkill.name} </Label>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
}
