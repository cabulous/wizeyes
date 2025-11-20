import styles from "../page.module.css";

export default function KodaTermsPage() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1>Koda - Terms of Service</h1>

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
        <p>
          Koda offers a subscription service managed entirely through
          Apple&apos;s App Store.
        </p>
        <h4>Free Trial:</h4>
        <ul>
          <li>Koda offers a free trial for new users</li>
          <li>The trial is managed by Apple through StoreKit</li>
          <li>
            You can cancel anytime during the trial without being charged
          </li>
        </ul>
        <h4>Paid Subscription:</h4>
        <ul>
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
      </div>
    </div>
  );
}
