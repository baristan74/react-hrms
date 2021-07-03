import React, { useState, useEffect } from "react";
import { Table, Label } from "semantic-ui-react";
import JobAdvertService from "../../../services/jobAdvertService";

export default function EmployerJobAdvertList() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllByEmployerId(18) //fake id auth gerçekleşene kadar
      .then((result) => setJobAdverts(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell rowSpan="2">Şehir</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açık Pozisyon</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Çalışma Şekli</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">İş Tipi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Maaş Miktarı</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Son Başvuru Tarihi</Table.HeaderCell>
            <Table.HeaderCell rowSpan="2">Açıklama</Table.HeaderCell>
            <Table.HeaderCell colSpan="2" textAlign="center"> Durum</Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <Table.HeaderCell>Sizin Tarafınızdan</Table.HeaderCell>
            <Table.HeaderCell>Admin Tarafından</Table.HeaderCell>
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
              <Table.Cell>
                {jobAdvert.minSalary} ₺ - {jobAdvert.maxSalary} ₺
              </Table.Cell>
              <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
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
              {jobAdvert.isConfirmedByEmployee ? (
                <Table.Cell>
                  <Label color="green" style={{ width: "100%" }}>
                    Onaylandı
                  </Label>
                </Table.Cell>
              ) : (
                <Table.Cell>
                  <Label color="orange" style={{ width: "100%" }}>
                    Onay Bekleniyor
                  </Label>
                </Table.Cell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
