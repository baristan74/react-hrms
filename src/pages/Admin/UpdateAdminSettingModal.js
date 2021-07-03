import React from "react";
import { Button,Divider, Modal, Form } from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import EmployeeService from "../../services/employeeService";

export default function UpdateAdminSettingModal({ triggerButton,employee }) {
  const [open, setOpen] = React.useState(false);

  let employeeService = new EmployeeService();

  let EmployeeSchema = Yup.object().shape({
    firstName: Yup.string().required("İsim boş bırakılamaz!"),
    lastName: Yup.string().required("Soyisim boş bırakılamaz!"),
    email: Yup.string().required("Email boş bırakılamaz!"),
    password: Yup.string().required("Şifre boş bırakılamaz!"),
  });

  const formik = useFormik({
    initialValues: {
        firstName: employee.firstName,
        lastName: employee.lastName,
        email: employee.email,
        password: employee.password,
    },
    enableReinitialize:true,
    validationSchema: EmployeeSchema,
    onSubmit: (values) => {
        employee.firstName=values.firstName;
        employee.lastName=values.lastName;
        employee.email=values.email;
        employee.password=values.password;
      employeeService.add(employee).then((result) => {
        if (result.data.success) {
          window.location.reload();
        }
        console.log(result);
      });
    },
  });

  console.log(employee);

  //formda güncellerken verileri getirmiyor ama güncelleme gerçekleşiyor(sonra bakılıcak)

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
        <Modal.Header>Profil bilgilerini güncelle</Modal.Header>
        <Modal.Content>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="firstName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="İsim"
                placeholder="İsim"
                value={formik.values.firstName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <div className={"ui left pointing red basic label"}>
                  {formik.errors.firstName}
                </div>
              )}
              <Form.Input
                fluid
                name="lastName"
                onChange={(e) => {
                  formik.handleChange(e);
                }}
                label="Soyisim"
                placeholder="Soyisim"
                value={formik.values.lastName}
                onBlur={formik.handleBlur}
              />
              {formik.errors.lastName &&
                formik.touched.lastName && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.lastName}
                  </div>
                )}
            </Form.Group>
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
              {formik.errors.email &&
                formik.touched.email && (
                  <div className={"ui left pointing red basic label"}>
                    {formik.errors.email}
                  </div>
                )}
               <Form.Input
                fluid
                type="password"
                name="password"
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
