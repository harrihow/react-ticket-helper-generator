import React from "react";

export default function CaseType({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="case-type">
        Case Type<span className="req">*</span>
      </label>
      <select
        id="case-type"
        name="case-type"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select a case type</option>
        <option>Call Out</option>
        <option>Schedule Inquiries / Adjustments</option>
        <option>Client Sick / In Pain</option>
        <option>Client Accidents / Fall / Injury</option>
        <option>Client Hospitalization</option>
        <option>Client Hospital Discharge</option>
        <option>Client Deceased</option>
        <option>Covid Positive / Exposure</option>
        <option>Complaint</option>
        <option>Incident Report</option>
        <option>Event Reporting</option>
        <option>Ghost Calls</option>
        <option>Timesheet Questions</option>
        <option>Caregiver Unable to Find Address</option>
      </select>
      <div className="error" data-error-for="case-type"></div>
    </div>
  );
}
