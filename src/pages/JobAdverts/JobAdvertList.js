import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Container,
  Image,
  Label,
  Pagination,
} from "semantic-ui-react";
import JobAdvertService from "../../services/jobAdvertService";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../store/actions/favoriteActions";
import { toast } from "react-toastify";

export default function JobAdvertList() {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);

  const [jobAdverts, setJobAdverts] = useState([]);
  let jobAdvertService = new JobAdvertService();

  useEffect(() => {
    jobAdvertService
      .getAllByIsConfirmedByEmployee(activePage)
      .then((result) => setJobAdverts(result.data.data));
  }, []);

  const handleAddToFavorite = (jobAdvert) => {
    dispatch(addToFavorite(jobAdvert));
    toast.success(`${jobAdvert?.jobPosition?.position} favorilere eklendi!`);
  };

  const handlePaginationChange = (e, { activePage }) => {
    setActivePage(activePage);
    jobAdvertService
      .getAllActiveAndByPageNumber(activePage)
      .then((result) => setJobAdverts(result.data.data));
  };

  

  return (
    <div>
      <Container>
        {jobAdverts.map((jobAdvert) => (
          <Card fluid key={jobAdvert.id} style={{ marginTop: "2em" }}>
            <Card.Content>
              <Image
                floated="left"
                size="mini"
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
              />

              <Card.Header>{jobAdvert.jobPosition.position}</Card.Header>
              <Card.Meta>{jobAdvert.employer.companyName}</Card.Meta>
              <Card.Description>{jobAdvert.city.name}</Card.Description>
              <Label>
                <Card.Description>
                  {jobAdvert.employmentType.name}
                </Card.Description>
              </Label>
              <Card.Description>
                Son Başvuru Tarihi :{" "}
                <strong>{jobAdvert.applicationDeadline}</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui three buttons">
                <Button basic color="green">
                  Başvur
                </Button>
                <Button
                  onClick={() => handleAddToFavorite(jobAdvert)}
                  basic
                  color="orange"
                >
                  Favorilere Ekle
                </Button>
                <Button
                  as={NavLink}
                  to={`/jobadverts/${jobAdvert.id}`}
                  basic
                  color="blue"
                >
                  İncele
                </Button>
              </div>
            </Card.Content>
          </Card>
        ))}
        <Pagination
          defaultActivePage={1}
          totalPages={10}
          onPageChange={handlePaginationChange}
        />
      </Container>
    </div>
  );
}
