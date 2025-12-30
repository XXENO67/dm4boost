import { Link } from 'react-router-dom'
import { Crown, MessageCircle, ExternalLink } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const Footer = () => {
  return (
    <footer className="relative bg-wow-graphite border-t border-wow-gold/20">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-wow-gold to-transparent" />
      
      <div className="container-gta py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-wow-gold to-wow-gold-dark flex items-center justify-center rounded-lg">
                <Crown className="w-6 h-6 text-wow-black" />
              </div>
              <span className="font-bebas text-2xl text-transparent bg-clip-text bg-gradient-to-r from-wow-gold to-yellow-300">
                {siteConfig.server.name}
              </span>
            </div>
            <p className="text-wow-light leading-relaxed mb-4">
              {siteConfig.server.description}
            </p>
            <p className="text-wow-gold/80 text-sm italic">
              Perfection through Experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bebas text-xl text-wow-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-wow-light hover:text-wow-gold transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-wow-gold rounded-full" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-wow-light hover:text-wow-gold transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-wow-gold rounded-full" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#rules" className="text-wow-light hover:text-wow-gold transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-wow-gold rounded-full" />
                  Rules
                </a>
              </li>
              <li>
                <a href="#team" className="text-wow-light hover:text-wow-gold transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 bg-wow-gold rounded-full" />
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bebas text-xl text-wow-gold mb-4">Contact</h3>
            <div className="space-y-4">
              {/* Discord Button */}
              <a
                href={siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-wow-dark hover:bg-wow-medium border border-wow-gold/20 hover:border-wow-gold/50 transition-all rounded-lg group"
              >
                <div className="w-10 h-10 bg-[#5865F2] flex items-center justify-center rounded-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium group-hover:text-wow-gold transition-colors">Join Discord</p>
                  <p className="text-wow-light text-sm">Community & Support</p>
                </div>
                <ExternalLink className="w-4 h-4 text-wow-light group-hover:text-wow-gold transition-colors" />
              </a>

              {/* Book Now Button */}
              <a
                href={siteConfig.server.bookingDiscord || siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gradient-to-r from-wow-gold/20 to-wow-gold/10 hover:from-wow-gold/30 hover:to-wow-gold/20 border border-wow-gold/30 hover:border-wow-gold/50 transition-all rounded-lg group"
              >
                <div className="w-10 h-10 bg-wow-gold flex items-center justify-center rounded-lg">
                  <MessageCircle className="w-5 h-5 text-wow-black" />
                </div>
                <div className="flex-1">
                  <p className="text-wow-gold font-medium">Book Your Session</p>
                  <p className="text-wow-light text-sm">Ticket Portal</p>
                </div>
                <ExternalLink className="w-4 h-4 text-wow-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider-gta" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-wow-light text-sm">
          <p>
            © {siteConfig.legal.copyrightYear} {siteConfig.server.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-wow-gold transition-colors">Privacy Policy</Link>
            <span className="text-wow-medium">|</span>
            <Link to="/terms" className="hover:text-wow-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
