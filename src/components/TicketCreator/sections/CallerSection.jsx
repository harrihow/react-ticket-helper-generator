import React from "react";
import CallerType from "./CallerType.jsx";
import CallbackNo from "./CallbackNo.jsx";

export default function CallerSection() {
  return (
    <div className="grid two">
      <CallerType />
      <CallbackNo />
    </div>
  );
}
