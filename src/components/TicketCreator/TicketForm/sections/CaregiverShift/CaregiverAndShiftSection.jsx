import React from "react";

export default function CaregiverAndShiftSection() {
  return (
    <>
      <div className="field">
        <label htmlFor="caregiver-name">Caregiver's Name</label>
        <input id="caregiver-name" name="caregiver-name" placeholder="e.g. Jane Smith" />
      </div>

      <div className="field">
        <label htmlFor="date-of-shift">Date of Shift</label>
        <input id="date-of-shift" name="date-of-shift" type="date" />
        <div className="error" data-error-for="date-of-shift"></div>
      </div>
    </>
  );
}
