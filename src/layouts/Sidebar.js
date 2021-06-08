import React from "react";
import { Menu ,Icon} from "semantic-ui-react";

export default function SideBar() {
  return (
    <div>
      <Menu inverted pointing vertical>
        <Menu.Item>
        <Icon name="list" />
          Job Adverts
        </Menu.Item>
        <Menu.Item>
        <Icon name="list" />
          Candidates
        </Menu.Item>
        <Menu.Item>
        <Icon name="list" />
          Employers
        </Menu.Item>
        <Menu.Item>
        <Icon name="list" />
          Job Positions
        </Menu.Item>
      </Menu>
    </div>
  );
}
