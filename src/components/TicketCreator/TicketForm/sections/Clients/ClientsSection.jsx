import React from "react";
import ClientCard from "./inputs/ClientCard.jsx";

export default function ClientsSection() {
  return (
    <>
      {/* Client cards container (dynamic later) */}
      <div id="clients">
        {/* Example placeholder card (we’ll render a list via JS later) */}
        <ClientCard index={0} />
      </div>

      {/* Add Client button */}
      <button id="addClientBtn" type="button" className="btn outline mt-8">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2z" fill="currentColor" />
        </svg>
        Add Client
      </button>
    </>
  );
}
