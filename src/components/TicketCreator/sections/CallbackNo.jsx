import React from "react";

export default function CallbackNo() {
  return (
    <div className="field">
      <label htmlFor="callback-no">Callback No.</label>
      <input
        id="callback-no"
        name="callback-no"
        type="tel"
        placeholder="e.g. (555) 123-4567"
      />
    </div>
  );
}
