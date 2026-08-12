import { Star } from 'lucide-react'

export default function StarRating({ rating, reviewCount, size = 14 }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            size={size}
            strokeWidth={1.5}
            className={n <= Math.round(rating) ? 'fill-amber text-amber' : 'fill-transparent text-ink/25'}
          />
        ))}
      </div>
      <span className="sr-only">{rating} out of 5 stars</span>
      <span className="text-xs text-ink/50 font-mono">
        {rating.toFixed(1)}{reviewCount != null && ` (${reviewCount})`}
      </span>
    </div>
  )
}
