import { Link } from 'react-router-dom'
import { Mountain, Instagram, Twitter, Youtube } from 'lucide-react'
import { categories } from '../data/products.js'
import Newsletter from './Newsletter.jsx'

export default function Footer() {
  return (
    <footer className="bg-ink text-bone/80 mt-24">
      <div className="container-page py-14">
        <Newsletter />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 pt-10 border-t border-bone/10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-bone">
              <Mountain size={20} className="text-amber" />
              Basecamp
            </Link>
            <p className="text-sm mt-3 leading-relaxed text-bone/60 max-w-xs">
              Gear built for the miles between trailhead and camp — tested on real routes, not just in the lab.
            </p>
          </div>

          <div>
            <h4 className="eyebrow text-bone/50 mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/shop/${c.slug}`} className="hover:text-amber transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-bone/50 mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-amber transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow text-bone/50 mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-amber transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-amber transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-bone/10 text-xs text-bone/40">
          <p>&copy; {new Date().getFullYear()} Basecamp Outfitters. A portfolio project — not a real store.</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-amber transition-colors"><Instagram size={16} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-amber transition-colors"><Twitter size={16} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-amber transition-colors"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
