import React from "react";
import TicketForm from "./TicketForm.jsx"

export default function () {
    return (
        <main>
            <section className="content content-centered">
                <h2 className="title">Ticket Creator</h2>
                <p className="muted">Fill in the details below to generate ticket text. No backend required.</p>
            </section>
            <TicketForm />
        </main>
    );
}
