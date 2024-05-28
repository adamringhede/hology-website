import Link from 'next/link'

export default function Footer() {
  /*(<a
    className="icon-link"
    target="_blank"
    href="https://discord.gg/BCcdRvjS3P"
  >
    <img src="discord.svg" width={30} alt="Discord link" />
  </a>)*/
  return (
    <footer>
      <div className="footer">
        <div className="column">
          <h4>Contact</h4>
          <p className="link">hello@hology.app</p>
        </div>
        <div className="column">
          <h4>Resources</h4>
          <p>
            <a
              href="https://docs.hology.app/"
              className="link footer-link"
              target="_blank"
            >
              Docs
            </a>
          </p>
          <p>
            <Link className="link footer-link" href="/download">
              Download
            </Link>
          </p>
          <p>
            <Link className="link footer-link" href="/press-kit">
              Press kit
            </Link>
          </p>
        </div>
        <div className="column">
          <h4>Company</h4>
          <p>
            <Link className="link footer-link" href="/about-us">
              About us
            </Link>
          </p>
          <p>
            <Link className="link footer-link" href="/partner">
              Partner
            </Link>
          </p>
        </div>
      </div>

      <div className="footer-socials">
        <a
          className="icon-link"
          target="_blank"
          href="https://twitter.com/HologyEngine"
        >
          <img src="x.svg" alt="Twitter link" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          href="https://discord.gg/BCcdRvjS3P"
        >
          <img src="discord.svg" width={30} alt="Discord link" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          href="https://www.youtube.com/channel/UCfB35u899Gs5bNxhwkc8CDQ"
        >
          <img src="youtube.svg" width={30} alt="Youtube link" />
        </a>
        <a
          className="icon-link"
          target="_blank"
          href="https://se.linkedin.com/company/hology-engine"
        >
          <img src="li.png" width={28} alt="Youtube link" />
        </a>
      </div>
      <p style={{ textAlign: 'center' }}>
        <small>
          Copyright © 2024 Hology Interative AB. All rights reserved.
        </small>
      </p>
    </footer>
  )
}
