import React, { useEffect, useState } from "react";
import { Button, Label, Icon, Modal, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import CvSkillService from "../../../../services/cvSkillService";

export default function UpdateSkillModal({ triggerButton }) {
  const [open, setOpen] = React.useState(false);

  let cvSkillService = new CvSkillService();

  const [cvSkills, setCvSkills] = useState([]);

  useEffect(() => {
    cvSkillService
      .getAllByCandidateId(16) // fake id
      .then((result) => setCvSkills(result.data.data));
  }, []);

  const deleteSkill = (skill) => {
    cvSkillService.delete(skill).then((result) => console.log(result));
    window.location.reload();
  };

  let SkillAddSchema = Yup.object().shape({
    name: Yup.string().required("Yetenek adı boş bırakılamaz!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: SkillAddSchema,
    onSubmit: (values) => {
      values.candidate = { id: 16 }; //fake id
      cvSkillService.add(values).then((result) => {
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
        <Modal.Header>Becerileri düzenle</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {cvSkills.map((cvSkill, index) => (
              <Label icon color="green" key={index}>
                {cvSkill.name}{" "}
                <Button
                  size="mini"
                  onClick={() => deleteSkill(cvSkill)}
                  icon="delete"
                />
              </Label>
            ))}
          </Modal.Description>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <input
                style={{ marginTop: "1em" }}
                name="name"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                placeholder="Beceri ekle"
              />
              {formik.errors.name && formik.touched.name && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.name}
                </div>
              )}
            </Form.Field>
            <Button content="Ekle" icon="add" type="submit" />
          </Form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
