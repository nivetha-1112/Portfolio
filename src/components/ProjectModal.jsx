import React, { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Layers } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#111827] text-white rounded-3xl shadow-2xl border border-[#81D8D0]/40 overflow-hidden flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        spellCheck="false"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-[#0E1524] border-b border-gray-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#81D8D0] text-[#0B0F17]">
                {project.category}
              </span>
              <span className="text-xs font-medium text-gray-400">
                {project.badge}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              System Overview & Architecture
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Focus Bar */}
          <div className="p-4 rounded-2xl bg-[#0B0F17] border border-[#81D8D0]/30 flex items-center gap-3">
            <Layers className="w-5 h-5 text-[#81D8D0] shrink-0" />
            <span className="text-sm font-bold text-gray-200">Responsive Design • Reusable Components • Backend Integration</span>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Engineered Features
            </h4>
            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#81D8D0] shrink-0 mt-1" />
                  <span className="text-sm text-gray-300 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-[#162032] text-[#81D8D0] border border-[#81D8D0]/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0E1524] border-t border-gray-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 bg-[#111827] hover:bg-[#162032] border border-gray-700 hover:border-[#81D8D0] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
