import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Minus, Plus, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import StarRating from '../components/StarRating.jsx'
import ProductCard from '../components/ProductCard.jsx'
import Toast from '../components/Toast.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [color, setColor] = useState(product?.colors?.[0])
  const [quantity, setQuantity] = useState(1)
  const [showToast, setShowToast] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product)

  function handleAddToCart() {
    addItem(product, color, quantity)
    setShowToast(true)
  }

  return (
    <div className="container-page py-10 md:py-14">
      <nav className="text-xs text-ink/50 mb-8 font-mono">
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        {' / '}
        <Link to={`/shop/${product.category}`} className="hover:text-ink capitalize">{product.category}</Link>
        {' / '}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        {/* Gallery */}
        <div>
          <div className="aspect-[4/5] bg-ink/5 rounded-sm overflow-hidden mb-3">
            <img src={product.gallery[activeImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.gallery.length > 1 && (
            <div className="flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 aspect-[4/5] rounded-sm overflow-hidden border-2 transition-colors ${
                    i === activeImage ? 'border-moss' : 'border-transparent'
                  }`}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <p className="eyebrow mb-2">{product.category}</p>
          <h1 className="font-display text-3xl md:text-4xl font-medium leading-tight">{product.name}</h1>
          <div className="mt-3">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size={16} />
          </div>
          <p className="font-mono text-2xl mt-5">${product.price}</p>

          <p className="text-ink/70 leading-relaxed mt-6">{product.description}</p>

          {/* Color select */}
          <div className="mt-8">
            <p className="text-sm font-medium mb-2.5">Color: <span className="text-ink/60 font-normal">{color}</span></p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`px-3.5 py-2 text-sm rounded-sm border transition-colors ${
                    color === c ? 'border-ink bg-ink text-bone' : 'border-ink/20 hover:border-ink/50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + add to cart */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex items-center border border-ink/20 rounded-sm">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-11 flex items-center justify-center hover:bg-ink/5"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 text-center font-mono text-sm" aria-live="polite">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="w-10 h-11 flex items-center justify-center hover:bg-ink/5"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <button onClick={handleAddToCart} className="btn-primary flex-1">
              Add to Cart
            </button>
          </div>
          <p className="text-xs text-ink/45 mt-2 font-mono">{product.stock} in stock</p>

          {/* Specs */}
          <div className="mt-10 pt-8 border-t border-ink/10">
            <h2 className="text-sm font-semibold mb-4">Specifications</h2>
            <dl className="grid grid-cols-2 gap-y-3 text-sm">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="contents">
                  <dt className="text-ink/50">{key}</dt>
                  <dd className="font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-ink/10 text-center">
            <div className="flex flex-col items-center gap-2">
              <Truck size={20} className="text-moss-dark" />
              <span className="text-xs text-ink/60">Free shipping over $75</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RotateCcw size={20} className="text-moss-dark" />
              <span className="text-xs text-ink/60">60-day returns</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ShieldCheck size={20} className="text-moss-dark" />
              <span className="text-xs text-ink/60">Lifetime repairs</span>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-medium mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {showToast && (
        <Toast message={`${product.name} added to cart`} onDismiss={() => setShowToast(false)} />
      )}
    </div>
  )
}
