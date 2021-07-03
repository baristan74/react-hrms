import React from "react";
import { NavLink } from "react-router-dom";
import { Label, Menu, Icon, Button } from "semantic-ui-react";
import AddJobAdvert from "./JobAdverts/AddJobAdvert";
export default function EmployerJobAdvertMenu() {
   
    const activeItem =["list","management","settings"]
  return (
    <div>
      <Menu vertical>

      <Menu.Item as={NavLink} exact to="/employer"  name="settings" active={activeItem === 'settings'}>
          <Label color="grey">
            <Icon name="setting" />
          </Label>
          Bilgilerim
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employer/jobadvertlist"  name="list" active={activeItem === 'list'}>
          <Label color="grey">
            <Icon name="list" />
          </Label>
          İş İlanlarım
        </Menu.Item>

        <Menu.Item as={NavLink} to="/employer/jobadvertmanagement"  name="management" active={activeItem === "management"}>
            
          <Label color="grey">
            <Icon name="setting" />
          </Label>
          İlan Yönetimi
        </Menu.Item>

        <Menu.Item >
          <AddJobAdvert
            triggerButton={
              <Button size="small" primary >
                İş İlanı Ekle
              </Button>
            }
          />
        </Menu.Item>
      </Menu>
    </div>
  );
}
