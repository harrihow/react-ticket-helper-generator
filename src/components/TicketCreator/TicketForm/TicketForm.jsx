import React, { useState } from "react";
import CaseDetailsSection from "./sections/CaseDetails/CaseDetailsSection.jsx";
import CallerSection from "./sections/Caller/CallerSection.jsx";
import CaregiverAndShiftSection from "./sections/CaregiverShift/CaregiverAndShiftSection.jsx";
import ClientsSection from "./sections/Clients/ClientsSection.jsx";
import AmsStateAgentSection from "./sections/AmsStateAgent/AmsStateAgentSection.jsx";
import ReasonSection from "./sections/Reason/ReasonSection.jsx";
import FormActions from "./sections/Actions/FormActions.jsx";

// Simple client factory so we always add the same shape
const emptyClient = () => ({
  name: "",
  start: "",
  end: "",
  scenario: "",
  replacement: "",
  voicemail: "",
  family: "",
});

export default function TicketForm() {
  // Keep state centralized here to stay beginner-friendly
  const [ticketNo, setTicketNo] = useState("");
  const [caseType, setCaseType] = useState("");
  const [callOutReason, setCallOutReason] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [callerType, setCallerType] = useState("");
  const [callerTypeOther, setCallerTypeOther] = useState("");
  const [callbackNo, setCallbackNo] = useState("");
  const [caregiver, setCaregiver] = useState("");
  const [dateOfShift, setDateOfShift] = useState("");
  const [clients, setClients] = useState([emptyClient()]);
  const [ams, setAms] = useState("");
  const [stateVal, setStateVal] = useState("");
  const [agentInitial, setAgentInitial] = useState("");
  const [reason, setReason] = useState("");

  const [errors, setErrors] = useState({}); // keyed by field id
  const [tickets, setTickets] = useState([]); // generated output
  const [toast, setToast] = useState(""); // lightweight feedback

  const isCallOut = caseType === "Call Out";
  const dueToIllness = isCallOut && callOutReason === "Due to Illness";
  const reasonRequired = (isCallOut && callOutReason === "Not Due to Illness") || (!isCallOut);

  // --- Helpers ---
  function showToast(msg){
    setToast(msg);
    setTimeout(()=> setToast(""), 2200);
  }

  function formatPhone(input){
    // Why: keep the friendly formatting from your vanilla JS
    const digits = input.replace(/\D/g, "");
    if(digits.length <= 3) return digits;
    if(digits.length <= 6) return `(${digits.slice(0,3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0,3)}) ${digits.slice(3,6)}-${digits.slice(6,10)}`;
  }

  function addClient(){ setClients(prev => [...prev, emptyClient()]); }
  function removeClient(index){ setClients(prev => prev.filter((_,i)=> i!==index)); }
  function updateClient(index, patch){ setClients(prev => prev.map((c,i)=> i===index ? { ...c, ...patch } : c)); }

  function clearAll(){
    // Why: mirror your Clear All button behavior
    setTicketNo(""); setCaseType(""); setCallOutReason(""); setSymptoms("");
    setCallerType(""); setCallerTypeOther(""); setCallbackNo("");
    setCaregiver(""); setDateOfShift(""); setClients([emptyClient()]);
    setAms(""); setStateVal(""); setAgentInitial(""); setReason("");
    setErrors({}); setTickets([]);
    showToast("All fields have been reset.");
  }

  // --- Validation ported from static JS ---
  function validate(){
    const err = {};
    if(!callerType) err["caller-type"] = "Caller Type is required.";
    if(callerType === "Others" && !callerTypeOther.trim()) err["caller-type-other"] = "Please specify when 'Others' is selected.";
    if(!caseType) err["case-type"] = "Case Type is required.";
    if(!ams.trim()) err["ams"] = "AMS cannot be empty.";
    if(!agentInitial.trim()) err["agent-initial"] = "Your Initial is required.";

    const anyNamed = clients.some(c=> c.name.trim());
    if(clients.length>0 && !anyNamed){ err["client-name-0"] = "At least one client is required."; }
    if(anyNamed && !dateOfShift){ err["date-of-shift"] = "Date of shift is required when a client is present."; }

    clients.forEach((c, idx)=>{
      if(c.name.trim()){
        if(!c.start) err[`start-time-${idx}`] = `Start time is required for Client ${idx+1}.`;
        if(!c.end) err[`end-time-${idx}`] = `End time is required for Client ${idx+1}.`;
        if(isCallOut){
          if(!c.scenario) err[`contact-scenario-${idx}`] = `Client Contact Scenario is required for Client ${idx+1}.`;
          if(c.scenario === "Spoke with client"){
            if(!c.replacement) err[`replacement-needed-${idx}`] = `Please select if a replacement is needed for Client ${idx+1}.`;
          }else if(c.scenario === "Did NOT speak with the client."){
            if(!c.voicemail) err[`voicemail-status-${idx}`] = `Please select the voicemail status for Client ${idx+1}.`;
          }else if(c.scenario === "Spoke with a family member"){
            if(!c.family.trim()) err[`family-member-name-${idx}`] = `Family member name/relation is required for Client ${idx+1}.`;
            if(!c.replacement) err[`replacement-needed-${idx}`] = `Please select if a replacement is needed for Client ${idx+1}.`;
          }
        }
      }
    });

    if(isCallOut){
      if(!callOutReason) err["call-out-reason"] = "Call out reason is required.";
      if(callOutReason === "Not Due to Illness" && !reason.trim()) err["reason"] = "Reason/Details is required when call out is not due to illness.";
    }else{
      if(!reason.trim()) err["reason"] = "Reason/Details cannot be empty.";
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  }

  // --- Ticket generation (ported) ---
  function detailsList(items){
    return items.filter(([_,v])=> v && v.toString().trim().length>0)
      .map(([k,v])=> `- ${k}: ${v}`).join("\n");
  }
  function normalizeReplacement(value){
    if(!value) return "not specified";
    const v = value.toLowerCase();
    if(v.includes("is not")) return "is not needed"; // keep exact phrasing variants
    if(v.includes("is needed")) return "is needed";
    if(v.includes("not")) return "not needed";
    if(v.includes("needed")) return "needed";
    return value;
  }
  function integrateReason(text){
    const t = text.trim();
    if(!t) return "";
    return /[.!?]$/.test(t) ? t : t + ".";
  }
  function buildTickets(){
    const base = {
      CaseType: caseType,
      CallerType: callerType === "Others" ? `Others: ${callerTypeOther || ""}` : callerType,
      CallbackNo: callbackNo,
      TicketNo: ticketNo || "N/A",
      AMS: ams,
      State: stateVal || "N/A",
      Caregiver: caregiver || "",
      DateOfShift: dateOfShift || "",
    };
    const out = [];
    const agentLine = `T1 [${agentInitial}]`;

    clients.forEach((c)=>{
      if(!c.name.trim()) return;
      const details = detailsList([
        ["Case Type", base.CaseType],
        ["Caller Type", base.CallerType],
        ["Callback No.", base.CallbackNo],
        ["Ticket No.", base.TicketNo],
        ["AMS", base.AMS],
        ["State", base.State],
        ["Caregiver Name", base.Caregiver],
        ["Client Name", c.name],
        ["Date of Shift", base.DateOfShift],
        ["Start Time", c.start],
        ["End Time", c.end],
        ["Call Out Reason", isCallOut ? callOutReason : ""],
        ["Symptoms", (isCallOut && dueToIllness) ? symptoms : ""],
        ["Client Contact Scenario", isCallOut ? c.scenario : ""],
        ["Replacement Needed", (isCallOut && (c.scenario === "Spoke with client" || c.scenario === "Spoke with a family member")) ? c.replacement : ""],
        ["Voicemail Status", (isCallOut && c.scenario === "Did NOT speak with the client.") ? c.voicemail : ""],
        ["Family Member Name", (isCallOut && c.scenario === "Spoke with a family member") ? c.family : ""],
      ]);

      let narrative = "";
      if(isCallOut){
        const cg = base.Caregiver || "The caregiver";
        const date = base.DateOfShift || "the scheduled date";
        const timePart = (c.start && c.end) ? ` from ${c.start} to ${c.end}` : "";
        const clientPart = c.name ? ` for ${c.name}` : "";
        const illnessPart = dueToIllness ? ` The caregiver is sick${symptoms ? ` with ${symptoms}.` : "."}` : "";
        const reasonExtra = reason ? ` ${integrateReason(reason)}` : "";
        narrative = `${cg} called out${clientPart} for the shift on ${date}${timePart}.${illnessPart}${reasonExtra} `;
        if(c.scenario === "Spoke with client"){
          const phrase = normalizeReplacement(c.replacement);
          narrative += `The client was contacted and stated a replacement is ${phrase}.`;
        }else if(c.scenario === "Did NOT speak with the client."){
          narrative += `The client could not be reached. ${c.voicemail || "No voicemail status provided."}`;
        }else if(c.scenario === "Spoke with a family member"){
          narrative += `Spoke with ${c.family || "a family member"} who was advised of the call out and stated a replacement ${c.replacement || "is not specified"}.`;
        }else if(c.scenario === "No Call Window"){
          narrative += "Unable to contact client due to no call window.";
        }
      }else{
        narrative = reason || "";
      }

      const ticketText = [
        "TICKET DETAILS",
        details,
        "",
        "Reason/Details",
        narrative.trim(),
        "",
        agentLine,
      ].join("\n");
      out.push(ticketText);
    });

    return out;
  }

  function onSubmit(e){
    e.preventDefault();
    if(!validate()){ showToast("Please fix the highlighted errors."); return; }
    const built = buildTickets();
    setTickets(built);
    showToast("Ticket(s) generated successfully.");
  }

  // Pass errors with a helper so children can show messages by key
  const errFor = (key) => errors[key] || "";

  return (
    <section className="card card-narrow">
      <form id="ticketForm" noValidate onSubmit={onSubmit}>
        <CaseDetailsSection
          ticketNo={ticketNo}
          onTicketNoChange={setTicketNo}
          caseType={caseType}
          onCaseTypeChange={(val)=>{ setCaseType(val); setCallOutReason(""); setSymptoms(""); }}
          isCallOut={isCallOut}
          callOutReason={callOutReason}
          onCallOutReasonChange={setCallOutReason}
          symptoms={symptoms}
          onSymptomsChange={setSymptoms}
          dueToIllness={dueToIllness}
          errFor={errFor}
        />

        <CallerSection
          callerType={callerType}
          setCallerType={(val)=>{ setCallerType(val); if(val!=="Others") setCallerTypeOther(""); }}
          callerTypeOther={callerTypeOther}
          setCallerTypeOther={setCallerTypeOther}
          callbackNo={callbackNo}
          setCallbackNo={(val)=> setCallbackNo(formatPhone(val))}
          errFor={errFor}
        />

        <CaregiverAndShiftSection
          caregiver={caregiver}
          setCaregiver={setCaregiver}
          dateOfShift={dateOfShift}
          setDateOfShift={setDateOfShift}
          errFor={errFor}
        />

        <ClientsSection
          isCallOut={isCallOut}
          clients={clients}
          addClient={addClient}
          removeClient={removeClient}
          updateClient={updateClient}
          errFor={errFor}
        />

        <AmsStateAgentSection
          ams={ams}
          setAms={setAms}
          stateVal={stateVal}
          setStateVal={setStateVal}
          agentInitial={agentInitial}
          setAgentInitial={setAgentInitial}
          errFor={errFor}
        />

        <ReasonSection
          reason={reason}
          setReason={setReason}
          reasonRequired={reasonRequired}
          errFor={errFor}
        />

        <FormActions onClear={clearAll} />
      </form>

      {/* Results */}
      <section id="results" className={`results ${tickets.length? "" : "hidden"}`}>
        {tickets.map((tk, i)=> (
          <div key={i} className="ticket">
            <label>Generated Ticket {i+1}</label>
            <textarea rows={12} readOnly value={tk} />
            <div className="copy-row">
              <button className="btn" type="button" onClick={()=> { navigator.clipboard.writeText(tk); showToast("Ticket copied to clipboard."); }}>Copy</button>
            </div>
          </div>
        ))}
      </section>

      {/* Toast */}
      <div id="toast" className={`toast ${toast? "" : "hidden"}`} role="status" aria-live="polite">{toast}</div>
    </section>
  );
}