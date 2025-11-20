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
          <li>
            <strong>Gentle & Kind:</strong> Designed with a calm, friendly, and
            non-judgmental approach to help you understand your health journey.
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
          app available on iOS devices (Bundle ID:
          com.wizeyes.www.HealthSidekick). Your privacy is extremely important
          to us, and we&apos;ve designed Koda to keep your health information
          private and secure.
        </p>

        <h3 className={styles.title}>Information Collection and Use</h3>
        <p>
          Koda is designed with privacy at its core. We collect minimal
          personal information and do not store your health data on our
          servers.
        </p>
        <h4>Information We Collect:</h4>
        <ul>
          <li>
            <strong>Authentication Data:</strong> When you sign in with Apple,
            we receive a unique user identifier. We do not have access to your
            Apple ID, email, or other personal information unless you choose to
            share it.
          </li>
          <li>
            <strong>Subscription Status:</strong> We verify your subscription
            status through Apple&apos;s StoreKit to determine your access
            level. All payment processing is handled by Apple.
          </li>
        </ul>
        <h4>Information We Do NOT Collect:</h4>
        <ul>
          <li>
            We do not collect, store, or transmit your health data (biomarkers,
            blood work results, health events, or medical records) to our
            servers.
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
        <h4>Authentication Tokens:</h4>
        <p>
          When you sign in with Apple, we generate secure access tokens that
          are stored in your device&apos;s Keychain:
        </p>
        <ul>
          <li>Access tokens expire after 30 minutes</li>
          <li>Refresh tokens expire after 6 months and are automatically rotated</li>
          <li>
            Tokens are used only to verify your subscription status and
            authenticate API requests
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
            app organizes your relevant health information (limited to the last
            100 biomarker entries from the past 3 years and the last 100 health
            events) and sends it directly from your device to OpenAI or
            Anthropic&apos;s servers via our backend API (api.usekoda.ca)
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

        <h3 className={styles.title}>Subscription and Payment Information</h3>
        <p>
          Koda offers a subscription service managed entirely through
          Apple&apos;s App Store:
        </p>
        <ul>
          <li>
            <strong>Pricing:</strong> $4.99/month with a 14-day free trial
          </li>
          <li>
            <strong>Payment Processing:</strong> All payments are processed by
            Apple. We never have access to your credit card or payment
            information
          </li>
          <li>
            <strong>Subscription Verification:</strong> We verify your
            subscription status through Apple&apos;s StoreKit to determine your
            access level
          </li>
        </ul>

        <h3 className={styles.title}>Children&apos;s Privacy</h3>
        <p>
          Koda is not intended for children under 13 years of age. We do not
          knowingly collect personal information from children under 13. If we
          discover that we have collected information from a child under 13, we
          will delete that information immediately.
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

        <h2 className={styles.title}>Terms of Service</h2>
        <p>
          <i>Last Updated: November 20, 2025</i>
        </p>

        <h3 className={styles.title}>Acceptance of Terms</h3>
        <p>
          Welcome to Koda! These Terms of Service (&quot;Terms&quot;) govern your
          access to and use of the Koda mobile application (&quot;App&quot;,
          &quot;Service&quot;, or &quot;Koda&quot;) provided by Wizeyes
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By downloading,
          accessing, or using Koda, you agree to be bound by these Terms. If
          you do not agree to these Terms, please do not use the App.
        </p>

        <h3 className={styles.title}>Description of Service</h3>
        <p>
          Koda is a health tracking application that helps you manage medical
          records, biomarkers, blood work results, and health events. The App
          provides:
        </p>
        <ul>
          <li>Local and iCloud storage of your health data</li>
          <li>
            AI-powered insights using OpenAI and Anthropic services (for paid
            subscribers)
          </li>
          <li>Health data organization and tracking tools</li>
          <li>Subscription-based access to premium features</li>
        </ul>

        <h3 className={styles.title}>Eligibility</h3>
        <p>
          You must be at least 13 years old to use Koda. If you are between 13
          and 18 years old (or the age of majority in your jurisdiction), you
          must have your parent or guardian&apos;s permission to use the App.
          By using Koda, you represent and warrant that you meet these
          eligibility requirements.
        </p>

        <h3 className={styles.title}>Account and Authentication</h3>
        <h4>Sign in with Apple:</h4>
        <p>
          Koda uses Sign in with Apple for authentication. By signing in, you
          agree to provide accurate information and maintain the security of
          your Apple ID credentials.
        </p>
        <h4>Account Security:</h4>
        <p>
          You are responsible for maintaining the confidentiality of your
          account and for all activities that occur under your account. Please
          notify us immediately of any unauthorized use of your account.
        </p>

        <h3 className={styles.title}>Subscription Terms</h3>
        <h4>Free Trial:</h4>
        <ul>
          <li>Koda offers a 14-day free trial for new users</li>
          <li>The trial is managed by Apple through StoreKit</li>
          <li>
            You can cancel anytime during the trial without being charged
          </li>
        </ul>
        <h4>Paid Subscription:</h4>
        <ul>
          <li>After the trial, Koda costs $4.99 per month</li>
          <li>
            Subscriptions are auto-renewable and managed through the Apple App
            Store
          </li>
          <li>
            Payment will be charged to your Apple ID account at confirmation of
            purchase
          </li>
          <li>
            Subscriptions automatically renew unless auto-renew is turned off
            at least 24 hours before the end of the current period
          </li>
          <li>
            You can manage or cancel your subscription in your App Store
            account settings
          </li>
        </ul>
        <h4>Access Levels:</h4>
        <ul>
          <li>
            <strong>Free/View-Only Access:</strong> All users can browse and
            view features (profiles, biomarkers, health events, settings)
          </li>
          <li>
            <strong>Paid Subscription Access:</strong> Active subscribers can
            edit data and use AI-powered insights
          </li>
        </ul>
        <h4>Refunds:</h4>
        <p>
          All subscription purchases are processed through the Apple App Store
          and are subject to Apple&apos;s refund policies. We cannot process
          refunds directly. To request a refund, please contact Apple Support.
        </p>

        <h3 className={styles.title}>Use of AI Services</h3>
        <p>By using Koda&apos;s AI features, you acknowledge and agree that:</p>
        <ul>
          <li>
            Your health data will be sent from your device to OpenAI and/or
            Anthropic for processing
          </li>
          <li>
            AI-generated insights are for informational purposes only and not
            medical advice
          </li>
          <li>
            You should always consult with qualified healthcare professionals
            for medical decisions
          </li>
          <li>
            AI responses may contain errors or inaccuracies and should not be
            solely relied upon
          </li>
          <li>You can opt-out of AI features and track data manually</li>
        </ul>

        <h3 className={styles.title}>
          Medical Disclaimer and Limitation of Liability
        </h3>
        <p>
          <strong>IMPORTANT: KODA IS NOT A MEDICAL DEVICE AND DOES NOT PROVIDE
          MEDICAL ADVICE.</strong>
        </p>
        <p>
          Koda is designed to help you track and organize your health
          information. The App and any AI-generated insights are for
          informational and educational purposes only. They are not intended to
          be a substitute for professional medical advice, diagnosis, or
          treatment.
        </p>
        <p>Key disclaimers:</p>
        <ul>
          <li>
            Always seek the advice of your physician or other qualified health
            provider with any questions you may have regarding a medical
            condition
          </li>
          <li>
            Never disregard professional medical advice or delay seeking it
            because of something you have read in Koda
          </li>
          <li>
            Koda does not diagnose, treat, cure, or prevent any disease or
            medical condition
          </li>
          <li>
            The AI insights are generated by algorithms and may contain errors,
            inaccuracies, or incomplete information
          </li>
          <li>
            If you think you may have a medical emergency, call your doctor or
            emergency services immediately
          </li>
        </ul>

        <h3 className={styles.title}>Acceptable Use</h3>
        <p>You agree NOT to use Koda to:</p>
        <ul>
          <li>
            Violate any laws, regulations, or third-party rights
          </li>
          <li>
            Share another person&apos;s health information without their
            consent
          </li>
          <li>
            Attempt to reverse engineer, decompile, or hack the App
          </li>
          <li>
            Use automated systems or bots to access the App
          </li>
          <li>
            Interfere with or disrupt the App&apos;s functionality
          </li>
          <li>
            Upload malicious code, viruses, or harmful content
          </li>
          <li>
            Use the App for any commercial purpose without our permission
          </li>
        </ul>

        <h3 className={styles.title}>Intellectual Property</h3>
        <p>
          Koda and all its contents, features, and functionality (including but
          not limited to all information, software, text, displays, images, and
          design) are owned by Wizeyes and are protected by copyright,
          trademark, and other intellectual property laws.
        </p>
        <p>You own all the health data you enter into Koda.</p>

        <h3 className={styles.title}>Data Ownership and Portability</h3>
        <ul>
          <li>
            You retain full ownership of all health data you enter into Koda
          </li>
          <li>
            Your data is stored locally on your device and in your iCloud
            account
          </li>
          <li>
            You can export or delete your data at any time
          </li>
        </ul>

        <h3 className={styles.title}>Third-Party Services</h3>
        <p>Koda integrates with third-party services:</p>
        <ul>
          <li>
            <strong>Apple Services:</strong> Sign in with Apple, iCloud,
            CloudKit, StoreKit
          </li>
          <li>
            <strong>AI Services:</strong> OpenAI and Anthropic
          </li>
        </ul>
        <p>
          Your use of these services is subject to their respective terms of
          service and privacy policies. We are not responsible for the
          practices or content of third-party services.
        </p>

        <h3 className={styles.title}>Limitation of Liability</h3>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WIZEYES SHALL NOT BE LIABLE
          FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
          DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
          DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
          INTANGIBLE LOSSES, RESULTING FROM:
        </p>
        <ul>
          <li>Your use or inability to use Koda</li>
          <li>
            Any medical decisions made based on information in Koda
          </li>
          <li>
            Any errors, inaccuracies, or omissions in AI-generated insights
          </li>
          <li>
            Unauthorized access to or alteration of your data
          </li>
          <li>
            Any interruption or cessation of the Service
          </li>
        </ul>

        <h3 className={styles.title}>Disclaimer of Warranties</h3>
        <p>
          KODA IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;
          WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
          BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR
          A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT
          KODA WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR OTHER
          HARMFUL COMPONENTS.
        </p>

        <h3 className={styles.title}>Termination</h3>
        <p>
          We reserve the right to suspend or terminate your access to Koda at
          any time, with or without notice, for any reason, including if we
          believe you have violated these Terms.
        </p>
        <p>You may stop using Koda at any time by:</p>
        <ul>
          <li>
            Canceling your subscription in the App Store settings
          </li>
          <li>Deleting the App from your device</li>
          <li>Signing out of your account</li>
        </ul>
        <p>
          Upon termination, you will retain access to your locally stored data,
          but will lose access to premium features.
        </p>

        <h3 className={styles.title}>Changes to Terms</h3>
        <p>
          We may update these Terms from time to time to reflect changes in our
          practices, technology, legal requirements, or other factors. We will
          notify you of material changes by posting the updated Terms in the
          App and updating the &quot;Last Updated&quot; date. Your continued use
          of Koda after changes are posted constitutes your acceptance of the
          revised Terms.
        </p>

        <h3 className={styles.title}>Governing Law</h3>
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of the jurisdiction in which Wizeyes operates, without regard to
          its conflict of law provisions.
        </p>

        <h3 className={styles.title}>Contact Information</h3>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> support@wizeyes.com
        </p>

        <h3 className={styles.title}>Severability</h3>
        <p>
          If any provision of these Terms is found to be invalid or
          unenforceable, the remaining provisions will continue to be valid and
          enforceable.
        </p>

        <h3 className={styles.title}>Entire Agreement</h3>
        <p>
          These Terms, together with our Privacy Policy, constitute the entire
          agreement between you and Wizeyes regarding your use of Koda and
          supersede all prior agreements and understandings.
        </p>

        <div style={{ marginTop: "3em", padding: "1em", backgroundColor: "#f0f0e8", borderRadius: "8px" }}>
          <p style={{ margin: 0 }}>
            <strong>Thank you for using Koda!</strong>
          </p>
          <p style={{ margin: "0.5em 0 0 0" }}>
            We&apos;re here to support your health journey with kindness,
            privacy, and care.
          </p>
        </div>
      </div>
    </div>
  );
}
