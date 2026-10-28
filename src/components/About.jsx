import React from 'react'
import {
  ShieldCheck,
  Server,
  Layout,
  Database,
  CheckCircle2,
  Code2,
  MapPin,
  Calendar,
  Layers
} from 'lucide-react'
import { personalInfo, aboutData } from '../data/portfolioData'

export default function About() {
  const iconMap = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#81D8D0]" />,
    Server: <Server className="w-6 h-6 text-[#81D8D0]" />,
    Layout: <Layout className="w-6 h-6 text-[#81D8D0]" />,
    Database: <Database className="w-6 h-6 text-[#81D8D0]" />
  }

  const focusPoints = [
    { label: 'Role', value: 'MERN Stack Developer', sub: 'Full Stack Developer', icon: <Code2 className="w-5 h-5 text-[#81D8D0]" /> },
    { label: 'Experience', value: '1 Year', sub: 'MERN & Full Stack', icon: <Calendar className="w-5 h-5 text-[#81D8D0]" /> },
    { label: 'Specialization', value: 'Admin Panels & Web Apps', sub: 'Responsive & API-Driven', icon: <Layers className="w-5 h-5 text-[#81D8D0]" /> },
    { label: 'Location', value: 'Chennai, India', sub: 'Tamil Nadu', icon: <MapPin className="w-5 h-5 text-[#81D8D0]" /> }
  ]

  return (
    <section id="about" className="py-24 bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#162032] border border-[#81D8D0]/40 mb-3">
            <Code2 className="w-3.5 h-3.5 text-[#81D8D0]" />
            About S. Nivetha
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            MERN Stack Developer | Full Stack Developer
          </h2>
          <div className="w-16 h-1 bg-[#81D8D0] mx-auto mt-4 rounded-full shadow-[0_0_8px_#81D8D0]" />
        </div>

        {/* Story & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Building responsive, API-driven web applications and admin panels with clean UI, reusable components, and reliable backend integration.
            </h3>
            {aboutData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-gray-300 text-base leading-relaxed">
                {p}
              </p>
            ))}

            <div className="pt-2 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#162032] text-gray-200 border border-[#81D8D0]/30">
                <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                Responsive Web Apps
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#162032] text-gray-200 border border-[#81D8D0]/30">
                <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                Admin Panels
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#162032] text-gray-200 border border-[#81D8D0]/30">
                <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                Clean UI & Reusable Components
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#162032] text-gray-200 border border-[#81D8D0]/30">
                <CheckCircle2 className="w-4 h-4 text-[#81D8D0]" />
                Reliable Backend Integration
              </span>
            </div>
          </div>

          {/* Clean Focus Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {focusPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-gradient-to-b from-[#141C2E] to-[#0D1424] border border-white/10 hover:border-[#81D8D0]/60 shadow-lg transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-[#1A253C] flex items-center justify-center mb-2.5">
                  {item.icon}
                </div>
                <p className="text-xs text-gray-400 font-semibold">{item.label}</p>
                <p className="text-base font-extrabold text-white mt-0.5">{item.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutData.highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#141C2E] to-[#0D1424] border border-white/10 hover:border-[#81D8D0]/60 shadow-lg hover:shadow-[0_10px_30px_rgba(129,216,208,0.12)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1A253C] flex items-center justify-center mb-4">
                {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-[#81D8D0]" />}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
