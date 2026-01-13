import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Service | Foxy John's",
  description: "Terms of service for Foxy John's website.",
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-narrow">
        <h1 className="text-4xl font-display font-bold text-ink mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none text-ink-muted">
          <p className="text-sm text-ink-faint mb-8">Last updated: January 2026</p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Agreement to Terms</h2>
          <p>
            By accessing this website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Use of Website</h2>
          <p>
            This website is provided for informational purposes about Foxy John's pub, hardware store, and bicycle rental services in Dingle, Co. Kerry.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Intellectual Property</h2>
          <p>
            The content on this website, including text, images, and design, is the property of Foxy John's or its content suppliers and is protected by Irish and international copyright laws.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Bicycle Rental Terms</h2>
          <p>
            Bicycle rentals are subject to availability and weather conditions. Renters must:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be of legal age or accompanied by a responsible adult</li>
            <li>Accept responsibility for the bicycle during the rental period</li>
            <li>Return the bicycle in the same condition as received</li>
            <li>Report any damage or issues immediately</li>
          </ul>
          <p>
            Full rental terms are provided at the time of rental.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Limitation of Liability</h2>
          <p>
            Foxy John's shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of, or inability to use, the website.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of Ireland.
          </p>

          <h2 className="text-2xl font-display font-bold text-ink mt-8 mb-4">Contact</h2>
          <p>
            Questions about these Terms of Service should be directed to:
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
