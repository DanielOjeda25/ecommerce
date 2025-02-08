import * as Yup from "yup";

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}
export function validationSchema() {
  return Yup.object({
    identifier: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });
}
