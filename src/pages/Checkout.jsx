import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { Lock } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const FREE_SHIPPING_THRESHOLD = 75
const SHIPPING_FLAT_RATE = 8

const initialForm = {
  email: '',
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  cardNumber: '',
  expiry: '',
  cvc: '',
}

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  if (items.length === 0) {
    return <Navigate to="/shop" replace />
  }

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FLAT_RATE
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validate() {
    const next = {}
    if (!form.email.includes('@')) next.email = 'Enter a valid email address.'
    if (!form.fullName.trim()) next.fullName = 'Full name is required.'
    if (!form.address.trim()) next.address = 'Address is required.'
    if (!form.city.trim()) next.city = 'City is required.'
    if (!form.postalCode.trim()) next.postalCode = 'Postal code is required.'
    if (!form.country.trim()) next.country = 'Country is required.'
    if (!/^\d{13,19}$/.test(form.cardNumber.replace(/\s/g, ''))) next.cardNumber = 'Enter a valid card number.'
    if (!/^\d{2}\/\d{2}$/.test(form.expiry)) next.expiry = 'Use MM/YY format.'
    if (!/^\d{3,4}$/.test(form.cvc)) next.cvc = 'Enter a valid CVC.'
    return next
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // This is a portfolio project — no real payment is processed.
    setSubmitting(true)
    setTimeout(() => {
      clearCart()
      navigate('/order-confirmation')
    }, 800)
  }

  const inputClass = (field) =>
    `w-full bg-transparent border rounded-sm px-3.5 py-2.5 text-sm outline-none transition-colors ${
      errors[field] ? 'border-red-500' : 'border-ink/15 focus:border-moss'
    }`

  return (
    <div className="container-page py-12">
      <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">Checkout</h1>
      <p className="text-sm text-ink/50 mb-10 flex items-center gap-1.5">
        <Lock size={13} /> This is a demo checkout — no payment is actually processed.
      </p>

      <div className="grid lg:grid-cols-3 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8" noValidate>
          <fieldset>
            <legend className="font-medium mb-4">Contact</legend>
            <label htmlFor="email" className="block text-sm mb-1.5">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass('email')} />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </fieldset>

          <fieldset>
            <legend className="font-medium mb-4">Shipping Address</legend>
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm mb-1.5">Full name</label>
                <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} className={inputClass('fullName')} />
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm mb-1.5">Address</label>
                <input id="address" name="address" value={form.address} onChange={handleChange} className={inputClass('address')} />
                {errors.address && <p className="text-xs text-red-600 mt-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm mb-1.5">City</label>
                  <input id="city" name="city" value={form.city} onChange={handleChange} className={inputClass('city')} />
                  {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                </div>
                <div>
                  <label htmlFor="postalCode" className="block text-sm mb-1.5">Postal code</label>
                  <input id="postalCode" name="postalCode" value={form.postalCode} onChange={handleChange} className={inputClass('postalCode')} />
                  {errors.postalCode && <p className="text-xs text-red-600 mt-1">{errors.postalCode}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm mb-1.5">Country</label>
                <input id="country" name="country" value={form.country} onChange={handleChange} className={inputClass('country')} />
                {errors.country && <p className="text-xs text-red-600 mt-1">{errors.country}</p>}
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend className="font-medium mb-4">Payment</legend>
            <div className="space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm mb-1.5">Card number</label>
                <input id="cardNumber" name="cardNumber" placeholder="4242 4242 4242 4242" value={form.cardNumber} onChange={handleChange} className={inputClass('cardNumber')} />
                {errors.cardNumber && <p className="text-xs text-red-600 mt-1">{errors.cardNumber}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="expiry" className="block text-sm mb-1.5">Expiry (MM/YY)</label>
                  <input id="expiry" name="expiry" placeholder="08/29" value={form.expiry} onChange={handleChange} className={inputClass('expiry')} />
                  {errors.expiry && <p className="text-xs text-red-600 mt-1">{errors.expiry}</p>}
                </div>
                <div>
                  <label htmlFor="cvc" className="block text-sm mb-1.5">CVC</label>
                  <input id="cvc" name="cvc" placeholder="123" value={form.cvc} onChange={handleChange} className={inputClass('cvc')} />
                  {errors.cvc && <p className="text-xs text-red-600 mt-1">{errors.cvc}</p>}
                </div>
              </div>
            </div>
          </fieldset>

          <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
            {submitting ? 'Placing order...' : `Place Order — $${total.toFixed(2)}`}
          </button>
        </form>

        {/* Order summary */}
        <div className="lg:col-span-1">
          <div className="bg-ink/[0.03] rounded-sm p-6 sticky top-24">
            <h2 className="font-medium mb-5">Order Summary</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.lineId} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-14 h-16 object-cover rounded-sm bg-ink/5 shrink-0" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium leading-snug">{item.name}</p>
                    <p className="text-ink/50 text-xs mt-0.5">{item.color} &middot; Qty {item.quantity}</p>
                  </div>
                  <span className="font-mono text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2.5 text-sm mt-6 pt-5 border-t border-ink/10">
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
            <div className="flex justify-between font-medium text-base mt-5 pt-5 border-t border-ink/10">
              <span>Total</span>
              <span className="font-mono">${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
