import React, { useState } from 'react'
import {
  Code2,
  FileCode,
  Palette,
  Boxes,
  Layers,
  Smartphone,
  Cpu,
  Server,
  Network,
  KeyRound,
  Shield,
  Database,
  TableProperties,
  HardDrive,
  GitBranch,
  Send,
  Zap,
  Cloud,
  CheckCircle2,
  TerminalSquare
} from 'lucide-react'
import { skillsData } from '../data/portfolioData'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const iconComponents = {
    Code2: Code2,
    FileCode: FileCode,
    Palette: Palette,
    Boxes: Boxes,
    Layers: Layers,
    Smartphone: Smartphone,
    Cpu: Cpu,
    Server: Server,
    Network: Network,
    KeyRound: KeyRound,
    Shield: Shield,
    Database: Database,
    TableProperties: TableProperties,
    HardDrive: HardDrive,
    GitBranch: GitBranch,
    Send: Send,
    Zap: Zap,
    Cloud: Cloud,
    CheckCircle2: CheckCircle2
  }

  const categories = ['All', 'Frontend', 'Backend', 'Databases', 'Tools']

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData.flatMap((cat) => cat.skills.map((s) => ({ ...s, category: cat.category })))
      : skillsData
          .find((cat) => cat.category === activeCategory)
          ?.skills.map((s) => ({ ...s, category: activeCategory })) || []

  return (
    <section id="skills" className="py-24 bg-[#0B0F17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#162032] border border-[#81D8D0]/40 mb-3 shadow-sm">
            <TerminalSquare className="w-3.5 h-3.5 text-[#81D8D0]" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Modern Tech Stack
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set across the full web development lifecycle, from high-performance React frontends to reliable Node.js and MongoDB backend services.
          </p>
          <div className="w-16 h-1 bg-[#81D8D0] mx-auto mt-4 rounded-full shadow-[0_0_8px_#81D8D0]" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, idx) => {
            const IconComp = iconComponents[skill.icon] || Code2
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-[#141C2E] to-[#0D1424] border border-white/10 hover:border-[#81D8D0] shadow-lg hover:shadow-[0_10px_30px_rgba(129,216,208,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#162032] flex items-center justify-center text-[#81D8D0] group-hover:bg-[#81D8D0] group-hover:text-[#0B0F17] transition-colors duration-200">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full border border-[#81D8D0]/40 bg-[#162032] text-[#81D8D0]">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-4">
                    {skill.category}
                  </span>
                </div>

                {/* Sub-skill Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-800/80">
                  {skill.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#162032] text-gray-300 border border-[#81D8D0]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* MERN Architecture Overview Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-[#111827] border border-gray-800 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-[#81D8D0]/25">
              <span className="text-2xl font-black text-[#81D8D0]">M</span>
              <h4 className="text-base font-bold text-white mt-1">MongoDB</h4>
              <p className="text-xs text-gray-400 mt-1">Document Storage, Schemas, Aggregations</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-[#81D8D0]/25">
              <span className="text-2xl font-black text-[#81D8D0]">E</span>
              <h4 className="text-base font-bold text-white mt-1">Express.js</h4>
              <p className="text-xs text-gray-400 mt-1">REST APIs, Routing, Middleware</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-[#81D8D0]/25">
              <span className="text-2xl font-black text-[#81D8D0]">R</span>
              <h4 className="text-base font-bold text-white mt-1">React.js</h4>
              <p className="text-xs text-gray-400 mt-1">Component Modularity, Hooks, Responsive UI</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0B0F17] border border-[#81D8D0]/25">
              <span className="text-2xl font-black text-[#81D8D0]">N</span>
              <h4 className="text-base font-bold text-white mt-1">Node.js</h4>
              <p className="text-xs text-gray-400 mt-1">Asynchronous Runtime, Server Logic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
