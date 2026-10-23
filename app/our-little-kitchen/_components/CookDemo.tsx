"use client";

import { useRef, useState, type ReactNode } from "react";
import { PhoneFrame } from "@/components/app-page/PhoneFrame";
import styles from "./CookDemo.module.css";

type Recipe = {
  title: string;
  steps: string[];
  ingredients: { name: string; amount: string }[];
};

/**
 * The app's cooking screen (CookingView.swift), working: every step on one
 * page, a tap ticks one off, the first unticked step is the bright current
 * line and scrolls up, finished steps fade back, and the dish ends with
 * "Done — let's eat!". Renders step one as current without JavaScript.
 * `decoration` is drawn around the phone.
 */
export function CookDemo({
  recipe,
  header,
  hint,
  done: doneLabel,
  decoration,
}: {
  recipe: Recipe;
  header: ReactNode;
  hint: string;
  done: string;
  decoration?: ReactNode;
}) {
  const [done, setDone] = useState<Set<number>>(new Set());
  const [ingredientsOpen, setIngredientsOpen] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  const lines = useRef<(HTMLButtonElement | null)[]>([]);

  const current = recipe.steps.findIndex((_, i) => !done.has(i));
  const finished = current === -1;

  const toggle = (index: number) => {
    const next = new Set(done);
    if (next.has(index)) next.delete(index);
    else next.add(index);
    setDone(next);

    // Like the app: the new current line scrolls up toward the top.
    const upcoming = recipe.steps.findIndex((_, i) => !next.has(i));
    const box = scroller.current;
    const line = upcoming === -1 ? null : lines.current[upcoming];
    if (box && line) {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      box.scrollTo({
        top: Math.max(0, line.offsetTop - box.clientHeight * 0.2),
        behavior: reduce ? "auto" : "smooth",
      });
    }
  };

  return (
    <div className={styles.demo}>
      <div className={styles.copy}>
        {header}
        <p className={styles.hint}>
          <span aria-hidden="true">👆</span> {hint}
        </p>
      </div>

      <div className={styles.stage}>
        {decoration}
        <PhoneFrame screenClassName={styles.screen}>
          <div className={styles.bar}>
            <span>Done</span>
            <span className={styles.count} aria-live="polite">
              {done.size} / {recipe.steps.length}
            </span>
            <button
              type="button"
              aria-expanded={ingredientsOpen}
              onClick={() => setIngredientsOpen(!ingredientsOpen)}
            >
              Ingredients
            </button>
          </div>

          <div className={styles.scroll} ref={scroller}>
            <p className={styles.dish}>{recipe.title}</p>
            <ol className={styles.steps}>
              {recipe.steps.map((step, i) => {
                const state = done.has(i)
                  ? styles.isDone
                  : i === current
                    ? styles.isCurrent
                    : styles.isUpcoming;
                return (
                  <li key={step}>
                    <button
                      type="button"
                      ref={(el) => {
                        lines.current[i] = el;
                      }}
                      className={`${styles.step} ${state}`}
                      aria-pressed={done.has(i)}
                      onClick={() => toggle(i)}
                    >
                      <span className={styles.marker} aria-hidden="true">
                        {done.has(i) ? <Check /> : i + 1}
                      </span>
                      <span>{step}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            {finished && <p className={styles.finish}>{doneLabel}</p>}
          </div>

          {ingredientsOpen && (
            <div className={styles.sheet}>
              <p className={styles.sheetTitle}>Ingredients</p>
              <ul>
                {recipe.ingredients.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span className={styles.amount}>{item.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </PhoneFrame>
      </div>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        d="m7 12.5 3.2 3.2L17 9"
        fill="none"
        stroke="var(--bg)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
