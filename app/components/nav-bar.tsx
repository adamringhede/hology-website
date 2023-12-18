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
        <Link href="/#beta" className="link">
          Beta
        </Link>
        <Link href="/partner" className="link">
          Partner
        </Link>
        <a href="https://docs.hology.app/" className="link" target="_blank">
          Docs
        </a>
      </div>
      <a
        className="twitter-link"
        target="_blank"
        href="https://twitter.com/HologyEngine"
      >
        <img src="x.svg" alt="Twitter link" />
      </a>
    </div>
  )
}
