import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <p className="eyebrow mb-4">404</p>
      <h1 className="font-display text-3xl font-medium mb-3">You've wandered off trail.</h1>
      <p className="text-ink/60 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary inline-flex">
        Back to Basecamp
      </Link>
    </div>
  )
}
