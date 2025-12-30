import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import * as Icons from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const Features = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    })

    // Cards animation
    const cards = gsap.utils.toArray('.feature-card') as Element[]
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      })
      
      const icon = card.querySelector('.feature-icon')
      if (icon) {
        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
        
        card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          })
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && containerRef.current?.contains(trigger.trigger as Element)) {
          trigger.kill()
        }
      })
    }
  }, { scope: containerRef })

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as React.FC<{ size?: number }>
    return Icon ? <Icon size={28} /> : <Icons.Box size={28} />
  }

  return (
    <section ref={containerRef} id="features" className="section-padding bg-gradient-to-b from-wow-black via-wow-dark to-wow-black relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-wow-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-wow-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-gta relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-wow-gold" />
            <Icons.Sparkles className="w-6 h-6 text-wow-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-wow-gold" />
          </div>
          <h2 
            ref={titleRef}
            className="text-5xl md:text-7xl font-bebas text-white mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wow-gold via-yellow-300 to-wow-gold">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-wow-light max-w-2xl mx-auto">
            Professional WoW Boosting by experienced veterans
          </p>
        </div>

        {/* Features Grid */}
        <div ref={cardsRef} className="grid-gta">
          {siteConfig.features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card card-gta group relative"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-wow-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <div className="feature-icon">
                    {getIcon(feature.icon)}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bebas text-white mb-2 group-hover:text-wow-gold transition-colors">
                  {feature.title}
                </h3>
                <p className="text-wow-light">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-wow-gold/10 rotate-45 transform translate-x-12 -translate-y-12 group-hover:bg-wow-gold/20 transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-wow-graphite/50 rounded-lg border border-wow-gold/20">
            <Icons.Crown className="w-12 h-12 text-wow-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bebas text-white mb-2">Ready for your Boost?</h3>
            <p className="text-wow-light mb-6">Contact us today for a custom quote</p>
            <a 
              href={siteConfig.server.bookingDiscord || siteConfig.server.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wow-gold inline-flex items-center gap-2"
            >
              <Icons.MessageCircle className="w-5 h-5" />
              Book Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
