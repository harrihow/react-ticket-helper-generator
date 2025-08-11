import React from "react";

export default function FormActions({ onClear }) {
  return (
    <div className="grid two mt-8">
      <button type="submit" className="btn primary">Generate Ticket(s)</button>
      <button type="button" className="btn" onClick={onClear}>Clear All</button>
    </div>
  );
}