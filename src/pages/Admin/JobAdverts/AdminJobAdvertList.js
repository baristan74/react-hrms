import React, { useState, useEffect } from "react";
import { Table, Label, Icon, Button } from "semantic-ui-react";
import JobAdvertService from "../../../services/jobAdvertService";

export default function AdminJobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllByIsConfirmedByEmployeeFalse()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  let changeIsConfirmedByEmployee = (jobAdvertId) => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService.changeIsConfirmedByEmployee(jobAdvertId).then((result) => {
      console.log(result.data);
    });
    window.location.reload();
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell>İş Tipi</Table.HeaderCell>
            <Table.HeaderCell>Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell> İş Veren Tarafından</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Onay </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert, key) => (
            <Table.Row key={key}>
              <Table.HeaderCell collapsing>
                {jobAdvert.employer.companyName}
              </Table.HeaderCell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.jobPosition.position}</Table.Cell>
              <Table.Cell>{jobAdvert.openPositionCount}</Table.Cell>
              <Table.Cell>{jobAdvert.workingType.name}</Table.Cell>
              <Table.Cell>{jobAdvert.employmentType.name}</Table.Cell>
              <Table.Cell collapsing>
                {jobAdvert.minSalary} ₺ - {jobAdvert.maxSalary} ₺
              </Table.Cell>
              <Table.Cell collapsing>
                {jobAdvert.applicationDeadline}
              </Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              {jobAdvert.isActivated ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Aktif
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Pasif
                  </Label>
                </Table.Cell>
              )}

              <Table.Cell collapsing>
                <Button
                  onClick={() => changeIsConfirmedByEmployee(jobAdvert.id)}
                  color="green"
                  icon
                  labelPosition="left"
                >
                  <Icon name="checkmark" size="large" />
                  Onayla
                </Button>

                <Button
                  
                  color="red"
                  icon
                  labelPosition="left"
                >
                  <Icon name="remove" size="large" />
                  Kaldır
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
