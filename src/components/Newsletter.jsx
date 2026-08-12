import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    // Mock submission — no backend wired up in this portfolio project.
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <h4 className="eyebrow text-amber mb-2">Trail Notes</h4>
        <p className="font-display text-2xl text-bone max-w-md">
          Route reports, new gear, and the occasional discount — once or twice a month.
        </p>
      </div>

      {submitted ? (
        <p className="flex items-center gap-2 text-sm text-amber font-medium">
          <Check size={16} /> You're on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full md:w-auto max-w-sm">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@trailmail.com"
            className="flex-1 bg-transparent border border-bone/25 rounded-l-sm px-4 py-3 text-sm text-bone placeholder:text-bone/40 focus:border-amber outline-none"
          />
          <button
            type="submit"
            className="flex items-center justify-center px-4 bg-amber text-ink rounded-r-sm hover:bg-amber-dark transition-colors"
            aria-label="Subscribe"
          >
            <ArrowRight size={18} />
          </button>
        </form>
      )}
    </div>
  )
}
