import React, { useEffect } from 'react'
import {
  X,
  Printer,
  Download,
  FileText,
  Mail,
  MapPin
} from 'lucide-react'
import {
  personalInfo,
  experienceData,
  projectsData,
  educationData,
  certificationsData
} from '../data/portfolioData'

export default function ResumeModal({ onClose, onShowToast }) {
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

  const handlePrint = () => {
    window.print()
  }

  const handleDownloadText = () => {
    const resumeText = `=====================================================
${personalInfo.name.toUpperCase()}
${personalInfo.title}
=====================================================
Location: ${personalInfo.location}
Email: ${personalInfo.email}
GitHub: ${personalInfo.github}
LinkedIn: ${personalInfo.linkedin}

PROFESSIONAL SUMMARY
--------------------
${personalInfo.shortBio}
MERN Stack Developer with nearly one year of experience building responsive,
API-driven web applications and admin panels using React, Node, Express, MongoDB, MySQL, and Tailwind CSS.

TECHNICAL SKILLS
----------------
- Frontend: React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5 & CSS3
- Backend: Node.js, Express.js, RESTful APIs, PHP
- Databases: MongoDB, MySQL, SQL
- Tools: Git & GitHub, Postman, Vite, VS Code

PROFESSIONAL EXPERIENCE
-----------------------
${experienceData
  .map(
    (exp) => `* ${exp.role} (${exp.period})
  Company: ${exp.company}
  Location: ${exp.location}
  ${exp.achievements.map((a) => `  - ${a}`).join('\n')}`
  )
  .join('\n\n')}

FEATURED PROJECTS
-----------------
${projectsData
  .map(
    (p) => `* ${p.title} (${p.category})
  Tech Stack: ${p.techStack.join(', ')}
  Description: ${p.shortDescription}
  Key Features:
  ${p.features.map((f) => `  - ${f}`).join('\n')}`
  )
  .join('\n\n')}

EDUCATION
---------
${educationData
  .map(
    (edu) => `* ${edu.degree}
  ${edu.institution} - ${edu.location} (${edu.period})`
  )
  .join('\n\n')}

CERTIFICATIONS
--------------
${certificationsData
  .map((c) => `* ${c.name} - ${c.issuer}\n  Skills: ${c.skills}`)
  .join('\n')}
=====================================================
`
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `S_Nivetha_MERN_Developer_Resume.txt`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
    onShowToast?.('Resume file downloaded successfully!', 'success')
  }

  return (
    <div className="tunis-modal-backdrop animate-in fade-in duration-200" onClick={onClose}>
      <div
        className="tunis-modal-dialog large"
        onClick={(e) => e.stopPropagation()}
        spellCheck="false"
      >
        {/* Top Control Bar (Hidden when printing) */}
        <div className="tunis-modal-header print:hidden flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[var(--accent-color)]" />
            <span className="font-extrabold text-white text-sm sm:text-base">
              Resume Preview — S. Nivetha
            </span>
            <span className="hidden md:inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#162032] text-[var(--accent-color)] border border-white/10">
              Nearly 1 Year Hands-on
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Nivetha_S_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-gray-200 bg-[#162032] hover:bg-[#1f2d45] border border-white/10 shadow-xs cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PDF</span>
            </a>
            <a
              href="/Nivetha_S_Resume.pdf"
              download="Nivetha_S_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0B0F17] bg-[var(--accent-color)] hover:brightness-110 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="tunis-modal-body p-6 sm:p-10 space-y-8 text-gray-200 bg-[#111827] print:bg-white print:text-black print:p-0 print:overflow-visible">
          {/* Header */}
          <div className="border-b-2 border-[var(--accent-color)] pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-[var(--text-primary)] print:text-black tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-base font-bold text-[var(--accent-color)] print:text-teal-700 mt-0.5">
                {personalInfo.title}
              </p>
            </div>
            <div className="text-xs text-[var(--text-muted)] print:text-gray-700 space-y-1 sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                {personalInfo.location}
              </p>
              <p className="flex items-center sm:justify-end gap-1.5 font-medium">
                <Mail className="w-3.5 h-3.5 text-[var(--accent-color)]" />
                {personalInfo.email}
              </p>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-muted)] print:text-gray-600 mb-2 border-b border-[var(--border-color)] print:border-gray-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm text-[var(--text-secondary)] print:text-gray-800 leading-relaxed">
              MERN Stack Developer with nearly one year of hands-on experience building responsive, API-driven web applications and admin panels using React.js, Node.js, Express.js, MongoDB, MySQL, and Tailwind CSS.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-muted)] print:text-gray-600 mb-3 border-b border-[var(--border-color)] print:border-gray-200 pb-1">
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] print:bg-gray-100 border border-[var(--border-color)] print:border-gray-200">
                <span className="font-bold text-[var(--text-primary)] print:text-black">Frontend: </span>
                <span className="text-[var(--text-secondary)] print:text-gray-700">React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, HTML5 & CSS3</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] print:bg-gray-100 border border-[var(--border-color)] print:border-gray-200">
                <span className="font-bold text-[var(--text-primary)] print:text-black">Backend: </span>
                <span className="text-[var(--text-secondary)] print:text-gray-700">Node.js, Express.js, RESTful APIs, PHP</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] print:bg-gray-100 border border-[var(--border-color)] print:border-gray-200">
                <span className="font-bold text-[var(--text-primary)] print:text-black">Database: </span>
                <span className="text-[var(--text-secondary)] print:text-gray-700">MongoDB, MySQL, SQL Relational Schemas</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] print:bg-gray-100 border border-[var(--border-color)] print:border-gray-200">
                <span className="font-bold text-[var(--text-primary)] print:text-black">Tools: </span>
                <span className="text-[var(--text-secondary)] print:text-gray-700">Git & GitHub, Postman, Vite, VS Code</span>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-muted)] print:text-gray-600 mb-4 border-b border-[var(--border-color)] print:border-gray-200 pb-1">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-[var(--text-primary)] print:text-black">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-[var(--accent-color)] font-semibold">{exp.company}</p>
                      <p className="text-xs text-[var(--text-muted)] print:text-gray-600">{exp.location}</p>
                    </div>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[var(--bg-tertiary)] print:bg-gray-200 text-[var(--accent-color)] print:text-black">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[var(--text-secondary)] print:text-gray-700 pl-1 leading-relaxed">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-muted)] print:text-gray-600 mb-4 border-b border-[var(--border-color)] print:border-gray-200 pb-1">
              Key Projects
            </h2>
            <div className="space-y-4 text-xs">
              {projectsData.map((p, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-[var(--border-color)] print:border-gray-200 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[var(--text-primary)] print:text-black text-sm">{p.title}</span>
                    <span className="text-[11px] text-[var(--accent-color)] font-semibold">{p.badge}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] print:text-gray-700">{p.shortDescription}</p>
                  <p className="text-[11px] text-[var(--accent-color)] print:text-teal-700 font-semibold">
                    Tech: {p.techStack.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-muted)] print:text-gray-600 mb-2 border-b border-[var(--border-color)] print:border-gray-200 pb-1">
                Education
              </h2>
              {educationData.map((edu, idx) => (
                <div key={idx} className="text-xs space-y-0.5 mb-2">
                  <p className="font-bold text-[var(--text-primary)] print:text-black">{edu.degree}</p>
                  <p className="text-[var(--text-muted)] print:text-gray-700">
                    {edu.institution ? `${edu.institution} - ` : ''}{edu.location}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-[var(--text-muted)] print:text-gray-600 mb-2 border-b border-[var(--border-color)] print:border-gray-200 pb-1">
                Certifications
              </h2>
              <div className="space-y-1 text-xs text-[var(--text-secondary)] print:text-gray-700">
                {certificationsData.map((c, idx) => (
                  <p key={idx}>
                    • <span className="font-semibold text-[var(--text-primary)] print:text-black">{c.name}</span> ({c.issuer})
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
