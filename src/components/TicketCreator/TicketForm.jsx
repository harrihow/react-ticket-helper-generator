import React from "react";
import CaseDetailsSection from "./sections/CaseDetailsSection";
import CallerSection from "./sections/CallerSection";
import CaregiverAndShiftSection from "./sections/CaregiverAndShiftSection";
import ClientsSection from "./sections/ClientsSection";
import AmsStateAgentSection from "./sections/AmsStateAgentSection";
import ReasonSection from "./sections/ReasonSection";
import FormActions from "./sections/FormActions";

export default function TicketForm() {
  return (
    <section className="card card-narrow">
      <form id="ticketForm" noValidate>
        <CaseDetailsSection />
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
