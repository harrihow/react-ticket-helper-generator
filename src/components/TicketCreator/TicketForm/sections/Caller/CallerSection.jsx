import React from "react";
import CallerType from "./inputs/CallerType.jsx";
import CallbackNo from "./inputs/CallbackNo.jsx";


export default function CallerSection() {
  return (
    <div className="grid two">
      <CallerType />
      <CallbackNo />
    </div>
  );
}
