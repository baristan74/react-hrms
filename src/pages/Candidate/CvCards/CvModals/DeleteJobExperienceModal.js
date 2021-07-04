import React from "react";
import { Modal, Button, Icon,Header } from "semantic-ui-react";
import CvJobExperienceService from "../../../../services/cvJobExperienceService";

export default function DeleteJobExperience({
  triggerButton,
  cvJobExperience,
}) {
  const [open, setOpen] = React.useState(false);

  let cvJobExperienceService = new CvJobExperienceService();

  const deleteCvJobExperience = (cvjobexperience) => {
    cvJobExperienceService
      .delete(cvjobexperience)
      .then((result) => console.log(result));
    window.location.reload();
  };
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
        trigger={triggerButton}
      >
        <Header icon>
          <Icon name="trash" />
        </Header>
        <Modal.Content>
          <p>İş deneyimini istediğinize emin misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            <Icon name="remove" /> İptal
          </Button>
          <Button
            color="green"
            onClick={() => deleteCvJobExperience(cvJobExperience)}
          >
            <Icon name="checkmark" /> Evet
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
