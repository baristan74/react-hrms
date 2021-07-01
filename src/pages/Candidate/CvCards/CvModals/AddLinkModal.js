import React, { useEffect, useState } from "react";
import { Button,Modal, Form, Dropdown } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import CvLinkService from "../../../../services/cvLinkService";
import LinkTypeService from "../../../../services/linkTypeService";

export default function AddLinkModal({ triggerButton }) {
  const [open, setOpen] = useState(false);

  const [linkTypes, setLinkTypes] = useState([]);
  
  let cvLinkService = new CvLinkService();

  useEffect(() => {
    let linkType = new LinkTypeService();
    linkType.getAll().then((result) => setLinkTypes(result.data.data));
  },[]);

  const linkTypesOptions = linkTypes.map((linkType, index) => ({
    key: index,
    text: linkType.name,
    value: linkType.id,
  }));

  let LinkAddSchema = Yup.object().shape({
    link: Yup.string().required("Link boş bırakılamaz!"),

    linkType: Yup.object({
      id: Yup.number().required("Bağlantı tipi boş bırakılamaz!"),
    }),
  });

  const formik = useFormik({
    initialValues: {
      link: "",
      linkType: {
        id: "",
      },
    },
    validationSchema: LinkAddSchema,
    onSubmit: (values) => {
      values.candidate = { id: 16 }; //fake id
      cvLinkService.add(values).then((result) => {
        if(result.data.success){
          window.location.reload();
        }
      });
      
    },
  });

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

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
        <Modal.Header>Bağlantı ekle</Modal.Header>
        <Modal.Content>
        <Modal.Description>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <Dropdown
                clearable
                item
                placeholder="Bağantı tipi"
                search
                selection
                onChange={(event, data) => {
                  handleChangeSemantic(data.value, "linkType.id");
                }}
                onBlur={formik.onBlur}
                id="linkType.id"
                value={formik.values.linkType.id}
                options={linkTypesOptions}
              />

              {formik.errors.linkType?.id && formik.touched.linkType?.id && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.linkType?.id}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <input
                style={{ marginTop: "1em" }}
                name="link"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                value={formik.values.link}
                onBlur={formik.handleBlur}
                placeholder="Url"
              />
              {formik.errors.link && formik.touched.link && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.link}
                </div>
              )}
            </Form.Field>
            <Button content="Ekle" icon="add" type="submit" />
          </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
}
