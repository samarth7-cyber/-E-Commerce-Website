import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { products, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const { category } = useParams()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [maxPrice, setMaxPrice] = useState(350)

  const activeCategory = categories.find((c) => c.slug === category)

  const filtered = useMemo(() => {
    let list = products.filter((p) => (category ? p.category === category : true))
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
    }
    list = list.filter((p) => p.price <= maxPrice)

    switch (sort) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating)
      default:
        return [...list].sort((a, b) => Number(b.featured) - Number(a.featured))
    }
  }, [category, query, sort, maxPrice])

  return (
    <div className="container-page py-12">
      <div className="mb-10">
        <p className="eyebrow mb-2">{activeCategory ? activeCategory.name : 'Full Catalog'}</p>
        <h1 className="text-3xl md:text-4xl font-medium">
          {activeCategory ? activeCategory.name : 'All Gear'}
        </h1>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          to="/shop"
          className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
            !category ? 'bg-ink text-bone border-ink' : 'border-ink/15 hover:border-ink/40'
          }`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/shop/${c.slug}`}
            className={`px-3.5 py-1.5 rounded-full text-sm border transition-colors ${
              category === c.slug ? 'bg-ink text-bone border-ink' : 'border-ink/15 hover:border-ink/40'
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      {/* Search + sort bar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-8 pb-6 border-b border-ink/10">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search gear..."
            aria-label="Search products"
            className="w-full bg-transparent border border-ink/15 rounded-sm pl-9 pr-3 py-2.5 text-sm focus:border-moss outline-none"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setFiltersOpen((v) => !v)}
            className="flex items-center gap-2 text-sm font-medium border border-ink/15 rounded-sm px-3.5 py-2.5 hover:border-ink/40 transition-colors"
          >
            <SlidersHorizontal size={15} /> Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
            className="bg-transparent border border-ink/15 rounded-sm px-3 py-2.5 text-sm focus:border-moss outline-none"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      {filtersOpen && (
        <div className="flex items-center gap-4 mb-8 -mt-4 p-4 bg-ink/[0.03] rounded-sm">
          <label htmlFor="max-price" className="text-sm font-medium whitespace-nowrap">
            Max price: <span className="font-mono">${maxPrice}</span>
          </label>
          <input
            id="max-price"
            type="range"
            min="20"
            max="350"
            step="10"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="flex-1 accent-moss"
          />
          <button
            onClick={() => { setMaxPrice(350); setFiltersOpen(false) }}
            className="flex items-center gap-1 text-xs text-ink/50 hover:text-ink"
          >
            <X size={14} /> Reset
          </button>
        </div>
      )}

      {/* Results */}
      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-display text-xl mb-2">No gear matches those filters.</p>
          <p className="text-sm text-ink/50">Try widening your price range or clearing your search.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-ink/50 mb-6 font-mono">{filtered.length} item{filtered.length === 1 ? '' : 's'}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
