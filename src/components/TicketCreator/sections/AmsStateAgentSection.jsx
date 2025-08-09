import React from "react";

export default function AmsStateAgentSection() {
  return (
    <div className="grid three mt-8">
      <div className="field">
        <label htmlFor="ams">AMS<span className="req">*</span></label>
        <input list="ams-options" id="ams" name="ams" placeholder="e.g. Sandata" />
        <datalist id="ams-options">
          <option>Sandata</option>
          <option>Matrixcare</option>
          <option>HHA</option>
          <option>Alayacare</option>
          <option>Axxess</option>
        </datalist>
        <div className="error" data-error-for="ams"></div>
      </div>

      <div className="field">
        <label htmlFor="state">State</label>
        <input list="state-options" id="state" name="state" placeholder="e.g. Illinois" />
        <datalist id="state-options">
          <option>Illinois</option>
          <option>Missouri</option>
          <option>Delaware</option>
          <option>Mississippi</option>
          <option>Indiana</option>
          <option>Michigan</option>
          <option>Georgia</option>
          <option>Ohio</option>
          <option>New York</option>
        </datalist>
        <div className="error" data-error-for="state"></div>
      </div>

      <div className="field">
        <label htmlFor="agent-initial">Your Initial (T1 - First Initial, Last Name)<span className="req">*</span></label>
        <input id="agent-initial" name="agent-initial" placeholder="e.g. J. Smith" />
        <div className="error" data-error-for="agent-initial"></div>
      </div>
    </div>
  );
}
