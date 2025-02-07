import * as Yup from "yup";
export function initialValues() {
  return {
    username: "",
    email: "",
    password: "",
  };
}
export function validationSchema() {
  return Yup.object({
    username: Yup.string().required("El nombre y apellido son obligatorios"),
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("El correo electrónico es obligatorio"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  });
}
