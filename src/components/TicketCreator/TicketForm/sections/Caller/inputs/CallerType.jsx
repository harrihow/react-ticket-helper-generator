import React from "react";

export default function CallerType({ callerType, setCallerType, callerTypeOther, setCallerTypeOther, errFor }) {
  return (
    <div className="field">
      <label htmlFor="caller-type">Caller Type<span className="req">*</span></label>
      <select id="caller-type" value={callerType} onChange={(e)=> { setCallerType(e.target.value); if(e.target.value!=="Others") setCallerTypeOther(""); }}>
        <option value="" disabled>Select a caller type</option>
        <option>Caregiver</option>
        <option>Client</option>
        <option>Others</option>
      </select>
      <div className="error">{errFor("caller-type")}</div>

      {callerType === "Others" && (
        <div className="mt-2">
          <input id="caller-type-other" placeholder="Please specify" value={callerTypeOther} onChange={(e)=> setCallerTypeOther(e.target.value)} />
          <div className="error">{errFor("caller-type-other")}</div>
        </div>
      )}
    </div>
  );
}