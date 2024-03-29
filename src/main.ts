import './style.scss'
import { getReleases, ReleasePlatform } from '../app/download/releases'

async function updateDownloadLinks() {
  const releases = await getReleases()

  function updateReleaseLink(platform: ReleasePlatform) {
    const link = document.querySelector<HTMLAnchorElement>(
      '#download-' + platform.toLowerCase()
    )
    if (link != null) {
      const latestRelease = releases
        .reverse()
        .find((r) => r.platform === platform)
      if (latestRelease != null) {
        link.href = latestRelease.link
      }
    }
  }

  updateReleaseLink(ReleasePlatform.macOS)
  updateReleaseLink(ReleasePlatform.windows)
  updateReleaseLink(ReleasePlatform.linux)
}

window.addEventListener('DOMContentLoaded', () => {
  updateDownloadLinks()
})
