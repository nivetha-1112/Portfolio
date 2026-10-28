import React from 'react'
import {
  Briefcase,
  GraduationCap,
  MapPin,
  Calendar,
  CheckCircle2,
  Award
} from 'lucide-react'
import { experienceData, educationData, certificationsData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="tunis-section relative">
      {/* Tunis Section Title with Watermark */}
      <div className="tunis-section-title-wrap">
        <h2 className="tunis-watermark">RESUME</h2>
        <h3 className="tunis-title-foreground">
          EXPERIENCE & <span>EDUCATION</span>
        </h3>
      </div>

      <div className="tunis-container">
        <div className="tunis-resume-grid">
          {/* Left Column: Experience Timeline */}
          <div className="resume-column">
            <div className="resume-col-header">
              <div className="resume-col-icon">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="resume-col-title">EXPERIENCE</h4>
            </div>

            <div className="tunis-timeline-list">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="tunis-timeline-card resume-exp-card">
                  <div>
                    <div className="timeline-card-header mb-4">
                      <span className="tunis-date-badge current">
                        {exp.period}
                      </span>
                      <span className="tunis-item-location">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                        {exp.location}
                      </span>
                    </div>

                    <h5 className="tunis-item-title mt-2 mb-3">{exp.role}</h5>
                    <div className="tunis-item-company mb-4">
                      <Briefcase className="w-4 h-4 text-[var(--accent-color)]" />
                      <span>{exp.company}</span>
                    </div>

                    <ul className="tunis-item-desc space-y-2.5 mb-5">
                      {exp.achievements.map((point, pIdx) => (
                        <li key={pIdx}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  {exp.tech && exp.tech.filter(Boolean).length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border-color)]">
                      {exp.tech.filter(Boolean).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications Timeline */}
          <div className="resume-column">
            <div className="resume-col-header">
              <div className="resume-col-icon">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="resume-col-title">EDUCATION & TRAINING</h4>
            </div>

            <div className="tunis-timeline-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="tunis-timeline-card resume-edu-card">
                  <div>
                    <div className="timeline-card-header">
                      <span className="tunis-date-badge">
                        {edu.period}
                      </span>
                      <span className="tunis-item-location">
                        <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                        {edu.location}
                      </span>
                    </div>

                    <h5 className="tunis-item-title">{edu.degree}</h5>
                    <div className="tunis-item-company">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>{edu.institution}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Certification Card */}
              {certificationsData.map((cert, idx) => (
                <div key={`cert-${idx}`} className="tunis-timeline-card resume-edu-card">
                  <div>
                    <div className="timeline-card-header">
                      <span className="tunis-date-badge">
                        {cert.period || '2025'}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent-color)]">
                        Certification
                      </span>
                    </div>

                    <h5 className="tunis-item-title">{cert.name}</h5>
                    <div className="tunis-item-company">
                      <Award className="w-3.5 h-3.5" />
                      <span>Issued by {cert.issuer}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mt-2">
                    Comprehensive training in: <span className="font-semibold text-[var(--text-primary)]">{cert.skills}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
