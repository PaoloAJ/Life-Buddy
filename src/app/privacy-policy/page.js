"use client";
import React from "react";
import Link from "next/link";

function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>Back to Home</span>
        </Link>

        {/* Privacy Policy Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold mb-6 text-center text-blue-300">
            Privacy Policy for Life Buddy
          </h1>

          <div className="text-sm text-gray-300 mb-8 text-center">
            <strong>Last Updated:</strong> September 1st, 2025
          </div>

          <div className="space-y-6 text-gray-100">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Introduction
              </h2>
              <p className="leading-relaxed">
                Life Buddy is a Chrome extension designed to help users improve
                productivity through Pomodoro timer functionality and website
                blocking features. This Privacy Policy explains how we collect,
                use, and protect your information when you use our extension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Information We Collect
              </h2>

              <h3 className="text-xl font-medium mb-3 text-blue-100">
                Data Stored Locally on Your Device
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Timer Settings:</strong> Work time, break time, and
                  Pomodoro session preferences
                </li>
                <li>
                  <strong>Timer State:</strong> Current timer status, remaining
                  time, and completed sessions
                </li>
                <li>
                  <strong>Blocked Websites:</strong> List of websites you choose
                  to block during focus sessions
                </li>
                <li>
                  <strong>Extension Settings:</strong> Whether the extension is
                  enabled/disabled
                </li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-blue-100 mt-6">
                Data We Do NOT Collect
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Personal information (name, email, address)</li>
                <li>Browsing history or website content</li>
                <li>Personal files or documents</li>
                <li>Location data</li>
                <li>Any data transmitted to external servers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                How We Use Your Information
              </h2>
              <p className="mb-3">All data collected by Life Buddy is:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Stored locally</strong> on your device using
                  Chrome&apos;s local storage
                </li>
                <li>
                  <strong>Never transmitted</strong> to external servers or
                  third parties
                </li>
                <li>
                  <strong>Used solely</strong> to provide the extension&apos;s
                  functionality
                </li>
                <li>
                  <strong>Accessible only</strong> to you through your browser
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Data Storage and Security
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Local Storage:</strong> All data is stored locally in
                  your Chrome browser
                </li>
                <li>
                  <strong>No Cloud Storage:</strong> We do not maintain any
                  cloud-based storage of your data
                </li>
                <li>
                  <strong>Browser Security:</strong> Data is protected by
                  Chrome&apos;s built-in security measures
                </li>
                <li>
                  <strong>No External Access:</strong> Our extension cannot
                  access data from other websites or extensions
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Third-Party Services
              </h2>
              <p className="mb-3">Life Buddy does not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Integrate with third-party analytics services</li>
                <li>Use advertising networks</li>
                <li>Share data with external companies</li>
                <li>Require user accounts or registration</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Your Rights
              </h2>
              <p className="mb-3">You have complete control over your data:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>View Data:</strong> Access all stored data through
                  Chrome&apos;s developer tools
                </li>
                <li>
                  <strong>Delete Data:</strong> Remove the extension to delete
                  all stored data
                </li>
                <li>
                  <strong>Modify Settings:</strong> Change blocked websites and
                  timer preferences at any time
                </li>
                <li>
                  <strong>Export Data:</strong> Copy your settings and
                  preferences manually
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Data Retention
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Active Use:</strong> Data is retained as long as you
                  use the extension
                </li>
                <li>
                  <strong>Extension Removal:</strong> All data is automatically
                  deleted when you remove the extension
                </li>
                <li>
                  <strong>Browser Reset:</strong> Data may be cleared if you
                  reset your browser settings
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Children&apos;s Privacy
              </h2>
              <p className="leading-relaxed">
                Life Buddy does not knowingly collect personal information from
                children under 13. The extension is designed for general
                audiences and does not require personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify users of any material changes by updating the extension
                and this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Contact Information
              </h2>
              <p className="mb-3">
                If you have questions about this Privacy Policy or our data
                practices, please contact us at:{" "}
                <a
                  href="https://chromewebstore.google.com/detail/ndbdcahdcnfigegkljghcaobjgilefpo/support"
                  className="font-bold text-xl hover:text-blue-400"
                >
                  Store Support
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-200">
                Compliance
              </h2>
              <p className="mb-3">This Privacy Policy complies with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Chrome Web Store Developer Program Policies</li>
                <li>General Data Protection Regulation (GDPR) principles</li>
                <li>California Consumer Privacy Act (CCPA) requirements</li>
                <li>Other applicable privacy laws and regulations</li>
              </ul>
            </section>

            {/* Coming Soon Message */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold mb-3 text-blue-200">
                🚀 Website Coming Soon!
              </h3>
              <p className="leading-relaxed">
                We&apos;re working hard to bring you an enhanced Life Buddy
                experience with more features, better analytics, and a
                comprehensive dashboard. Stay tuned for updates!
              </p>
            </div>

            <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4 mt-6">
              <p className="text-center text-blue-200">
                <strong>Note:</strong> This extension operates entirely within
                your browser and does not transmit any personal data to external
                servers. Your privacy and data security are our top priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PrivacyPolicy;
