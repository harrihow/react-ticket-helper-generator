import React from "react";
import styles from "./Header.module.css"

export default function () {
    return (
        <header className={styles.topbar}>
            <h1 className={styles.brand}>TicketAssist</h1>
        </header>
    );
}