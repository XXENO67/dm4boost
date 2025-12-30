import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Globe, Mail } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sections = [
    { id: 'intro', title: '1. Introduction', icon: <Shield /> },
    { id: 'collection', title: '2. Information We Collect', icon: <Database /> },
    { id: 'usage', title: '3. How We Use Your Information', icon: <Eye /> },
    { id: 'sharing', title: '4. Information Sharing', icon: <Globe /> },
    { id: 'security', title: '5. Data Security', icon: <Lock /> },
    { id: 'retention', title: '6. Data Retention', icon: <Database /> },
    { id: 'rights', title: '7. Your Rights', icon: <UserCheck /> },
    { id: 'contact', title: '8. Contact Us', icon: <Mail /> }
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
            <Lock className="w-16 h-16 text-wow-gold mx-auto mb-4" />
            <h1 className="text-5xl md:text-7xl font-bebas text-white mb-4">
              Privacy Policy
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
            <section id="intro" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">1. Introduction</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  Welcome to {siteConfig.server.name}. This Privacy Policy explains how we collect, 
                  use, and protect your information when you use our WoW boosting services.
                </p>
                <p>
                  By using our services, you agree to the collection and use of information 
                  in accordance with this policy.
                </p>
              </div>
            </section>

            <section id="collection" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">2. Information We Collect</h2>
              <div className="space-y-4 text-wow-light">
                <h3 className="text-xl font-bebas text-wow-gold">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Discord username and ID</li>
                  <li>Battle.net tag (for service delivery)</li>
                  <li>Payment information (processed securely)</li>
                  <li>Communication records</li>
                </ul>

                <h3 className="text-xl font-bebas text-wow-gold mt-6">Automatically Collected</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service usage data</li>
                  <li>Communication timestamps</li>
                  <li>Order history</li>
                </ul>
              </div>
            </section>

            <section id="usage" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">3. How We Use Your Information</h2>
              <div className="space-y-4 text-wow-light">
                <p>We use collected information for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing and improving our boosting services</li>
                  <li>Processing orders and payments</li>
                  <li>Communicating about your orders</li>
                  <li>Customer support</li>
                  <li>Preventing fraud and abuse</li>
                </ul>
              </div>
            </section>

            <section id="sharing" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">4. Information Sharing</h2>
              <div className="space-y-4 text-wow-light">
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Our boosting team members (only necessary info for service delivery)</li>
                  <li>Payment processors (for transaction processing)</li>
                  <li>Legal authorities (when required by law)</li>
                </ul>
              </div>
            </section>

            <section id="security" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">5. Data Security</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encrypted communications</li>
                  <li>Secure payment processing</li>
                  <li>Limited access to personal data</li>
                  <li>Regular security reviews</li>
                </ul>
              </div>
            </section>

            <section id="retention" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">6. Data Retention</h2>
              <div className="space-y-4 text-wow-light">
                <p>We retain your data for the following periods:</p>
                <div className="overflow-x-auto">
                  <table className="w-full mt-4">
                    <thead>
                      <tr className="border-b border-wow-gold/30">
                        <th className="text-left py-2 text-wow-gold">Data Type</th>
                        <th className="text-left py-2 text-wow-gold">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-wow-dark">
                        <td className="py-2">Order Data</td>
                        <td className="py-2">{siteConfig.legal.dataRetention.orderData}</td>
                      </tr>
                      <tr className="border-b border-wow-dark">
                        <td className="py-2">Chat Logs</td>
                        <td className="py-2">{siteConfig.legal.dataRetention.chatLogs}</td>
                      </tr>
                      <tr className="border-b border-wow-dark">
                        <td className="py-2">Account Data</td>
                        <td className="py-2">{siteConfig.legal.dataRetention.accountData}</td>
                      </tr>
                      <tr className="border-b border-wow-dark">
                        <td className="py-2">Payment Records</td>
                        <td className="py-2">{siteConfig.legal.dataRetention.paymentRecords}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="rights" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">7. Your Rights</h2>
              <div className="space-y-4 text-wow-light">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us via Discord.
                </p>
              </div>
            </section>

            <section id="contact" className="card-gta">
              <h2 className="text-3xl font-bebas text-white mb-4">8. Contact Us</h2>
              <div className="space-y-4 text-wow-light">
                <p>
                  If you have questions about this Privacy Policy, please contact us via Discord.
                </p>
              </div>
            </section>
          </div>

          {/* Contact CTA */}
          <div className="card-gta mt-12 text-center">
            <h2 className="text-2xl font-bebas text-white mb-4">Questions?</h2>
            <p className="text-wow-light mb-6">
              If you have any questions about this Privacy Policy, please contact us.
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
