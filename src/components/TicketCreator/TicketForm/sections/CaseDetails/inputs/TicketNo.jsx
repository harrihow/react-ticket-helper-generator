import React from "react";

export default function TicketNo({ value, onChange }) {
  return (
    <div className="field">
      <label htmlFor="ticket-no">Ticket No.</label>
      <input
        id="ticket-no"
        name="ticket-no"
        type="number"
        placeholder="e.g. 12345"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="error" data-error-for="ticket-no"></div>
    </div>
  );
}
