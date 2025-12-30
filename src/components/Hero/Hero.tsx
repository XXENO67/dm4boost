import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import siteConfig from '../../config/site.config.json'
import { Crown, Shield, Swords, Star, CheckCircle } from 'lucide-react'

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const visualRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Loading animation
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoading(false)
          clearInterval(timer)
          return 100
        }
        return prev + 3
      })
    }, 25)

    return () => clearInterval(timer)
  }, [])

  useGSAP(() => {
    if (!isLoading) {
      const tl = gsap.timeline()

      // Smooth entrance animations
      tl.from(visualRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from(contentRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.8')
      .from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.feature-badge', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      }, '-=0.3')

      // Parallax on scroll
      ScrollTrigger.create({
        id: 'hero-visual-parallax',
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        animation: gsap.to(visualRef.current, {
          yPercent: 30,
          ease: 'none'
        })
      })

      ScrollTrigger.create({
        id: 'hero-content-parallax',
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        animation: gsap.to(contentRef.current, {
          yPercent: 20,
          ease: 'none'
        })
      })

      return () => {
        ScrollTrigger.getById('hero-visual-parallax')?.kill()
        ScrollTrigger.getById('hero-content-parallax')?.kill()
      }
    }
  }, [isLoading])

  // Loading Screen
  if (isLoading) {
    return (
      <div className="loading-screen bg-gradient-to-br from-wow-black via-wow-dark to-wow-black">
        <div className="loading-content">
          {/* Animated Logo */}
          <div className="relative mb-8">
            <div className="absolute inset-0 blur-3xl bg-wow-gold/20 animate-pulse" />
            <h1 className="text-7xl md:text-9xl font-bebas text-transparent bg-clip-text bg-gradient-to-b from-wow-gold via-yellow-400 to-wow-gold-dark animate-fade-in relative">
              DM 4 BOOST
            </h1>
          </div>
          
          {/* Loading Bar */}
          <div className="w-96 max-w-full mx-auto mb-8">
            <div className="progress-bar bg-wow-dark/50 border border-wow-gold/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-wow-gold via-yellow-400 to-wow-gold transition-all duration-300 rounded-full"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
            <p className="text-wow-light text-sm mt-3 font-rajdhani tracking-wider">
              Loading... {loadingProgress}%
            </p>
          </div>
          
          {/* Loading Tip */}
          <p className="text-wow-gold/80 text-sm animate-pulse font-inter">
            <Crown className="inline w-4 h-4 mr-2" />
            Perfection through Experience
          </p>
        </div>
      </div>
    )
  }

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-wow-black via-wow-dark to-wow-black">
      {/* Background Image - WoW Epic Scene */}
      <div className="absolute inset-0">
        <img 
          src="https://files.fivemerr.com/images/6b24c66a-ca5a-471c-931a-2de10e6e9d97.jpg" 
          alt="DM 4 BOOST Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-wow-black via-wow-black/70 to-wow-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-wow-black via-transparent to-wow-black/30" />
        {/* Golden overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-wow-gold/5 via-transparent to-wow-gold/10" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-wow-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-wow-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Main Content */}
      <div ref={heroRef} className="relative z-10 min-h-screen flex items-center">
        <div className="container-gta">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Visual/Logo */}
            <div ref={visualRef} className="relative">
              <div className="relative">
                {/* Main Logo Card */}
                <div className="aspect-square max-w-md mx-auto relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wow-gold/30 to-transparent rounded-2xl blur-2xl" />
                  
                  {/* Logo Container */}
                  <div className="relative bg-gradient-to-br from-wow-dark/90 to-wow-graphite/90 rounded-2xl p-8 border border-wow-gold/30 backdrop-blur-sm overflow-hidden">
                    {/* Corner Decorations */}
                    <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-wow-gold/50 rounded-tl-2xl" />
                    <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-wow-gold/50 rounded-tr-2xl" />
                    <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-wow-gold/50 rounded-bl-2xl" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-wow-gold/50 rounded-br-2xl" />
                    
                    {/* Logo Image */}
                    <div className="flex items-center justify-center h-full">
                      <img 
                        src="https://files.fivemerr.com/images/9f62dc95-2ebd-4ae1-a030-138818c7f72a.png"
                        alt="DM 4 BOOST Logo"
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    {/* Bottom Banner */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-wow-black to-transparent p-6">
                      <h2 className="text-3xl font-bebas text-wow-gold text-center tracking-wider">
                        PREMIUM BOOSTING
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="feature-badge absolute -top-4 -right-4 bg-wow-gold text-wow-black px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  <Crown className="inline w-4 h-4 mr-1" /> VETERAN TEAM
                </div>
                <div className="feature-badge absolute -bottom-4 -left-4 bg-wow-graphite border border-wow-gold/50 text-wow-gold px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  <Shield className="inline w-4 h-4 mr-1" /> 100% SAFE
                </div>
              </div>
            </div>

            {/* Right Side - Info */}
            <div ref={contentRef}>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Swords className="w-8 h-8 text-wow-gold" />
                  <span className="text-wow-gold font-rajdhani text-lg tracking-wider uppercase">World of Warcraft</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bebas text-white mb-2 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-wow-gold via-yellow-300 to-wow-gold">
                    {siteConfig.server.name}
                  </span>
                </h1>
                <p className="text-xl text-wow-gold font-inter font-light italic">
                  {siteConfig.server.tagline}
                </p>
              </div>

              <p className="text-wow-light mb-8 text-lg leading-relaxed">
                {siteConfig.server.description}
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Mistwalker+ Level',
                  'Realm-First Experience',
                  'No Risks',
                  'Fixed Teams'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-wow-gold flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
                <div className="stat-item text-center p-4 bg-wow-graphite/50 rounded-lg border border-wow-gold/20">
                  <p className="stat-value text-wow-gold">500+</p>
                  <p className="stat-label text-xs">Happy Clients</p>
                </div>
                <div className="stat-item text-center p-4 bg-wow-graphite/50 rounded-lg border border-wow-gold/20">
                  <p className="stat-value text-wow-gold">99%</p>
                  <p className="stat-label text-xs">Success Rate</p>
                </div>
                <div className="stat-item text-center p-4 bg-wow-graphite/50 rounded-lg border border-wow-gold/20">
                  <p className="stat-value text-wow-gold">24/7</p>
                  <p className="stat-label text-xs">Support</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href={siteConfig.server.bookingDiscord || siteConfig.server.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wow-gold inline-flex items-center gap-2"
                >
                  <Star className="w-5 h-5" />
                  Book Your Session
                </a>
                <a 
                  href={siteConfig.server.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wow-outline inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                  Join Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <p className="text-wow-light text-sm uppercase tracking-wider font-rajdhani">Discover</p>
          <svg className="w-6 h-6 text-wow-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
