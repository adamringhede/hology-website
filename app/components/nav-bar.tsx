import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="nav-bar">
      <Link href="/">
        <img className="logo" src="Logo.svg" alt="logo" />
      </Link>
      <div className="links">
        <Link href="/#features" className="link">
          Features
        </Link>
        <Link href="/partner" className="link">
          Partner
        </Link>
        <a href="https://docs.hology.app/" className="link" target="_blank">
          Docs
        </a>
      </div>
      <Link href="/#beta" className="link">
        <div className="nav-bar-button">
          <span>Join the Beta</span>
        </div>
      </Link>
    </div>
  )
}
