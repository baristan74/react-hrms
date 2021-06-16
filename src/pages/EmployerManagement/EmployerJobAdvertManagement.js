import React, { useState, useEffect } from "react";
import { Table,Button,Icon} from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";

export default function EmployerJobAdvertManagement() {

    const [jobAdverts, setJobAdverts] = useState([]);
    
  
    useEffect(() => {
        let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllByEmployerId(18) //fake id auth gerçekleşene kadar
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  let changeActivestatus = (id) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeActiveStatus(id).then(result => {
      console.log(result.data);
    })
    window.location.reload()
  };

    return (
        <div>
            <Table celled>
        <Table.Header >
          <Table.Row>
            <Table.HeaderCell >Şehir</Table.HeaderCell>
            <Table.HeaderCell >Pozisyon</Table.HeaderCell>
            <Table.HeaderCell >Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell >Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell >İş Tipi</Table.HeaderCell>
            <Table.HeaderCell >Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell >Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell >Açıklama</Table.HeaderCell>
            <Table.HeaderCell >Durum</Table.HeaderCell>
          </Table.Row>
          
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.position}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.workingType.name}</Table.Cell>
              <Table.Cell>{jobAdvert.employmentType.name}</Table.Cell>
              <Table.Cell>{jobAdvert.minSalary} ₺ - {jobAdvert.maxSalary} ₺</Table.Cell>
              <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              
              
              {jobAdvert.isActivated ? (
               <Table.Cell><Button onClick={() => changeActivestatus(jobAdvert.id)}  color='red' icon labelPosition="left"><Icon name='eye slash outline' size='large' />Kaldır</Button></Table.Cell>
              ) : (
                <Table.Cell><Button onClick={() => changeActivestatus(jobAdvert.id)}  color='green' icon labelPosition="left"><Icon name='eye' size='large' />Aktif Et</Button></Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
