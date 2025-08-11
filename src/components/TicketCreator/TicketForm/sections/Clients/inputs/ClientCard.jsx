import React from "react";

export default function ClientCard({ index, isCallOut, client, removeClient, updateClient, errFor, canRemove }) {
  const showReplacement = isCallOut && (client.scenario === "Spoke with client" || client.scenario === "Spoke with a family member");
  const showVoicemail = isCallOut && client.scenario === "Did NOT speak with the client.";
  const showFamily = isCallOut && client.scenario === "Spoke with a family member";

  return (
    <div className="block" style={{ marginTop: ".5rem" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <h3 className="muted" style={{ margin: "0 0 .5rem" }}>Client {index + 1} Details</h3>
        {canRemove && (
          <button type="button" className="btn" onClick={()=> removeClient(index)} aria-label="Remove client">&times;</button>
        )}
      </div>

      <div className="field">
        <label htmlFor={`client-name-${index}`}>Client Name</label>
        <input id={`client-name-${index}`} placeholder="e.g. John Doe" value={client.name} onChange={(e)=> updateClient(index, { name: e.target.value })} />
        <div className="error">{errFor(`client-name-${index}`)}</div>
      </div>

      <div className="grid two">
        <div className="field">
          <label htmlFor={`start-time-${index}`}>Start Time</label>
          <input id={`start-time-${index}`} type="time" value={client.start} onChange={(e)=> updateClient(index, { start: e.target.value })} />
          <div className="error">{errFor(`start-time-${index}`)}</div>
        </div>
        <div className="field">
          <label htmlFor={`end-time-${index}`}>End Time</label>
          <input id={`end-time-${index}`} type="time" value={client.end} onChange={(e)=> updateClient(index, { end: e.target.value })} />
          <div className="error">{errFor(`end-time-${index}`)}</div>
        </div>
      </div>

      {isCallOut && (
        <div className="field" style={{ marginTop: ".5rem" }}>
          <label htmlFor={`contact-scenario-${index}`}>Client Contact Scenario</label>
          <select id={`contact-scenario-${index}`} value={client.scenario} onChange={(e)=> updateClient(index, { scenario: e.target.value, replacement: "", voicemail: "", family: "" })}>
            <option value="" disabled>Select a contact scenario</option>
            <option>Spoke with client</option>
            <option>Did NOT speak with the client.</option>
            <option>Spoke with a family member</option>
            <option>No Call Window</option>
          </select>
          <div className="error">{errFor(`contact-scenario-${index}`)}</div>
        </div>
      )}

      {showReplacement && (
        <div className="field">
          <label htmlFor={`replacement-needed-${index}`}>Client stated a replacement...</label>
          <select id={`replacement-needed-${index}`} value={client.replacement} onChange={(e)=> updateClient(index, { replacement: e.target.value })}>
            <option value="" disabled>Select an answer</option>
            <option value="needed">Needed</option>
            <option value="not needed">Not Needed</option>
            <option value="is needed">Is Needed</option>
            <option value="is not needed">Is Not Needed</option>
          </select>
          <div className="error">{errFor(`replacement-needed-${index}`)}</div>
        </div>
      )}

      {showVoicemail && (
        <div className="field">
          <label htmlFor={`voicemail-status-${index}`}>Contact status</label>
          <select id={`voicemail-status-${index}`} value={client.voicemail} onChange={(e)=> updateClient(index, { voicemail: e.target.value })}>
            <option value="" disabled>Select a status</option>
            <option>Left voicemail</option>
            <option>Unable to leave voicemail</option>
          </select>
          <div className="error">{errFor(`voicemail-status-${index}`)}</div>
        </div>
      )}

      {showFamily && (
        <div className="field">
          <label htmlFor={`family-member-name-${index}`}>Family Member Name / Relation</label>
          <input id={`family-member-name-${index}`} placeholder="e.g. John Doe / Son" value={client.family} onChange={(e)=> updateClient(index, { family: e.target.value })} />
          <div className="error">{errFor(`family-member-name-${index}`)}</div>
        </div>
      )}
    </div>
  );
}