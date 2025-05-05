import React from 'react'

const CookiePolicy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen px-4 md:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Cookie Policy</h1>
        <p className="mb-4">
          This Cookie Policy explains how Tuneslogic uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control our use of them.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small data files placed on your computer or mobile device when you visit a website. Cookies are widely used to make websites work or to improve their efficiency, as well as to provide reporting information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Why Do We Use Cookies?</h2>
        <p className="mb-4">
          We use cookies for several reasons:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>To ensure our website functions properly</li>
          <li>To remember your preferences and settings</li>
          <li>To analyze website traffic and user behavior</li>
          <li>To personalize your experience</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><strong>Essential Cookies:</strong> Necessary for the site to function and cannot be switched off.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our website.</li>
          <li><strong>Functional Cookies:</strong> Remember choices you make (such as language or region).</li>
          <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. How You Can Control Cookies</h2>
        <p className="mb-4">
          You can control or delete cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.
        </p>
        <p className="mb-4">
          You can also opt out of certain cookies using third-party tools like:
        </p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li><a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">AboutAds.info</a></li>
          <li><a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Your Online Choices (EU)</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Changes to This Cookie Policy</h2>
        <p className="mb-4">
          We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our practices. We encourage you to review it periodically.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our use of cookies, please contact us at <a href="mailto:privacy@example.com" className="text-blue-500 hover:underline">privacy@example.com</a>.
        </p>
      </div>
    </div>
  )
}

export default CookiePolicy
