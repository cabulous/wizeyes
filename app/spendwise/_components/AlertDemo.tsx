"use client";

import { useState, type ReactNode } from "react";
import type {
  AlertPart,
  alerts as allAlerts,
} from "@/content/apps/spendwise/app";
import ui from "@/components/app-page/ui.module.css";
import styles from "./AlertDemo.module.css";

type Alert = (typeof allAlerts)[number];
type Field = Exclude<AlertPart, string>["field"];

/** The bank's name and the card's digits share a colour: together they pick the card. */
const markClass: Record<Field, string> = {
  amount: styles.markAmount,
  merchant: styles.markMerchant,
  bank: styles.markCard,
  card: styles.markCard,
  date: styles.markDate,
};

const legend = [
  { label: "Amount", className: styles.markAmount },
  { label: "Merchant", className: styles.markMerchant },
  { label: "Bank & card", className: styles.markCard },
  { label: "Date", className: styles.markDate },
];

/**
 * An alert from the app's parser tests, its fields highlighted, and the
 * result the Add Transaction shortcut shows: its dialog and TransactionItem
 * (AddTransactionIntent.swift). The first alert renders without JavaScript;
 * picking another replays the highlighting.
 */
export function AlertDemo({
  alerts,
  header,
  icon,
  pick,
  added,
}: {
  alerts: Alert[];
  header: ReactNode;
  icon: ReactNode;
  pick: string;
  added: string;
}) {
  const [index, setIndex] = useState(0);
  const [replay, setReplay] = useState(false);
  const alert = alerts[index];

  // Picking the alert already shown does nothing, the first time as every time.
  const choose = (next: number) => {
    if (next === index) return;
    setIndex(next);
    setReplay(true);
  };

  return (
    <div className={styles.demo}>
      <div className={styles.controls}>
        {header}
        <p className={styles.pickLabel} id="alert-pick">
          {pick}
        </p>
        <div className={styles.tabs} role="group" aria-labelledby="alert-pick">
          {alerts.map((option, i) => (
            <button
              key={option.bank}
              type="button"
              aria-pressed={i === index}
              onClick={() => choose(i)}
            >
              {option.bank}
            </button>
          ))}
        </div>
        <ul className={styles.legend} aria-label="Highlight colours">
          {legend.map((item) => (
            <li key={item.label}>
              <span className={`${styles.swatch} ${item.className}`} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div
        key={index}
        className={`${styles.stage} ${replay ? styles.replay : ""}`}
      >
        <article
          className={styles.email}
          aria-label={`Email from ${alert.from}`}
        >
          <header className={styles.emailHead}>
            <span className={styles.avatar} aria-hidden="true">
              {alert.from.charAt(0)}
            </span>
            <span className={styles.emailFrom}>
              <strong>{alert.from}</strong>
              <span>{alert.subject}</span>
            </span>
          </header>
          <p className={styles.emailBody}>
            {alert.parts.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <mark key={i} className={markClass[part.field]}>
                  {part.text}
                </mark>
              ),
            )}
          </p>
        </article>

        <div className={styles.flow} aria-hidden="true">
          <svg
            viewBox="0 0 24 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path className={styles.flowLine} d="M12 3v54" />
            <path d="m5 50 7 8 7-8" />
          </svg>
          <span className={styles.chip}>Add Transaction</span>
        </div>

        <div className={styles.result}>
          <p className={styles.resultHead}>
            {icon}
            <span>Spendwise</span>
          </p>
          <p className={styles.dialog}>{added}</p>
          <div className={styles.item}>
            <div className={styles.itemRow}>
              <span
                className={`${styles.field} ${styles.itemMerchant} ${styles.markMerchant}`}
              >
                {alert.result.merchant}
              </span>
              <span
                className={`${styles.field} ${styles.itemDate} ${styles.markDate}`}
              >
                {alert.result.date}
              </span>
            </div>
            <div className={styles.itemRow}>
              <span
                className={`${styles.field} ${styles.itemAmount} ${styles.markAmount}`}
              >
                {alert.result.amount}
              </span>
              <span
                className={`${styles.field} ${styles.itemCard} ${styles.markCard}`}
              >
                {alert.result.card}
              </span>
            </div>
          </div>
          {alert.result.note && (
            <p className={styles.note}>{alert.result.note}</p>
          )}
        </div>
      </div>

      {/* Outside the keyed stage, so it stays mounted and its updates get announced. */}
      <p className={ui.srOnly} aria-live="polite">
        {replay
          ? `${added} ${alert.result.merchant}, ${alert.result.amount}, ${alert.result.card}, ${alert.result.date}.`
          : ""}
      </p>
    </div>
  );
}
