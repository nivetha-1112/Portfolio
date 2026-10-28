import React, { useState } from 'react'
import {
  Code,
  ExternalLink,
  Layers,
  Sparkles,
  Info
} from 'lucide-react'
import { GithubIcon } from './Icons'
import { projectsData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All', 'Full Stack', 'Admin Panels']

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#162032] border border-[#81D8D0]/40 mb-3 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-[#81D8D0]" />
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Full Stack & MERN Projects
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl mx-auto">
            Responsive web applications and admin panels built with clean UI, reusable components, and reliable backend integration.
          </p>
          <div className="w-16 h-1 bg-[#81D8D0] mx-auto mt-4 rounded-full shadow-[0_0_8px_#81D8D0]" />
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#81D8D0] text-[#0B0F17] shadow-lg shadow-[#81D8D0]/20 -translate-y-0.5'
                    : 'bg-[#111827] text-gray-300 hover:bg-[#162032] border border-gray-800'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-b from-[#141C2E] to-[#0D1424] rounded-3xl border border-white/10 hover:border-[#81D8D0] shadow-xl hover:shadow-[0_15px_35px_rgba(129,216,208,0.15)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-7">
                {/* Header: Badge & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#162032] text-[#81D8D0] border border-[#81D8D0]/30">
                    {project.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {project.badge}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-extrabold text-white group-hover:text-[#81D8D0] transition-colors duration-200 mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-[#162032] text-gray-300 border border-[#81D8D0]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Core Focus */}
                <div className="p-3 rounded-xl bg-[#0B0F17] border border-gray-800 text-xs font-medium text-gray-400 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#81D8D0] shrink-0" />
                  <span>Clean UI • Reusable Components</span>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-7 py-4 bg-[#0E1524] border-t border-gray-800 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-300 hover:text-[#81D8D0] transition-colors cursor-pointer"
                >
                  <Info className="w-4 h-4 text-[#81D8D0]" />
                  <span>Architecture</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#111827] border border-gray-800 hover:border-[#81D8D0] text-gray-300 hover:text-[#81D8D0] transition-all shadow-sm"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#0B0F17] bg-[#81D8D0] hover:bg-[#57beb4] transition-all shadow-sm cursor-pointer"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}
