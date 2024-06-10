import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="nav-bar">
      <Link href="/">
        <img className="logo" src="/Logo.svg" alt="logo" />
      </Link>
      <div className="links">
        <Link href="/#features" className="link">
          Features
        </Link>
        <a href="https://docs.hology.app/" className="link" target="_blank">
          Docs
        </a>
        <Link className="link" href="/blog">
          Blog
        </Link>
      </div>
      <Link href="/#beta" className="link">
        <div className="nav-bar-button">
          <span>Join the Beta</span>
        </div>
      </Link>
    </div>
  )
}
