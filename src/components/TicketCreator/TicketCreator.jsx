import React from "react";
import TicketForm from "./TicketForm/TicketForm.jsx"

export default function TicketCreator() {
    return (
        <>
            <header className="topbar">
                <h1 className="brand">Ticket Generator</h1>
            </header>
            <main>
                <TicketForm />
            </main>
        </>
    );
}
