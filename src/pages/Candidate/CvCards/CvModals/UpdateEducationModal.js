import { useFormik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Modal,
  Form,
  Divider
} from "semantic-ui-react";
import CvEducationService from "../../../../services/cvEducationService";
import * as Yup from "yup";

export default function UpdateEducationModal({ triggerButton, cvEducation }) {
  const [open, setOpen] = useState(false);

  let cvEducationService = new CvEducationService();

  const UpdateEducationSchema = Yup.object().shape({
    schoolName: Yup.string().required("Okul adı boş bırakılamaz!"),
    departmentName: Yup.string().required("Bölüm adı boş bırakılamaz!"),
    startDate: Yup.date()
    .nullable()
    .required("Başlangıç tarihi boş bırakılamaz")
      
  });

  const formik = useFormik({
    initialValues: {
      schoolName: cvEducation.schoolName,
      departmentName: cvEducation.departmentName,
      finishDate: cvEducation.finishDate ? cvEducation.finishDate : "",
      startDate: cvEducation.startDate,
    },
    validationSchema: UpdateEducationSchema,
    onSubmit: (values) => {
        cvEducation.schoolName = values.schoolName;
        cvEducation.departmentName = values.departmentName;
        cvEducation.startDate = values.startDate;
        cvEducation.finishDate = values.finishDate;
      cvEducationService.add(cvEducation).then((result) => {
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
        closeIcon
        trigger={triggerButton}
        size="tiny"
      >
        <Modal.Header>Eğitim bilgisi düzenle</Modal.Header>
        <Modal.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="schoolName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Okul"
                placeholder="Okul adı"
                value={formik.values.schoolName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.schoolName && formik.touched.schoolName && (
                <div className={"ui left pointing red basic label"}>
                  {formik.errors.schoolName}
                </div>
              )}
              <Form.Input
                fluid
                name="departmentName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Bölüm"
                placeholder="Bölüm adı"
                value={formik.values.departmentName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.departmentName &&
                formik.touched.departmentName && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.departmentName}
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
                  <div className={"ui left pointing red basic label"}>
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
                label="Bitiş Tarihi"
                value={formik.values.finishDate}
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
