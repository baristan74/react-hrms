import React, { useState, useEffect } from "react";
import { Card, Feed, Button, Icon, Table } from "semantic-ui-react";
import EmployeeService from "../../services/employeeService";
import UpdateAdminSettingModal from "./UpdateAdminSettingModal";

export default function AdminSetttings() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService
      .getById(26) //fake id
      .then((result) => setEmployee(result.data.data));
  }, []);

  return (
    <div>
      <Card fluid color="red">
        <Card.Content>
          <UpdateAdminSettingModal
            triggerButton={
              <Button inverted color="blue " floated="right" icon>
                <Icon name="add" />
                Bilgileri güncelle
              </Button>
            }
            employee={employee}
          />
          <Card.Header>Profil Bilgileri</Card.Header>
        </Card.Content>
        <Card.Content>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>İsim</Table.HeaderCell>
                <Table.HeaderCell>Soyisim</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>{employee.firstName}</Table.Cell>
                <Table.Cell>{employee.lastName}</Table.Cell>
                <Table.Cell>{employee.email}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Card.Content>
      </Card>
    </div>
  );
}
