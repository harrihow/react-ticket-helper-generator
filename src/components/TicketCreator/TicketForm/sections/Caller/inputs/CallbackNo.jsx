import React from "react";

export default function CallbackNo({ callbackNo, setCallbackNo }) {
  return (
    <div className="field">
      <label htmlFor="callback-no">Callback No.</label>
      <input id="callback-no" type="tel" placeholder="e.g. (555) 123-4567" value={callbackNo} onChange={(e)=> setCallbackNo(e.target.value)} />
    </div>
  );
}