import React from "react";

export default function TicketNo() {
  return (
    <div className="field">
      <label htmlFor="ticket-no">Ticket No.</label>
      <input
        id="ticket-no"
        name="ticket-no"
        type="number"
        placeholder="e.g. 12345"
      />
      <div className="error" data-error-for="ticket-no"></div>
    </div>
  );
}
