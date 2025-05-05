import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-4 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At Tuneslogic, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Personal identification information (Name, Email address, Phone number, etc.)</li>
          <li>Usage data and analytics</li>
          <li>Technical data like IP address, browser type, and device info</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the collected data for various purposes:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>To provide and maintain our service</li>
          <li>To notify you about changes to our service</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analytics to improve our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Data Sharing and Disclosure</h2>
        <p className="mb-4">
          We do not sell your personal information. We may share information with trusted partners who help us operate and improve our service, under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Security</h2>
        <p className="mb-4">
          We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at [email@example.com].
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your experience, analyze traffic, and personalize content. You can modify your browser settings to refuse cookies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to other websites. We are not responsible for the content or privacy practices of these third-party sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this policy from time to time. We encourage you to review this page periodically. Changes are effective immediately upon posting.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@example.com" className="text-blue-500 hover:underline">privacy@example.com</a>.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
