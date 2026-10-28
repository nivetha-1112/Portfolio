import React from 'react'
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Sparkles
} from 'lucide-react'
import { experienceData } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0E1524] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-gray-200 bg-[#162032] border border-[#81D8D0]/40 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#81D8D0]" />
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-3 text-base text-gray-400 max-w-2xl mx-auto">
            Hands-on track record building enterprise admin panels, production MERN workflows, and user-centric web applications.
          </p>
          <div className="w-16 h-1 bg-[#81D8D0] mx-auto mt-4 rounded-full shadow-[0_0_8px_#81D8D0]" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#81D8D0] via-[#57beb4]/50 to-transparent" />

          <div className="space-y-12">
            {experienceData.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-start md:gap-8 group"
              >
                {/* Node on Timeline */}
                <div className="hidden md:flex flex-col items-center z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#111827] border-2 border-[#81D8D0] flex items-center justify-center text-[#81D8D0] shadow-xl group-hover:bg-[#81D8D0] group-hover:text-[#0B0F17] group-hover:scale-110 transition-all duration-300">
                    <Building2 className="w-7 h-7" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 w-full bg-[#111827] rounded-3xl p-6 sm:p-8 border border-gray-800 hover:border-[#81D8D0]/60 shadow-xl transition-all duration-300">
                  {/* Header Row: Role, Company, Period */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-gray-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#81D8D0]/20 text-[#81D8D0]">
                          {item.type}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                          {item.role}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-gray-400 mt-1">
                        Full Stack Web & Admin Panel Development
                      </p>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-medium text-gray-400">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#162032] text-gray-300 border border-[#81D8D0]/20">
                        <Calendar className="w-3.5 h-3.5 text-[#81D8D0]" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-sm sm:text-base text-gray-300 my-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2.5 my-5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#81D8D0]" />
                      Key Contributions & Impact
                    </h4>
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#81D8D0] shrink-0 mt-1" />
                        <span className="text-sm text-gray-300 leading-relaxed">
                          {ach}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Badges */}
                  <div className="pt-4 border-t border-gray-800 flex flex-wrap gap-2">
                    {item.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-[#162032] text-[#81D8D0] border border-[#81D8D0]/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
