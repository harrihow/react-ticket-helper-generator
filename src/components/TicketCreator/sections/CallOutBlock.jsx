import React from "react";

export default function CallOutBlock() {
  return (
    <div id="calloutBlock" className="block hidden">
      <div className="field">
        <label htmlFor="call-out-reason">
          Call Out Reason<span className="req">*</span>
        </label>
        <select id="call-out-reason" name="call-out-reason">
          <option value="" disabled selected>
            Select a reason
          </option>
          <option>Due to Illness</option>
          <option>Not Due to Illness</option>
        </select>
        <div className="error" data-error-for="call-out-reason"></div>
      </div>

      <div id="symptomsField" className="field hidden">
        <label htmlFor="symptoms">Symptoms (Optional)</label>
        <input id="symptoms" name="symptoms" placeholder="e.g. fever, cough" />
        <div className="error" data-error-for="symptoms"></div>
      </div>
    </div>
  );
}
