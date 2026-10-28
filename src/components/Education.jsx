import React from 'react'
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  FileBadge
} from 'lucide-react'
import { educationData, certificationsData } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#080B11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#111928] border border-[#81D8D0]/40 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#81D8D0]" />
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-3 text-base text-gray-300 max-w-2xl mx-auto">
            Academic foundation paired with continuous specialized training in modern full-stack development.
          </p>
          <div className="w-16 h-1 bg-[#81D8D0] mx-auto mt-4 rounded-full shadow-[0_0_8px_#81D8D0]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Formal Degree */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#81D8D0]" />
              Formal Education
            </h3>

            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-[#141C2E] to-[#0D1424] rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-[#81D8D0]/60 shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-white">
                      {edu.degree}
                    </h4>
                    {edu.institution && (
                      <p className="text-sm font-semibold text-gray-300 mt-1">
                        {edu.institution}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-gray-300 gap-1.5">
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1A253C] text-gray-200 border border-[#81D8D0]/30 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#81D8D0]" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 mt-0.5 text-gray-400">
                      <MapPin className="w-3.5 h-3.5 text-[#81D8D0]" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {edu.description}
                </p>

                {/* Coursework (if available) */}
                {edu.courses && edu.courses.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-[#81D8D0]" />
                      Key Coursework
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-[#1A253C] text-gray-200 border border-[#81D8D0]/20"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Professional Certifications */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-[#81D8D0]" />
              Industry Certifications
            </h3>

            <div className="space-y-4">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-gradient-to-b from-[#141C2E] to-[#0D1424] border border-white/10 hover:border-[#81D8D0]/60 shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-[#1A253C] flex items-center justify-center text-[#81D8D0] border border-[#81D8D0]/20">
                        <FileBadge className="w-5 h-5 text-[#81D8D0]" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {cert.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-gray-400 mb-2.5">
                    Issuer: <span className="text-gray-200 font-semibold">{cert.issuer}</span>
                  </p>

                  <div className="text-xs text-gray-300 bg-[#080B11] p-3 rounded-xl border border-white/10">
                    <span className="font-semibold text-[#81D8D0]">Focus: </span>
                    {cert.skills}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
