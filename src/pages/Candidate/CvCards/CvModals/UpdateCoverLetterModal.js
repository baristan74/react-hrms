import React, { useEffect, useState } from "react";
import { Button, Label, Icon, Modal, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import CvCoverLetterService from "../../../../services/cvCoverLetterService";

export default function UpdateSkillModal({ triggerButton,cvCoverLetter }) {
  const [open, setOpen] = React.useState(false);

  let cvCoverLetterService = new CvCoverLetterService();

  

  let CoverLetterSchema = Yup.object().shape({
    coverLetter: null,
  });

  const formik = useFormik({
    initialValues: {
      coverLetter: cvCoverLetter.coverLetter,
    },
    validationSchema: CoverLetterSchema,
    onSubmit: (values) => {
      cvCoverLetter.coverLetter=values.coverLetter;
      cvCoverLetterService.add(cvCoverLetter).then((result) => {
        if (result.data.success) {
          window.location.reload();
        }
      });
    },
  });

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={triggerButton}
        closeIcon
        size="tiny"
      >
        <Modal.Header>Ön yazı düzenle</Modal.Header>
        <Modal.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Modal.Description>
              <Form.TextArea
                style={{ marginTop: "1em" }}
                name="coverLetter"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.coverLetter}
                onBlur={formik.handleBlur}
                placeholder="Ön yazı"
              />
            </Modal.Description>
            <Button content="Güncelle" color="green" icon="check" type="submit" />
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
