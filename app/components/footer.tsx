import Link from 'next/link'

export default function Footer() {
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
            <Link className="link footer-link" href="/press-kit">
              Press kit
            </Link>
          </p>
          <p>
            <a
              href="https://docs.hology.app/"
              className="link footer-link"
              target="_blank"
            >
              Docs
            </a>
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
      </div>
    </footer>
  )
}
