import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2, ArrowLeft } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const FREE_SHIPPING_THRESHOLD = 75
const SHIPPING_FLAT_RATE = 8

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()
  const navigate = useNavigate()

  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_RATE
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (items.length === 0) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="font-display text-2xl mb-3">Your cart is empty</h1>
        <p className="text-ink/60 mb-8">Looks like you haven't added any gear yet.</p>
        <Link to="/shop" className="btn-primary inline-flex">
          Browse Gear
        </Link>
      </div>
    )
  }

  return (
    <div className="container-page py-12">
      <Link to="/shop" className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink mb-6">
        <ArrowLeft size={14} /> Continue shopping
      </Link>
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-10">Your Cart</h1>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Line items */}
        <div className="lg:col-span-2 divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item) => (
            <div key={item.lineId} className="flex gap-4 py-5">
              <img src={item.image} alt={item.name} className="w-24 h-28 object-cover rounded-sm bg-ink/5 shrink-0" />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-ink/50 mt-0.5">{item.color}</p>
                  <p className="font-mono text-sm mt-1.5">${item.price}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-ink/20 rounded-sm">
                    <button
                      onClick={() => updateQuantity(item.lineId, item.quantity - 1)}
                      className="w-8 h-9 flex items-center justify-center hover:bg-ink/5"
                      aria-label={`Decrease quantity of ${item.name}`}
                    >
                      <Minus size={13} />
                    </button>
                    <span className="w-8 text-center font-mono text-sm">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.lineId, item.quantity + 1)}
                      className="w-8 h-9 flex items-center justify-center hover:bg-ink/5"
                      aria-label={`Increase quantity of ${item.name}`}
                    >
                      <Plus size={13} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.lineId)}
                    aria-label={`Remove ${item.name} from cart`}
                    className="text-ink/40 hover:text-red-600 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-ink/[0.03] rounded-sm p-6 sticky top-24">
            <h2 className="font-medium mb-5">Order Summary</h2>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-ink/60">Subtotal</span>
                <span className="font-mono">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Shipping</span>
                <span className="font-mono">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-ink/60">Estimated tax</span>
                <span className="font-mono">${tax.toFixed(2)}</span>
              </div>
            </div>
            {subtotal < FREE_SHIPPING_THRESHOLD && (
              <p className="text-xs text-moss-dark mt-4 font-mono">
                Add ${(FREE_SHIPPING_THRESHOLD - subtotal).toFixed(2)} more for free shipping
              </p>
            )}
            <div className="flex justify-between font-medium text-base mt-5 pt-5 border-t border-ink/10">
              <span>Total</span>
              <span className="font-mono">${total.toFixed(2)}</span>
            </div>
            <button onClick={() => navigate('/checkout')} className="btn-primary w-full mt-6">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
