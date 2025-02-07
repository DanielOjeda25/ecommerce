import React from "react";
import { Alert, CloseButton } from "react-bootstrap";
import Button from "react-bootstrap/Button";
export default function Index() {
  return (
    <div>
      Index
      <Button variant="outline-primary">Primary</Button>
      <Alert variant="primary">Alert.Heading, p, Alert.Link, hr, etc</Alert>
      <CloseButton onClick={() => console.log("Close")} />
    </div>
  );
}
