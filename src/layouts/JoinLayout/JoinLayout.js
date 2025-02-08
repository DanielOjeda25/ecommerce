import { useAuth } from "@/hooks";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { CloseButton, Container } from "react-bootstrap";

export default function JoinLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  if (user) {
    router.push("/");
    return null;
  }
  return (
    <Container fluid className="mh-100 vh-100 d-flex flex-column  p-0">
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} />
        </Link>
        <Link href="/">
          <CloseButton onClick={() => console.log("Close")} />
        </Link>
      </div>
      <div className="flex-grow-1 d-flex">
        <div className="d-flex flex-column justify-content-center align-items-center w-50">
          {children}
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center w-50"
          style={{
            backgroundImage: "url('/sign-wallpaper.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </Container>
  );
}
