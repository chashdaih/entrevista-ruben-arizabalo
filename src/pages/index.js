import React from "react";
import SignupForm from "@/components/SignupForm";
import "@/css/index.css";

export default function Home() {
  return (
    <React.StrictMode>
      <SignupForm activeStep={1} />
    </React.StrictMode>
  );
}
