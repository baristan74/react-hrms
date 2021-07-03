import React from "react";
import { Button, Input, Label, Menu } from "semantic-ui-react";

export default function JobAdvertFilter() {

  



  return (
    <div>
      <Menu vertical style={{marginTop:"2em"}}>
        <Menu.Item>
          <Button primary>Filtrele</Button>
        </Menu.Item>

        <Menu.Item>
          Şehirler
        </Menu.Item>

        <Menu.Item>
          <Label>1</Label>
          İş Posisyonları
        </Menu.Item>
        <Menu.Item>
          <Input icon="search" placeholder="Search mail..." />
        </Menu.Item>
      </Menu>
    </div>
  );
}
