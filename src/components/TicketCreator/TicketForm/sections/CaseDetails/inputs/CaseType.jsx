import React from "react";

export default function CaseType({ value, onChange, errFor }) {
  return (
    <div className="field">
      <label htmlFor="case-type">Case Type<span className="req">*</span></label>
      <select id="case-type" value={value} onChange={(e)=> onChange(e.target.value)}>
        <option value="">Select a case type</option>
        <option>Call Out</option>
        <option>AMS Mobile App Issues</option>
        <option>Schedule Inquiries/Adjustment</option>
        <option>Asking to Speak to a Specific Person/Department</option>
        <option>Returning a Missed Call/SMS/Email</option>
        <option>No Call No Show</option>
        <option>Late In/Early Out</option>
        <option>At Client Home Not Responding</option>
      </select>
      <div className="error">{errFor("case-type")}</div>
    </div>
  );
}