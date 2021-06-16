import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Label, Icon} from "semantic-ui-react";

export default function AdminManagementMenu() {
  const activeItem = ["management"];
  return (
    <div>
      <Menu vertical>
      <Menu.Header as="h4" style={{marginTop:"15px"}}>ADMİN PANELİ</Menu.Header>
        <Menu.Item
          as={NavLink}
          to="/admin/jobadvertmanagement"
          name="management"
          active={activeItem === "management"}
        >
          <Label color="grey">
            <Icon name="setting" />
          </Label>
          İlan Yönetimi
        </Menu.Item>
      </Menu>
    </div>
  );
}
