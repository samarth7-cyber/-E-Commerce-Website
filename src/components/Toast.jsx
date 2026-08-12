import { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function Toast({ message, onDismiss, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onDismiss, duration)
    return () => clearTimeout(timer)
  }, [onDismiss, duration])

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-ink text-bone px-4 py-3 rounded-sm shadow-lg animate-[fade-in_0.2s_ease-out]"
    >
      <CheckCircle2 size={18} className="text-amber shrink-0" />
      <span className="text-sm">{message}</span>
      <button onClick={onDismiss} aria-label="Dismiss" className="ml-1 text-bone/50 hover:text-bone">
        <X size={16} />
      </button>
    </div>
  )
}
