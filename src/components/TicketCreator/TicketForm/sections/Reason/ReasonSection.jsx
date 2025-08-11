import React from "react";

export default function ReasonSection({ reason, setReason, reasonRequired, errFor }) {
  return (
    <div className="field">
      <label htmlFor="reason">Reason/Details {reasonRequired && (<span id="reasonReq" className="req">*</span>)}</label>
      <textarea id="reason" rows={8} placeholder={reasonRequired ? "Please provide the reason for the call out..." : "Provide any additional details..."} value={reason} onChange={(e)=> setReason(e.target.value)} />
      <div className="error">{errFor("reason")}</div>
    </div>
  );
}
