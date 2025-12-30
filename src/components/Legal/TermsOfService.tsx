import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, AlertTriangle, Shield, Users, DollarSign, Ban, MessageCircle } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: <FileText /> },
    { id: 'services', title: '2. Our Services', icon: <Shield /> },
    { id: 'ordering', title: '3. Ordering Process', icon: <MessageCircle /> },
    { id: 'payments', title: '4. Payments & Refunds', icon: <DollarSign /> },
    { id: 'conduct', title: '5. Customer Conduct', icon: <Users /> },
    { id: 'account', title: '6. Account Safety', icon: <Shield /> },
    { id: 'violations', title: '7. Violations', icon: <Ban /> },
    { id: 'liability', title: '8. Limitation of Liability', icon: <AlertTriangle /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-wow-black to-wow-dark">
      {/* Header */}
      <div className="bg-wow-dark/90 backdrop-blur-sm border-b border-wow-gold/20 sticky top-0 z-40">
        <div className="container-gta py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-wow-light hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="container-gta py-12">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-wow-gold mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-wow-light">
              Last updated: {new Date(siteConfig.legal.lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
          </div>

          {/* Table of Contents */}
          <div className="card-gta mb-12">
            <h2 className="text-2xl font-bebas text-wow-gold mb-4">Table of Contents</h2>
            <div className="grid md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-3 p-3 hover:bg-wow-dark/50 transition-colors rounded"
                >
                  <span className="text-wow-gold">{section.icon}</span>
                  <span className="text-white">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <section id="acceptance" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">1. Acceptance of Terms</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  By using our WoW boosting services, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our services.
                </p>
                <p>
                  We reserve the right to update these terms at any time. Continued use of our services 
                  after changes constitutes acceptance of the new terms.
                </p>
              </div>
            </section>

            <section id="services" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">2. Our Services</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  {siteConfig.server.name} provides professional World of Warcraft boosting services including:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mythic+ Dungeon runs</li>
                  <li>Raid clears and achievements</li>
                  <li>PvP rating boosts</li>
                  <li>Custom boosting requests</li>
                </ul>
                <p className="mt-4">
                  All services are performed by our experienced veteran team with the highest 
                  standards of quality and safety.
                </p>
              </div>
            </section>

            <section id="ordering" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">3. Ordering Process</h2>
              <div className="space-y-4 text-wow-light">
                <h3 className="text-xl font-bebas text-wow-gold">How to Order</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Contact us via Discord to discuss your requirements</li>
                  <li>Receive a custom quote based on your needs</li>
                  <li>Confirm your order and provide necessary details</li>
                  <li>Payment is processed securely</li>
                  <li>Service is scheduled and completed</li>
                </ul>

                <h3 className="text-xl font-bebas text-wow-gold mt-6">Order Requirements</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You must be at least {siteConfig.legal.minAge} years old</li>
                  <li>You must own the account being boosted</li>
                  <li>Accurate information must be provided</li>
                </ul>
              </div>
            </section>

            <section id="payments" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">4. Payments & Refunds</h2>
              <div className="space-y-4 text-wow-light">
                <h3 className="text-xl font-bebas text-wow-gold">Payment Terms</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Payment is required before service begins</li>
                  <li>We accept various secure payment methods</li>
                  <li>All prices are discussed and agreed upon before ordering</li>
                </ul>

                <h3 className="text-xl font-bebas text-wow-gold mt-6">Refund Policy</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full refund if service cannot be completed due to our fault</li>
                  <li>Partial refunds may be offered for incomplete services</li>
                  <li>No refunds for completed services</li>
                  <li>Refund requests must be made within 24 hours</li>
                </ul>
              </div>
            </section>

            <section id="conduct" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">5. Customer Conduct</h2>
              <div className="space-y-4 text-wow-light">
                <p>Customers are expected to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Communicate respectfully with our team</li>
                  <li>Provide accurate account and order information</li>
                  <li>Not interfere with ongoing boosts</li>
                  <li>Keep login credentials secure</li>
                  <li>Not share service details publicly during active boosts</li>
                </ul>
              </div>
            </section>

            <section id="account" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">6. Account Safety</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  We take account safety seriously and implement the following measures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>VPN usage matching your region when required</li>
                  <li>Secure handling of login credentials</li>
                  <li>Professional and discreet service execution</li>
                  <li>No unauthorized actions on your account</li>
                </ul>

                <div className="bg-wow-dark/50 p-4 rounded border-l-4 border-wow-gold mt-6">
                  <p className="text-sm">
                    <strong>Note:</strong> While we take every precaution, boosting services carry 
                    inherent risks. We are not responsible for any actions taken by Blizzard Entertainment.
                  </p>
                </div>
              </div>
            </section>

            <section id="violations" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">7. Violations</h2>
              <div className="space-y-4 text-wow-light">
                <p>The following may result in service termination without refund:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing false information</li>
                  <li>Abusive behavior towards our team</li>
                  <li>Attempting to scam or defraud</li>
                  <li>Interfering with active boosts</li>
                  <li>Chargebacks without valid reason</li>
                </ul>
              </div>
            </section>

            <section id="liability" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">8. Limitation of Liability</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  Our services are provided "as is". We are not liable for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Actions taken by Blizzard Entertainment on your account</li>
                  <li>Loss of in-game items or currency not related to our service</li>
                  <li>Delays caused by factors outside our control</li>
                  <li>Any indirect or consequential damages</li>
                </ul>
                <p className="mt-4">
                  Our maximum liability is limited to the amount paid for the specific service in question.
                </p>
              </div>
            </section>
          </div>

          {/* Contact */}
          <div className="card-gta mt-12 text-center">
            <h2 className="text-2xl font-bebas text-white mb-4">Questions?</h2>
            <p className="text-wow-light mb-6">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <a 
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wow-gold inline-block"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
