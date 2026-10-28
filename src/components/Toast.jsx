import React from 'react'
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-[#81D8D0]" />,
    error: <AlertCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-[#81D8D0]" />,
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1F2937] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#81D8D0]/30 animate-in fade-in slide-in-from-bottom-5 duration-300">
      {icons[type] || icons.success}
      <span className="text-sm font-medium pr-2">{message}</span>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-white transition-colors p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}
