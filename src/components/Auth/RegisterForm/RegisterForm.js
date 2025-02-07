import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { Auth } from "@/api";

const authCtrl = new Auth();
export default function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    onSubmit: async (values) => {
      try {
        await authCtrl.register(values);
        console.log("Usuario registrado");
      } catch (error) {
        console.log(error);
      }
    },
    validateOnChange: false,
  });

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={formik.handleSubmit} className="w-100">
        <div className="form-floating mb-3">
          <input
            id="username"
            type="text"
            className="form-control"
            placeholder="Nombre de usuario"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <label htmlFor="username">Nombre de usuario</label>
          {formik.errors.username && (
            <div className="text-danger">{formik.errors.username}</div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Correo electrónico"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <label htmlFor="email">Correo electrónico</label>
          {formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <label htmlFor="password">Contraseña</label>
          {formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-outline-warning w-100 mb-3"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          ) : (
            "Registrarse"
          )}
        </button>
        <div className="text-center">
          <Link href="/join/sign-in">Iniciar Sesión</Link>
        </div>
      </form>
    </div>
  );
}
