import React from "react";

export default function CallOutBlock({ callOutReason, onCallOutReasonChange, symptoms, onSymptomsChange, dueToIllness, errFor }) {
  return (
    <div className="block">
      <div className="field">
        <label htmlFor="call-out-reason">Call Out Reason<span className="req">*</span></label>
        <select id="call-out-reason" value={callOutReason} onChange={(e)=> onCallOutReasonChange(e.target.value)}>
          <option value="">Select a reason</option>
          <option value="Due to Illness">Due to Illness</option>
          <option value="Not Due to Illness">Not Due to Illness</option>
        </select>
        <div className="error">{errFor("call-out-reason")}</div>
      </div>
      {dueToIllness && (
        <div className="field">
          <label htmlFor="symptoms">Symptoms (Optional)</label>
          <input id="symptoms" placeholder="e.g. fever, cough" value={symptoms} onChange={(e)=> onSymptomsChange(e.target.value)} />
          <div className="error" data-error-for="symptoms"></div>
        </div>
      )}
    </div>
  );
}