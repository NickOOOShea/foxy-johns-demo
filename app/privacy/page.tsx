import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy | Foxy John's",
  description: "Privacy policy for Foxy John's website.",
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-narrow">
        <h1 className="text-4xl font-display font-bold text-ink mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-ink-muted">
          <p className="text-sm text-ink-faint mb-8">Last updated: January 2026</p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Overview</h2>
          <p>
            Foxy John's ("we", "us", or "our") operates the foxy-johns.connecteire.ie website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Information We Collect</h2>
          <p>
            This website does not use cookies, tracking pixels, or analytics services. We do not collect any personal information through this website.
          </p>
          <p>
            If you contact us by phone or visit our premises, we may collect information you voluntarily provide.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">How We Use Information</h2>
          <p>
            Any information collected through direct contact (phone, in-person) is used solely for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responding to your enquiries</li>
            <li>Processing bicycle rental bookings</li>
            <li>General business operations</li>
          </ul>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Data Security</h2>
          <p>
            We take reasonable measures to protect any personal information we collect. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Your Rights</h2>
          <p>
            Under GDPR, you have the right to access, correct, or delete any personal data we hold about you. To exercise these rights, contact us at the phone number provided on our website.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Contact</h2>
          <p>
            If you have questions about this privacy policy, please contact us:
          </p>
          <p>
            <strong>Foxy John's</strong><br />
            Main Street, Grove<br />
            Dingle, Co. Kerry<br />
            Phone: 066 915 1316
          </p>
        </div>
      </div>
    </div>
  )
}
