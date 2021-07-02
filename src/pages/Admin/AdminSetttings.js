import React, { useState, useEffect } from "react";
import { Card, Feed, Button, Icon } from "semantic-ui-react";
import EmployeeService from "../../services/employeeService";
import UpdateAdminSettingModal from "./UpdateAdminSettingModal";

export default function AdminSetttings() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    let employeeService = new EmployeeService();
    employeeService.getById(26).then((result) => setEmployee(result.data.data));
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
          <Feed>
            <Feed.Event>
              <Feed.Content>
                <Card.Header style={{ marginBottom: "5px" }} content="İsim" />
                <Feed.Summary>{employee.firstName}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Card.Header
                  style={{ marginBottom: "5px" }}
                  content="Soyisim"
                />
                <Feed.Summary>{employee.lastName}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>

            <Feed.Event>
              <Feed.Content>
                <Card.Header style={{ marginBottom: "5px" }} content="E-Mail" />
                <Feed.Summary>{employee.email}</Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </div>
  );
}
