import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X, Mountain } from 'lucide-react'
import { categories } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { itemCount } = useCart()

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-moss-dark ${
      isActive ? 'text-moss-dark' : 'text-ink/70'
    }`

  return (
    <header className="sticky top-0 z-40 bg-bone/95 backdrop-blur border-b border-ink/10">
      <div className="container-page flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          <Mountain size={22} strokeWidth={2.25} className="text-moss-dark" />
          Basecamp
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <NavLink to="/shop" className={linkClass} end>
            All Gear
          </NavLink>
          {categories.map((c) => (
            <NavLink key={c.slug} to={`/shop/${c.slug}`} className={linkClass}>
              {c.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            className="relative flex items-center justify-center w-10 h-10 rounded-sm hover:bg-ink/5 transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={2} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-amber text-ink text-[10px] font-bold font-mono">
                {itemCount}
              </span>
            )}
          </Link>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm hover:bg-ink/5"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-ink/10 bg-bone">
          <div className="container-page flex flex-col py-3">
            <NavLink to="/shop" className={linkClass} end onClick={() => setOpen(false)} style={{ padding: '10px 0' }}>
              All Gear
            </NavLink>
            {categories.map((c) => (
              <NavLink
                key={c.slug}
                to={`/shop/${c.slug}`}
                className={linkClass}
                onClick={() => setOpen(false)}
                style={{ padding: '10px 0' }}
              >
                {c.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
