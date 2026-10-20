"use client";

import { useState } from "react";
import { extras } from "@/content/apps/savings-room/app";
import { money } from "./money";
import { RoomBar } from "./RoomBar";
import styles from "./RoomDemo.module.css";

/** Sample accounts. FHSA limits match the app's template; the rest is illustrative. */
const accounts = {
  tfsa: { name: "💰 TFSA", room: 7000, start: 4500 },
  fhsa: {
    name: "🏠 FHSA",
    room: 8000,
    start: 5000,
    lifetime: { room: 40000, before: 16000 },
  },
} as const;

type AccountKey = keyof typeof accounts;

export function RoomDemo() {
  const [key, setKey] = useState<AccountKey>("tfsa");
  const [contributed, setContributed] = useState<number>(accounts.tfsa.start);
  const account = accounts[key];
  const left = account.room - contributed;
  const max = account.room * 1.25;

  const choose = (next: AccountKey) => {
    setKey(next);
    setContributed(accounts[next].start);
  };

  return (
    <div className={styles.demo}>
      <div className={styles.tile} aria-hidden="true" />
      <div className={styles.panel}>
        <div
          className={styles.segmented}
          role="group"
          aria-label="Sample account"
        >
          {(Object.keys(accounts) as AccountKey[]).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={option === key}
              onClick={() => choose(option)}
            >
              {accounts[option].name}
            </button>
          ))}
        </div>

        <div className={styles.card}>
          <p className={styles.cardHead}>{account.name}</p>
          <RoomBar
            label="2026"
            room={account.room}
            contributed={contributed}
            motion="follow"
          />
          {"lifetime" in account && (
            <RoomBar
              label="Lifetime"
              room={account.lifetime.room}
              contributed={account.lifetime.before + contributed}
              motion="follow"
            />
          )}
        </div>

        <label className={styles.slider}>
          <span className={styles.sliderLabel}>
            {extras.room.hint}
            <strong>{money(contributed)}</strong>
          </span>
          <input
            type="range"
            min={0}
            max={max}
            step={100}
            value={contributed}
            onChange={(event) => setContributed(Number(event.target.value))}
            style={
              { "--p": `${(contributed / max) * 100}%` } as React.CSSProperties
            }
            aria-valuetext={`${money(contributed)} contributed this year`}
          />
        </label>

        <p
          className={`${styles.note} ${left < 0 ? styles.over : ""}`}
          aria-live="polite"
        >
          {left > 0 && (
            <>
              <strong>{money(left)}</strong> of room left this year.
            </>
          )}
          {left === 0 && <>This year&apos;s room is full. Nicely done.</>}
          {left < 0 && (
            <>
              <strong>{money(-left)}</strong> over this year&apos;s room. Better
              to catch that here than at tax time.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
