import React, { useEffect } from 'react'
import { X, CheckCircle2, CircleDot, Layers, Briefcase, Code2 } from 'lucide-react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('modal-open')
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('modal-open')
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="tunis-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="tunis-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        spellCheck="false"
      >
        {/* Modal Header */}
        <div className="tunis-modal-header">
          <div className="min-w-0 pr-4">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-[var(--accent-color)] border border-[var(--accent-color)]/30 bg-[var(--accent-color)]/10">
                {project.company || 'OCEAN SOFTWARES'}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.badge || 'Live System'}
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {project.shortTitle || project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#1A2333] border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0 shadow-md"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body with Generous Spacing */}
        <div className="tunis-modal-body space-y-8">
          {/* Screenshot Presentation Banner (Clean showcase, no live links) */}
          {project.image && (
            <div className="w-full rounded-2xl overflow-hidden bg-white/95 border border-white/10 p-2 shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[360px] object-cover object-top rounded-xl"
              />
            </div>
          )}

          {/* Section: Project Architecture & Impact */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-[var(--accent-color)] rounded-full" />
              <h4 className="text-xs font-black uppercase tracking-widest text-white">
                PROJECT ARCHITECTURE & IMPACT
              </h4>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed pl-4 border-l border-white/10">
              {project.fullDescription || project.shortDescription}
            </p>
          </div>

          {/* Bento Box: Engineering Roles & Technology Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 shadow-lg">
            {/* Left: Engineering Roles */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[var(--accent-color)]" />
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  ENGINEERING ROLES
                </h5>
              </div>
              <div className="space-y-2.5">
                {(project.roles || [
                  'Frontend Development',
                  'Backend API Integration',
                  'Database Architecture',
                  'RESTful CRUD Operations'
                ]).map((role, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-200 leading-snug">
                    <CircleDot className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-0.5" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technology Stack */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[var(--accent-color)]" />
                <h5 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                  TECHNOLOGY STACK
                </h5>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-[#162032] text-gray-200 border border-white/10 flex items-center gap-2 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Section: Core Deliverables & Features */}
          {project.features && project.features.length > 0 && (
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 space-y-4 shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-4 bg-[var(--accent-color)] rounded-full" />
                <h4 className="text-xs font-black uppercase tracking-widest text-white">
                  KEY ENGINEERED FEATURES & DELIVERABLES
                </h4>
              </div>
              <div className="space-y-3 pl-2">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-color)] flex-shrink-0 mt-1" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Project Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-400">Domain / Type:</span>
              <span className="px-3 py-1 rounded-full bg-[#162032] text-[var(--accent-color)] border border-white/10 font-bold">
                {project.category}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <span className="font-semibold">Developed at:</span>
              <span className="text-white font-bold">{project.company || 'Ocean Softwares'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
