import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Divider
} from "semantic-ui-react";
import CvJobExperienceService from "../../../../services/cvJobExperienceService";
import * as Yup from "yup";

export default function AddEducationModal({ triggerButton }) {
  const [open, setOpen] = useState(false);

  let cvJobExperienceService = new CvJobExperienceService();

  const AddJobExperienceSchema = Yup.object().shape({
    workplaceName: Yup.string().required("İş Yeri adı boş bırakılamaz!"),
    position: Yup.string().required("Pozisyon boş bırakılamaz!"),
    startDate: Yup.date()
    .nullable()
      .required("Başlangıç tarihi boş bırakılamaz")
      
  });

  const formik = useFormik({
    initialValues: {
        workplaceName: "",
        position: "",
        leaveDate: "",
        startDate: "",
    },
    validationSchema: AddJobExperienceSchema,
    onSubmit: (values) => {
      values.candidate = { id: 16 }; //fake id
      cvJobExperienceService.add(values).then((result) => {
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
        size="tiny"
      >
        <Modal.Header>İş deneyimi ekle</Modal.Header>
        <Modal.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="workplaceName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="İş Yeri"
                placeholder="İş yeri adı"
                value={formik.values.workplaceName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.workplaceName && formik.touched.workplaceName && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workplaceName}
                </div>
              )}
              <Form.Input
                fluid
                name="position"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Pozisyon"
                placeholder="Pozisyon"
                value={formik.values.position}
                onBlur={formik.handleBlur}
              />
              {formik.errors.position &&
                formik.touched.position && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.position}
                  </div>
                )}
            </Form.Group>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                type="date"
                name="startDate"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Başlangıç Tarihi"
                value={formik.values.startDate}
                onBlur={formik.handleBlur}
              />
              {formik.errors.startDate &&
                formik.touched.startDate && (
                  <div className={"ui  pointing red basic label"}>
                    {formik.errors.startDate}
                  </div>
                )}
              <Form.Input
                fluid
                type="date"
                name="finishDate"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Ayrılma Tarihi"
                value={formik.values.leaveDate}
                onBlur={formik.handleBlur}
              />
            </Form.Group>

            <Divider></Divider>
            <Button color="black" onClick={() => setOpen(false)}>
              İptal
            </Button>
            <Button
              content="Ekle"
              labelPosition="right"
              icon="checkmark"
              type="submit"
              
              positive
            />
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
