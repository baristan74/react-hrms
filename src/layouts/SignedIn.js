import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Image} from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
        <Image
          avatar
          spaced="right"
          src="https://res.cloudinary.com/dlyhxsow4/image/upload/v1623779628/IMG_E4578_dneqc9.jpg"
        />
        <Dropdown pointing="top left" text="Barış">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item as={NavLink} to="/employer/jobadvertlist" text="İş lanlarım" icon="info" />
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  );
}
