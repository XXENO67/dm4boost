import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '../../lib/gsap-config'
import { Users, Target, Shield, CheckCircle, Award, Zap } from 'lucide-react'
import siteConfig from '../../config/site.config.json'

export const About = () => {
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

    // Animate sections
    const sections = gsap.utils.toArray('.about-section') as HTMLElement[]
    
    sections.forEach((section, index) => {
      gsap.from(section, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    // Animate list items
    const listItems = gsap.utils.toArray('.about-list-item') as HTMLElement[]
    listItems.forEach((item, index) => {
      gsap.from(item, {
        x: -30,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger && containerRef.current?.contains(trigger.trigger as Element)) {
          trigger.kill()
        }
      })
    }
  }, { scope: containerRef })

  const aboutUs = siteConfig.aboutUs || {
    whoWeAre: {
      title: "WHO WE ARE",
      content: "We are a veteran Challenge Mode team, built by players who have mastered high-quality PvE/PvP content since the earliest competitive seasons."
    },
    ourTeam: {
      title: "OUR TEAM",
      points: [
        "A fixed roster of experienced CM specialists",
        "Players with Platinum / Gold / Rank 1 history",
        "Route planners, pull optimizers and cooldown specialists",
        "Private, organized and consistent teams — no fillers"
      ],
      footer: "Every service is handled internally by the same trusted core."
    },
    whatMakesUsDifferent: {
      title: "WHAT MAKES US DIFFERENT",
      points: [
        "Mistwalker+ level routing & execution",
        "Clean pulls, controlled pace, no panic gameplay",
        "Full knowledge of skips, timings and recovery scenarios",
        "Smooth communication from booking → completion"
      ],
      footer: "Our goal is not just completion — it's perfection with safety."
    }
  }

  return (
    <section ref={containerRef} id="about" className="relative py-20 bg-gradient-to-b from-wow-black via-wow-dark to-wow-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-wow-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-wow-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-gta relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-wow-gold" />
            <Award className="w-8 h-8 text-wow-gold" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-wow-gold" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bebas text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-wow-gold via-yellow-300 to-wow-gold">
              About Us
            </span>
          </h2>
          <p className="text-xl text-wow-light max-w-2xl mx-auto">
            Learn more about the team behind DM 4 BOOST
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Who We Are */}
          <div className="about-section">
            <div className="card-gta p-8 md:p-12">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 hidden md:block">
                  <div className="w-16 h-16 bg-wow-gold/10 rounded-lg flex items-center justify-center border border-wow-gold/30">
                    <Users className="w-8 h-8 text-wow-gold" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bebas text-wow-gold mb-4 flex items-center gap-3">
                    <Users className="w-6 h-6 md:hidden" />
                    {aboutUs.whoWeAre.title}
                  </h3>
                  <p className="text-wow-light text-lg leading-relaxed">
                    {aboutUs.whoWeAre.content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Our Team */}
            <div className="about-section">
              <div className="card-gta p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-wow-gold/10 rounded-lg flex items-center justify-center border border-wow-gold/30">
                    <Target className="w-6 h-6 text-wow-gold" />
                  </div>
                  <h3 className="text-2xl font-bebas text-wow-gold">
                    {aboutUs.ourTeam.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {aboutUs.ourTeam.points.map((point, index) => (
                    <li key={index} className="about-list-item flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-wow-gold flex-shrink-0 mt-0.5" />
                      <span className="text-wow-light">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-wow-gold/20">
                  <p className="text-wow-gold/80 text-sm italic">
                    {aboutUs.ourTeam.footer}
                  </p>
                </div>
              </div>
            </div>

            {/* What Makes Us Different */}
            <div className="about-section">
              <div className="card-gta p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-wow-gold/10 rounded-lg flex items-center justify-center border border-wow-gold/30">
                    <Zap className="w-6 h-6 text-wow-gold" />
                  </div>
                  <h3 className="text-2xl font-bebas text-wow-gold">
                    {aboutUs.whatMakesUsDifferent.title}
                  </h3>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {aboutUs.whatMakesUsDifferent.points.map((point, index) => (
                    <li key={index} className="about-list-item flex items-start gap-3">
                      <Shield className="w-5 h-5 text-wow-gold flex-shrink-0 mt-0.5" />
                      <span className="text-wow-light">{point}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-wow-gold/20">
                  <p className="text-wow-gold/80 text-sm italic">
                    {aboutUs.whatMakesUsDifferent.footer}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="about-section text-center">
            <div className="card-gta p-8 md:p-12 bg-gradient-to-br from-wow-graphite to-wow-dark border-wow-gold/30">
              <Award className="w-16 h-16 text-wow-gold mx-auto mb-6" />
              <blockquote className="text-2xl md:text-3xl font-bebas text-white mb-4">
                "Our goal is not just completion —
                <span className="text-wow-gold"> it's perfection with safety.</span>"
              </blockquote>
              <p className="text-wow-light">
                — The DM 4 BOOST Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
