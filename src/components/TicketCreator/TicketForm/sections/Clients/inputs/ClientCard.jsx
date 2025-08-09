import React from "react";

export default function ClientCard({ index = 0 }) {
  return (
    <div className="block" style={{ marginTop: ".5rem" }}>
      <h3 className="muted" style={{ margin: "0 0 .5rem" }}>Client {index + 1} Details</h3>

      <div className="field">
        <label htmlFor={`client-name-${index}`}>Client Name</label>
        <input id={`client-name-${index}`} name={`client-name-${index}`} placeholder="e.g. John Doe" />
        <div className="error" data-error-for={`client-name-${index}`}></div>
      </div>

      <div className="grid two">
        <div className="field">
          <label htmlFor={`start-time-${index}`}>Start Time</label>
          <input id={`start-time-${index}`} name={`start-time-${index}`} type="time" />
          <div className="error" data-error-for={`start-time-${index}`}></div>
        </div>
        <div className="field">
          <label htmlFor={`end-time-${index}`}>End Time</label>
          <input id={`end-time-${index}`} name={`end-time-${index}`} type="time" />
          <div className="error" data-error-for={`end-time-${index}`}></div>
        </div>
      </div>

      {/* Call-out conditional block (structure only; hidden by default) */}
      <div className="field" style={{ marginTop: ".5rem" }}>
        <label htmlFor={`contact-scenario-${index}`} className="font-semibold">Client Contact Scenario</label>
        <select id={`contact-scenario-${index}`} name={`contact-scenario-${index}`}>
          <option value="" disabled selected>Select a contact scenario</option>
          <option>Spoke with client</option>
          <option>Did NOT speak with the client.</option>
          <option>Spoke with a family member</option>
          <option>No Call Window</option>
        </select>
        <div className="error" data-error-for={`contact-scenario-${index}`}></div>
      </div>

      {/* Replacement (shown for specific scenarios later) */}
      <div className="field hidden" id={`replacement-wrap-${index}`}>
        <label htmlFor={`replacement-needed-${index}`}>Client stated a replacement...</label>
        <select id={`replacement-needed-${index}`} name={`replacement-needed-${index}`}>
          <option value="" disabled selected>Select an answer</option>
          <option value="needed">Needed</option>
          <option value="not needed">Not Needed</option>
          {/* For family member scenario later we’ll use: "is needed" / "is not needed" */}
        </select>
        <div className="error" data-error-for={`replacement-needed-${index}`}></div>
      </div>

      {/* Voicemail (shown when "Did NOT speak with the client.") */}
      <div className="field hidden" id={`voicemail-wrap-${index}`}>
        <label htmlFor={`voicemail-status-${index}`}>Contact status</label>
        <select id={`voicemail-status-${index}`} name={`voicemail-status-${index}`}>
          <option value="" disabled selected>Select a status</option>
          <option>Left voicemail</option>
          <option>Unable to leave voicemail</option>
        </select>
        <div className="error" data-error-for={`voicemail-status-${index}`}></div>
      </div>

      {/* Family member (shown when "Spoke with a family member") */}
      <div className="field hidden" id={`family-wrap-${index}`}>
        <label htmlFor={`family-member-name-${index}`}>Family Member Name / Relation</label>
        <input id={`family-member-name-${index}`} name={`family-member-name-${index}`} placeholder="e.g. John Doe / Son" />
        <div className="error" data-error-for={`family-member-name-${index}`}></div>
      </div>
    </div>
  );
}
