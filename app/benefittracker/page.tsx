import styles from "./page.module.css";

export default function BenefitTrackerPage() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Benefits Tracker</h1>

        <h2 className={styles.title}>About</h2>
        <ul>
          <li>
            Private and Flexible Storage: Securely store your transaction data
            on your device and personal iCloud. Enjoy privacy and easy access
            across your Apple devices without sacrificing security.
          </li>
        </ul>

        <h2 className={styles.title}>Privacy Policy</h2>
        <p>
          <i>Last Updated: July 11, 2025</i>
        </p>
        <h3 className={styles.title}>Introduction</h3>
        <p>
          Welcome to Benefits Tracker. This Privacy Policy explains how we
          handle your personal information and data. The policy is applicable to
          the Benefits Tracker app available on iOS devices.
        </p>
        <h3 className={styles.title}>Information Collection and Use</h3>
        <p>
          It is important to note that our app is designed to store all your
          data locally on your device or on your iCloud account. We do not
          collect, transmit, or store any personal information through
          Benefits Tracker.
        </p>
        <h3 className={styles.title}>Data Storage and Security</h3>
        <p>
          All data entered into Benefits Tracker is stored locally on your
          device and can be synced with your iCloud account. We do not have
          access to any of the data you store in the app, and we do not store or
          transmit your data to any external servers.
        </p>
        <h3 className={styles.title}>iCloud</h3>
        <p>
          If you enable iCloud syncing, your data will be stored in your iCloud
          account and will be subject to Apple iCloud Terms and Conditions and
          Privacy Policy.
        </p>
        <h3 className={styles.title}>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. Thus, we advise
          you to review this page periodically for any changes. We will notify
          you of any changes by posting the new Privacy Policy on this page.
          These changes are effective immediately after they are posted on this
          page.
        </p>
        <h3 className={styles.title}>Contact Us</h3>
        <p>
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to contact us at support@wizeyes.com.
        </p>
      </div>
    </div>
  );
}
