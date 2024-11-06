import React from "react";
import Layout from "./layout";

function PrivacyPolicy() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="mb-4">
            At Proficientme, your privacy is of utmost importance to us. This
            Privacy Policy outlines how we collect and use your data. By using
            our site, you agree to these terms. This policy does not replace any
            direct agreements between you and Proficientme.
          </p>

          <p className="font-semibold mb-2">Information We Collect</p>
          <p className="mb-4">
            We collect personal information when necessary, typically for
            subscriptions, premium content access, or purchases. This may
            include your name, email, phone number, and location, as well as
            other details required for specific requests.
          </p>

          <p className="font-semibold mb-2">Optional Data Submission</p>
          <p className="mb-4">
            Participation in online forms is voluntary. We may request details
            such as your name, address, email, employer, and job title. For
            purchases, a credit card number may be required. Some information
            may be mandatory for specific activities.
          </p>

          <p className="font-semibold mb-2">Technical Data Collection</p>
          <p className="mb-4">
            We collect technical data like IP addresses, browser types, and
            traffic patterns. We may use cookies for system administration. You
            can manage cookie settings in your browser.
          </p>

          <p className="font-semibold mb-2">Using Collected Data</p>
          <p className="mb-4">
            Your information helps us enhance your site experience, create
            relevant content, and notify you of updates and offers. To
            unsubscribe from communications, use the provided link in emails or
            contact us.
          </p>

          <p className="font-semibold mb-2">Linking to External Sites</p>
          <p className="mb-4">
            Our site may contain links to external websites. Please review their
            privacy policies, as they are not governed by ours. We are not
            responsible for third-party privacy practices.
          </p>

          <p className="font-semibold mb-2">Legal Disclosures</p>
          <p className="mb-4">
            We may disclose your information to comply with legal requirements,
            protect our rights, or prevent harm. This includes cooperating with
            government or law enforcement officials.
          </p>

          <p className="font-semibold mb-2">Ensuring Security</p>
          <p className="mb-4">
            We use advanced security measures to protect your information. Your
            data is securely stored behind firewall protection. Access is
            limited to authorized personnel.
          </p>

          <p className="font-semibold mb-2">EU-US Privacy Shield Compliance</p>
          <p className="mb-4">
            We adhere to the EU-US Privacy Shield framework for data transfers
            from the EEA, ensuring high privacy standards. By using our site,
            you consent to data transfers to the US and other countries.
          </p>

          <p className="font-semibold mb-2">Managing Data Transfers</p>
          <p className="mb-4">
            We ensure third parties handle personal data in accordance with
            Privacy Shield protections. We are accountable for third-party
            actions under the Privacy Shield framework.
          </p>

          <p className="font-semibold mb-2">Resolving Privacy Complaints</p>

          <p className="mb-4">Resolving Privacy Complaints</p>
          <p className="font-semibold mb-2">
            We address privacy complaints promptly. If unresolved, you can
            escalate to your local data protection authority or seek binding
            arbitration. The Federal Trade Commission oversees our compliance
            with Privacy Shield.
          </p>

          <p className="font-semibold mb-2">Data Access and Correction</p>
          <p className="mb-4">
            You can request access, correction, or deletion of your personal
            data. This is subject to legal obligations and practical
            limitations. Contact us for these requests, and we may require
            identity verification.
          </p>

          <p className="font-semibold mb-2">GDPR Data Management</p>
          <p className="mb-4">
            As data processors, we handle personal information solely to support
            our services. We ensure strict adherence to data protection
            principles, never using your information for our own purposes.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default PrivacyPolicy;
