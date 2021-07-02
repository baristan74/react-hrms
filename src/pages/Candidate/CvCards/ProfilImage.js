import React,{useState,useEffect} from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import CvImageService from '../../../services/cvImageService'

export default function ProfilImage({candidate}) {
  const [cvImage, setCvImage] = useState({})

  
  useEffect(() => {
    let cvImageService = new CvImageService();
    cvImageService
    .getByCandidateId(16)
    .then((result) => setCvImage(result.data.data));
  },[])
  console.log(cvImage.url);

    return (
        <div>
            <Card fluid style={{ marginLeft: "3em", marginTop: "1em" }}>
    
    <Image src={cvImage.url} />
    
    <Card.Content>
      <Card.Meta>
      </Card.Meta>
      <Card.Description>
      <b>
      Adı : {candidate?.firstName}
      </b>
      <br/>
      <b>
      Soyadı : {candidate.lastName}
      </b>
      <br/>
        <b>
      E-Mail : {candidate.email}
      </b>
      <br/>
        <b>
      Doğum Tarihi : {candidate.birthDate}
      </b>
      </Card.Description>
    </Card.Content>
  </Card>
        </div>
    )
}
