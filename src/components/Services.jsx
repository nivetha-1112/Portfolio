import React from 'react'
import {
  Code,
  LayoutDashboard,
  Cpu,
  MonitorSmartphone,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import { servicesData } from '../data/portfolioData'

export default function Services() {
  const iconList = [Code, LayoutDashboard, Cpu, MonitorSmartphone]

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="tunis-section relative">
      {/* Tunis Section Title with Watermark */}
      <div className="tunis-section-title-wrap">
        <h2 className="tunis-watermark">SERVICES</h2>
        <h3 className="tunis-title-foreground">
          WHAT I <span>OFFER</span>
        </h3>
      </div>

      <div className="tunis-container">
        {/* Services Bento Grid */}
        <div className="services-bento-grid">
          {servicesData.map((svc, idx) => {
            const IconComp = iconList[idx % iconList.length]
            return (
              <div key={idx} className="service-bento-card">
                <div>
                  {/* Top Bar with Number & Category Tag */}
                  <div className="service-card-topbar">
                    <span className="service-num">{svc.num}</span>
                    <span className="service-category-tag">{svc.category}</span>
                  </div>

                  {/* Header Row with Icon & Title */}
                  <div className="service-header-row">
                    <div className="service-icon-wrapper">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="service-title">{svc.title}</h4>
                  </div>

                  {/* Description */}
                  <p className="service-desc">{svc.description}</p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2 mb-5">
                    {svc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-color)] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="service-tags-wrap">
                    {svc.tech.map((t, tIdx) => (
                      <span key={tIdx} className="service-tech-pill">
                        <span className="pill-check">#</span>
                        <span>{t}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="service-footer-row">
                  <button
                    onClick={scrollToContact}
                    className="service-cta-link"
                    aria-label={`Inquire about ${svc.title}`}
                  >
                    <span>GET IN TOUCH</span>
                    <div className="service-arrow-circle">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
