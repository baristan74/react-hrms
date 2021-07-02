import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Label, Icon} from "semantic-ui-react";

export default function AdminManagementMenu() {
  const activeItem = ["management","setting"];
  return (
    <div>
      <Menu vertical>
      <Menu.Header as="h4" style={{marginTop:"15px"}}>ADMİN PANELİ</Menu.Header>
        <Menu.Item
          as={NavLink}
          exact
          to="/admin"
          name="setting"
          active={activeItem === "setting"}
        >
          <Label color="grey">
            <Icon name="setting" />
          </Label>
          Bilgiler
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/admin/jobadvertmanagement"
          name="management"
          active={activeItem === "management"}
        >
          <Label color="grey">
            <Icon name="check" />
          </Label>
          İlan Yönetimi
        </Menu.Item>
      </Menu>
    </div>
  );
}
