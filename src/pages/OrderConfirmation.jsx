import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'

export default function OrderConfirmation() {
  const orderNumber = `BC-${Math.floor(100000 + Math.random() * 900000)}`

  return (
    <div className="container-page py-28 text-center max-w-lg mx-auto">
      <CheckCircle2 size={48} className="text-moss mx-auto mb-6" strokeWidth={1.5} />
      <h1 className="font-display text-3xl font-medium mb-3">Order confirmed</h1>
      <p className="text-ink/60 leading-relaxed mb-2">
        Thanks for your order. A confirmation would normally be sent to your inbox.
      </p>
      <p className="font-mono text-sm text-ink/50 mb-10">Order #{orderNumber}</p>
      <Link to="/shop" className="btn-primary inline-flex">
        Continue Shopping
      </Link>
    </div>
  )
}
