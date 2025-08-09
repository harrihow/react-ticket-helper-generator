import React, { useState } from "react";

import CaseDetailsSection from "./sections/CaseDetails/CaseDetailsSection.jsx";
import CallerSection from "./sections/Caller/CallerSection.jsx";
import CaregiverAndShiftSection from "./sections/CaregiverShift/CaregiverAndShiftSection.jsx";
import ClientsSection from "./sections/Clients/ClientsSection.jsx";
import AmsStateAgentSection from "./sections/AmsStateAgent/AmsStateAgentSection.jsx";
import ReasonSection from "./sections/Reason/ReasonSection.jsx";
import FormActions from "./sections/Actions/FormActions.jsx";


export default function TicketForm() {
  const [ticketNo, setTicketNo] = useState("");
  const [caseType, setCaseType] = useState("");
  const [callOutReason, setCallOutReason] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const isCallOut = caseType === "Call Out";
  const dueToIllness = isCallOut && callOutReason === "Due to Illness";

  return (
    <section className="card card-narrow">
      <form id="ticketForm" noValidate>
        <CaseDetailsSection
          ticketNo={ticketNo}
          onTicketNoChange={setTicketNo}
          caseType={caseType}
          onCaseTypeChange={setCaseType}
          isCallOut={isCallOut}
          callOutReason={callOutReason}
          onCallOutReasonChange={setCallOutReason}
          symptoms={symptoms}
          onSymptomsChange={setSymptoms}
          dueToIllness={dueToIllness}
        />
        <CallerSection />
        <CaregiverAndShiftSection />
        <ClientsSection />
        <AmsStateAgentSection />
        <ReasonSection />
        <FormActions />
      </form>
    </section>
  );
}
