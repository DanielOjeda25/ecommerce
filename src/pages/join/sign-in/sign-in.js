import LoginForm from "@/components/Auth/LoginForm";
import JoinLayout from "@/layouts/JoinLayout";
import React from "react";
import { Container } from "react-bootstrap";

export default function SignInPage() {
  return (
    <JoinLayout>
      <Container>
        <h3 className="text-slate-700">Iniciar sesión</h3>
        <LoginForm />
      </Container>
    </JoinLayout>
  );
}
