import styles from "./page.module.css";

export default function KodaPage() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Koda - Your Health Companion</h1>

        <h2 className={styles.title}>About Koda</h2>
        <p>
          Koda is your friendly health companion for tracking biomarkers, blood
          work, health events, and understanding your health journey with
          AI-powered insights.
        </p>
        <ul>
          <li>
            <strong>Private & Secure:</strong> All your health data lives on
            your device and in your private iCloud. We never save your health
            information on our servers.
          </li>
          <li>
            <strong>AI-Powered Insights:</strong> Get personalized health
            insights powered by OpenAI and Anthropic, sent directly from your
            device to their services.
          </li>
        </ul>

        <h2 className={styles.title}>Privacy Policy</h2>
        <p>
          <i>Last Updated: November 20, 2025</i>
        </p>

        <h3 className={styles.title}>Introduction</h3>
        <p>
          Welcome to Koda. This Privacy Policy explains how we handle your
          personal information and health data. This policy applies to the Koda
          app available on iOS devices. Your privacy is extremely important
          to us, and we&apos;ve designed Koda to keep your health information
          private and secure.
        </p>

        <h3 className={styles.title}>Information Collection and Use</h3>
        <p>
          Koda is designed with privacy at its core. We do not collect any
          personal information. The only information we receive is errors and
          feedback that you voluntarily choose to share with us.
        </p>
        <h4>What We Do NOT Collect:</h4>
        <ul>
          <li>
            We do not collect, store, or transmit your health data (biomarkers,
            blood work results, health events, or medical records) to our
            servers.
          </li>
          <li>
            We do not collect any personal information such as your name, email,
            or contact details.
          </li>
          <li>
            We do not track your location, browsing habits, or app usage
            patterns.
          </li>
          <li>We do not sell or share your data with third parties.</li>
        </ul>

        <h3 className={styles.title}>Data Storage and Security</h3>
        <h4>Local and iCloud Storage:</h4>
        <p>
          All health data you enter into Koda is stored locally on your device
          using SwiftData and can be synced with your private iCloud account
          using CloudKit. This means:
        </p>
        <ul>
          <li>
            Your health data stays on your device and in your personal iCloud
            storage
          </li>
          <li>
            We never have access to the health information you store in the app
          </li>
          <li>
            Your data is protected by your device security (Face ID, Touch ID,
            or passcode) and Apple&apos;s iCloud encryption
          </li>
        </ul>

        <h3 className={styles.title}>AI Services and Data Transfer</h3>
        <p>
          Koda uses artificial intelligence to provide you with personalized
          health insights. Here&apos;s how it works:
        </p>
        <ul>
          <li>
            <strong>AI Providers:</strong> We use OpenAI and Anthropic to power
            Koda&apos;s AI features
          </li>
          <li>
            <strong>Data Transfer:</strong> When you ask Koda for insights, the
            app organizes your relevant health information and sends it directly
            from your device to OpenAI or Anthropic&apos;s servers via our
            backend API (api.usekoda.ca)
          </li>
          <li>
            <strong>No Storage:</strong> Our backend API does not store your
            health data. It only acts as a secure intermediary to communicate
            with AI services
          </li>
          <li>
            <strong>Third-Party Privacy:</strong> The data sent to AI providers
            is subject to their respective privacy policies. We recommend
            reviewing OpenAI&apos;s Privacy Policy and Anthropic&apos;s Privacy
            Policy
          </li>
          <li>
            <strong>Manual Tracking:</strong> You always have the option to
            track everything manually without using AI features
          </li>
        </ul>

        <h3 className={styles.title}>iCloud Syncing</h3>
        <p>
          If you enable iCloud syncing in Koda, your health data will be stored
          in your iCloud account using CloudKit and will be subject to
          Apple&apos;s iCloud Terms and Conditions and Apple&apos;s Privacy
          Policy. Your iCloud data is encrypted and can only be accessed by
          your Apple devices signed in with your Apple ID.
        </p>

        <h3 className={styles.title}>Your Rights and Choices</h3>
        <p>You have complete control over your data:</p>
        <ul>
          <li>
            <strong>Access:</strong> All your data is accessible directly within
            the app
          </li>
          <li>
            <strong>Deletion:</strong> You can delete any data within the app at
            any time
          </li>
          <li>
            <strong>Account Deletion:</strong> You can delete your account by
            signing out. This will remove all local data and stop iCloud
            syncing
          </li>
          <li>
            <strong>AI Opt-Out:</strong> You can choose not to use AI features
            and track everything manually
          </li>
          <li>
            <strong>iCloud Opt-Out:</strong> You can disable iCloud syncing in
            your device settings
          </li>
        </ul>

        <h3 className={styles.title}>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time to reflect changes
          in our practices or for legal, operational, or regulatory reasons. We
          will notify you of any material changes by posting the new Privacy
          Policy on this page and updating the &quot;Last Updated&quot; date. We
          encourage you to review this Privacy Policy periodically. Changes are
          effective immediately upon posting.
        </p>

        <h3 className={styles.title}>Contact Us</h3>
        <p>
          If you have any questions, concerns, or suggestions about our Privacy
          Policy or data practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> support@wizeyes.com
        </p>
      </div>
    </div>
  );
}
