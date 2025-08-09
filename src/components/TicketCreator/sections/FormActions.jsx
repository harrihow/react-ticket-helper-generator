import React from "react";

export default function FormActions() {
  return (
    <div className="grid two mt-8">
      <button type="submit" className="btn primary">Generate Ticket(s)</button>
      <button type="button" id="clearBtn" className="btn">Clear All</button>
    </div>
  );
}
