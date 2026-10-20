import { extras, regions } from "@/content/apps/savings-room/app";
import { SectionHeader } from "@/components/app-page/SectionHeader";
import { Icon } from "@/components/app-page/Icon";
import ui from "@/components/app-page/ui.module.css";
import styles from "./AccountsMarquee.module.css";

type Region = (typeof regions)[number];

/** Two drifting rows of the region templates the app can import. */
export function AccountsMarquee() {
  return (
    <section className={styles.section} aria-labelledby="accounts-title">
      <div className={ui.container}>
        <SectionHeader
          id="accounts-title"
          section={extras.accounts}
          align="center"
        />
      </div>
      <div className={styles.rows}>
        {regions.map((region, i) => (
          <div
            key={region.name}
            className={`${styles.row} ${i % 2 ? styles.reverse : ""}`}
          >
            <div className={styles.track}>
              <Pills region={region} />
              <Pills region={region} hidden />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pills({
  region,
  hidden = false,
}: {
  region: Region;
  hidden?: boolean;
}) {
  return (
    <ul
      className={`${styles.pills} ${hidden ? styles.copy : ""}`}
      aria-label={hidden ? undefined : `${region.name} template`}
      aria-hidden={hidden || undefined}
    >
      <li className={styles.region}>
        <span aria-hidden="true">{region.flag}</span> {region.name}
      </li>
      {region.accounts.map((account) => (
        <li key={account.name} className={styles.account}>
          <span aria-hidden="true">{account.emoji}</span> {account.name}
        </li>
      ))}
      {region.banks.map((bank) => (
        <li key={bank} className={styles.bank}>
          <Icon name="bank" size={16} /> {bank}
        </li>
      ))}
    </ul>
  );
}
