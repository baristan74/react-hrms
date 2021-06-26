import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function CandidateJobAdvertFavorite() {
  
  const { favoriteItems } = useSelector((state) => state.favorite);


    return(
    <div>
      <Dropdown item text="Favoriler">
        <Dropdown.Menu>
          {favoriteItems.map((favoriteItem,index) => (
            <Dropdown.Item key={index}>
              {favoriteItem.jobAdvert.jobPosition.position}
            </Dropdown.Item>
          ))}
          <Dropdown.Divider />
          <Dropdown.Item>
            Favorilere git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

