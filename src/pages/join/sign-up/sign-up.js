import RegisterForm from "@/components/Auth/RegisterForm";
import JoinLayout from "@/layouts/JoinLayout";
import React from "react";
import { Container } from "react-bootstrap";

export default function SignUpPage() {
  return (
    <JoinLayout>
      <Container className="mt-5">
        <h3 className="text-center mb-4">Registrarse</h3>
        <RegisterForm />
      </Container>
    </JoinLayout>
  );
}
