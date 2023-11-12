import Link from 'next/link'

export default function Navbar() {
  return (
    <div className="nav-bar">
      <img className="logo" src="Logo.svg" alt="logo" width="300px" />
      <div className="links">
        <Link href="/#features" className="link">
          Features
        </Link>
        <Link href="/#beta" className="link">
          Get started
        </Link>
        <a href="https://docs.hology.app/" className="link" target="_blank">
          Docs
        </a>
      </div>
      <a className="twitter-link" href="https://twitter.com/HologyEngine">
        <img src="x.svg" alt="Twitter link" />
      </a>
    </div>
  )
}
