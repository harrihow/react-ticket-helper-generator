import React from "react";

export default function ReasonSection() {
  return (
    <div className="field">
      <label htmlFor="reason">
        Reason/Details <span id="reasonReq" className="req hidden">*</span>
      </label>
      <textarea id="reason" name="reason" rows="8" placeholder="Provide details..."></textarea>
      <div className="error" data-error-for="reason"></div>
    </div>
  );
}
