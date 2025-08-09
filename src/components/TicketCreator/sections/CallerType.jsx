import React from "react";

export default function CallerType() {
  return (
    <div className="field">
      <label htmlFor="caller-type">
        Caller Type<span className="req">*</span>
      </label>
      <select id="caller-type" name="caller-type">
        <option value="" disabled selected>
          Select a caller type
        </option>
        <option>Caregiver</option>
        <option>Client</option>
        <option>Others</option>
      </select>

      {/* This input shows only when Caller Type = "Others". Keep hidden for now; we'll toggle later in JS */}
      <div>
        <input
          id="caller-type-other"
          name="caller-type-other"
          placeholder="Please specify"
          className="hidden"
        />
      </div>

      <div className="error" data-error-for="caller-type"></div>
      <div className="error" data-error-for="caller-type-other"></div>
    </div>
  );
}
