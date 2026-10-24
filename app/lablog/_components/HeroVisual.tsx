import { commonTests, thyroidPanel } from "@/content/apps/lablog/app";
import { latest, status } from "./lab";
import { PhoneList } from "./PhoneList";
import { Widget } from "./Widget";
import styles from "./HeroVisual.module.css";

const listed = [...commonTests.slice(0, 4), thyroidPanel[0], thyroidPanel[2]];
const important = [...commonTests, ...thyroidPanel].filter((t) => t.important);

/**
 * The list on the phone, on graph paper, beside the paper report from the
 * latest visit. A Home Screen widget of the important tests floats in
 * front.
 */
export function HeroVisual() {
  const visit = latest(commonTests[0])!.date;
  return (
    <div
      className={styles.stage}
      role="img"
      aria-label="Lablog's list of tests beside a paper lab report: Total Cholesterol, HbA1c, fasting glucose, LDL cholesterol, Free T4 and TSH, each with its latest value and a small chart of its last three results. A Home Screen widget shows the tests marked as important."
    >
      <div className={styles.grid} />

      <div className={styles.report}>
        <p className={styles.reportHead}>
          <span>Laboratory report</span>
          <span>{visit}</span>
        </p>
        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Result</th>
              <th>Ref.</th>
            </tr>
          </thead>
          <tbody>
            {commonTests.map((test) => {
              const last = latest(test)!;
              const out = status(last.value, test.low, test.high) === "out";
              return (
                <tr key={test.name}>
                  <td>{shortName(test.name)}</td>
                  <td>
                    {last.value}
                    {out && <i>{last.value < test.low ? " L" : " H"}</i>}
                  </td>
                  <td>
                    {test.low}–{test.high}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className={styles.phone}>
        <PhoneList tests={listed} />
      </div>

      <Widget className={styles.widget} tests={important} />
    </div>
  );
}

/** A printed report's abbreviations, so the slip stays narrow. */
function shortName(name: string): string {
  const short: Record<string, string> = {
    "Total Cholesterol": "Chol, total",
    "Glycated Hemoglobin (HbA1c)": "HbA1c",
    "Glucose (Fasting)": "Glucose, fasting",
    "LDL Cholesterol": "LDL-C",
    "25 Hydroxy Vitamin D": "25-OH Vit D",
  };
  return short[name] ?? name;
}
