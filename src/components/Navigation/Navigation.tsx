import { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger, smoothScrollTo } from '../../lib/gsap-config'
import { Home, Shield, Users, ScrollText, Info, Star, Crown } from 'lucide-react'
import siteConfig from '../../config/site.config.json'
import { BottomNavigation } from './BottomNavigation'

const navItems = [
  { id: 'home', label: 'Home', href: '#home', icon: <Home className="w-5 h-5" /> },
  { id: 'about', label: 'About Us', href: '#about', icon: <Info className="w-5 h-5" /> },
  { id: 'features', label: 'Services', href: '#features', icon: <Shield className="w-5 h-5" /> },
  { id: 'team', label: 'Team', href: '#team', icon: <Users className="w-5 h-5" /> },
  { id: 'rules', label: 'Rules', href: '#rules', icon: <ScrollText className="w-5 h-5" /> }
]

export const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Return mobile navigation for mobile devices
  if (isMobile) {
    return <BottomNavigation />
  }

  // Desktop navigation continues below
  return <DesktopNavigation />
}

const DesktopNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const navRef = useRef<HTMLElement>(null)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Initial check on mount
  useEffect(() => {
    if (window.scrollY < 100) {
      setActiveSection('home')
    }
  }, [])

  // Setup scroll-triggered active states
  useGSAP(() => {
    // Home section special handling
    ScrollTrigger.create({
      id: 'nav-home',
      trigger: '#home',
      start: 'top top',
      end: 'bottom top+=80',
      onEnter: () => setActiveSection('home'),
      onEnterBack: () => setActiveSection('home'),
      onLeaveBack: () => setActiveSection('home')
    })
    
    // Setup scroll-triggered active states with unique IDs
    navItems.forEach((item) => {
      if (item.id !== 'home') {
        ScrollTrigger.create({
          id: `nav-${item.id}`,
          trigger: `#${item.id}`,
          start: 'top top+=80',
          end: 'bottom top+=80',
          onEnter: () => setActiveSection(item.id),
          onEnterBack: () => setActiveSection(item.id)
        })
      }
    })
    
    ScrollTrigger.refresh()
    ScrollTrigger.sort()

    return () => {
      navItems.forEach((item) => {
        const trigger = ScrollTrigger.getById(`nav-${item.id}`)
        if (trigger) trigger.kill()
      })
    }
  })

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      smoothScrollTo(target, -80)
    }
  }

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-wow-black/95 backdrop-blur-md shadow-lg shadow-wow-gold/5 border-b border-wow-gold/20' 
          : 'bg-wow-black/80 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 opacity-100 animate-fade-in">
            <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-wow-gold to-wow-gold-dark rounded-lg flex items-center justify-center shadow-lg shadow-wow-gold/20">
              <Crown className="w-5 h-5 md:w-6 md:h-6 text-wow-black" />
            </div>
            <span className="font-bebas text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-wow-gold to-yellow-300">
              <span className="hidden sm:inline">{siteConfig.server.name}</span>
              <span className="sm:hidden">DM4</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 text-sm font-inter font-medium transition-all duration-300 opacity-100 animate-fade-in ${
                  activeSection === item.id 
                    ? 'text-wow-gold' 
                    : 'text-white/80 hover:text-wow-gold'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-wow-gold to-wow-gold-light rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="flex items-center gap-3 opacity-100 animate-fade-in">
            <a 
              href={siteConfig.server.bookingDiscord || siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-inter font-semibold uppercase tracking-wider bg-gradient-to-b from-wow-gold via-wow-gold-light to-wow-gold-dark text-wow-black hover:shadow-lg hover:shadow-wow-gold/30 transition-all duration-300 inline-flex items-center gap-2"
            >
              <Star className="w-4 h-4" />
              Book Session
            </a>
            <a 
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm font-inter font-semibold uppercase tracking-wider border border-wow-gold text-wow-gold hover:bg-wow-gold hover:text-wow-black transition-all duration-300"
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
