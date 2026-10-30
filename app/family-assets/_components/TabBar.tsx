import { Glyph } from "./Glyph";
import ios from "./Ios.module.css";

const tabs = [
  { label: "Net Worth", icon: "chart.line.uptrend.xyaxis" },
  { label: "Assets", icon: "chart.pie" },
  { label: "Debts", icon: "creditcard" },
  { label: "Settings", icon: "gear" },
] as const;

/** ContentView.swift's four tabs, on the paper bar (Theme.applyAppearance), the active one in the tint. */
export function TabBar({ active }: { active: (typeof tabs)[number]["label"] }) {
  return (
    <div className={ios.tabs} aria-hidden="true">
      {tabs.map((tab) => (
        <span
          key={tab.label}
          className={tab.label === active ? ios.tabActive : undefined}
        >
          <Glyph name={tab.icon} />
          {tab.label}
        </span>
      ))}
    </div>
  );
}
