import React from "react";
import { Modal, Button, Icon, Header } from "semantic-ui-react";
import CvEducationService from "../../../../services/cvEducationService";

export default function DeleteEducationModal({ triggerButton, cvEducation }) {
  const [open, setOpen] = React.useState(false);

  let cvEducationService = new CvEducationService();

  const deleteCvEducation = (cveducation) => {
    cvEducationService
      .delete(cveducation)
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
        icon="trash"
      >
        <Header icon>
          <Icon name="trash" />
        </Header>
        <Modal.Content>
          <p>Eğitimi silmek istediğinize emin misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            <Icon name="remove" /> İptal
          </Button>
          <Button color="green" onClick={() => deleteCvEducation(cvEducation)}>
            <Icon name="checkmark" /> Evet
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
