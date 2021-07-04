import React, { useState, useEffect } from "react";
import { Card, Label, Button, Icon, Table, Checkbox } from "semantic-ui-react";
import EmployerService from "../../../services/employerService";
import EmployerUpdateConfirmByEmployeeService from "../../../services/employerUpdateConfirmByEmployeeService";
import UpdateEmployerSettingModal from "./UpdateEmployerSettingModal";

export default function EmployerProfil() {
  const [employer, setEmployer] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();

    employerService.getById(18).then((result) => setEmployer(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid color="red">
        <Card.Content>
            {employer.confirmByEmployee ? 
            (
                
                <Label floated="right" color="orange">Güncelleme Admin Tarafından Onay Bekliyor</Label>
            )
            :
            (
                <UpdateEmployerSettingModal
                triggerButton={
                  <Button inverted color="blue " floated="right" icon>
                    <Icon name="add" />
                    Bilgileri güncelle
                  </Button>
                }
                employer={employer}
              />
            )}
         
          <Card.Header style={{marginTop:"1em"}}>Şirket Bilgileri</Card.Header>
        </Card.Content>
        <Card.Content>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                <Table.HeaderCell>Web Adresi</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.webAdress}</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>E-Mail</Table.HeaderCell>
                <Table.HeaderCell>Telefon Nuamrası</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{employer.email}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </div>
  );
}
