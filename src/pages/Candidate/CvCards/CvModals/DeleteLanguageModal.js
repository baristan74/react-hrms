import React from "react";
import CvLanguageService from "../../../../services/cvLanguageService";
import { Modal, Header, Icon, Button } from "semantic-ui-react";

export default function DeleteLanguageModal({ triggerButton, cvLanguage }) {
  const [open, setOpen] = React.useState(false);

  let cvLanguageService = new CvLanguageService();

  const deleteCvLanguage = (language) => {
    cvLanguageService.delete(language).then((result) => console.log(result));
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
          <p>Dili silmek istediğinize emin misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            <Icon name="remove" /> İptal
          </Button>
          <Button color="green" onClick={() => deleteCvLanguage(cvLanguage)}>
            <Icon name="checkmark" /> Evet
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
