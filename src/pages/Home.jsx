import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedProducts, categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  const featured = getFeaturedProducts()

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <div className="absolute inset-0 bg-contour bg-repeat opacity-40" style={{ backgroundSize: '400px' }} aria-hidden="true" />
        <div className="container-page relative py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="eyebrow text-amber mb-5">Spring 2026 Collection</p>
            <h1 className="font-display text-5xl md:text-6xl font-medium leading-[1.05] tracking-tight">
              Gear for the
              <br />
              way there.
            </h1>
            <p className="mt-6 text-bone/70 text-lg max-w-md leading-relaxed">
              Packs, shelter, and layers built by people who put them through real
              mileage first — 1,000 trail miles before a single unit ships.
            </p>
            <div className="flex flex-wrap gap-4 mt-9">
              <Link to="/shop" className="btn-amber">
                Shop All Gear <ArrowRight size={16} />
              </Link>
              <Link to="/shop/packs" className="inline-flex items-center gap-2 text-sm font-medium border-b border-bone/30 hover:border-amber hover:text-amber transition-colors pb-0.5">
                Explore Packs
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000&q=80"
              alt="Trekking poles resting against a pack at a mountain overlook"
              className="rounded-sm w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="container-page py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-medium">Shop by Category</h2>
          <Link to="/shop" className="text-sm font-medium text-moss-dark hover:text-amber-dark transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to={`/shop/${c.slug}`}
              className="group flex flex-col items-start gap-3 p-5 border border-ink/10 rounded-sm hover:border-moss hover:bg-moss/5 transition-colors"
            >
              <span className="blaze eyebrow">{c.name}</span>
              <span className="text-sm text-ink/50 group-hover:text-moss-dark transition-colors flex items-center gap-1">
                Browse <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="container-page py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl font-medium">Field-Tested Favorites</h2>
          <Link to="/shop" className="text-sm font-medium text-moss-dark hover:text-amber-dark transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="bg-moss/8 border-y border-moss/15">
        <div className="container-page py-14 grid sm:grid-cols-3 gap-8">
          <div>
            <p className="eyebrow mb-2">01 — Tested First</p>
            <p className="text-sm text-ink/70 leading-relaxed">Every product logs real trail miles before it's listed. No lab-only gear.</p>
          </div>
          <div>
            <p className="eyebrow mb-2">02 — Repair, Not Replace</p>
            <p className="text-sm text-ink/70 leading-relaxed">Free repairs for the life of the product. We'd rather patch it than sell you a new one.</p>
          </div>
          <div>
            <p className="eyebrow mb-2">03 — Shipped Carbon-Neutral</p>
            <p className="text-sm text-ink/70 leading-relaxed">Every order offsets its shipping footprint automatically, at no extra cost to you.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
