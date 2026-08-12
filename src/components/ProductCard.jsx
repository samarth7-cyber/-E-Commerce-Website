import { Link } from 'react-router-dom'
import StarRating from './StarRating.jsx'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5 rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
        />
        {product.stock <= 10 && (
          <span className="absolute top-3 left-3 bg-bone/95 text-ink text-[11px] font-mono uppercase tracking-wide px-2 py-1 rounded-sm">
            Low stock
          </span>
        )}
      </div>
      <div className="mt-3 space-y-1">
        <p className="eyebrow">{product.category}</p>
        <h3 className="font-display text-base font-medium leading-snug group-hover:text-moss-dark transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between pt-0.5">
          <StarRating rating={product.rating} />
          <span className="font-mono text-sm">${product.price}</span>
        </div>
      </div>
    </Link>
  )
}
