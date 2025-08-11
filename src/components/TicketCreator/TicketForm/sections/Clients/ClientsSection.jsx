import React from "react";
import ClientCard from "./inputs/ClientCard.jsx";

export default function ClientsSection({ isCallOut, clients, addClient, removeClient, updateClient, errFor }) {
  return (
    <>
      <div id="clients">
        {clients.map((c, idx)=> (
          <ClientCard key={idx} index={idx} isCallOut={isCallOut} client={c} removeClient={removeClient} updateClient={updateClient} errFor={errFor} canRemove={clients.length>1} />
        ))}
      </div>
      <button type="button" className="btn outline mt-8" onClick={addClient}>
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2z" fill="currentColor"/></svg>
        Add Client
      </button>
    </>
  );
}