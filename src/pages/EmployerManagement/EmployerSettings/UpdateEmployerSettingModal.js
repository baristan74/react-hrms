import React from "react";
import { Button,Divider, Modal, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import swal from "sweetalert";
import EmployerUpdateConfirmByEmployeeService from "../../../services/employerUpdateConfirmByEmployeeService";

export default function UpdateEmployerSettingModal({ triggerButton,employer }) {
  const [open, setOpen] = React.useState(false);

  let employerUpdateConfirmByEmployeeService = new EmployerUpdateConfirmByEmployeeService();

  let EmployeeSchema = Yup.object().shape({
    companyName: Yup.string().required("Şirket Adı boş bırakılamaz!"),
    webAdress: Yup.string().required("Web Adresi boş bırakılamaz!"),
    phoneNumber: Yup.string().required("Telefon numarası boş bırakılamaz!"),
    email: Yup.string().required("Email boş bırakılamaz!"),
    password: Yup.string().required("Şifre boş bırakılamaz!"),
  });
  const formik = useFormik({
    initialValues: {
        id:employer.id,
        email: employer.email,
        password: employer.password,
        companyName: employer.companyName,
        webAdress: employer.webAdress,
        phoneNumber: employer.phoneNumber,
        activated: true,
        confirmByEmployee:false,
    },
    enableReinitialize:true,
    validationSchema: EmployeeSchema,

    onSubmit: (values) => {
        let employerUpdateConfirmByEmployee={
            id:values.id,
            email: values.email,
            password: values.password,
            companyName: values.companyName,
            webAdress: values.webAdress,
            phoneNumber: values.phoneNumber,
            activated: true,
            confirmByEmployee:false,
        }
        employerUpdateConfirmByEmployeeService.add(employerUpdateConfirmByEmployee)
        .then(
            swal("Başarılı","İşlem tamamlandı. Güncelleme işleminiz sistem personeli tarafından onaylandığında tammalanacaktır.","success")
      );
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
        <Modal.Header>Şirket bilgilerini güncelle</Modal.Header>
        <Modal.Content>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="email"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="E-Mail"
                placeholder="E-Mail"
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <div className={"ui left pointing red basic label"}>
                  {formik.errors.email}
                </div>
              )}
              <Form.Input
                fluid
                name="password"
                type="password"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Parola"
                placeholder="Parola"
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.password &&
                formik.touched.password && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.password}
                  </div>
                )}
            </Form.Group>
            <Form.Group widths="equal">
            <Form.Input
                fluid
                name="companyName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Şirket Adı"
                placeholder="Şirket Adı"
                value={formik.values.companyName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.companyName &&
                formik.touched.companyName && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.companyName}
                  </div>
                )}
               <Form.Input
                fluid
                name="webAdress"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Web Ades"
                placeholder="Web Adres"
                value={formik.values.webAdress}
                onBlur={formik.handleBlur}
              />
              {formik.errors.webAdress &&
                formik.touched.webAdress && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.webAdress}
                  </div>
                )}
                </Form.Group>
                <Form.Group>
                <Form.Input
                fluid
                name="phoneNumber"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Telefon Numarası"
                placeholder="Telefon Numarası"
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
              />
              {formik.errors.phoneNumber &&
                formik.touched.phoneNumber && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.phoneNumber}
                  </div>
                )}
            </Form.Group>

            <Divider></Divider>
            <Button color="black" onClick={() => setOpen(false)}>
              İptal
            </Button>
            <Button
              content="Güncelle"
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
