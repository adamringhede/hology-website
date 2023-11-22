'use client'

import { useEffect, useState } from 'react'
import { Release, ReleasePlatform, getReleases } from './releases'

export default function Downloads() {
  // actually I want this to be retrieved client side so that it uses the latest version as opposed to
  // the latest whenever the website was released

  const [releases, setReleases] = useState<Release[]>()

  useEffect(() => {
    getReleases().then(setReleases)
  }, [])

  return (
    <>
      {releases != null && (
        <>
          <a
            id="download-macos"
            href={getLink(releases, ReleasePlatform.macOS)}
            className="square-button"
          >
            MacOS
          </a>
          <a
            id="download-windows"
            href={getLink(releases, ReleasePlatform.windows)}
            className="square-button"
          >
            Windows
          </a>
          <a
            id="download-linux"
            href={getLink(releases, ReleasePlatform.linux)}
            className="square-button"
          >
            Linux
          </a>
        </>
      )}
    </>
  )
}

function getLink(releases: Release[], platform: ReleasePlatform) {
  return releases?.reverse().find((r) => r.platform === platform)?.link
}
