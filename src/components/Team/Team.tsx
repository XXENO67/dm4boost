import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import { Crown } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const Team = () => {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Team cards animation
    const cards = gsap.utils.toArray('.team-card') as Element[]
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        rotateY: -45,
        duration: 0.8,
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })

      const inner = card.querySelector('.card-inner')
      const avatar = card.querySelector('.avatar-container')
      
      card.addEventListener('mouseenter', () => {
        gsap.to(inner, {
          rotateY: 5,
          rotateX: -5,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(avatar, {
          scale: 1.1,
          duration: 0.4,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = (mouseEvent.clientX - rect.left) / rect.width
        const y = (mouseEvent.clientY - rect.top) / rect.height
        
        gsap.to(inner, {
          rotateY: (x - 0.5) * 20,
          rotateX: (0.5 - y) * 20,
          duration: 0.4,
          ease: 'power2.out'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(inner, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.4,
          ease: 'power2.out'
        })
        gsap.to(avatar, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        })
      })
    })

    // Floating animation for decorative elements
    gsap.to('.float-element', {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      stagger: 0.5
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
    <section ref={containerRef} id="team" className="relative py-20 overflow-hidden bg-gradient-to-b from-wow-black to-wow-dark">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-element absolute top-20 left-10 w-20 h-20 bg-wow-gold/10 rounded-full blur-xl" />
        <div className="float-element absolute bottom-20 right-10 w-32 h-32 bg-wow-gold/5 rounded-full blur-xl" />
        <div className="float-element absolute top-1/2 left-1/3 w-24 h-24 bg-wow-gold/10 rounded-full blur-xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-wow-gold" />
            <Crown className="w-8 h-8 text-wow-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-wow-gold" />
          </div>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bebas font-bold mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wow-gold via-yellow-300 to-wow-gold">
              Our Team
            </span>
          </h2>
          <p className="text-xl text-wow-light max-w-2xl mx-auto">
            The Veterans behind DM 4 BOOST
          </p>
        </div>

        {/* Team Grid - Centered for 3 members */}
        <div ref={gridRef} className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {siteConfig.team.map((member) => (
            <div
              key={member.id}
              className="team-card group w-full md:w-[calc(33.333%-2rem)] min-w-[280px]"
              style={{ perspective: '1000px' }}
            >
              <div className="card-inner relative transform-gpu transition-transform duration-300">
                <div className="card-gta h-full text-center relative overflow-hidden py-8">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wow-gold/5 to-wow-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Avatar */}
                  <div className="avatar-container mb-6 relative inline-block">
                    <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-wow-gold to-wow-gold-dark p-[3px] shadow-lg shadow-wow-gold/20">
                      <div className="w-full h-full rounded-full overflow-hidden bg-wow-dark">
                        <img 
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Member info */}
                  <h3 className="text-2xl font-bebas font-semibold mb-1 text-wow-gold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-wow-light/70 mb-4">Owner</p>

                  {/* Discord username */}
                  <div className="flex items-center justify-center gap-2 text-sm text-wow-light/80 bg-wow-dark/50 py-2 px-4 rounded-full mx-auto w-fit">
                    <svg className="w-4 h-4 text-wow-gold" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                    <span className="font-mono">@{member.discord}</span>
                  </div>

                  {/* Hover effect corners */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-wow-gold/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-wow-gold/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-wow-gold/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-wow-gold/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <p className="text-wow-light mb-4">Want to join our team?</p>
            <a 
              href={siteConfig.social.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wow-outline inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Apply on Discord
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
