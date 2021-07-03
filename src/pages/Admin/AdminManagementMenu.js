import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Label, Icon} from "semantic-ui-react";

export default function AdminManagementMenu() {
  const activeItem = ["jobadvert","setting","updateemployer"];
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
          to="/admin/updateemployermanagement"
          name="updateemployer"
          active={activeItem === "updateemployer"}
        >
          <Label color="grey">
            <Icon name="check" />
          </Label>
          Güncelleme Onayı Bekleyen Şirketler
        </Menu.Item>

        <Menu.Item
          as={NavLink}
          to="/admin/jobadvertmanagement"
          name="jobadvert"
          active={activeItem === "jobadvert"}
        >
          <Label color="grey">
            <Icon name="check" />
          </Label>
          Onay Bekleyen İlanlar
        </Menu.Item>
      </Menu>
    </div>
  );
}
