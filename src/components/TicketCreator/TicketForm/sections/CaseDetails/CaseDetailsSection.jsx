import React from "react";
import TicketNo from "./inputs/TicketNo.jsx";
import CaseType from "./inputs/CaseType.jsx";
import CallOutBlock from "./inputs/CallOutBlock.jsx";

export default function CaseDetailsSection({ ticketNo, onTicketNoChange, caseType, onCaseTypeChange, isCallOut, callOutReason, onCallOutReasonChange, symptoms, onSymptomsChange, dueToIllness, errFor }) {
  return (
    <>
      <div className="grid two">
        <TicketNo value={ticketNo} onChange={onTicketNoChange} />
        <CaseType value={caseType} onChange={onCaseTypeChange} errFor={errFor} />
      </div>
      {isCallOut && (
        <CallOutBlock
          callOutReason={callOutReason}
          onCallOutReasonChange={onCallOutReasonChange}
          symptoms={symptoms}
          onSymptomsChange={onSymptomsChange}
          dueToIllness={dueToIllness}
          errFor={errFor}
        />
      )}
    </>
  );
}