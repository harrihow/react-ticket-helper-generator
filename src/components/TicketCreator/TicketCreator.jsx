import React from "react";
import TicketForm from "./TicketForm/TicketForm.jsx"

export default function TicketCreator({ onLogout }) {
    return (
        <>
            <header className="topbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h1 className="brand">Ticket Generator</h1>
                <button className="btn" type="button" onClick={onLogout}>Logout</button>
            </header>
            <main>
                <TicketForm />
            </main>
        </>
    );
}
