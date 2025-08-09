import React from "react";
import TicketNo from "./TicketNo.jsx";
import CaseType from "./CaseType.jsx";
import CallOutBlock from "./CallOutBlock.jsx";

export default function CaseDetailsSection({ ticketNo, onTicketNoChange }) {
  return (
    <>
      <div className="grid two">
        <TicketNo value={ticketNo} onChange={onTicketNoChange} />
        <CaseType />
      </div>
      <CallOutBlock />
    </>
  );
}
