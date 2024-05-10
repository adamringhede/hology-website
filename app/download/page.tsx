import Downloads from './downloads'

export default function Page() {
  return (
    <>
      <section className="section-centered section-download" id="download">
        <h3>Download</h3>
        <h2>Get started now</h2>
        <p>Install the editor to start building.</p>

        <div className="downloads">
          <Downloads></Downloads>
          <p>
            By downloading you accept the{' '}
            <a
              className="text-link"
              href="https://generated-ox-d5d.notion.site/Hology-Engine-Terms-of-Service-bd174ef5f147424dbb9588e29c61ffbb?pvs=4"
              target="_blank"
            >
              Terms of Service
            </a>
          </p>
        </div>
        <p>
        <a
              className="external-link"
              href="https://discord.gg/BCcdRvjS3P"
              target="_blank"
            >
              <span className="link-icon">
                <img src="external.svg" alt="External link icon" />
              </span>
              Join our Discord server to connect with us, other developers and get support
            </a>
        </p>
      </section>
    </>
  )
}

export const metadata = {
  title: 'Hology Engine Download',
}
