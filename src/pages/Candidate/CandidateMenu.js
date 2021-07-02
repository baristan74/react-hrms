import React from "react";
import { NavLink } from "react-router-dom";
import { Label, Menu, Icon, Button } from "semantic-ui-react";
export default function EmployerJobAdvertMenu() {
   
    
    const activeItem =["settings","cv","profil"]

  return (
    <div>
      <Menu vertical>

      

      

        <Menu.Item as={NavLink} exact to="/candidate"  name="cv" active={activeItem === "cv"}>
          <Label color="grey">
            <Icon name="list" />
          </Label>
          Özgeçmiş
        </Menu.Item>

        <Menu.Item as={NavLink} to="/candidate/settings"  name="settings" active={activeItem === "settings"}>
            
            <Label color="grey">
              <Icon name="setting" />
            </Label>
            Ayarlar
          </Menu.Item>

        
      </Menu>
    </div>
  );
}
