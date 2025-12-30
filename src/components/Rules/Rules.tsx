import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import { AlertTriangle, Shield, BookOpen, ExternalLink } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const Rules = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

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

    // Animate rule cards
    const rules = gsap.utils.toArray('.rule-card') as HTMLElement[]
    
    rules.forEach((rule, index) => {
      gsap.from(rule, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: rule,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      const ruleNumber = rule.querySelector('.rule-number')
      if (ruleNumber) {
        gsap.from(ruleNumber, {
          scale: 0,
          rotation: 180,
          duration: 0.6,
          delay: index * 0.1 + 0.2,
          scrollTrigger: {
            trigger: rule,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
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

  return (
    <section ref={containerRef} id="rules" className="relative py-20 bg-gradient-to-b from-wow-dark via-wow-black to-wow-dark">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container-gta relative z-10">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <Shield className="w-16 h-16 text-wow-gold mx-auto mb-4" />
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wow-gold via-yellow-300 to-wow-gold">
              Rules
            </span>
          </h2>
          <p className="text-xl text-wow-light max-w-2xl mx-auto">
            For safe and professional collaboration
          </p>
        </div>

        {/* Rules Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {siteConfig.rules.map((rule, index) => (
            <div key={rule.id} className="rule-card">
              <div className="card-gta overflow-hidden">
                <div className="flex items-start gap-6">
                  {/* Rule Number */}
                  <div className="rule-number flex-shrink-0">
                    <div className="relative w-20 h-20">
                      <div className="absolute inset-0 bg-gradient-to-br from-wow-gold/20 to-wow-gold/5 rounded-lg" />
                      <div className="absolute inset-0 border border-wow-gold/30 rounded-lg" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-bebas text-wow-gold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rule Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bebas text-white mb-3">
                      {rule.title}
                    </h3>
                    <p className="text-wow-light leading-relaxed mb-4">
                      {rule.description}
                    </p>
                    
                    {/* Warning */}
                    <div className="flex items-center gap-2 text-wow-gold/80 text-sm">
                      <AlertTriangle className="w-4 h-4" />
                      <span className="uppercase tracking-wider">
                        Violations may result in exclusion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Footer Card - Link to Discord */}
          <div className="rule-card">
            <div className="card-gta bg-gradient-to-br from-wow-dark to-wow-graphite text-center p-12 border-wow-gold/30">
              <BookOpen className="w-16 h-16 text-wow-gold mx-auto mb-6" />
              <h3 className="text-3xl font-bebas text-white mb-4">
                Complete Rulebook
              </h3>
              <p className="text-wow-light mb-8 max-w-2xl mx-auto">
                For the complete rulebook and more information, please visit our Discord server. 
                There you will find all details about our services and guidelines.
              </p>
              <a 
                href={siteConfig.social.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wow-gold inline-flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Read Full Rules on Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
