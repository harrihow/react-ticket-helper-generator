import React from "react";

export default function CaregiverAndShiftSection({ caregiver, setCaregiver, dateOfShift, setDateOfShift, errFor }) {
  return (
    <>
      <div className="field">
        <label htmlFor="caregiver-name">Caregiver's Name</label>
        <input id="caregiver-name" placeholder="e.g. Jane Smith" value={caregiver} onChange={(e)=> setCaregiver(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="date-of-shift">Date of Shift</label>
        <input id="date-of-shift" type="date" value={dateOfShift} onChange={(e)=> setDateOfShift(e.target.value)} />
        <div className="error">{errFor("date-of-shift")}</div>
      </div>
    </>
  );
}