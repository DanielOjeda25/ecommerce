import React from "react";
import Link from "next/link";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.data";
import { Auth } from "@/api";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
const authCtrl = new Auth();
export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await authCtrl.login(values);
        login(response.jwt);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className={`form-control ${
                    formik.touched.identifier && formik.errors.identifier
                      ? "is-invalid"
                      : ""
                  }`}
                  id="identifier"
                  placeholder="name@example.com"
                  value={formik.values.identifier}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="identifier">Correo electrónico</label>
                {formik.touched.identifier && formik.errors.identifier ? (
                  <div className="invalid-feedback">
                    {formik.errors.identifier}
                  </div>
                ) : null}
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : ""
                  }`}
                  id="password"
                  placeholder="Contraseña"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <label htmlFor="password">Contraseña</label>
                {formik.touched.password && formik.errors.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              <div className="d-flex flex-column">
                <button
                  type="submit"
                  className="btn btn-primary mt-3 w-100"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    "Iniciar sesión"
                  )}
                </button>
                <Link href="/join/sign-up" className="mt-2 text-center">
                  Registrarse
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
