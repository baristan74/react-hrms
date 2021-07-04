import React from "react";
import { Modal,Header,Button,Icon } from "semantic-ui-react";
import CvLinkService from "../../../../services/cvLinkService";

export default function DeleteLinkModal({triggerButton,cvLink}) {
    const [open, setOpen] = React.useState(false);

    let cvLinkService = new CvLinkService();

  const deleteCvLink = (link) => {
    cvLinkService.delete(link).then((result) => console.log(result));
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
          <p>Bağlantıyı silmek istediğinize emin misiniz?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            <Icon name="remove" /> İptal
          </Button>
          <Button color="green" onClick={() => deleteCvLink(cvLink)}>
            <Icon name="checkmark" /> Evet
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
}
