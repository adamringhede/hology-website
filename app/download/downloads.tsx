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

  console.log(releases)

  return (
    <>
      {releases != null && (
        <div className="download-buttons">
          <DownloadButton
            releases={releases}
            platform={ReleasePlatform.macOS}
          ></DownloadButton>
          <DownloadButton
            releases={releases}
            platform={ReleasePlatform.macOSIntel}
          ></DownloadButton>
          <DownloadButton
            releases={releases}
            platform={ReleasePlatform.windows}
          ></DownloadButton>
          <DownloadButton
            releases={releases}
            platform={ReleasePlatform.linux}
          ></DownloadButton>
        </div>
      )}
    </>
  )
}

function DownloadButton({
  releases,
  platform,
}: {
  releases: Release[]
  platform: ReleasePlatform
}) {
  // square-button-primary
  let className = 'square-button'
  if (platform === ReleasePlatform.macOS && isMac()) {
    className += ' square-button-primary'
  }
  if (platform === ReleasePlatform.windows && isWindows()) {
    className += ' square-button-primary'
  }
  return (
    <a
      id="download-linux"
      href={getLink(releases, platform)}
      className={className}
    >
      <img src="downloads.png" width="30px" height="30px" alt="" />
      <p>{platform}</p>
    </a>
  )
}

function getLink(releases: Release[], platform: ReleasePlatform) {
  return releases?.reverse().find((r) => r.platform === platform)?.link
}

function isMac() {
  return navigator.platform.indexOf('Mac') > -1
}

function isWindows() {
  return navigator.platform.indexOf('Win') > -1
}
