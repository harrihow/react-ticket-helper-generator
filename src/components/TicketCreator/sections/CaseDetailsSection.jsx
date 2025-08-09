import React from "react";
import TicketNo from "./TicketNo.jsx";
import CaseType from "./CaseType.jsx";
import CallOutBlock from "./CallOutBlock.jsx";

export default function CaseDetailsSection() {
    return (
        <>
            <div className="grid two">
                <TicketNo />
                <CaseType />
            </div>

            <CallOutBlock />
        </>

    );
}
