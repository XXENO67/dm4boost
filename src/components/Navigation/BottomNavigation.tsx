import { useState, useEffect } from 'react'
import { Home, Shield, Users, Info, Star } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

export const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems: NavItem[] = [
    { 
      id: 'home', 
      label: 'Home', 
      icon: <Home size={20} />,
      href: '#home'
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: <Info size={20} />,
      href: '#about'
    },
    { 
      id: 'features', 
      label: 'Services', 
      icon: <Shield size={20} />,
      href: '#features'
    },
    { 
      id: 'team', 
      label: 'Team', 
      icon: <Users size={20} />,
      href: '#team'
    },
    { 
      id: 'book', 
      label: 'Book', 
      icon: <Star size={20} />,
      href: siteConfig.server.bookingDiscord || siteConfig.social.discord
    }
  ]

  // Hide/show navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 100) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Track active section based on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          setActiveSection(sectionId)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    const sections = ['home', 'about', 'features', 'team', 'rules']
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, itemId: string) => {
    e.preventDefault()
    
    if (itemId === 'book') {
      // Open booking discord
      window.open(href, '_blank')
    } else {
      // Smooth scroll to section
      const target = document.querySelector(href)
      if (target) {
        const offset = 80
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  return (
    <nav 
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-wow-black/95 backdrop-blur-lg border-t border-wow-gold/20" />
      
      {/* Navigation Items */}
      <div className="relative flex items-center justify-around h-16 px-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href, item.id)}
            className={`relative flex flex-col items-center justify-center flex-1 h-full py-2 transition-all duration-200 ${
              item.id === 'book'
                ? 'text-wow-gold'
                : activeSection === item.id 
                  ? 'text-wow-gold' 
                  : 'text-wow-light active:scale-95'
            }`}
          >
            {/* Active indicator */}
            {activeSection === item.id && item.id !== 'book' && (
              <span className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-wow-gold rounded-full" />
            )}
            
            {/* Icon */}
            <div className="relative">
              <span className={`transition-transform duration-200 ${
                activeSection === item.id || item.id === 'book' ? 'scale-110' : ''
              }`}>
                {item.icon}
              </span>
            </div>
            
            {/* Label */}
            <span className={`text-[10px] mt-1 font-medium transition-all duration-200 ${
              activeSection === item.id || item.id === 'book'
                ? 'font-semibold transform scale-105' 
                : ''
            }`}>
              {item.label}
            </span>

            {/* Touch feedback ripple effect */}
            <span className="absolute inset-0 rounded-lg overflow-hidden">
              <span className="touch-ripple" />
            </span>
          </a>
        ))}
      </div>

      {/* Brand bar */}
      <div className="absolute -top-8 left-0 right-0 h-8 bg-wow-black/90 backdrop-blur-sm border-t border-wow-gold/10 flex items-center justify-center px-4">
        <span className="text-wow-gold text-xs font-bebas tracking-wider">{siteConfig.server.name} • Premium WoW Boosting</span>
      </div>
    </nav>
  )
}
