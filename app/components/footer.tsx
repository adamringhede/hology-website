import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <h4>Contact</h4>
        <p className="link">hello@hology.app</p>
      </div>
      <div className="column">
        <h4>About</h4>
        <p>
          <Link className="link footer-link" href="/press-kit">
            Press kit
          </Link>
        </p>
      </div>
    </footer>
  )
}
