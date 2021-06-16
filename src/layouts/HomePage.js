import React from "react";
import {
  Grid,
  Segment,
  Container,
  Icon,
  Image,
  Label,
} from "semantic-ui-react";

export default function HomePage() {

  return (
    <div>
      <Segment
        placeholder
        style={{ marginTop: "-1px", height: "35em" }}
        inverted
        color="grey"
      >
        <Grid columns={4} stackable textAlign="center">
          <Grid.Row verticalAlign="middle">
            <Image
              fluid
              rounded
              floated="right"
              size="big"
              src={"../assets/homepagesegment.jpg"}
            />

            <Grid.Column style={{ marginLeft: "10px" }}>
              <Label size="massive" as="a" color="teal" tag>
                Hangi meslek ne işe yarar
                <Icon link name="help" />
              </Label>
              <Label
                style={{ marginTop: "15px" }}
                size="massive"
                as="a"
                color="teal"
                tag
              >
                İş değişikliği yapman gerektiğini nasıl anlarsın{" "}
                <Icon link name="help" />
              </Label>
              <Label
                style={{ marginTop: "15px" }}
                size="massive"
                as="a"
                color="teal"
                tag
              >
                Uzaktan staj fırsatları nasıl yakalanır
                <Icon link name="help" />
              </Label>
              <Label
                style={{ marginTop: "15px" }}
                size="massive"
                as="a"
                color="teal"
                tag
              >
                Yaratıcılığını arttıracak tavsiyeler
                <Icon link name="warning" />
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Container style={{marginTop:"4em"}}>
          <Grid centered style={{marginBottom:"2em"}}>
          <label style={{fontSize: '25px',fontFamily: 'Arial'}}>Çalışma Tipleri</label>
          </Grid>
          
        <Grid columns="equal" >
          
          <Grid.Row>
            <Grid.Column>
               
              
              <Grid.Row >
              <Image
              rounded
              contain
              src={"../assets/full-time.jpg"}
            />
            </Grid.Row>
            <Grid.Row textAlign="left" style={{marginTop:"6px"}}>
                  <Label color="orange">Full Time</Label>
              </Grid.Row>
              <Grid.Row  style={{marginTop:"2em"}}>
              <Image
              rounded
              contain
              src={"../assets/remote.jpg"}
            />
            </Grid.Row>
            <Grid.Row textAlign="left" style={{marginTop:"6px"}}>
                  <Label color="olive">Remote</Label>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column style={{marginLeft:"5em", marginRight:"5em"}}>
              
              <Grid.Row >
              <Image
              rounded
              contain
              src={"../assets/stajyer.jpg"}
            />
            </Grid.Row>
            <Grid.Row textAlign="left" style={{marginTop:"6px"}}>
                  <Label color="brown">Stajyer</Label>
              </Grid.Row>
              
            </Grid.Column>
            <Grid.Column>
              <Grid.Row >
              <Image
              rounded
              contain
              src={"../assets/part-time.jpg"}
            />
            </Grid.Row>
            <Grid.Row textAlign="left" style={{marginTop:"6px"}}>
                  <Label color="violet">Part Time</Label>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
